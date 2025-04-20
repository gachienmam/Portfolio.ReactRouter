import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={"light:bg-gray-100 light:text-gray-900 dark:bg-gray-800 dark:text-white"}
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </Button>
  );
}
