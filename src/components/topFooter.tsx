// topFooter.tsx
import { FaTruck, FaPhoneAlt, FaExchangeAlt } from "react-icons/fa";

const TopFooter = () => {
  return (
    <div className="bg-white py-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Shipping Rates */}
        <div className="flex flex-col items-center text-center mb-4 sm:mb-0 sm:w-1/3">
          <FaTruck className="text-3xl text-gray-700 mb-2" />
          <h4 className="font-semibold text-gray-900 text-xs">SHIPPING RATES</h4>
          <p className="text-gray-600 text-xs">Flat Shipping Charges Across USA and Canada.</p>
        </div>

        {/* Worldwide Delivery */}
        <div className="flex flex-col items-center text-center mb-4 sm:mb-0 sm:w-1/3">
          <FaPhoneAlt className="text-3xl text-gray-700 mb-2" />
          <h4 className="font-semibold text-gray-900 text-xs">WORLDWIDE DELIVERY</h4>
          <p className="text-gray-600 text-xs">
            Fast and reliable worldwide delivery, bringing your orders to your doorstep anywhere.
          </p>
        </div>

        {/* 15 Days Return */}
        <div className="flex flex-col items-center text-center sm:w-1/3">
          <FaExchangeAlt className="text-3xl text-gray-700 mb-2" />
          <h4 className="font-semibold text-gray-900 text-xs">15 DAYS RETURN</h4>
          <p className="text-gray-600 text-xs">Simply return it within 15 Days for a refund or an exchange.</p>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
