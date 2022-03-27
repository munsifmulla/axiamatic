import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  emptyCard: {
    // width: "120px",
    height: "200px",
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.15)",
    display: "flex",
    borderRadius: 8,
  },
  addIcon: {
    fontSize: "42px",
    padding: "15px 20px",
    background: "#f7fafc",
    lineHeight: 1,
    borderRadius: 6,
    color: "#a7b8d3",
    fontWeight: "300",
    border: "1px solid #f0f5fa",
  },
}));

const EmptyCard = _ => {
  const classes = useStyles();

  return (
    <Grid
      item
      xs={12}
      className={classes.emptyCard}
      justifyContent="center"
      alignItems="center"
    >
      <div className={classes.addIcon}>+</div>
    </Grid>
  );
};

export default EmptyCard;
