import React, { FC, useState } from "react";
import { Button, Input } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart } from "../../redux/cartSlice";
import { ItemProps } from "../../types";

const Item: FC<ItemProps> = ({ id, type, color, price, image }) => {
  const [quantity, setQuantity] = useState<number>();
  const [hasQuantity, setHasQuantity] = useState<boolean>(false);

  const cart:any = useAppSelector((state) => {
    state.cart.cart;
  });
  const dispatch = useAppDispatch();

  const handleOnChange = (event: any) => {
    setQuantity(event.target.value);
  };

  const handleClick = () => {
    console.log("id: " + id);
    console.log("quantity: " + quantity);
    if (quantity == null) return;
    if (quantity <= 0) return;
    dispatch(addToCart({ id: id, quantity: quantity }));
    setHasQuantity(true)
    console.log(cart);
  };

  return (
    <div className="item">
      <img src={image} alt={color + "brick"} />
      <p>
        {color + " " + type} <br /> ${price}
      </p>
      Quantity:{" "}
      <Input type="number" value={quantity} onChange={handleOnChange} />
      <br />
      <Button variant="outlined" onClick={handleClick}>
        Add to Cart
      </Button>
      {(hasQuantity) && <p>Current Quantity: {cart}</p>}
      {/* if(cart.id == quantity){
        return (
          <p>Current Quantity: {cart}</p>
        )
      } */}
      <br />
    </div>
  );
};

export default Item;
