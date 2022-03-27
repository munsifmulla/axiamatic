import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    // width: "180px",
    height: "200px",
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.15)",
    display: "flex",
    borderRadius: 8,
    position: "relative",
  },
  icon: {
    lineHeight: 1,
    width: "60px",
    heihgt: "60px",
    "& img": {
      width: "100%",
    },
  },
  removeItem: {
    position: "absolute",
    bottom: "15px",
    fontSize: "14px",
    fontWeight: 400,
    color: "#8897a7",
    cursor: "pointer",
    "& span": {
      fontWeight: "bold",
      color: "#f2676b",
    },
  },
}));

const Card = ({ details, removeProduct }) => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.card}
      xs={12}
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <div className={classes.icon}>
        <img src={`/images/${details.image}`} />
      </div>
      <div className={classes.title}>{details.title}</div>
      <div
        className={classes.removeItem}
        onClick={_ => removeProduct(details.id)}
      >
        <span>x</span> Remove
      </div>
    </Grid>
  );
};

export default Card;
