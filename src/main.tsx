import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./i18n";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element not found: #root");

createRoot(rootEl as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
