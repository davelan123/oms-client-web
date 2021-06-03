import React from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducer";
import thunk from "redux-thunk";
import ShoppingCart from "./pages/ShoppingCart";
import {makeStyles} from "@material-ui/core";

const store = createStore(rootReducer, applyMiddleware(thunk));
const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#fff",
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      {/* <Container></Container> */}
      <div className={classes.root}>
        <ShoppingCart />
      </div>
    </Provider>
  );
}
