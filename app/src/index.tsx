import React from "react";
import { createRoot } from "react-dom/client";
import App from "./ts/App";
import "./styles/style.scss";

const root = createRoot(document.getElementById("root") as Element);

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
