import React from "react";
import EmptyCard from "components/atoms/emptyCard";
import Card from "components/atoms/card";
import { Grid } from "@material-ui/core";

const CardGrid = ({ products, selectedProducts, removeProduct }) => {
  return (
    <Grid container spacing={3} xs={12} justifyContent="center">
      {selectedProducts
        .sort((x, y) => {
          return x.selcted === y.selected ? 0 : x.selected ? -1 : 1;
        })
        .slice(0, 4)
        .map(item =>
          item.selected ? (
            <Grid item xs={6}>
              <Card details={item} removeProduct={removeProduct} />
            </Grid>
          ) : (
            <Grid item xs={6}>
              <EmptyCard />
            </Grid>
          )
        )}
      <p>
        {`${
          selectedProducts.filter(item => item.selected === true).length
        } Products added`}
      </p>
    </Grid>
  );
};

export default CardGrid;
