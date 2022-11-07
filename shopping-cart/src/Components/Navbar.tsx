import React from "react";
import "../Sass/Navbar.scss";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
  return (
    <div className="navbar">
      <a href="/">
        <li>Home</li>
      </a>
      <a href="/shop">
        <li>Shop</li>
      </a>
      <a href="/cart">
        <li><ShoppingCartIcon className="svg_icons"/></li>
      </a>
    </div>
  );
}

export default Navbar;