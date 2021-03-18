import React from "react";
import { ThemeProvider } from "styled-components";
import Routes from "./routes";
import GlobalStyle from "./theme/globalStyles";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
