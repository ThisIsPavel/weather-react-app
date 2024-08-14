import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./provider/Theme/index.jsx";
import "./styles/index.scss";
import RequestProvider from "./provider/RequestProvider/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <RequestProvider>
      <App />
    </RequestProvider>
  </ThemeProvider>
);
