import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { LocalStorageDB } from "./components/LocalStorageDB.jsx";

createRoot(document.getElementById("root")).render(
  <LocalStorageDB>
    <App />
  </LocalStorageDB>
);
