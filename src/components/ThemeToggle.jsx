import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import useThemeMode from "../hooks/useThemeMode";

export default function ThemeToggle() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
}
