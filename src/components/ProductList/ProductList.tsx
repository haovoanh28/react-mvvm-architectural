import React, { useEffect } from "react";

import ProductListView from "src/components/ProductList/ProductListView";
import ProductListViewModel from "src/components/ProductList/ProductListViewModel";

import { ProductType } from "src/types/product.type";

const ProductList = () => {
  const productListViewModel = new ProductListViewModel();

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/comments").then(res => res.json()).then((res: ProductType[]) => {
    //   productListViewModel.overwriteProductList(res);
    // });
  }, []);

  return (
      <>
        <ProductListView productListViewModel={productListViewModel} />
      </>
  );
};

export default ProductList;