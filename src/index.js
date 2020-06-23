import React from "react";
import ReactDOM from "react-dom";
import Home from "./screens/Home";
import './fonts.css'
import {Provider} from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("root")
);