import StatCard from "../Components/dashboard/StatCard";
import DataCard from "../Components/dashboard/DataListCard";
import ChartCard from "../Components/dashboard/ChartCard";

export default function Dashboard() {
  return (
    <div className="w-full min-h-screen bg-[#f4f2ee] px-6 md:px-12 py-10">

      <h1 className="text-3xl font-bold mb-6">PolluTrack Dashboard</h1>

      {/* TOP STATS — 2 to 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatCard title="PM 2.5 Level" value="42 µg/m³" status="High" />
        <StatCard title="CO₂ Emissions" value="385 ppm" status="Moderate" />
        <StatCard title="Active Sensors" value="128" status="Online" />
      </div>

      {/* DATA CARDS ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <DataCard
          title="Most Polluted Cities"
          items={[
            "Delhi - Very High",
            "Mumbai - High",
            "Kolkata - Moderate",
            "Chennai - Moderate",
          ]}
        />

        <DataCard
          title="Recent Alerts"
          items={[
            "Factory X exceeded CO₂ limits",
            "PM2.5 spike detected in Delhi",
            "Sensor failure in Zone 3",
          ]}
        />
      </div>

      {/* CHART SECTION */}
      <ChartCard title="Air Quality Trend (Last 7 Days)" />

    </div>
  );
}
