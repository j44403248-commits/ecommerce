import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

import p1 from "../../assets/img1.avif";
import p2 from "../../assets/img2.webp";
import p3 from "../../assets/img3.webp";

const frequentlyBought = [
  {
    img: p1,
    title: "Textured Knitted Polo Shirt – Light Olive",
    size: "s",
    price: "Rs.3,400.00",
    oldPrice: "Rs.4,250.00",
  },
  {
    img: p2,
    title: "Classic Cotton Shirt – White",
    size: "m",
    price: "Rs.2,900.00",
    oldPrice: "Rs.3,500.00",
  },
  {
    img: p3,
    title: "Denim Casual Shirt – Blue",
    size: "l",
    price: "Rs.3,200.00",
    oldPrice: "Rs.3,900.00",
  },
];

const CartModal = ({ onClose }) => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQty, getTotalPrice } = useCart();
  const [index, setIndex] = useState(0);

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate("/");
    }
  };

  const nextItem = () => {
    setIndex((prev) => (prev + 1) % frequentlyBought.length);
  };

  const prevItem = () => {
    setIndex(
      (prev) => (prev - 1 + frequentlyBought.length) % frequentlyBought.length
    );
  };

  const totalPrice = getTotalPrice();

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-end z-60">
      <div className="bg-white w-full md:w-100 h-full p-4 overflow-y-auto">

        {/* Header */}
        <div className="flex justify-start items-center border-b pb-3">
          <h2 className="text-xl font-bold">YOUR CART</h2>
        </div>

        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 text-lg">Your cart is empty</p>
            <button
              onClick={() => navigate("/")}
              className="mt-4 bg-black text-white px-6 py-2 rounded"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {cartItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => removeFromCart(item.id, item.size)}
                className="mt-4 border-b pb-4 flex gap-3 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt="product"
                  className="w-24 h-24 object-cover rounded"
                />

                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.size}</p>
                  <p className="font-semibold mt-1">{item.price}</p>

                  {/* Quantity */}
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        updateQty(item.id, item.size, item.qty - 1);
                      }}
                      className="border px-3 py-1"
                    >
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        updateQty(item.id, item.size, item.qty + 1);
                      }}
                      className="border px-3 py-1"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFromCart(item.id, item.size);
                    }}
                    className="text-red-500 mt-2 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </>
        )}

        {/* Free Shipping */}
        {cartItems.length > 0 && (
          <p className="text-green-600 mt-4 font-medium">
            🎉 Congratulations! You get FREE SHIPPING
          </p>
        )}

        {/* Total */}
        {cartItems.length > 0 && (
          <div className="flex justify-between mt-4 text-lg font-bold">
            <span>Total:</span>
            <span>Rs.{totalPrice.toLocaleString("en-PK")}</span>
          </div>
        )}

        {/* Frequently Bought Header with arrows */}
        <div className="mt-6 flex justify-between items-center">
          <h3 className="font-semibold">Frequently Bought Together</h3>
          <div className="flex gap-2">
            <button onClick={prevItem}>
              <FaChevronLeft />
            </button>
            <button onClick={nextItem}>
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Slider Item */}
        <div className="border p-3 rounded mt-3 flex gap-3">
          <img
            src={frequentlyBought[index].img}
            alt="product"
            className="w-20 h-20 object-cover rounded"
          />

          <div>
            <p>{frequentlyBought[index].title}</p>
            <p className="text-sm">{frequentlyBought[index].size}</p>
            <p className="font-semibold">{frequentlyBought[index].price}</p>
            <p className="line-through text-gray-400">
              {frequentlyBought[index].oldPrice}
            </p>

            <button className="mt-2 w-full bg-black text-white py-1">
              Add
            </button>
          </div>
        </div>

        {/* Checkout Buttons */}
        <div className="mt-6 space-y-3">
          <button className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition">
            CHECKOUT
          </button>

          <button className="w-full border border-black text-black py-3 rounded-md font-semibold hover:bg-gray-100 transition">
            Checkout using rewards
          </button>
        </div>

      </div>
    </div>
  );
};

export default CartModal;