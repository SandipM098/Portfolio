import React from 'react'
import { useTheme } from '../context/ThemeContext';
const Input = ({type, placeholder}) => {
    const { theme } = useTheme();
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${
        theme === "dark-mode"
          ? "bg-gradient-to-br from-[#000000] via-[#2a2a2a] to-[#2d2d2d] p-2 shadow-lg shadow-slate-500 text-white text-xl"
          : "bg-white p-2 shadow-lg shadow-slate-200 text-black text-xl"
      } rounded-md`}
    />
  );
}

export default Input