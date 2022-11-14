import Navbar from "../Components/Navbar";
import bricks from "../data";
import Item from "../Components/Item";
import { ShopContainer } from "../Components/styles/ShopContainer.styled";
import { ItemsContainer } from "../Components/styles/ItemsContainer.styled";

function Shop() {
  return (
    <ShopContainer>
      <Navbar />
      
      <ItemsContainer>
        {bricks.map((currentBrick) => {
          return (
            <Item
              id={currentBrick.id}
              color={currentBrick.color}
              price={currentBrick.price}
              image={currentBrick.image}
            />
          );
        })}
      </ItemsContainer>
    </ShopContainer>
  );
}

export default Shop;
