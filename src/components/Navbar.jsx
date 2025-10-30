import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const navigate = useNavigate();
  const navItems = ["About", "Skills", "Projects", "Experience", "Achievements", "Contact"];

  return (
    <AppBar position="sticky" color="primary" elevation={1}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" onClick={() => navigate("/")} sx={{ cursor: "pointer" }}>
          Student Portfolio
        </Typography>
        <Box>
          {navItems.map((item) => (
            <Button
              key={item}
              color="inherit"
              onClick={() => navigate(`/${item.toLowerCase()}`)}
            >
              {item}
            </Button>
          ))}
          <ThemeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
