import React from 'react'
import { useTheme } from '../context/ThemeContext';
import Input from '../Components/Input';

const Contact = () => {
    const { theme } = useTheme();
  return (
    <>
      <div>
        <h2 className="text-center">Have Questions?</h2>
        <div className="flex justify-center my-2">
          <hr className="border-t-4 border-red-600 w-10" />
        </div>
        <h2 className="text-center">Contact Me Now</h2>
        <form action="" className="flex gap-2">
          <div className="w-[49%] flex flex-col gap-2">
            <Input type={"text"} placeholder={"Your Name"} />
            <Input type={"email"} placeholder={"Your email"} />
            <Input type={"text"} placeholder={"Your Phone"} />
          </div>
          <div className="w-full md:w-[49%]">
            <textarea
              placeholder="Your Message"
              className={`${
                theme === "dark-mode"
                  ? "bg-gradient-to-br from-[#000000] via-[#2a2a2a] to-[#2d2d2d] p-2 shadow-lg shadow-slate-500 text-white text-xl"
                  : "bg-white p-2 shadow-lg shadow-slate-200 text-black text-xl"
              } w-full h-full rounded-md`}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact