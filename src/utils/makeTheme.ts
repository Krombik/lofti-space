import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const makeTheme = () =>
  createMuiTheme({
    spacing: (factor) => factor * 5,
    typography: {
      fontFamily: "Montserrat",
      h3: {
        fontWeight: "bold",
        lineHeight: 1.2125,
        fontSize: "var(--h3)",
      },
      h2: {
        fontWeight: "bold",
        fontSize: "var(--h2)",
        lineHeight: 1.2125,
      },
      h1: {
        fontWeight: "bold",
        fontSize: "var(--h1)",
        lineHeight: 1.2125,
      },
      body1: {
        fontSize: "var(--body1)",
        lineHeight: 1.2,
      },
      body2: {
        fontSize: "var(--body2)",
        lineHeight: 1.2,
      },
      button: {
        fontSize: "var(--button)",
        lineHeight: 1.1875,
        fontWeight: "bold",
      },
    },
    palette: {
      primary: {
        main: "#d00d2f",
      },
      background: { default: "#F8F8F8", paper: "#fff" },
      text: { primary: "#000" },
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
