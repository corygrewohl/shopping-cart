import { Drawer, IconButton, Box, Typography, FormControl, InputLabel, Select, MenuItem, FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import React, { useState, useEffect } from 'react'

export const ShopDrawer = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
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
  )
}
