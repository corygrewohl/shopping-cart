import { Link } from 'react-router-dom'
import { LinksContainer, NavbarContainer } from "./NavbarContainer.styled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navbar() {
  return (
    <NavbarContainer>
      <div>
        <h2>The Brick Emporium</h2>
      </div>
      <LinksContainer>
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
      </LinksContainer>
    </NavbarContainer>
  );
}

export default Navbar;
