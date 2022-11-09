import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavbarContainer } from "./styles/NavbarContainer.styled";

function Navbar() {
  return (
    <NavbarContainer>
      <a href="/">
        <li>Home</li>
      </a>
      <a href="/shop">
        <li>Shop</li>
      </a>
      <a href="/cart">
        <li>
          <ShoppingCartIcon className="svg_icons" />
        </li>
      </a>
    </NavbarContainer>
  );
}

export default Navbar;
