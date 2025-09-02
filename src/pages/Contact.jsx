import React from 'react'
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
    const { theme } = useTheme();
  return (
    <>
      <div>
        <h2>Have Questions?</h2>
        <br />
        <h2>Contact Me Now</h2>
        <form action="" className="flex gap-2">
          <div className="w-[49%] flex flex-col gap-2">
            <input
              type="text"
              placeholder="Your Name"
              className={`${
                theme === "dark-mode"
                  ? "bg-gradient-to-br from-[#000000] via-[#2a2a2a] to-[#2d2d2d] p-2 shadow-lg shadow-slate-500 text-white text-xl"
                  : "bg-white p-2 shadow-lg shadow-slate-200 text-black text-xl"
              } rounded-md`}
            />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Your Phone" />
          </div>
          <div className="w-[49%]">
            <input type="text" name="" id="" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact