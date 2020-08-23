import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const makeTheme = () =>
  createMuiTheme({
    spacing: (factor) => factor * 5,
    typography: {
      fontFamily: "Montserrat",
      h3: {
        fontWeight: "bold",
      },
      h2: {
        fontWeight: "bold",
        fontSize: undefined,
        lineHeight: 1.2125,
      },
      h1: {
        fontWeight: "bold",
        fontSize: undefined,
        lineHeight: 1.2125,
      },
      overline: {
        fontSize: "40px",
        lineHeight: 1.225,
        fontWeight: "bold",
        textTransform: "inherit",
      },
      body1: {
        fontSize: undefined,
        lineHeight: 1.2,
      },
      button: {
        fontSize: "16px",
        lineHeight: 1.1875,
        fontWeight: "bold",
      },
    },
    palette: {
      primary: {
        main: "#d00d2f",
      },
      secondary: {
        main: "#D6304D",
      },
    },
    overrides: {
      MuiButton: {
        root: {
          borderRadius: undefined,
        },
      },
    },
  });

export default makeTheme;
