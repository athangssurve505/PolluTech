import React from 'react';
import Footer from '../Components/ui/Footer';

const PolluTechDashboard = () => {
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
          {/* Dummy Data Section - Simulated Emissions */}
          <section className="mb-10">
            <h2 className="text-lg font-bold text-gray-600 mb-4 uppercase tracking-wider">Simulated Real-Time Emissions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {['PM2.5', 'PM10', 'CO', 'NOx', 'SO2'].map((pollutant) => (
                <div key={pollutant} className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                  <p className="text-sm text-gray-500 font-medium">{pollutant}</p>
                  <p className="text-3xl font-bold mt-2 text-slate-800">0.00</p>
                  <p className="text-xs text-blue-500 mt-1">Simulating Data...</p>
                </div>
              ))}
            </div>
          </section>

          {/* Analytics Page Content - Trends & Predictions */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm h-96 flex flex-col justify-center items-center border border-gray-200">
              <h3 className="text-gray-400 font-medium mb-4 italic">Analytics Trend Visualization (AI/ML Module)</h3>
              <div className="w-full h-full bg-slate-50 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Charts & Graphs Component</p>
              </div>
            </div>

            {/* Blockchain Records Sidebar/Column */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold mb-4 text-gray-700">Immutable Records</h3>
              <div className="space-y-4">
                <div className="animate-pulse flex space-x-4">
                  <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                  <div className="flex-1 space-y-3 py-1">
                    <div className="h-2 bg-slate-200 rounded"></div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-400 mt-10 italic">Waiting for Blockchain feed...</p>
              </div>
            </div>
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