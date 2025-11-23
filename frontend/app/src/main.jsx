import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/sass/main.scss";
import Router from "./Router.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>
);
