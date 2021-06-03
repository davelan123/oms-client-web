import React from "react";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import Item from "../components/Item";

const useStyles = makeStyles((theme) => ({
  root: {
    // "& > *": {
    //   margin: theme.spacing(1),
    // },
  },
  header: {
    textAlign: "center",
  },
  body: {
    // textAlign: "center",
  },
  order_items: {
    // paddingTop: "30px",
    // height: "200px",
    flexDirection:'row',
    borderColor: "red",
    border: "6px solid",
  },
}));

function ShoppingCart() {
  const classes = useStyles();
  const items = useSelector((state) => state.itemsVault.items);
  return (
    // <div>
    //   {items.map((item) => {
    //     return <Item key={`${item.id}_boughtItems`} item={item} />;
    //   })}
    // </div>

    <div className={classes.root}>
      <div className={classes.header}>
        <h1>Order SIMs & Developer Kits</h1>
      </div>
      <div className={`${classes.body}`}>
        <div className={`${classes.order_items}`}>
          {items.map((item) => {
            return <Item key={`${item.id}_boughtItems`} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
