const aqiService = require("./aqiService");
const axios = require("axios");

async function test() {
  const result = await aqiService.generateAQIWithPrediction();
  console.log("📊 Prediction Result:", result);

  // ✅ POST prediction data to Flask API on port 5000
  try {
    const response = await axios.post("http://localhost:5000/api/save-prediction", result);
    console.log("✅ Data posted to Flask API:", response.data.message);
    console.log(`📈 Total predictions stored: ${response.data.total_predictions}`);
  } catch (error) {
    console.error("❌ Failed to post data to API:", error.message);
  }
}

test();