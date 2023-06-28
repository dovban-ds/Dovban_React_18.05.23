import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import reportWebVitals from "./reportWebVitals.ts";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals(null);
