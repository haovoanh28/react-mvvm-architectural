import React from "react";

import { observer } from "mobx-react-lite";
import ProductListViewModal from "src/components/ProductList/ProductListViewModel";

import { Button, TextField, Box } from "@mui/material";

interface Props {
  productListViewModel: ProductListViewModal;
}

const ProductListView = ({ productListViewModel }: Props) => {
  return (
      <div>
        <Box mb={4}>

          {
            productListViewModel.getProductList.map(product => (
                <div>{product.name}</div>

            ))
          }
        </Box>
        
        <Box mb={2}>
          <TextField label="Product Name"
                     value={productListViewModel.getProductName}
                     onChange={e => productListViewModel.changeProductName(e.target.value)} />
        </Box>
        
        <Button variant="contained" onClick={() => productListViewModel.addProduct()}>Add new product</Button>
      </div>
  );
};

export default observer(ProductListView);