import React, { useEffect } from "react";
import assets from "../assets/assets";

const ThemeToggleBtn = ({ theme, setTheme }) => {
  // Initialize theme based on localStorage or system preference
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(theme || (prefersDarkMode ? "dark" : "light"));
  }, []);

  // Apply theme class to document and save to localStorage
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button className="flex items-center justify-center cursor-pointer">
      {theme === "dark" ? (
        <img
          src={assets.sun_icon}
          alt="Light mode"
          onClick={() => setTheme("light")}
          className="w-8 h-8 p-1.5 border border-gray-500 rounded-full"
        />
      ) : (
        <img
          src={assets.moon_icon}
          alt="Dark mode"
          onClick={() => setTheme("dark")}
          className="w-8 h-8 p-1.5 border border-gray-500 rounded-full"
        />
      )}
    </button>
  );
};

export default ThemeToggleBtn;
