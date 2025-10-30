import { createTheme } from "@mui/material/styles";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: { main: "#1976d2" },
          background: { default: "#fafafa", paper: "#fff" },
        }
      : {
          primary: { main: "#90caf9" },
          background: { default: "#121212", paper: "#1e1e1e" },
        }),
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h4: { fontWeight: 700 },
    body1: { lineHeight: 1.7 },
  },
});

export const createAppTheme = (mode) => createTheme(getDesignTokens(mode));
