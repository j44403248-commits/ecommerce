import React from "react";
import RegisterForm from "../Common/RegisterForm";
import LoyaltyTiers from "../Loyaltyrewards/LoyaltyTiers";

const LoyaltyRewards = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Loyalty Rewards</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* First card with data */}
        <div className="p-6 shadow-lg rounded-lg bg-white flex flex-col justify-center text-center gap-4">
          <h2 className="text-2xl font-semibold mb-2">Zane's Loyalty Program!</h2>
          <p className="text-gray-700">
            Created as a Thank You for always choosing us & making us a part of your wardrobe.
          </p>
          <p className="text-gray-700">
            With every purchase we return the love in the form of reward points!
          </p>
          <p className="font-semibold text-black">
            P.S. Sign Up & get <span className="text-red-600">Rs. 300 Reward Points</span>
          </p>
        </div>

        {/* Second card with image */}
        <div className="p-6 shadow-lg rounded-lg bg-white flex items-center justify-center">
          <img
            src="https://wearzane.com/cdn/shop/files/SnapInsta.to_589200361_18302981980265448_8156559638394893049_n_699b242c-0f4b-413d-b289-c8eedebc4874_750x.png?v=1767181156"
            alt="Zane's Loyalty Program"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Registration form section */}
      <RegisterForm />
      <LoyaltyTiers/>
    </div>
  );
};

export default LoyaltyRewards;