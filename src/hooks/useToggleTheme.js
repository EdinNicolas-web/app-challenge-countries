import { useState, useEffect } from "react";

export const useToggleTheme = () => {
  const themeSaved = window.localStorage.getItem("theme");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    themeSaved && setTheme(themeSaved);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
      return;
    }
    window.localStorage.setItem("theme", "light");
    setTheme("light");
  };
  return [theme, toggleTheme];
};
