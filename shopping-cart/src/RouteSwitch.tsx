import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import GlobalStyles from "./Components/styles/Global";
import { CartContext } from "./Contexts/CartContext";
import { useState } from "react";
import Cart from "./pages/Cart";

const RouteSwitch = () => {
  const [cart, setCart] = useState(null);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
};

export default RouteSwitch;
