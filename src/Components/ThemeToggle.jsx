import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={`w-20 h-8 bg-gray-300 ${
        theme === "dark-mode" ? "bg-gray-700" : "bg-slate-300"
      } rounded-full flex items-center border shadow-md`}
    >
      <button
        onClick={toggleTheme}
        className={`bg-red-500 w-1/2 h-full rounded-full text-white shadow-md transform duration-300 ease-in-out ${
          theme === "dark-mode" ? "translate-x-full" : ""
        }`}
      >
        {theme === "light-mode" ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export default ThemeToggle;
