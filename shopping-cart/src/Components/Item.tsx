import React, { FC, useState } from "react";
import { Button, Input } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addToCart } from "../redux/cartSlice";

interface ItemProps {
  id: number;
  color: string;
  price: number;
  image: string;
}

const Item: FC<ItemProps> = ({ id, color, price, image }) => {
  const [quantity, setQuantity] = useState<number>()

  const cart = useAppSelector((state) => {state.cart.cart})
  const dispatch = useAppDispatch();

  const handleOnChange = (event: any) => {
    setQuantity(event.target.value)
  }

  const handleClick = () => {
      console.log("id: " + id);
      console.log("quantity: " + quantity);
      if(quantity == null) return;
      if(quantity <= 0) return;
      dispatch(addToCart({'id': id, 'quantity': quantity}))
      console.log(cart)
  };

  return (
    <div className="item">
      <img src={image} alt={color + "brick"} />
      <p>
        {color} <br /> {price}
      </p>
      Quantity: <Input type="number" value={quantity} onChange={handleOnChange}/>
      <br />
      <Button variant="outlined" onClick={handleClick}>
        Add to Cart
      </Button>
      <br />
    </div>
  );
};

export default Item;
