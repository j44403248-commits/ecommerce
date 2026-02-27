import React, { useState } from 'react';
import MenuBar from '../Women/MenuBar';
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const Women = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Women-specific images for primary/hover effect
    const womenImages = [
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

    const womenProducts = {
        "All": [
            { id: 1, name: "Casual Blue Dress", price: "Rs. 2,499", category: "Dresses" },
            { id: 2, name: "White Crop Top", price: "Rs. 999", category: "Tops & Shirts" },
            { id: 3, name: "Black Skirt", price: "Rs. 1,799", category: "Skirts" },
        ],
        "Tops & Shirts": [
            { id: 4, name: "Casual T-Shirt", price: "Rs. 899", category: "Tops & Shirts" },
            { id: 5, name: "Formal Blouse", price: "Rs. 1,999", category: "Tops & Shirts" },
            { id: 6, name: "Crop Top", price: "Rs. 1,299", category: "Tops & Shirts" },
        ],
        "Co-ords": [
            { id: 7, name: "Summer Co-ord Set", price: "Rs. 2,299", category: "Co-ords" },
            { id: 8, name: "Casual Co-ords", price: "Rs. 1,899", category: "Co-ords" },
        ],
        "Skirts": [
            { id: 9, name: "Maxi Skirt", price: "Rs. 2,199", category: "Skirts" },
            { id: 10, name: "Mini Skirt", price: "Rs. 1,299", category: "Skirts" },
            { id: 11, name: "Flared Skirt", price: "Rs. 1,699", category: "Skirts" },
        ],
        "Sweaters": [
            { id: 12, name: "Wool Sweater", price: "Rs. 2,799", category: "Sweaters" },
            { id: 13, name: "Casual Sweater", price: "Rs. 1,999", category: "Sweaters" },
        ],
        "Jackets": [
            { id: 14, name: "Denim Jacket", price: "Rs. 3,499", category: "Jackets" },
            { id: 15, name: "Leather Jacket", price: "Rs. 5,999", category: "Jackets" },
        ],
        "Sweatshirts & Hoodies": [
            { id: 16, name: "Casual Hoodie", price: "Rs. 1,899", category: "Sweatshirts & Hoodies" },
            { id: 17, name: "Graphic Sweatshirt", price: "Rs. 1,599", category: "Sweatshirts & Hoodies" },
        ],
        "Pants": [
            { id: 18, name: "Blue Jeans", price: "Rs. 2,499", category: "Pants" },
            { id: 19, name: "Black Trousers", price: "Rs. 2,199", category: "Pants" },
        ],
    };

    const displayProducts = selectedCategory === "All"
        ? Object.values(womenProducts).flat()
        : womenProducts[selectedCategory] || [];

    return (
        <div>
            <MenuBar
                onCategorySelect={setSelectedCategory}
                selectedCategory={selectedCategory}
            />

            <div className="container mx-auto px-6 py-8">
                <h1 className="text-3xl font-bold mb-8">Women's Collection - {selectedCategory}</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {displayProducts.map((product, idx) => {
                        const primary = womenImages[idx % womenImages.length];
                        const hoverImg = womenImages[(idx + 1) % womenImages.length];

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

export default Women;