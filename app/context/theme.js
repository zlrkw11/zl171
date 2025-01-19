"use client";
import { createContext, useContext, useState, useEffect } from "react";
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    return setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
