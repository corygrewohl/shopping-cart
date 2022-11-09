import React, { FC, useState } from "react";
import { Button, Input } from "@mui/material";

interface ItemProps {
  id: number;
  color: string;
  price: number;
  image: string;
}

const Item: FC<ItemProps> = ({ id, color, price, image }) => {
  const [quantity, setQuantity] = useState<number>()

  const handleOnChange = (event: any) => {
    setQuantity(event.target.value)
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      console.log("id: " + id);
      console.log("quantity: " + quantity);
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
