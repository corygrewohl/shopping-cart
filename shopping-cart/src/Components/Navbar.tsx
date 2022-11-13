import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavbarContainer } from "./styles/NavbarContainer.styled";
import { CartContext } from "../Contexts/CartContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { cart, setCart } = useContext(CartContext);

  return (
    <NavbarContainer>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/shop">
        <li>Shop</li>
      </Link>
      <Link to="/cart">
        <li>
          <ShoppingCartIcon className="svg_icons" />
        </li>
      </Link>
    </NavbarContainer>
  );
}

export default Navbar;
