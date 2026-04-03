const fs = require('fs');
const path = require('path');
const rawPath = path.join(__dirname, '..', 'aqi_project', 'data_with_factories (1).json');
const target = path.join(__dirname, '..', 'src', 'data', 'factoryData.json');
const raw = JSON.parse(fs.readFileSync(rawPath, 'utf8'));
const grouped = raw.reduce((acc, entry) => {
  const key = entry.factory || 'Unknown';
  if (!acc[key]) acc[key] = [];
  acc[key].push(entry);
  return acc;
}, {});
fs.writeFileSync(target, JSON.stringify(grouped, null, 2), 'utf8');
console.log('Wrote', target, Object.keys(grouped).length, 'factories');
