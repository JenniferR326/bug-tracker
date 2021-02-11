import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import App from "./App";

//Reducers
import authReducer from "./controllers/redux/authSlice";
import bugReducer from "./controllers/redux/bugSlice";
import userReducer from "./controllers/redux/userSlice";

//Redux Configure
const reducer = combineReducers({
  auth: authReducer,
  bugs: bugReducer,
  user: userReducer,
});

const store = configureStore({
  reducer
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
