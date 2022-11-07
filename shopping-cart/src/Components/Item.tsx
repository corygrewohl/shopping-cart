import React, {FC} from "react";
import "../Sass/Navbar.scss";

interface ItemProps {
    color: string;
    price: number;
    image: string;
}

const Item:FC<ItemProps> = ({color, price, image}) => {
  return (
      <div className="item">
          <img src={image} alt={color + "brick"} />
          <p>
            {color} <br /> {price}
          </p>
          <a href="#">Add to cart</a>
        </div>
    
  );
}

export default Item;