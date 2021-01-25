import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
/* import { createStore } from "./redux/store";

const store = createStore();
 */

import store from "./redux/store";
const GlobalCSS = createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }

  html {
    font-size:20px;
    height: 100%;
  }
  body {
    height: 100%;
  }

  h2{
    font-size: 30px;
  }

  #root{
    height: 100vh;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalCSS />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
