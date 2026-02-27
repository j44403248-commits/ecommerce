import React, { useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight, FaStar, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

const ProductDetailModal = ({ product, onClose }) => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("M");
    const { addToCart, setShowCart } = useCart();
    const [addedToCart, setAddedToCart] = useState(false);

    // Related products swiper
    const relatedImages = product.relatedImages || [
        "https://via.placeholder.com/400x500?text=Image+1",
        "https://via.placeholder.com/400x500?text=Image+2",
        "https://via.placeholder.com/400x500?text=Image+3",
        "https://via.placeholder.com/400x500?text=Image+4",
    ];

    const nextImage = () => {
        setSelectedImage((prev) => (prev + 1) % relatedImages.length);
    };

    const prevImage = () => {
        setSelectedImage((prev) => (prev - 1 + relatedImages.length) % relatedImages.length);
    };

    const handleAddToCart = () => {
        addToCart(product, size, qty);
        setShowCart(true);
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2000);
        // Reset for next product
        setQty(1);
        setSize("M");
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-white w-full max-w-5xl h-screen md:h-auto max-h-[90vh] md:rounded-lg overflow-hidden md:overflow-auto flex flex-col md:flex-row">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-black z-10 md:relative md:top-0 md:right-0 md:col-span-2"
                >
                    <FaTimes />
                </button>

                {/* Left Side - Product Details */}
                <div className="flex-1 p-6 md:p-8 overflow-y-auto">
                    {/* Title */}
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        {product.name}
                    </h1>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} size={16} />
                            ))}
                        </div>
                        <span className="text-sm text-gray-600">(156 reviews)</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-3xl font-bold text-gray-900">
                            {product.price}
                        </span>
                        {product.oldPrice && (
                            <span className="text-lg text-gray-500 line-through">
                                {product.oldPrice}
                            </span>
                        )}
                        {product.discount && (
                            <span className="bg-red-500 text-white px-3 py-1 rounded text-sm font-bold">
                                {product.discount}
                            </span>
                        )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-6">
                        Premium quality {product.category} clothing made with finest materials.
                        Comfortable, durable, and stylish. Perfect for everyday wear or special occasions.
                    </p>

                    {/* Size Selection */}
                    <div className="mb-6">
                        <label className="block font-semibold text-gray-900 mb-2">SELECT SIZE</label>
                        <div className="flex gap-2">
                            {["XS", "S", "M", "L", "XL", "XXL"].map((s) => (
                                <button
                                    key={s}
                                    onClick={() => setSize(s)}
                                    className={`px-4 py-2 border-2 rounded-md font-medium transition ${size === s
                                        ? "border-black bg-black text-white"
                                        : "border-gray-300 text-gray-900 hover:border-gray-400"
                                        }`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity */}
                    <div className="mb-6">
                        <label className="block font-semibold text-gray-900 mb-2">QUANTITY</label>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => qty > 1 && setQty(qty - 1)}
                                className="border-2 border-gray-300 px-4 py-2 rounded-md hover:border-black transition"
                            >
                                −
                            </button>
                            <span className="text-xl font-semibold w-12 text-center">{qty}</span>
                            <button
                                onClick={() => setQty(qty + 1)}
                                className="border-2 border-gray-300 px-4 py-2 rounded-md hover:border-black transition"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        onClick={handleAddToCart}
                        className={`w-full py-3 rounded-md font-bold text-lg transition flex items-center justify-center gap-2 mb-3 ${addedToCart
                            ? "bg-green-500 text-white"
                            : "bg-black text-white hover:bg-gray-800"
                            }`}
                    >
                        <FaShoppingCart />
                        {addedToCart ? "Added to Cart! ✓" : "Add to Cart"}
                    </button>

                    {/* Whishlist Button */}
                    <button className="w-full border-2 border-gray-300 text-gray-900 py-3 rounded-md font-bold hover:border-black transition">
                        Add to Wishlist
                    </button>

                    {/* Shipping Info */}
                    <div className="mt-8 pt-6 border-t border-gray-200 space-y-3 text-sm text-gray-600">
                        <div>✓ Free shipping on orders above Rs. 3000</div>
                        <div>✓ Delivery in 3-5 working days</div>
                        <div>✓ 14 days easy return & exchange</div>
                        <div>✓ 100% secure checkout</div>
                    </div>
                </div>

                {/* Right Side - Image Swiper with Vertical Thumbnails */}
                <div className="flex-1 bg-gray-100 flex gap-4 items-center justify-center p-4 md:p-8">
                    {/* Vertical Thumbnails */}
                    <div className="flex flex-col gap-3 overflow-y-auto max-h-96">
                        {relatedImages.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedImage(idx)}
                                className={`w-20 h-24 shrink-0 rounded-md overflow-hidden border-2 transition ${selectedImage === idx ? "border-black" : "border-gray-300"
                                    }`}
                            >
                                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>

                    {/* Main Image */}
                    <div className="relative w-80 h-96 shrink-0">
                        <img
                            src={relatedImages[selectedImage]}
                            alt="Product"
                            className="w-full h-full object-cover rounded-lg"
                        />

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition"
                        >
                            <FaChevronLeft className="text-xl text-black" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition"
                        >
                            <FaChevronRight className="text-xl text-black" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailModal;
