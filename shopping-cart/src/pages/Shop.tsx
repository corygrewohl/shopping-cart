import React from "react";
import Navbar from "../Components/Navbar";
import "../Sass/Shop.scss";

import Beige from '../assets/beige.jpg';
import Black from '../assets/Black.jpg';
import Blue from '../assets/Blue.jpg';
import Brown from '../assets/Brown.jpg';
import Green from '../assets/Green.jpg';
import Lime from '../assets/Lime.jpg';
import Mustard from '../assets/Mustard.jpg';
import Navy from '../assets/Navy.jpg';
import Orange from '../assets/Orange.jpg';
import Purple from '../assets/Purple.jpg';
import Red from '../assets/Red.jpg';
import Yellow from '../assets/Yellow.jpg';
import Item from "../Components/Item";

function Shop() {
  const bricks = [
    {
      color: 'beige',
      image: Beige,
      price: 0.21,
    },
    {
      color: 'Black',
      image: Black,
      price: 0.21,
    },
    {
      color: 'Blue',
      image: Blue,
      price: 0.21,
    },
    {
      color: 'Brown',
      image: Brown,
      price: 0.21,
    },
    {
      color: 'Green',
      image: Green,
      price: 0.21,
    },
    {
      color: 'Lime',
      image: Lime,
      price: 0.21,
    },
    {
      color: 'Mustard',
      image: Mustard,
      price: 0.21,
    },
    {
      color: 'Navy',
      image: Navy,
      price: 0.21,
    },
    {
      color: 'Orange',
      image: Orange,
      price: 0.21,
    },
    {
      color: 'Purple',
      image: Purple,
      price: 0.21,
    },
    {
      color: 'Red',
      image: Red,
      price: 0.21,
    },
    {
      color: 'Yellow',
      image: Yellow,
      price: 0.21,
    },
    
  ]

  return (
    <div className="shop-container">
      <Navbar />

      <div className="items-container">
        {bricks.map((currentBrick) => {
          return <Item color={currentBrick.color} price={currentBrick.price} image={currentBrick.image}/>
        })}
      </div>
    </div>
  );
}

export default Shop;
