import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";

import CardGrid from "components/molecules/cardGrid";
import SearchProduct from "components/molecules/productSearch";

import products from "data";

const App = () => {
  const createSelectionProductsMap = _ =>
    products.map(item => ({ ...item, ...{ selected: false } }));
  const [productItems, setProductItems] = useState(createSelectionProductsMap);

  const setProduct = id => {
    let a = productItems.map(item =>
      item.id === id ? { ...item, ...{ selected: true } } : item
    );
    // console.log(a);
    setProductItems(a);
  };

  const removeProduct = id => {
    let a = productItems.map(item =>
      item.id === id ? { ...item, ...{ selected: false } } : item
    );
    // console.log(a);
    setProductItems(a);
  };

  useEffect(_ => {}, [productItems]);

  return (
    <Grid
      container
      xs={12}
      sm={12}
      md={12}
      lg={9}
      justifyContent="center"
      spacing={3}
    >
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <CardGrid
          products={products}
          selectedProducts={productItems}
          removeProduct={removeProduct}
        />
      </Grid>
      <Grid item sm={12} md={6} lg={6}>
        <SearchProduct
          products={products}
          selectedProducts={productItems}
          setProduct={setProduct}
        />
      </Grid>
    </Grid>
  );
};

export default App;
