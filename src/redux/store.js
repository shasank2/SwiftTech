import { applyMiddleware, compose, createStore } from "redux";
import RootReducer from "./reducers";
import { thunk } from "redux-thunk";

const initialState = {};
const middlewares = [thunk];


export const store = createStore(
    RootReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  );