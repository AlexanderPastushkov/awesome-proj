import React from "react";
import "./index.css";
import store from "./redux/redux-store.js";
// import * as ReactDOM from "react-dom/client";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    {/* создаем контекст где <Provider/>- это родительский компонент, а внутри его дети(consumers) могут получить доступ к store без прокидывания по всей ветке */}
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </HashRouter>
);
