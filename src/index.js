import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { globalTheme } from "./styles/themes/globalTheme";
import GlobalStyle from "./styles/globalStyles";
import GlobalFonts from "./styles/globalFonts";
import MainStyles from "./styles/mainStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={globalTheme}>
      <MainStyles />
      <GlobalFonts />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
