import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/hooks";
import bricks from "../Data/data";

import Navbar from "../Components/Navbar/Navbar";
import CartItem from "../Components/CartItem/CartItem";
import { CartItemsContainer } from "../Components/CartItem/CartItemsContainer.styled";
import { CartContainer } from "../styles/PageStyles/CartContainer.styled";
import { Button } from "@mui/material";

interface CartArray {
  id: number;
  quantity: number;
}

function Cart() {
  const cart = useAppSelector((state) => state.cart.cart);
  const [cartArray, setCartArray] = useState<CartArray[]>([]);

  /**
   * Putting items from cart object into cartArray
   */
  useEffect(() => {
    loadIntoArray();
  }, [cart]);

  const loadIntoArray = () => {
    const tempCartArray = [];
    for (let k in cart) {
      let newK = Number(k);
      tempCartArray.push({
        id: newK,
        quantity: cart[k],
      });
    }
    setCartArray(tempCartArray);
  };

  /**
   * Mapping items in cart and storing it
   */
  const cartMap = cartArray.map((currentItem) => {
    return (
      <CartItem
        key={currentItem.id}
        id={currentItem.id}
        type={bricks[currentItem.id].type}
        quantity={currentItem.quantity}
        color={bricks[currentItem.id].color}
        price={+bricks[currentItem.id].price.toFixed(2)}
        image={bricks[currentItem.id].image}
      />
    );
  });

  /**
   * Loops through cart array adding all items together
   * @returns Total price of all items
   */
  function calculateTotalPrice() {
    let totalPrice = 0;
    for (let k in cartArray) {
      totalPrice += bricks[cartArray[k].id].price * cartArray[k].quantity;
    }
    console.log(totalPrice);
    return +totalPrice.toFixed(2);
  }

  /**
   * Displays when checkout button is clicked
   */
  function displayAlert() {
    alert("Thanks for trying out my Lego shop website!");
  }

  return (
    <CartContainer>
      <Navbar />
      <CartItemsContainer>
        {cartArray.length === 0 ? (
          <h1>Oops! Looks Like your cart is empty!</h1>
        ) : (
          <>
            {cartMap}
            <div className="cart-item total">
              <h2>Total Price:</h2> <p>${calculateTotalPrice()}</p>
            </div>
            <Button
              className="checkout-btn"
              variant="contained"
              onClick={displayAlert}
            >
              Checkout
            </Button>
          </>
        )}
      </CartItemsContainer>
      <div className="checkout-btn-container"></div>
    </CartContainer>
  );
}

export default Cart;
