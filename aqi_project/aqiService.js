// aqiService.js

const axios = require("axios"); // ✅ ADDED

//
//
require("dotenv").config();


// -----------------------------
// AQI Breakpoints (PM2.5 & PM10)
// -----------------------------
const breakpoints = {
  pm25: [
    { Clow: 0, Chigh: 30, Ilow: 0, Ihigh: 50 },
    { Clow: 31, Chigh: 60, Ilow: 51, Ihigh: 100 },
    { Clow: 61, Chigh: 90, Ilow: 101, Ihigh: 200 },
    { Clow: 91, Chigh: 120, Ilow: 201, Ihigh: 300 },
    { Clow: 121, Chigh: 250, Ilow: 301, Ihigh: 400 },
    { Clow: 251, Chigh: 500, Ilow: 401, Ihigh: 500 }
  ],
  pm10: [
    { Clow: 0, Chigh: 50, Ilow: 0, Ihigh: 50 },
    { Clow: 51, Chigh: 100, Ilow: 51, Ihigh: 100 },
    { Clow: 101, Chigh: 250, Ilow: 101, Ihigh: 200 },
    { Clow: 251, Chigh: 350, Ilow: 201, Ihigh: 300 },
    { Clow: 351, Chigh: 430, Ilow: 301, Ihigh: 400 },
    { Clow: 431, Chigh: 600, Ilow: 401, Ihigh: 500 }
  ]
};

// -----------------------------
// Calculate Sub Index
// -----------------------------
function calculateSubIndex(C, ranges) {
  for (let range of ranges) {
    if (C >= range.Clow && C <= range.Chigh) {
      const { Clow, Chigh, Ilow, Ihigh } = range;

      return (
        ((Ihigh - Ilow) / (Chigh - Clow)) * (C - Clow) + Ilow
      );
    }
  }
  return 0;
}

// -----------------------------
// Calculate Overall AQI
// -----------------------------
function calculateAQI(data) {
  const subIndices = [];

  if (data.pm25 !== undefined) {
    subIndices.push(calculateSubIndex(data.pm25, breakpoints.pm25));
  }

  if (data.pm10 !== undefined) {
    subIndices.push(calculateSubIndex(data.pm10, breakpoints.pm10));
  }

  return Math.round(Math.max(...subIndices));
}

// -----------------------------
// AQI Category
// -----------------------------
function getAQICategory(aqi) {
  if (aqi <= 50) return "Good";
  if (aqi <= 100) return "Satisfactory";
  if (aqi <= 200) return "Moderate";
  if (aqi <= 300) return "Poor";
  if (aqi <= 400) return "Very Poor";
  return "Severe";
}

// -----------------------------
// Data Simulator
// -----------------------------
function generateSensorData() {
  return {
    pm25: Number((Math.random() * 300).toFixed(2)),
    pm10: Number((Math.random() * 400).toFixed(2)),
    co: Number((Math.random() * 10).toFixed(2)),
    no2: Number((Math.random() * 200).toFixed(2)),
    so2: Number((Math.random() * 100).toFixed(2)),
    o3: Number((Math.random() * 180).toFixed(2))
  };
}

const fs = require("fs");

function getDataFromDataset() {
  try {
    const data = JSON.parse(fs.readFileSync("dataset.json"));
    return data[Math.floor(Math.random() * data.length)];
  } catch (error) {
    console.log("⚠️ Dataset not found, using simulator");
    return generateSensorData(); // fallback
  }
}

// -----------------------------
// Generate AQI Data
// -----------------------------
function generateAQIData() {
  const sensorData = getDataFromDataset();
  const aqi = calculateAQI(sensorData);

  return {
    ...sensorData,
    aqi,
    category: getAQICategory(aqi),
    timestamp: new Date().toISOString()
  };
}

// -----------------------------
// 🔮 ML Prediction Function
// -----------------------------
async function getPrediction(data) {
  try {
    const response = await axios.post("http://localhost:5000/predict", {
      pm25: data.pm25,
      pm10: data.pm10,
      co: data.co,
      no2: data.no2
    });

    return response.data.predicted_aqi;

  } catch (error) {
    console.error("Prediction error:", error.message);
    return null;
  }
}

// -----------------------------
// 🤖 AI Suggestion Function for Factories
// -----------------------------
async function getAISuggestions(data) {
  try {
    const response = await axios.post(
      "https://router.huggingface.co/hf-inference/models/google/flan-t5-base",
      {
        inputs: `
You are an industrial environmental consultant specializing in factory emissions control.

Current Pollutant Levels:
- PM2.5: ${data.pm25} µg/m³
- PM10: ${data.pm10} µg/m³
- CO: ${data.co} ppm
- NO2: ${data.no2} ppb
- Current AQI: ${data.aqi}
- Predicted AQI: ${data.predicted_aqi}
- AQI Category: ${data.category}

Provide 2-3 specific, actionable recommendations for the factory to reduce these emissions and improve air quality. Focus on:
1. Emission reduction technologies
2. Operational adjustments
3. Compliance and monitoring improvements

Be concise and practical.
`
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`
        }
      }
    );

    // ✅ HANDLE MODEL LOADING
    if (response.data.error) {
      console.log("⏳ Model loading, retrying...");
      await new Promise(resolve => setTimeout(resolve, 5000));

      return getAISuggestions(data); // retry
    }

    return response.data[0].generated_text;

  } catch (error) {
    console.error("ERROR:", error.response?.data || error.message);

    const fallback = {
      Good: "✅ Excellent air quality. Maintain current operational standards and continue regular emission monitoring.",
      Satisfactory: "⚠️ Satisfactory air quality. Optimize dust collection systems and monitor emissions quarterly.",
      Moderate: "⚠️ Moderate pollution levels. Install or upgrade particulate filters and reduce peak production hours.",
      Poor: "🔴 High pollution levels. Implement immediate emission controls, close ventilation stacks, and reduce operations. Schedule equipment maintenance.",
      Very_Poor: "🚨 Very high pollution levels. Activate emergency protocols: reduce production, deploy temporary air filtration, and switch to cleaner energy sources.",
      Severe: "🚨 SEVERE POLLUTION ALERT! Cease production immediately, activate all emission control systems, and contact environmental authorities."
    };

    return fallback[data.category] || "No suggestion available";
  }
}

// -----------------------------
// 🚀 Combined AQI + Prediction
// -----------------------------
async function generateAQIWithPrediction() {
  const data = generateAQIData();
  const predicted = await getPrediction(data);

  const fullData = {
    ...data,
    predicted_aqi: predicted
  };

  // ✅ CALL AI FUNCTION
  const aiSuggestions = await getAISuggestions(fullData);

  return {
    ...fullData,
    ai_suggestions: aiSuggestions
  };
}

// -----------------------------
// Generate Dataset
// -----------------------------
function generateDataset(count = 10) {
  const dataset = [];

  for (let i = 0; i < count; i++) {
    dataset.push(generateAQIData());
  }

  return dataset;
}

// -----------------------------
// Export Functions
// -----------------------------
module.exports = {
  generateAQIData,
  generateDataset,
  calculateAQI,
  getAQICategory,
  generateAQIWithPrediction // ✅ NEW EXPORT
};