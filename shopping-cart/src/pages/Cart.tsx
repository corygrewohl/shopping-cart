import React, { useEffect, useContext, FC } from "react";
import Navbar from "../Components/Navbar";
import { CartContext } from "../Contexts/CartContext";

const Cart: FC<any> = () => {

    const [cart, setCart] = useContext(CartContext);

    useEffect(() => {
        console.log(cart);
    })

  return (
    <>
      <Navbar />
      {/* <h3>Cart: {cart[0]}</h3> */}
    </>
  );
}

export default Cart;
