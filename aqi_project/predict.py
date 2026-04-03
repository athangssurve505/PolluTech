from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
from datetime import datetime

app = Flask(__name__)
CORS(app)  # ✅ Enable CORS for all routes

model = joblib.load("model.pkl")

# ✅ Store predictions in memory (or use database for production)
predictions_store = []
last_prediction = None  # ✅ Store the latest prediction

@app.route("/")
def home():
    return "AQI Prediction API is running!"

# Existing route
@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    features = np.array([[ 
        data["pm25"],
        data["pm10"],
        data["co"],
        data["no2"]
    ]])

    prediction = model.predict(features)[0]

    return jsonify({
        "predicted_aqi": round(prediction)
    })

# ✅ NEW: Endpoint to receive and store prediction results
@app.route("/api/save-prediction", methods=["GET", "POST"])
def save_prediction():
    global last_prediction
    
    # ✅ If GET request, return the latest prediction
    if request.method == "GET":
        if last_prediction is None:
            return jsonify({
                "success": False,
                "message": "No predictions available yet"
            }), 404
        return jsonify(last_prediction), 200
    
    # ✅ If POST request, save the prediction
    try:
        prediction_data = request.json
        
        # Add timestamp if not already present
        if "receivedAt" not in prediction_data:
            prediction_data["receivedAt"] = datetime.now().isoformat()
        
        # Store prediction
        predictions_store.append(prediction_data)
        last_prediction = prediction_data  # ✅ Update latest
        
        print(f"✅ Prediction saved: {prediction_data}")
        
        return jsonify({
            "success": True,
            "message": "Prediction saved successfully",
            "total_predictions": len(predictions_store)
        }), 200
        
    except Exception as error:
        print(f"❌ Error saving prediction: {str(error)}")
        return jsonify({
            "success": False,
            "message": str(error)
        }), 400

# ✅ Endpoint to retrieve all predictions
@app.route("/api/predictions", methods=["GET"])
def get_predictions():
    return jsonify({
        "success": True,
        "count": len(predictions_store),
        "data": predictions_store
    }), 200

if __name__ == "__main__":
    app.run(port=5000)