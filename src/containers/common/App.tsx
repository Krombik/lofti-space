import React, { FC, useMemo } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import makeTheme from "utils/makeTheme";
import AppRouter from "router/AppRouter";
import { ThemeProvider } from "styled-components";
import Menu from "containers/common/Menu";
import GlobalStyle from "components/styled/GlobalStyles";

const App: FC = () => {
  const theme = useMemo(() => makeTheme(), []);
  console.log(theme.breakpoints, theme.breakpoints.between("md", "md"));
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyle />
          <Menu />
          <AppRouter />
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default App;
