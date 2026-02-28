import React from "react";
import { FaChevronDown } from "react-icons/fa";

const tiers = [
  {
    title: "BRONZE MEMBERS - Earn 5%",
    desc: "Spend a total of Rs. 10,000 & Earn 5% reward points on every purchase",
  },
  {
    title: "SILVER MEMBERS  Earn 8%",
    desc: "Spend a total of Rs. 30,000 & Earn 8% reward points on every purchase",
  },
  {
    title: "GOLD MEMBERS - Earn 10%",
    desc: "Spend a total of Rs. 100,000 & Earn 10% reward points on every purchase",
  },
  {
    title: "PLATINUM MEMBERS - Earn 15%",
    desc: "Spend a total of Rs. 100,000+ & Earn 15% reward points on every purchase",
  },
];

const LoyaltyTiers = () => {
  return (
    <div className="w-full bg-[#f5f5f5] py-16 flex justify-center">
      <div className="max-w-3xl w-full text-center px-4">

        <h2 className="text-xl font-semibold tracking-widest mb-10">
          LOYALTY TIERS
        </h2>

        {tiers.map((tier, index) => (
          <div key={index} className="mb-10">

            <FaChevronDown className="mx-auto mb-4 text-gray-700" />

            {/* Heading hover */}
            <h3
              className="font-bold tracking-wide text-sm md:text-base 
              transition duration-300 
              hover:text-gray-400 hover:opacity-70 cursor-pointer"
            >
              {tier.title}
            </h3>

            {/* Description hover */}
            <p
              className="text-gray-600 mt-2 text-sm 
              transition duration-300 
              hover:text-gray-400 hover:opacity-70 cursor-pointer"
            >
              {tier.desc}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
};

export default LoyaltyTiers;