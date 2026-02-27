import React from "react";
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";

const ProductCard = ({
    id,
    image,
    title,
    price,
    oldPrice,
    discount,
    badge,
    rating = 4.5,
    reviews = 0
}) => {
    return (
        <div className="relative group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">

            {/* Image Container */}
            <div className="relative overflow-hidden bg-gray-100 h-80">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Badges */}
                {(discount || badge) && (
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {discount && (
                            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                {discount}
                            </span>
                        )}
                        {badge && (
                            <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded">
                                {badge}
                            </span>
                        )}
                    </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
                        Quick View
                    </button>
                    <button className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition">
                        <FaHeart />
                    </button>
                </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
                {/* Title */}
                <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-black">
                    {title}
                </h3>

                {/* Rating */}
                {rating > 0 && (
                    <div className="flex items-center gap-1 mb-2">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} size={12} />
                            ))}
                        </div>
                        <span className="text-xs text-gray-600">({reviews})</span>
                    </div>
                )}

                {/* Price */}
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold text-gray-900">{price}</span>
                    {oldPrice && (
                        <span className="text-sm text-gray-500 line-through">{oldPrice}</span>
                    )}
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2">
                    <FaShoppingCart size={16} />
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
