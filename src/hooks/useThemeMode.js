import { useState, useMemo, useEffect } from "react";
import { createAppTheme } from "../theme/theme";

export default function useThemeMode() {
  const [mode, setMode] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const theme = useMemo(() => createAppTheme(mode), [mode]);
  const toggleTheme = () => setMode((prev) => (prev === "light" ? "dark" : "light"));

  return { theme, mode, toggleTheme };
}
