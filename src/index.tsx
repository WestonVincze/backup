import { render } from "react-dom";

import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <ToastContainer autoClose={2000} />
    <App />
  </Provider>,
  rootElement
);
