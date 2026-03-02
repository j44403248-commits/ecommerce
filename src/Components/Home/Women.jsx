import React, { useState } from "react";
import img6 from "../../assets/img6.webp";
import img2 from "../../assets/img2.webp";
import img3 from "../../assets/img3.webp";
import img4 from "../../assets/img4.webp";
import ProductDetailModal from "../Common/ProductDetailModal";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    img: img6,
    title: "Shawl Collar Cord Set - Salmon Pink",
    name: "Shawl Collar Cord Set - Salmon Pink",
    price: "Rs.5,800.00",
    oldPrice: "Rs.7,250.00",
    discount: "-20%",
    badge: "Best Seller",
    category: "women",
    relatedImages: [img6, img2, img3, img4]
  },
  {
    id: 2,
    img: img2,
    title: "Sweet Heart Neck Top - Chocolate Brown",
    name: "Sweet Heart Neck Top - Chocolate Brown",
    price: "Rs.2,200.00",
    oldPrice: "Rs.2,750.00",
    discount: "-20%",
    badge: "Best Seller",
    category: "women",
    relatedImages: [img2, img6, img3, img4]
  },
  {
    id: 3,
    img: img3,
    title: "Washed Cropped Tee - Charcoal",
    name: "Washed Cropped Tee - Charcoal",
    price: "Rs.1,960.00",
    oldPrice: "Rs.2,450.00",
    discount: "-20%",
    badge: "Best Seller",
    category: "women",
    relatedImages: [img3, img6, img2, img4]
  },
  {
    id: 4,
    img: img4,
    title: "Pleated Bodycon Dress - Ash Rose",
    name: "Pleated Bodycon Dress - Ash Rose",
    price: "Rs.5,000.00",
    oldPrice: "Rs.6,250.00",
    discount: "-20%",
    badge: "Best Seller",
    category: "women",
    relatedImages: [img4, img6, img2, img3]
  },
];

const Women = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <div className="px-4 py-10">

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer"
              onClick={() => setSelectedProduct(item)}
            >

              {/* Badges */}
              <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {item.discount}
                </span>
                <span className="bg-black text-white text-xs px-2 py-1 rounded">
                  {item.badge}
                </span>
              </div>

              {/* Image with hover overlay */}
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-150 object-cover rounded-md group-hover:opacity-80 transition"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-40 transition duration-300 rounded-md"></div>
              </div>

              {/* Product info */}
              <div className="mt-2 text-sm text-gray-800 px-1">
                <p>{item.title}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-gray-800">{item.price}</span>
                  <span className="line-through text-gray-400">{item.oldPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center View All Button */}
        <div className="flex justify-center mt-8">
        <Link to={"/women"}>
          <button className="h-10 w-40 rounded-3xl bg-black text-white hover:bg-black/60 transition">
            View All
        
          </button>
          </Link>
        </div>

      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default Women;