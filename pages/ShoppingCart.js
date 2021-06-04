import React from "react";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import Item from "../components/Item";
import OrderSummary from "../components/OrderSummary";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  header: {
    textAlign: "center",
  },
  body: {
    // textAlign: "center",
    // padding:"20 px"
  },
  order_items: {
    // paddingTop: "30px",
    // height: "200px",
    paddingTop: "50px",
    paddingBottom: "50px",
    flexDirection:'row',
  },
}));

function ShoppingCart() {
  const classes = useStyles();
  const items = useSelector((state) => state.itemsVault.items);
  return (
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
        <div className={classes.order_summary}>
          <OrderSummary items={items}/>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
