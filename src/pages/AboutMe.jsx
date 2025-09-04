import Button from "../Components/Button";
import { useTheme } from "../context/ThemeContext";

const AboutMe = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className="w-100% flex justify-between items-center">
        <div className="relative w-[39%] h-[425px]">
          <div
            className={`absolute inset-0 mt-6 ${
              theme === "dark-mode"
                ? "bg-gradient-to-br from-[#000000] via-[#444444] to-[#555]shadow-sm shadow-[#444]"
                : "bg-gradient-to-br from-[#eeeded] via-[#e7e7e7] to-[#fff] shadow-sm rounded-md shadow-[#f0efe2]"
            } h-[90%]`}
          ></div>
          <img
            src="\image.png"
            alt="Person in black shirt"
            className="relative z-10 mt-[57px] object-fit justify-self-center h-[350px]"
          />
        </div>

        <div className="w-[59%]">
          <br></br>
          <h3 className="text-2xl tracking-wide mb-2">Who I Am?</h3>
          <p className="text-slate-400 text-wrap">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            facere inventore quisquam! Aut itaque magnam fuga in sint
            necessitatibus
          </p>
          <br />
          <p className="text-slate-400 text-wrap">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            facere inventore quisquam! Aut itaque magnam fuga in sint
            necessitatibus
          </p>
          <br />
          <Button Name={'Download PDF'}/>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
