import React from 'react'
import { useTheme } from "../context/ThemeContext";

export const Welcome = () => {
  const { theme } = useTheme();
  return (
    <div className="w-100% flex justify-between">
      <div className="w-[59%] py-8">
        <p className="text-slate-400">Welcome to my world</p>
        <br></br>
        <h1 className="text-5xl tracking-wide mb-2">
          Hi, I'm <span className="text-red-500">Sandip Magar</span>
        </h1>
        <h3 className="text-3xl mb-2">
          {" "}
          <span className="text-red-500">a</span> Professional FullStack
        </h3>
        <h2 className="text-4xl text-red-500">Developer</h2>
        <br></br>
        <br />
        <p className="text-slate-400 text-wrap">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
          facere inventore quisquam! Aut itaque magnam fuga in sint
          necessitatibus
        </p>
        <br />
        <br />
        <br />
        <br />
        <div className="flex justify-between">
          <div>
            <p>FIND WITH ME</p>
            <ul className="flex gap-3">
              <li>Aa</li>
              <li>Aa</li>
              <li>Aa</li>
            </ul>
          </div>
          <div className="mr-20">
            <p>BEST SKILL ON</p>
            <ul className="flex gap-3">
              <li>Aa</li>
              <li>Aa</li>
              <li>Aa</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative w-[39%] h-[493px]">
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
          className="relative z-10 object-fit justify-self-center h-[468px]"
        />
      </div>
    </div>
  );
}
