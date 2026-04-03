import React, { useState, useEffect } from 'react';
import Footer from '../Components/ui/Footer';

const PolluTechDashboard = () => {
  const [pollutionData, setPollutionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Try the new GET endpoint first (for retrieving data)
        // If your backend only has POST, it should have a separate GET endpoint
        const response = await fetch('http://localhost:5000/api/save-prediction');
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}. Backend needs to support GET on /api/get-prediction or /api/latest-prediction`);
        }
        const data = await response.json();
        setPollutionData(data);
        setLastUpdate(new Date().toLocaleTimeString());
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching pollution data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Poll the API every 10 seconds for real-time updates
    const interval = setInterval(fetchData, 10000);

    return () => clearInterval(interval);
  }, []);

  const getCategoryColor = (category) => {
    const colors = {
      Good: 'bg-green-100 text-green-700',
      Satisfactory: 'bg-yellow-100 text-yellow-700',
      Moderate: 'bg-orange-100 text-orange-700',
      Poor: 'bg-red-100 text-red-700',
      'Very Poor': 'bg-red-200 text-red-800',
      Severe: 'bg-purple-200 text-purple-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="w-full min-h-screen bg-[#f4f2ee] px-4 md:px-6 py-8">
      <div className="w-full">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">

          {/* Sidebar - Factory Selection Section */}
          <aside className="w-full md:w-80 lg:w-86 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-6 text-emerald-900">PolluTech Factories</h2>
            <ul className="space-y-3">
              {['Factory Alpha', 'Factory Beta', 'Plant Gamma'].map((factory) => (
                <li key={factory} className="hover:text-emerald-700 cursor-pointer p-2 rounded-lg hover:bg-emerald-50 transition">
                  {factory}
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 flex flex-col overflow-hidden space-y-6"> 
            <header className="bg-white shadow-sm p-4 px-6 rounded-2xl border border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h1 className="text-3xl font-bold text-emerald-900">Analytics Dashboard</h1>
              <span className="text-sm bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-semibold">
                Blockchain Verified
              </span>
            </header>

        {/* Scrollable Dashboard Body */}
        <div className="flex-1 overflow-y-auto p-8">
          {/* Status Section */}
          <section className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-600 uppercase tracking-wider">Real-Time Emissions</h2>
              <div className="flex items-center gap-4">
                {lastUpdate && <span className="text-sm text-gray-500">Updated: {lastUpdate}</span>}
                {loading && <span className="text-sm text-blue-500">Fetching data...</span>}
                {error && <span className="text-sm text-red-500">Error: {error}</span>}
              </div>
            </div>

            {pollutionData && (
              <>
                {/* AQI Status Card */}
                <div className={`mb-6 p-6 rounded-xl border-2 ${getCategoryColor(pollutionData.category)} shadow-md`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-semibold opacity-75">AQI Status</p>
                      <p className="text-4xl font-bold mt-2">{pollutionData.aqi}</p>
                      <p className="text-lg font-semibold mt-1">{pollutionData.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm opacity-75">Predicted AQI</p>
                      <p className="text-3xl font-bold mt-2">{pollutionData.predicted_aqi}</p>
                      <p className="text-xs mt-2 opacity-75">{new Date(pollutionData.timestamp).toLocaleTimeString()}</p>
                    </div>
                  </div>
                </div>

                {/* Pollutant Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                    <p className="text-sm text-gray-500 font-medium">PM2.5</p>
                    <p className="text-3xl font-bold mt-2 text-slate-800">{pollutionData.pm25.toFixed(2)}</p>
                    <p className="text-xs text-blue-500 mt-1">µg/m³</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                    <p className="text-sm text-gray-500 font-medium">PM10</p>
                    <p className="text-3xl font-bold mt-2 text-slate-800">{pollutionData.pm10.toFixed(2)}</p>
                    <p className="text-xs text-blue-500 mt-1">µg/m³</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                    <p className="text-sm text-gray-500 font-medium">CO</p>
                    <p className="text-3xl font-bold mt-2 text-slate-800">{pollutionData.co.toFixed(2)}</p>
                    <p className="text-xs text-blue-500 mt-1">ppm</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                    <p className="text-sm text-gray-500 font-medium">NO₂</p>
                    <p className="text-3xl font-bold mt-2 text-slate-800">{pollutionData.no2.toFixed(2)}</p>
                    <p className="text-xs text-blue-500 mt-1">ppb</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                    <p className="text-sm text-gray-500 font-medium">SO₂</p>
                    <p className="text-3xl font-bold mt-2 text-slate-800">{pollutionData.so2.toFixed(2)}</p>
                    <p className="text-xs text-blue-500 mt-1">µg/m³</p>
                  </div>
                </div>

                {/* Additional Data Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                  {/* O3 Card */}
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                    <h3 className="text-lg font-bold mb-4 text-gray-700">Ozone (O3)</h3>
                    <p className="text-4xl font-bold text-slate-800">{pollutionData.o3.toFixed(2)}</p>
                    <p className="text-sm text-gray-500 mt-2">ppb</p>
                  </div>

                  {/* AI Suggestions */}
                  <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                    <h3 className="text-lg font-bold mb-4 text-gray-700">AI Recommendations</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{pollutionData.ai_suggestions}</p>
                  </div>
                </div>
              </>
            )}

            {loading && !pollutionData && (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
              </div>
            )}
          </section>
        </div>
      </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PolluTechDashboard;