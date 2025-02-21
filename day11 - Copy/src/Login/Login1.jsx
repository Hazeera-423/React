import { createContext, useState } from "react";
import ThemeToggle from "./Login2";

export const ThemeContext = createContext();

export const ThemeProvider = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
     <ThemeToggle/>
    </ThemeContext.Provider>
  );
};
