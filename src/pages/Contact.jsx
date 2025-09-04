// import React from 'react'
import { useTheme } from '../context/ThemeContext';
import Input from '../Components/Input';
// import Button from '../Components/Button';

import { RiWhatsappLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

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
        <br />
        <form action="">
          <div className="flex justify-between">
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
          </div>
          <br />
          <div className="flex justify-center mt-4">
            <button className="cursor-pointer border font-semibold bg-red-500 py-2 px-5 shadow-md shadow-red-300 rounded-md hover:bg-transparent hover:text-red-500 transition-colors hover:border text-white">
              Submit Form
            </button> 
          </div>
        </form>
        <br />
        <div className="flex justify-between">
          <div className="flex flex-col items-center p-10">
            <RiWhatsappLine className="text-green-600 h-10 w-14 mb-2" />
            <p>+21212 32323 32323</p>
            <p>+21212 32323 32323</p>
          </div>
          <div className="flex flex-col items-center p-10">
            <FaLocationDot className="text-purple-800 h-9 w-14 mb-2" />
            <p>Nepal, Kathmandu</p>
            <p>Kageshwori Manohara</p>
            <p>32322</p>
          </div>
          <div className="flex flex-col items-center p-10">
            <MdEmail className="text-red-500 h-10 w-14 mb-2" />
            <p>helloworld@gmail.com</p>
            <p>test112@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact