import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const Shop = () => {
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="w-full px-10 py-10">

      <h1 className="text-center text-2xl font-semibold">Shop the Look</h1>
      <p className="text-center text-sm mb-6">Thoughtfully styled for you!</p>

      {/* Images */}
      <div className="flex justify-between gap-6">

        {/* IMAGE 1 (2 plus signs) */}
        <div className="relative w-1/3">
          <img
            src="https://wearzane.com/cdn/shop/files/IMG_7559_400x.jpg?v=1769425307"
            className="w-full h-130 object-cover rounded-xl"
          />

          {/* Plus 1 */}
          <button
            onClick={() => setShowCard(true)}
            className="absolute top-10 left-10 bg-black text-white p-2 rounded-full"
          >
            <FaPlus size={10} />
          </button>

          {/* Plus 2 */}
          <button
            onClick={() => setShowCard(true)}
            className="absolute bottom-24 right-16 bg-black text-white p-2 rounded-full"
          >
            <FaPlus size={10} />
          </button>
        </div>

        {/* IMAGE 2 (1 plus sign) */}
        <div className="relative w-1/3">
          <img
            src="https://wearzane.com/cdn/shop/files/SnapInsta.to_621822729_17986132166944621_1439044001431284619_n_400x.jpg?v=1769670917"
            className="w-full h-130 object-cover rounded-xl"
          />

          <button
            onClick={() => setShowCard(true)}
            className="absolute top-1/2 left-1/2 bg-black text-white p-2 rounded-full"
          >
            <FaPlus size={10} />
          </button>
        </div>

        {/* IMAGE 3 (2 plus signs different place) */}
        <div className="relative w-1/3">
          <img
            src="https://wearzane.com/cdn/shop/files/IMG_1577_3c6d5b4a-7cd4-49c7-a767-1cc83339034b_400x.heic?v=1769758822"
            className="w-full h-130 object-cover rounded-xl"
          />

          <button
            onClick={() => setShowCard(true)}
            className="absolute top-20 right-10 bg-black text-white p-2 rounded-full"
          >
            <FaPlus size={10} />
          </button>

          <button
            onClick={() => setShowCard(true)}
            className="absolute bottom-16 left-12 bg-black text-white p-2 rounded-full"
          >
            <FaPlus size={10} />
          </button>
        </div>

      </div>

      {/* Modal Card */}
      {showCard && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-75 relative">

            <button
              onClick={() => setShowCard(false)}
              className="absolute top-2 right-3 text-lg font-bold"
            >
              ✕
            </button>

            <img
              src="https://wearzane.com/cdn/shop/files/IMG_7559_400x.jpg?v=1769425307"
              className="w-full h-40 object-cover rounded"
            />

            <h2 className="mt-4 font-semibold text-sm">
              Warm Twilight Turtleneck Sweater - Dusty Taupe
            </h2>

            <p className="text-sm mt-2">
              <span className="line-through text-gray-400">Rs.5,950.00</span>{" "}
              <span className="font-bold">Rs.4,165.00</span>
            </p>

            <button className="mt-4 w-full bg-black text-white py-2 rounded">
              Select Options
            </button>
          </div>
        </div>
      )}
      <div className="flex items-center justify-center text-xl mt-5 font-bold"> 

      <h1>YOU MAKE US LOVE WHAT WE DO!</h1>

      </div>

    </div>
  );
};

export default Shop;