import React, { useState } from "react";
import img4 from "../../assets/img4.webp";
import img3 from "../../assets/img3.webp";
import img2 from "../../assets/img2.webp";
import img6 from "../../assets/img6.webp";
import ProductDetailModal from "../Common/ProductDetailModal";
import { Link } from "react-router-dom";


const categories = [
    {
        id: 1,
        img: img4,
        name: "T-Shirt",
        price: "Rs.1,650.00",
        oldPrice: "Rs.2,062.50",
        discount: "-20%",
        relatedImages: [img4, img3, img2, img6]
    },
    {
        id: 2,
        img: img3,
        name: "Dress",
        price: "Rs.5,000.00",
        oldPrice: "Rs.6,250.00",
        discount: "-20%",
        relatedImages: [img3, img4, img2, img6]
    },
    {
        id: 3,
        img: img2,
        name: "Tops",
        price: "Rs.2,200.00",
        oldPrice: "Rs.2,750.00",
        discount: "-20%",
        relatedImages: [img2, img4, img3, img6]
    },
    {
        id: 4,
        img: img6,
        name: "Saree",
        price: "Rs.7,990.00",
        oldPrice: "Rs.9,990.00",
        discount: "-20%",
        relatedImages: [img6, img4, img3, img2]
    },
];

const Women2 = () => {
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
              <Link to={"/men"}>
                <button className="h-10 w-40 rounded-3xl bg-black text-white hover:bg-black/60 transition">
                    View All
                </button>
</Link>
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

export default Women2;
