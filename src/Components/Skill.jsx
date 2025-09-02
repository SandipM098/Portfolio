import { useTheme } from "../context/ThemeContext";

const Skill = ({Icon}) => {
    const { theme } = useTheme();
  return (
    <li
      className={`${
        theme === "dark-mode"
          ? "bg-gradient-to-br from-[#000000] via-[#2a2a2a] to-[#2d2d2d] p-2 shadow-lg shadow-slate-500 text-white text-xl"
          : "bg-white p-2 shadow-lg shadow-slate-200 text-black text-xl"
      }  rounded-md`}
    >
      <Icon />
    </li>
  );
};

export default Skill;
