import React, { useState, useEffect } from "react";
import { TextField, InputAdornment, Grid, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(_ => ({
  chip: {
    display: "block",
    padding: "15px 20px",
    background:
      "linear-gradient(41deg, rgba(95,110,254,1) 0%, rgba(196,103,255,1) 100%)",
    color: "#fff",
    borderRadius: "10px",
    fontWeight: "bold",
    marginBottom: 35,
  },
  title: {
    fontWeight: "bold",
    color: "#22222a",
  },
  description: {
    color: "#363643",
    fontSize: "18px",
    marginBottom: 55,
  },
  searchField: {
    background: "#edf2f6",
    borderRadius: 6,
  },
  list: {
    listStyle: "none",
    margin: 0,
    marginTop: 15,
    padding: 10,
    boxShadow: "0px 0px 5px rgba(0,0,0,0.15)",
    borderRadius: 8,
    position: "absolute",
    width: "100%",
    "& li": {
      padding: "8px 10px",
      cursor: "pointer",
      borderRadius: 8,
      marginBottom: 3,
      "& img": {
        width: 20,
        marginRight: 10,
        display: "inline-block",
        verticalAlign: "middle",
      },
      "&:hover": {
        backgroundColor: "#eaeaea",
      },
      "&.selected": {
        background: "#4b6fff",
        color: "#fff",
      },
    },
  },
}));

const ProductSearch = ({ products, selectedProducts, setProduct }) => {
  const classes = useStyles();
  const [searchedProd, setSearchedProd] = useState([]);

  useEffect(
    _ => {
      setSearchedProd(selectedProducts);
    },
    [selectedProducts]
  );

  const handleSearch = e => {
    const a = selectedProducts.filter(item =>
      item.name.toLowerCase().includes(e.currentTarget.value)
    );
    setSearchedProd(a);
  };

  return (
    <Grid container>
      <span className={classes.chip}>1 of 3</span>
      <Grid item container direction="column">
        <Grid item>
          <Typography variant="h4" className={classes.title}>
            Lets add your internal tools
          </Typography>
        </Grid>
        <Grid item>
          <p className={classes.description}>
            Search to quickly add products your team uses today. You'll be able
            to add as many as you beed later but for now lets add four.
          </p>
        </Grid>
        <Grid style={{ position: "relative" }}>
          <TextField
            id="input-with-icon-textfield"
            className={classes.searchField}
            placeholder="Search for any software"
            fullWidth
            onChange={e => handleSearch(e)}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          {searchedProd.length > 0 && (
            <ul className={classes.list}>
              {searchedProd.map(item => (
                <li
                  className={item.selected === true ? "selected" : ""}
                  onClick={() => setProduct(item.id)}
                >
                  <img src={`/images/${item.image}`} />
                  {item.title}
                </li>
              ))}
            </ul>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ProductSearch;
