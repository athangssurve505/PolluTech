export default function Info() {
  return (
    <div className="working-wrapper px-6 py-1 mt-20 h-full flex flex-col items-center">

      {/* Header (Circle + Title centered together) */}
      <div className="top flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-3 justify-center">
          <div className="circle w-8 h-8 rounded-full bg-emerald-700"></div>
          <h1 className="font-bold text-5xl text-emerald-900">
            What is PolluTrack
          </h1>
        </div>

        <p className="text-gray-600 text-lg max-w-2xl">
          A secure, data-driven platform connecting IoT, blockchain, and AI for
          responsible industrial sustainability.
        </p>
      </div>

      {/* Main Info Card */}
      <div className="mt-10 w-[90%] md:w-[70%] lg:w-[60%] 
                      bg-white border border-gray-200 shadow-xl rounded-2xl p-8">

        <p className="text-lg md:text-xl text-center leading-relaxed text-gray-800 mb-6">
          <span className="font-bold text-emerald-900">PolluTech</span> is a
          blockchain-based web application designed to bring transparency,
          accountability, and trust to industrial pollution monitoring. The
          platform enables factories to securely record their emission data
          while ensuring that all historical pollution records remain
          tamper-proof and verifiable. By storing verified environmental data on
          a decentralized ledger, PolluTech prevents data manipulation and
          creates a reliable source of truth for regulators, industries, and
          stakeholders.
        </p>

        <p className="text-lg text-center leading-relaxed text-gray-800 mb-6">
          Beyond monitoring, PolluTech also tracks carbon credits, rewarding
          factories that actively reduce their environmental impact. This
          encourages cleaner industrial practices while maintaining a
          transparent audit trail of compliance and sustainability efforts.
        </p>

        {/* New Features Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

          <div className="bg-gray-50 p-5 rounded-xl text-center shadow-sm">
            <h3 className="font-bold text-emerald-800 text-xl">Real-Time Data</h3>
            <p className="text-gray-700 mt-2">
              IoT sensors continuously stream pollution data to the platform.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl text-center shadow-sm">
            <h3 className="font-bold text-emerald-800 text-xl">Blockchain Trust</h3>
            <p className="text-gray-700 mt-2">
              Every reading is stored immutably for verification and audits.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl text-center shadow-sm">
            <h3 className="font-bold text-emerald-800 text-xl">AI Insights</h3>
            <p className="text-gray-700 mt-2">
              Predictive models analyze trends and forecast risks.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
