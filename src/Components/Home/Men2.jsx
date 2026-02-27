import React, { useState } from "react";
import team1 from "../../assets/team1.jpg";
import team3 from "../../assets/team3.jpg";
import team4 from "../../assets/team4.jpg";
import img1 from "../../assets/img1.avif";
import ProductDetailModal from "../Common/ProductDetailModal";

const categories = [
    {
        id: 1,
        img: team1,
        name: "T-Shirt",
        price: "Rs.1,800.00",
        oldPrice: "Rs.2,250.00",
        discount: "-20%",
        relatedImages: [team1, team3, team4, img1]
    },
    {
        id: 2,
        img: team4,
        name: "Polo",
        price: "Rs.3,400.00",
        oldPrice: "Rs.4,250.00",
        discount: "-20%",
        relatedImages: [team4, team1, img1, team3]
    },
    {
        id: 3,
        img: team3,
        name: "Shirts",
        price: "Rs.2,900.00",
        oldPrice: "Rs.3,625.00",
        discount: "-20%",
        relatedImages: [team3, team4, team1, img1]
    },
    {
        id: 4,
        img: img1,
        name: "Pants",
        price: "Rs.4,100.00",
        oldPrice: "Rs.5,150.00",
        discount: "-20%",
        relatedImages: [img1, team1, team3, team4]
    },
];

const Men2 = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((item) => (
                    <div
                        key={item.id}
                        className="relative group flex flex-col items-center cursor-pointer"
                        onClick={() => setSelectedProduct(item)}
                    >
                        {/* Image with hover overlay */}
                        <div className="relative">
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-60 h-56 object-cover rounded-md group-hover:opacity-80 transition"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-40 transition duration-300 rounded-md"></div>
                        </div>

                        {/* Category name */}
                        <div className="mt-2 text-center">
                            <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <button className="h-10 w-40 rounded-3xl bg-black text-white hover:bg-black/60 transition">
                    View All
                </button>
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

export default Men2;
