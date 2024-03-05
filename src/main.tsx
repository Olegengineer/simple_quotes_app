import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render } from "react-dom";
import rootReducer from "./reducers";
import App from "./App";
document.getElementById("root");

const store = createStore(rootReducer);

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
