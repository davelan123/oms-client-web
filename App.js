import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Container from './Container';
import rootReducer from "./store/reducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <Container></Container>
    </Provider>
  );
}
