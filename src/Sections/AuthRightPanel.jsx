import monitor from "../assets/images/Auth.png";
import real_time from "../assets/images/real-time.png";
import blockchain from "../assets/images/blockchain.png";
import search from "../assets/images/search.png";

const AuthRightPanel = ({ altText = "PolluTrack Illustration" }) => {
  return (
    <div className="
      flex-1 
      flex 
      flex-col 
    
      px-4 sm:px-6 md:px-10
      w-full
    ">

      {/* Main Illustration */}
      <div className="mb-6 w-full flex justify-center">
        <img
          src={monitor}
          alt={altText}
          className="
            w-full 
            max-w-[500px] 
            sm:max-w-[600px] 
            md:max-w-[650px]
            object-contain
          "
        />
      </div>

      {/* Feature Points */}
      <div
        className="
        space-y-6 
        w-full 
        max-w-[700px]
        flex 
        flex-col 
        items-start
      "
      >
        {/* Feature 1 */}
        <div className="flex items-start gap-4 w-full">
          <img
            src={real_time}
            alt="Real-time monitoring"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />

          <div>
            <h3 className="text-lg sm:text-xl font-semibold">
              Real-Time Industrial Pollution Monitoring
            </h3>
            <p className="text-gray-600 text-sm">
              Get accurate and up-to-date air pollution data from industrial
              sources through continuous monitoring, enabling early detection
              of emission spikes and data-driven environmental action.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-start gap-4 w-full">
          <img
            src={blockchain}
            alt="Blockchain security"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />

          <div>
            <h3 className="text-lg sm:text-xl font-semibold">
              Tamper-Proof Blockchain Security
            </h3>
            <p className="text-gray-600 text-sm">
              Pollution data is stored immutably on blockchain, ensuring
              tamper-proof records, secure verification, and complete
              transparency across all stakeholders.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-start gap-4 w-full">
          <img
            src={search}
            alt="Transparent reports"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />

          <div>
            <h3 className="text-lg sm:text-xl font-semibold">
              Transparent & Verifiable Reports
            </h3>
            <p className="text-gray-600 text-sm">
              Regulators and the public can access clear, verifiable pollution
              records through structured dashboards and trusted historical
              data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthRightPanel;
