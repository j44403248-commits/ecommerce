import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const FooterNew = () => {
    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="px-4 py-12 md:py-16">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">ZANE</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Premium quality clothing for men and women. Discover your style with our exclusive collections.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-white transition text-xl">
                                <FaFacebook />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition text-xl">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition text-xl">
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white transition">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                            <li><a href="#" className="hover:text-white transition">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition">Blog</a></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white transition">Track Your Order</a></li>
                            <li><a href="#" className="hover:text-white transition">Shipping & Delivery</a></li>
                            <li><a href="#" className="hover:text-white transition">Returns & Exchange</a></li>
                            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Need Help?</h4>
                        <div className="space-y-3 text-gray-400 text-sm">
                            <div className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                                <FaPhone />
                                <span>+92 333 2279263</span>
                            </div>
                            <div className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                                <FaEnvelope />
                                <span>ask@wearzane.com</span>
                            </div>
                            <div className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                                <FaMapMarkerAlt />
                                <span>Pakistan</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Benefits Bar */}
            <div className="bg-gray-800 px-4 py-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-gray-300">
                    <div>
                        <p className="font-semibold">FREE SHIPPING ABOVE RS. 3000</p>
                        <p className="text-sm text-gray-400">On orders over Rs. 3000</p>
                    </div>
                    <div>
                        <p className="font-semibold">DELIVERY IN 3-5 WORKING DAYS</p>
                        <p className="text-sm text-gray-400">Fast and reliable delivery</p>
                    </div>
                    <div>
                        <p className="font-semibold">14 DAYS EASY RETURN & EXCHANGE</p>
                        <p className="text-sm text-gray-400">Hassle-free returns</p>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="bg-gray-950 px-4 py-6 text-center text-gray-400 text-sm border-t border-gray-800">
                <p>Copyright © 2025 ZANE. All rights reserved.</p>
                <p className="mt-2">Designed & Developed with ❤️</p>
            </div>
        </footer>
    );
};

export default FooterNew;
