import React from "react";
import {
  Box,
  Tab,
  Tabs,
  Typography,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { useTheme, ThemeProvider } from "./Utils/ThemeContext";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Games from "./Games/Games";
import Developers from "./Developers/Developers";
import GameDetail from "./Games/GameDetail";
import Home from "./Home/Home";

function App() {
  const { mode, toggleTheme } = useTheme();
  const label = mode === "dark" ? "Dark Mode" : "Light mode";

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Tabs aria-label="Main Tabs">
          <Tab label="Home" to="/" component={Link} />
          <Tab label="Games" to="/games" component={Link} />
          <Tab label="Developers" to="/developers" component={Link} />
        </Tabs>
        <FormControlLabel
          control={<Switch checked={mode === "dark"} onChange={toggleTheme} />}
          label={label}
          sx={{ marginRight: 2 }}
        />
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/:gameSlug" element={<GameDetail />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="*" element={<Games />} />
      </Routes>
      <Box
        component="footer"
        sx={{
          p: 2,
          textAlign: "center",
          mt: "auto",
        }}
      >
        <Typography variant="body2" color="text.primary">
          © Martin Ficek - VŠB-FEI - FIC0027
        </Typography>
      </Box>
    </Box>
  );
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default WrappedApp;
