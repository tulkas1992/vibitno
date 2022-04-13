import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./app/config/store";
import { normalize } from "react-style-reset";
import { Global } from "@emotion/core";
import { ToastContainer } from "react-toastify";
import { global } from "./index.styles";
import App from "./app/App";
import CloseButton from "./app/common/Toast/CloseButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.min.css";

ReactDOM.render(
  <Provider store={Store}>
    <Global styles={(normalize, global)} />
    <App />
    <ToastContainer closeButton={<CloseButton />} />
  </Provider>,
  document.getElementById("root")
);
