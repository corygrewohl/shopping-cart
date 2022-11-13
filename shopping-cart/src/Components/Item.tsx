import React, { FC, useState, useContext } from "react";
import { Button, Input } from "@mui/material";
import { CartContext } from "../Contexts/CartContext";

interface ItemProps {
  id: number;
  color: string;
  price: number;
  image: string;
}

const Item: FC<ItemProps> = ({ id, color, price, image }) => {
  const [cart, setCart] = useContext(CartContext);
  const [quantity, setQuantity] = useState<number>();

  const handleOnChange = (event: any) => {
    setQuantity(event.target.value);
    console.log(cart);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("id: " + id);
    console.log("quantity: " + quantity);
    console.log("cart: " + cart);

      setCart((prev: any) => ({
        ...prev,  [id]: quantity 
      }));
    
  };

  return (
    <div className="item">
      <img src={image} alt={color + "brick"} />
      <p>
        {color} <br /> {price}
      </p>
      Quantity:{" "}
      <Input type="number" value={quantity} onChange={handleOnChange} />
      <br />
      <Button variant="outlined" onClick={handleClick}>
        Add to Cart
      </Button>
      <br />
    </div>
  );
};

export default Item;
