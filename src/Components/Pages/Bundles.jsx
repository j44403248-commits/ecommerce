import React, { useState } from 'react';
import MenuBar from '../Bundles/MenuBar';
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const Bundles = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Images for Bundles (primary + hover)
    const bundlesImages = [
        "https://wearzane.com/cdn/shop/files/Wearzane8556.webp?v=1772009811&width=1500",
        "https://wearzane.com/cdn/shop/files/139.webp?v=1771845057&width=400",
        "https://wearzane.com/cdn/shop/files/Wearzane8309_9d286624-4d72-43d9-bd92-4fa982b8136f.png?v=1772013009&width=1500",
        "https://wearzane.com/cdn/shop/files/77.webp?v=1771843573&width=400",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrl73jnIXax_2Gg_DCV9Sq1euKauFVq1ZM4w&s",
        "https://wearzane.com/cdn/shop/files/IMG_1580.heic?v=1769757995&width=400",
        "https://wearzane.com/cdn/shop/files/BROWN_TOP_3_1015e4fb-cedb-41cc-a4aa-0ea26e7fb134.png?v=1768457913&width=400",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQImnT2e5NaowfPknYn3CYAFDTxHLsllbP7og&s",
        "https://wearzane.com/cdn/shop/files/52.png?v=1752563298",
    ];

    const bundlesProducts = {
        "All": [
            { id: 1, name: "Women Summer Bundle", price: "Rs. 4,999", category: "Women Bundle" },
            { id: 2, name: "Men Casual Bundle", price: "Rs. 5,499", category: "Men Bundle" },
            { id: 3, name: "Couple Fashion Bundle", price: "Rs. 8,999", category: "Couple Bundle" },
        ],
        "Women Bundle": [
            { id: 4, name: "Premium Women Bundle", price: "Rs. 7,999", category: "Women Bundle" },
            { id: 5, name: "Casual Women Bundle", price: "Rs. 4,999", category: "Women Bundle" },
            { id: 6, name: "Party Women Bundle", price: "Rs. 9,999", category: "Women Bundle" },
        ],
        "Men Bundle": [
            { id: 7, name: "Classic Men Bundle", price: "Rs. 6,999", category: "Men Bundle" },
            { id: 8, name: "Casual Men Bundle", price: "Rs. 5,499", category: "Men Bundle" },
            { id: 9, name: "Formal Men Bundle", price: "Rs. 8,499", category: "Men Bundle" },
        ],
        "Couple Bundle": [
            { id: 10, name: "Romantic Couple Bundle", price: "Rs. 10,999", category: "Couple Bundle" },
            { id: 11, name: "Casual Couple Bundle", price: "Rs. 8,999", category: "Couple Bundle" },
            { id: 12, name: "Premium Couple Bundle", price: "Rs. 14,999", category: "Couple Bundle" },
        ],
        "Seasonal": [
            { id: 13, name: "Summer Collection Bundle", price: "Rs. 6,499", category: "Seasonal" },
            { id: 14, name: "Winter Collection Bundle", price: "Rs. 7,999", category: "Seasonal" },
            { id: 15, name: "Spring Collection Bundle", price: "Rs. 5,999", category: "Seasonal" },
        ],
        "Sale Bundle": [
            { id: 16, name: "Mega Sale Bundle", price: "Rs. 3,999", category: "Sale Bundle" },
            { id: 17, name: "Super Saver Bundle", price: "Rs. 4,499", category: "Sale Bundle" },
            { id: 18, name: "Limited Time Bundle", price: "Rs. 5,299", category: "Sale Bundle" },
        ],
    };

    const displayProducts = selectedCategory === "All"
        ? Object.values(bundlesProducts).flat()
        : bundlesProducts[selectedCategory] || [];

    return (
        <div>
            <MenuBar
                onCategorySelect={setSelectedCategory}
                selectedCategory={selectedCategory}
            />

            <div className="container mx-auto px-6 py-8">
                <h1 className="text-3xl font-bold mb-8">Bundle Deals - {selectedCategory}</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {displayProducts.map((product, idx) => {
                        const primary = bundlesImages[idx % bundlesImages.length];
                        const hoverImg = bundlesImages[(idx + 1) % bundlesImages.length];

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
    )
}

export default Bundles;