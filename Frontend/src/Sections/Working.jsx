export default function Working() {
  return (
    <div className="working-wrapper px-6 py-1 mt-20 h-full flex flex-col items-center">

      {/* Section Header */}
      <div className="top w-full flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-3 justify-center">
          <div className="circle w-8 h-8 rounded-full bg-emerald-700"></div>
          <h1 className="font-bold text-5xl text-emerald-900">How It Works</h1>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl">
          PolluTrack captures and verifies air, water, and soil pollution data in
          a secure, end-to-end pipeline.
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="bottom flex flex-col lg:flex-row gap-12 mt-12 w-full max-w-6xl">

        <div className="left lg:w-[40%] flex flex-col justify-center items-center lg:items-start gap-6 text-center lg:text-left">
          <h2 className="font-bold text-4xl text-emerald-900">Data Flow</h2>
          <p className="text-gray-700 text-lg max-w-md">
            From sensors to blockchain to analytics, each step is auditable and
            tamper-proof for reliable environmental action.
          </p>
        </div>

        <div className="right grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-emerald-800">1. Collect</h3>
            <p className="text-gray-700 mt-2">
              IoT nodes gather air, water, and soil sensor data in real time.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-emerald-800">2. Verify</h3>
            <p className="text-gray-700 mt-2">
              Validation checks ensure data quality before recording on ledger.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-emerald-800">3. Store</h3>
            <p className="text-gray-700 mt-2">
              Immutable blockchain storage makes history auditable and tamper-proof.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-emerald-800">4. Analyze</h3>
            <p className="text-gray-700 mt-2">
              Insights and alerts are generated for air, water, and soil pollution.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
