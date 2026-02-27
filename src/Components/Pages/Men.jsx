import React, { useState } from 'react';
import MenuBar from '../Men/MenuBar';
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const Men = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Men-specific images (primary and hover)
    const menImages = [
        "https://wearzane.com/cdn/shop/files/131_350x.webp?v=1771845010",
        "https://wearzane.com/cdn/shop/files/66_350x.webp?v=1771843544",
        "https://wearzane.com/cdn/shop/files/77_350x.webp?v=1771843573",
        "https://wearzane.com/cdn/shop/files/BROWN_TOP_3_1015e4fb-cedb-41cc-a4aa-0ea26e7fb134_small.png?v=1768457913",
        "https://wearzane.com/cdn/shop/files/Untitleddesign_dce7e134-8fb6-42e6-b675-c3bef9651c26_350x.webp?v=1771843938",
        "https://wearzane.com/cdn/shop/files/95_350x.webp?v=1771843894",
        "https://wearzane.com/cdn/shop/files/102_350x.webp?v=1771843992",
        "https://wearzane.com/cdn/shop/files/124_350x.webp?v=1771844944",
        "https://wearzane.com/cdn/shop/files/IMG_2962_350x.heic?v=1769756983",
    ];

    const menProducts = {
        "All": [
            { id: 1, name: "Classic Blue Shirt", price: "Rs. 2,999", category: "Shirts" },
            { id: 2, name: "Black T-Shirt", price: "Rs. 1,299", category: "T-Shirts" },
            { id: 3, name: "Navy Trousers", price: "Rs. 3,499", category: "Pants" },
        ],
        "Shirts": [
            { id: 4, name: "White Formal Shirt", price: "Rs. 3,499", category: "Shirts" },
            { id: 5, name: "Casual Denim Shirt", price: "Rs. 2,799", category: "Shirts" },
        ],
        "T-Shirts": [
            { id: 6, name: "Printed T-Shirt", price: "Rs. 1,499", category: "T-Shirts" },
            { id: 7, name: "Plain Grey T-Shirt", price: "Rs. 999", category: "T-Shirts" },
        ],
        "Pants": [
            { id: 8, name: "Blue Jeans", price: "Rs. 3,999", category: "Pants" },
            { id: 9, name: "Black Chinos", price: "Rs. 2,999", category: "Pants" },
        ],
        "Shorts": [
            { id: 10, name: "Sports Shorts", price: "Rs. 1,799", category: "Shorts" },
            { id: 11, name: "Casual Shorts", price: "Rs. 1,599", category: "Shorts" },
        ],
        "Jackets": [
            { id: 12, name: "Leather Jacket", price: "Rs. 7,999", category: "Jackets" },
            { id: 13, name: "Denim Jacket", price: "Rs. 4,999", category: "Jackets" },
        ],
        "Sweaters": [
            { id: 14, name: "Wool Sweater", price: "Rs. 3,299", category: "Sweaters" },
            { id: 15, name: "Cotton Sweater", price: "Rs. 2,499", category: "Sweaters" },
        ],
        "Shoes": [
            { id: 16, name: "Sports Shoes", price: "Rs. 4,999", category: "Shoes" },
            { id: 17, name: "Casual Sneakers", price: "Rs. 3,299", category: "Shoes" },
        ],
    };

    const displayProducts = selectedCategory === "All"
        ? Object.values(menProducts).flat()
        : menProducts[selectedCategory] || [];

    return (
        <div>
            <MenuBar
                onCategorySelect={setSelectedCategory}
                selectedCategory={selectedCategory}
            />

            <div className="container mx-auto px-6 py-8">
                <h1 className="text-3xl font-bold mb-8">Men's Collection - {selectedCategory}</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {displayProducts.map((product, idx) => {
                        const primary = menImages[idx % menImages.length];
                        const hoverImg = menImages[(idx + 1) % menImages.length];

                        return (
                            <div key={product.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                                <div className="bg-gray-200 h-64 flex items-center justify-center relative group">
                                    <span className="absolute top-2 left-2 bg-white bg-opacity-75 px-2 py-1 text-xs font-bold">
                                        New In
                                    </span>
                                    <img
                                        src={primary}
                                        alt={product.name}
                                        className="object-cover w-full h-full"
                                    />
                                    <img
                                        src={hoverImg}
                                        alt={product.name}
                                        className="object-cover w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100 transition"
                                    />
                                    <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition">
                                        <div className="p-2 flex gap-4">
                                            <FaShoppingCart />
                                            <FaSearch />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 text-center">
                                    <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                                    <p className="text-red-500 font-bold">{product.price}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Men;