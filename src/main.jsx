// import React from "react";
// import ReactDom from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";

// ReactDom.createRoot(document.getElementById("root")).render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);