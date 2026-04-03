const ChartCard = ({ title, history = [] }) => {
  if (!history || history.length === 0) {
    return (
      <div className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-2xl shadow-lg border border-gray-200">
        <h3 className="text-lg font-bold text-slate-800 mb-4">{title}</h3>
        <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg flex items-center justify-center">
          <p className="text-gray-400">📈 Chart goes here</p>
        </div>
      </div>
    );
  }

  const linePointsCount = Math.min(history.length, 10);
  const slice = history.slice(-linePointsCount);
  const aqiValues = slice.map((item) => Number(item.aqi) || 0);
  const minAQI = Math.floor(Math.min(...aqiValues) / 50) * 50;
  const maxAQI = Math.ceil(Math.max(...aqiValues, 1) / 50) * 50;

  const aqiCoordinates = aqiValues.map((val, i) => {
    const x = (i / (aqiValues.length - 1 || 1)) * 100;
    const y = 100 - ((val - minAQI) / (maxAQI - minAQI || 1)) * 100;
    return { x, y, aqi: val };
  });

  // Y-axis tick marks and labels
  const yAxisTicks = [];
  for (let aqi = minAQI; aqi <= maxAQI; aqi += Math.max(50, (maxAQI - minAQI) / 5)) {
    const yPos = 100 - ((aqi - minAQI) / (maxAQI - minAQI || 1)) * 100;
    yAxisTicks.push({ aqi: Math.round(aqi), yPos });
  }

  // X-axis time labels
  const xAxisLabels = [];
  const step = Math.ceil(slice.length / 5);
  for (let i = 0; i < slice.length; i += step) {
    const xPos = (i / (slice.length - 1 || 1)) * 100;
    const time = new Date(slice[i].timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    xAxisLabels.push({ time, xPos });
  }
  if (xAxisLabels.length === 0 || xAxisLabels[xAxisLabels.length - 1].xPos !== 100) {
    const time = new Date(slice[slice.length - 1].timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    xAxisLabels.push({ time, xPos: 100 });
  }

  const latest = slice[slice.length - 1];
  const pollutantData = [
    { label: 'PM2.5', value: latest.pm25 ?? 0, unit: 'µg/m³', icon: '💨', color: 'from-blue-400 to-blue-600' },
    { label: 'PM10', value: latest.pm10 ?? 0, unit: 'µg/m³', icon: '🌫️', color: 'from-slate-400 to-slate-600' },
    { label: 'CO', value: latest.co ?? 0, unit: 'ppm', icon: '⚪', color: 'from-amber-400 to-amber-600' },
    { label: 'NO₂', value: latest.no2 ?? 0, unit: 'ppb', icon: '🔴', color: 'from-red-400 to-red-600' },
    { label: 'SO₂', value: latest.so2 ?? 0, unit: 'µg/m³', icon: '🟡', color: 'from-yellow-400 to-yellow-600' }
  ];

  const maxPollutant = Math.max(...pollutantData.map((point) => point.value), 1);

  return (
    <div className="bg-gradient-to-br from-white via-slate-50 to-white p-6 rounded-2xl shadow-xl border border-gray-200">
      <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-5">{title}</h3>

      {/* Line Chart Section */}
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-gray-300 p-4 mb-6">
        <div className="h-72 bg-white rounded-lg border border-gray-200 flex shadow-sm">
          {/* Y-axis labels */}
          <div className="w-14 flex flex-col justify-between items-end pr-3 py-2 text-xs font-semibold text-slate-600">
            {yAxisTicks.slice().reverse().map((tick, idx) => (
              <div key={idx} className="h-1 flex items-center">{tick.aqi}</div>
            ))}
          </div>

          {/* Chart area with SVG */}
          <div className="flex-1 relative min-w-0">
            <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 0.02 }} />
                </linearGradient>
              </defs>

              {/* Grid lines */}
              {yAxisTicks.map((tick, idx) => (
                <line key={`grid-${idx}`} x1="0" y1={tick.yPos} x2="100" y2={tick.yPos} stroke="#e5e7eb" strokeWidth="0.3" />
              ))}

              {/* Y-axis */}
              <line x1="0" y1="0" x2="0" y2="100" stroke="#475569" strokeWidth="1.2" />

              {/* X-axis */}
              <line x1="0" y1="100" x2="100" y2="100" stroke="#475569" strokeWidth="1.2" />

              {/* Area fill under line */}
              <polygon
                points={`0,100 ${aqiCoordinates.map((c) => `${c.x},${c.y}`).join(' ')} 100,100`}
                fill="url(#lineGradient)"
              />

              {/* Plot line */}
              <polyline
                fill="none"
                stroke="#10b981"
                strokeWidth="2.5"
                points={aqiCoordinates.map((c) => `${c.x},${c.y}`).join(' ')}
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Data points with glow */}
              {aqiCoordinates.map((coord, idx) => (
                <g key={idx}>
                  <circle cx={coord.x} cy={coord.y} r="2.5" fill="#10b981" opacity="0.2" />
                  <circle cx={coord.x} cy={coord.y} r="1.8" fill="#10b981" />
                </g>
              ))}
            </svg>

            {/* X-axis labels */}
            <div className="absolute bottom-0 left-0 w-full h-7 flex justify-between px-1 text-xs font-semibold text-slate-600">
              {xAxisLabels.map((label, idx) => (
                <div key={idx} className="text-center">{label.time}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Min/Max info */}
        <div className="flex justify-between mt-3 px-2 text-xs text-slate-500">
          <span>Min: <strong className="text-slate-700">{Math.round(Math.min(...aqiValues))}</strong></span>
          <span>Max: <strong className="text-slate-700">{Math.round(Math.max(...aqiValues))}</strong></span>
          <span>Latest: <strong className="text-emerald-600">{Math.round(aqiValues[aqiValues.length - 1])}</strong></span>
        </div>
      </div>

      {/* Pollutant Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
        {pollutantData.map((item) => {
          const barHeight = `${(item.value / maxPollutant) * 100}%`;
          return (
            <div key={item.label} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-3 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg">{item.icon}</span>
                <span className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.value.toFixed(1)}
                </span>
              </div>
              <div className="text-xs font-semibold text-slate-600 mb-2">{item.label}</div>
              <div className="h-12 bg-gradient-to-t from-gray-200 to-gray-100 rounded-lg flex items-end overflow-hidden">
                <div
                  className={`w-full bg-gradient-to-t ${item.color} rounded-t-lg transition-all duration-300`}
                  style={{ height: barHeight }}
                />
              </div>
              <div className="text-xs text-slate-500 mt-2 text-center">{item.unit}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChartCard;
