import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Container } from "@mui/material";
import ProductList from "src/components/ProductList/ProductList";

function App() {
  return (
      <div className="App">
        <Container sx={{ marginTop: "30px" }}>
          <ProductList />
        </Container>
      </div>
  );
}

export default App;
