import { data } from "./data";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = (state, action) => {
  return {
    products: data.products,
  };
};
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
