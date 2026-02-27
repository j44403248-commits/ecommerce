import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const addToCart = (product, size, qty) => {
        const newItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.relatedImages ? product.relatedImages[0] : product.img,
            size,
            qty,
            category: product.category,
        };

        // Check if item with same id and size already exists
        const existingItem = cartItems.find(
            (item) => item.id === newItem.id && item.size === newItem.size
        );

        if (existingItem) {
            // Update quantity if same product and size already in cart
            setCartItems(
                cartItems.map((item) =>
                    item.id === newItem.id && item.size === newItem.size
                        ? { ...item, qty: item.qty + qty }
                        : item
                )
            );
        } else {
            // Add new item to cart
            setCartItems([...cartItems, newItem]);
        }
    };

    const removeFromCart = (id, size) => {
        setCartItems(
            cartItems.filter((item) => !(item.id === id && item.size === size))
        );
    };

    const updateQty = (id, size, qty) => {
        if (qty <= 0) {
            removeFromCart(id, size);
        } else {
            setCartItems(
                cartItems.map((item) =>
                    item.id === id && item.size === size ? { ...item, qty } : item
                )
            );
        }
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            const price = parseInt(item.price.replace(/[^0-9]/g, ""));
            return total + price * item.qty;
        }, 0);
    };

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, updateQty, getTotalPrice, showCart, setShowCart }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
