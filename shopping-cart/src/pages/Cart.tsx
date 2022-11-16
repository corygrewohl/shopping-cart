import React, { useEffect, useState } from "react";
import CartItem from "../Components/CartItem";
import Navbar from "../Components/Navbar";
import { useAppSelector } from "../redux/hooks";
import bricks from "../data";
import { CartItemsContainer } from "../Components/styles/CartItemsContainer.styled";
import { CartContainer } from "../Components/styles/CartContainer.styled";
import CartTotalPrice from "../Components/CartTotalPrice";
import { Button } from "@mui/material";

interface CartArray {
  id: number;
  quantity: number;
}

function Cart() {
  const cart = useAppSelector((state) => state.cart.cart);
  const [cartArray, setCartArray] = useState<CartArray[]>([]);

  useEffect(() => {
    const tempCartArray = [];
    for (let k in cart) {
      let newK = Number(k);
      tempCartArray.push({
        id: newK,
        quantity: cart[k],
      });
    }
    setCartArray(tempCartArray);
  }, []);

  function calculateTotalPrice() {
    let totalPrice = 0;
    for(let k in cartArray){
      totalPrice += bricks[cartArray[k].id].price * cartArray[k].quantity;
    }
    console.log(totalPrice)
    return +(totalPrice.toFixed(2));
  }

  function displayAlert() {
    alert("Thanks for trying out my Lego shop website!")
  }

  return (
    <CartContainer>
      <Navbar />
      <CartItemsContainer>
        {cartArray.map((currentItem) => {
          return (
            <CartItem
              key={currentItem.id}
              id={currentItem.id}
              quantity={currentItem.quantity}
              color={bricks[currentItem.id].color}
              price={+(bricks[currentItem.id].price.toFixed(2))}
              image={bricks[currentItem.id].image}
            />
          );
        })}
      <CartTotalPrice price={calculateTotalPrice()}/>
      <Button className="checkout-btn" variant="contained" onClick={displayAlert}>
          Checkout
      </Button>
      </CartItemsContainer>
      <div className="checkout-btn-container">
        
      </div>
    </CartContainer>
  );
}

export default Cart;
