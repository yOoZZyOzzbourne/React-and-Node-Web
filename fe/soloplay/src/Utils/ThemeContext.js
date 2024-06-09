import React, { createContext, useContext, useState, useMemo } from "react";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const ThemeContext = createContext();

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          text: {
            primary: mode === "light" ? "#1a1a1a" : "#ffffff", // Ensure colors are correctly set
          },
          background: {
            default: "#f7f6f3",
            paper: "#fff",
          },
        }
      : {
          // palette values for dark mode
          text: {
            primary: "#fff",
            secondary: "#ccc",
          },
          background: {
            default: "#121212",
            paper: "#333",
          },
        }),
  },
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
