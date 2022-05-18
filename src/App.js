import './App.css';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from './Card';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Context } from './Context';
import Divider from '@mui/material/Divider';

function App() {
  const [cartValue, setCart] = useState(0);
  const [AddCrt, setAdd] = useState(1);
  const [cartName, setName] = useState('Add to Cart');

  const handleIncrement = () => {
    setCart(cartValue + 1);
  };

  const handleDecrement = () => {
    setCart(cartValue - 1);
  };

  const handleView = (x) => {
    setAdd(x);
  };
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="App">
      <div className="NavBar">
        <Grid container direction="row">
          <Grid
            container
            xs={4}
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <div>
              <Grid item>
                <h3>Start BootStrap</h3>
              </Grid>
            </div>
            <div>
              <Grid item>
                <Button variant="text">Home</Button>
              </Grid>
            </div>
            <div>
              <Grid item>
                <Button variant="text">About</Button>
              </Grid>
            </div>
            <div>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Shop</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Shop"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>All Products</MenuItem>
                    <Divider variant="middle" />
                    <MenuItem value={2}>Popular Items </MenuItem>
                    <MenuItem value={3}>New Arrival</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </Grid>
          <Grid item xs={6}></Grid>

          <Grid item xs={2}>
            <div className="cart">
              <Button variant="outlined">
                <ShoppingCartIcon />
                Cart {cartValue}
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="banner">
        <Grid
          container
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <h1 className="shop">Shop in Style</h1>
          </Grid>
          <Grid item>
            <h5 className="headline">With this Shop Homapage Tempelete</h5>
          </Grid>
        </Grid>
      </div>

      <Context.Provider
        value={{
          handleIncrementFromProvider: handleIncrement,
          handleDecrementFromProvider: handleDecrement,
          handleButtonFromProvider: handleView,
        }}
      >
        <Grid container direction="row">
          <Card
            name="Fancy Product"
            cost1=""
            cost2="$40.00 - $80.00"
            view="View Option"
            action="0"
            star={false}
            unique_Key="1"
            sale={false}
          />
          <Card
            name="Special Item"
            cost1="$20.00"
            cost2="$18.00"
            view={cartName}
            action={AddCrt}
            star={true}
            unique_Key="2"
            sale={true}
          />
          <Card
            name="Sale Item"
            cost1="$50.00"
            cost2="$25.00"
            view={cartName}
            action={AddCrt}
            star={false}
            unique_Key="3"
            sale={true}
          />
          <Card
            name="Popular Item"
            cost1=""
            cost2="$40.00"
            view={cartName}
            action={AddCrt}
            star={true}
            unique_Key="4"
            sale={false}
          />
          <Card
            name="Sale Item"
            cost1="$50.00"
            cost2="$25.00"
            view={cartName}
            action={AddCrt}
            star={false}
            unique_Key="5"
            sale={true}
          />
          <Card
            name="Fancy Product"
            cost1=""
            cost2="$120.00 - $280.00"
            view="View Option"
            action="0"
            star={false}
            unique_Key="6"
            sale={false}
          />
          <Card
            name="Special Item"
            cost1="$20.00"
            cost2="$18.00"
            view={cartName}
            action={AddCrt}
            star={true}
            unique_Key="7"
            sale={true}
          />
          <Card
            name="Popular Item"
            cost1=""
            cost2="$40.00"
            view={cartName}
            action={AddCrt}
            star={true}
            unique_Key="8"
            sale={false}
          />
        </Grid>

        {/* card ko Context.Provider m hi render karna hai */}
      </Context.Provider>
    </div>
  );
}

export default App;
