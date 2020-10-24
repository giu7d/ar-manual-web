import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import { Routes } from "./routes";
import { Theme } from "./theme";
import GlobalStyle from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
