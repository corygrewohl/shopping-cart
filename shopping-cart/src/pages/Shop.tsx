import { useState, useEffect } from "react";
import { ItemProps } from "../types";
import pieces from "../Data/data";
import Navbar from "../Components/Navbar/Navbar";
import Item from "../Components/Item/Item";
import { ItemsContainer } from "../Components/Item/ItemsContainer.styled";
import { ShopContainer } from "../styles/PageStyles/ShopContainer.styled";
import {
  Button,
  Drawer,
  Box,
  Typography,
  Pagination,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  IconButton,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function Shop() {
  const [items, setItems] = useState<ItemProps[]>(pieces);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [sortBy, setSortBy] = useState("alphabetical");

  const [selectedType, setSelectedTypes] = useState({
    bricks: false,
    plates: false,
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  function handleChange(event: SelectChangeEvent) {
    setSortBy(event.target.value);
  }

  function handleCheck(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedTypes({
      ...selectedType,
      [event.target.name]: event.target.checked,
    });
  }

  function filterPieces(bricks: boolean, plates: boolean) {
    let filteredItems: ItemProps[] = [];
    if((!bricks && !plates)) filteredItems = pieces;
    if(bricks && plates) return;

    if(bricks){
      filteredItems = pieces.filter((item) => item.type === 'brick')
    }

    if(plates){
      filteredItems = [...filteredItems, ...pieces.filter((item) => item.type === 'plate')]
    }
    
    setItems(filteredItems);
  }

  useEffect(() => {
    let sortedItems = items;
    if (sortBy === "alphabetical") {
      sortedItems.sort((a, b) =>
        a.color + a.type > b.color + b.type ? 1 : -1
      );
    }
    if (sortBy === "lowToHigh") {
      sortedItems.sort((a, b) => (a.price > b.price ? 1 : -1));
    }
    if (sortBy === "highToLow") {
      sortedItems.sort((a, b) => (a.price < b.price ? 1 : -1));
    }
    setItems(sortedItems);
  }, [sortBy]);

  const itemsArray = currentItems.map((currentItem) => {
    return (
      <Item
        key={currentItem.id}
        id={currentItem.id}
        type={currentItem.type}
        color={currentItem.color}
        price={currentItem.price}
        image={currentItem.image}
      />
    );
  });

  return (
    <ShopContainer>
      <Navbar />

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <IconButton onClick={() => setIsDrawerOpen(false)}>
          <CloseIcon />
        </IconButton>
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6">Filter</Typography>
          <FormControl>
            <InputLabel id="sort-dropdown">Sort By:</InputLabel>
            <Select
              labelId="sort-dropdown"
              label="Sort By"
              sx={{ minWidth: 120 }}
              value={sortBy}
              onChange={handleChange}
            >
              <MenuItem value={"lowToHigh"}>Lowest to Highest</MenuItem>
              <MenuItem value={"highToLow"}>Highest to Lowest</MenuItem>
              <MenuItem value={"alphabetical"}>A to Z</MenuItem>
            </Select>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedType.bricks}
                    onChange={handleCheck}
                    name="bricks"
                  />
                }
                label="Bricks"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedType.plates}
                    onChange={handleCheck}
                    name="plates"
                  />
                }
                label="Plates"
              />
            </FormGroup>
            <Button
              variant="outlined"
              onClick={() => {
                setIsDrawerOpen(false);
                filterPieces(selectedType.bricks, selectedType.plates)
              }}
              sx={{ marginTop: "20px" }}
            >
              Save
            </Button>
          </FormControl>
        </Box>
      </Drawer>

      <Button onClick={() => setIsDrawerOpen(true)}>Open Drawer</Button>
      <ItemsContainer>
        {itemsArray}
        <Pagination
          count={Math.ceil(items.length / itemsPerPage)}
          onChange={(event, page: number) => setCurrentPage(page)}
          color="primary"
          sx={{ gridColumn: "2 / 3", justifySelf: "center" }}
        />
      </ItemsContainer>
    </ShopContainer>
  );
}

export default Shop;
