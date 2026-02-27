import React from "react";

const MenuBar = ({ onCategorySelect, selectedCategory }) => {
    const categories = [
        "Shirts",
        "T-Shirts",
        "Pants",
        "Shorts",
        "Jackets",
        "Sweaters",
        "Shoes"
    ];

    return (
        <div className="w-full bg-white shadow-md">
            <ul className="flex justify-center items-center gap-8 py-4 font-semibold text-gray-700 flex-wrap">
                {categories.map((category) => (
                    <li
                        key={category}
                        onClick={() => onCategorySelect(category)}
                        className={`cursor-pointer transition duration-300 ${selectedCategory === category
                                ? "text-red-500 border-b-2 border-red-500"
                                : "hover:text-red-500"
                            }`}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuBar;
