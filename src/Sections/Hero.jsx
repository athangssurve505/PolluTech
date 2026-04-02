import Button from "../Components/ui/Button";
import monitor from "../assets/images/Auth.png";
import FeatureCard from "../Layouts/FeatureCard";

import real_time from "../assets/images/real-time.png";
import blockchain from "../assets/images/blockchain.png";
import search from "../assets/images/search.png";

export default function Hero() {
  return (
    <div className="w-full min-h-screen bg-[#f4f2ee] px-6 md:px-12 pb-16">
      {/* HERO TOP SECTION */}
      <div className="
        w-full max-w-7xl mx-auto 
        flex flex-col lg:flex-row 
        items-center justify-between 
        gap-10 py-16
      ">

        {/* RIGHT IMAGE — FIRST on mobile, SECOND on desktop */}
        <div className="
          w-full lg:w-1/2 
          flex justify-center items-center
          order-1 lg:order-2      /* 👈 KEY LINE */
        ">
          <img
            src={monitor}
            alt="PolluTrack Dashboard"
            className="w-full max-w-[600px] object-contain drop-shadow-xl"
          />
        </div>

        {/* LEFT TEXT — SECOND on mobile, FIRST on desktop */}
        <div
          className="
          w-full lg:w-1/2 
          flex flex-col 
          items-center lg:items-start 
          text-center lg:text-left 
          gap-5
          order-2 lg:order-1      /* 👈 KEY LINE */
        "
        >
          <h1
            className="
            text-5xl lg:text-6xl 
            font-bold 
            leading-tight
            max-sm:text-4xl
          "
          >
            Making Pollution Data Trustworthy.
          </h1>

          <p
            className="
            text-xl lg:text-2xl 
            text-gray-700 
            w-full lg:w-[90%]
            max-sm:text-lg
          "
          >
            A blockchain-powered system that records, verifies, and tracks
            industrial air, water, and soil pollution data with complete
            transparency and tamper-proof security.
          </p>

          <div className="mt-4">
            <Button text="View Dashboard" />
          </div>
        </div>
      </div>

      {/* CARDS SECTION BELOW HERO */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <FeatureCard
          img={real_time}
          title="Real-Time Pollution Data"
          description="Monitor and track air, water, and soil pollution emissions from industrial sources in real time."
        />

        <FeatureCard
          img={blockchain}
          title="Blockchain Security"
          description="Ensure data integrity and prevent tampering using blockchain technology for secure and transparent records."
        />

        <FeatureCard
          img={search}
          title="Transparent Reporting"
          description="Access clear, verifiable, and tamper-proof pollution reports that the public and regulators can trust."
        />
      </div>
    </div>
  );
}
