import React, { useState } from "react";
import Women2 from "./Women2";
import Men2 from "./Men2";

const Category = () => {
    const [active, setActive] = useState("women"); // default Women

    return (
        <div className="px-4 py-10">

            {/* Heading + Buttons */}
            <div className="text-center mb-8">
                <h1 className="text-2xl font-semibold">SHOP BY CATEGORY</h1>

                <div className="flex justify-center gap-6 mt-4">
                    <button
                        onClick={() => setActive("women")}
                        className={`h-10 w-24 rounded ${active === "women"
                            ? "bg-black text-white"
                            : "bg-gray-200 text-black"
                            }`}
                    >
                        Women
                    </button>

                    <button
                        onClick={() => setActive("men")}
                        className={`h-10 w-24 rounded ${active === "men"
                            ? "bg-black text-white"
                            : "bg-gray-200 text-black"
                            }`}
                    >
                        Men
                    </button>
                </div>
            </div>

            {/* Show only one component at a time */}
            {active === "women" && <Women2 />}
            {active === "men" && <Men2 />}

        </div>
    );
};

export default Category;
