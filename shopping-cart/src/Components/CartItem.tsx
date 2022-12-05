import { Button } from "@mui/material";
import React, { FC } from "react";
import { useAppDispatch } from "../redux/hooks";
import { removeFromCart } from "../redux/cartSlice";

interface ItemProps {
  id: number;
  quantity: number;
  color: string;
  price: number;
  image: string;
}

const CartItem: FC<ItemProps> = ({ id, quantity, color, price, image }) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(removeFromCart({'id': id}));
  };

  return (
    <div className="cart-item">
      <img src={image} alt={color + "brick"} />
      <div className="cart-item-info">
        <h2>{color} Brick</h2>
        <p>Quantity: {quantity}</p>
        <p>Price per item: {price}</p>
        <p>Quantity Price: ${price * quantity}</p>
        <Button onClick={handleDelete}>Delete</Button>
      </div>
    </div>
  );
};

export default CartItem;
