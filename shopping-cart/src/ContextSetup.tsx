import { CartContext } from "./Contexts/CartContext";
import { useState } from "react";
import RouteSwitch from "./RouteSwitch";

const ContextSetup = () => {
  const [cart, setCart] = useState(null);

  return (
    // <CartContext.Provider value={{ cart, setCart }}>
    //   <RouteSwitch />
    // </CartContext.Provider>
    <>
    </>
  );
};

export default ContextSetup;
