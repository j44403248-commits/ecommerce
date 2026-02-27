import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Common/Navbar";
import FooterNew from "./Components/Common/FooterNew";
import Home from "./Components/Pages/Home";
import CartModal from "./Components/Common/CartModel";
import BestSeller from "./Components/Home/BestSellers";
import { CartProvider, useCart } from "./context/CartContext";
import Women from "./Components/Pages/Women";
import Men from "./Components/Pages/Men";
import Bundles from "./Components/Pages/Bundles";
import LoyaltyRewards from "./Components/Pages/LoyaltyRewards";

const AppContent = () => {
  const { showCart, setShowCart } = useCart();

  return (
    <>
      <Navbar />
      {showCart && <CartModal onClose={() => setShowCart(false)} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartModal />} />
        <Route path="/BestSeller" element={<BestSeller />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/bundles" element={<Bundles />} />
        <Route path="/loyalty" element={<LoyaltyRewards />} />
      </Routes>
      <FooterNew />
    </>
  );
};

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;