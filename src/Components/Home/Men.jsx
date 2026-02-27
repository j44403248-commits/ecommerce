import React, { useState } from "react";
import team1 from "../../assets/team1.jpg";
import team3 from "../../assets/team3.jpg";
import men1 from "../../assets/men1.jpeg";
import photo9 from "../../assets/photo9.webp";
import ProductDetailModal from "../Common/ProductDetailModal";

const products = [
  {
    id: 1,
    img: team1,
    title: "Classic Oxford Shirt - White",
    name: "Classic Oxford Shirt - White",
    price: "Rs.3,400.00",
    oldPrice: "Rs.4,200.00",
    discount: "-20%",
    badge: "Best Seller",
    category: "men",
    relatedImages: [team1, team3, men1, photo9]
  },
  {
    id: 2,
    img: team3,
    title: "Slim Fit Chino Pants - Beige",
    name: "Slim Fit Chino Pants - Beige",
    price: "Rs.4,100.00",
    oldPrice: "Rs.5,150.00",
    discount: "-20%",
    badge: "Best Seller",
    category: "men",
    relatedImages: [team3, team1, men1, photo9]
  },
  {
    id: 3,
    img: men1,
    title: "Washed Denim Jacket - Blue",
    name: "Washed Denim Jacket - Blue",
    price: "Rs.5,200.00",
    oldPrice: "Rs.6,500.00",
    discount: "-20%",
    badge: "Best Seller",
    category: "men",
    relatedImages: [men1, team1, team3, photo9]
  },
  {
    id: 4,
    img: photo9,
    title: "Crew Neck T-Shirt - Charcoal",
    name: "Crew Neck T-Shirt - Charcoal",
    price: "Rs.1,800.00",
    oldPrice: "Rs.2,250.00",
    discount: "-20%",
    badge: "Best Seller",
    category: "men",
    relatedImages: [photo9, team1, team3, men1]
  },
];

const Men = () => {
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
                  className="w-full h-130 object-cover rounded-md group-hover:opacity-80 transition"
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
          <button className="h-10 w-40 rounded-3xl bg-black text-white hover:bg-black/60 transition">
            View All
          </button>
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

export default Men;