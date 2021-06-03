import React from 'react';
import {makeStyles} from "@material-ui/core";
import ShoppingCart from "../pages/ShoppingCart";

const useStyles = makeStyles((theme) => ({
    root: {
      // backgroundColor: "#fff",
    },
  }));
function Demo2() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ShoppingCart />
        </div>
    )
}

export default Demo2;
