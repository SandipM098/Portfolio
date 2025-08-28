import React from 'react'

export const Welcome = () => {
  return (
    <div className="w-100% flex gap-2">
      <div className="w-[59%] py-4">
        <p className="text-slate-600">Welcome to my world</p>
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
        <p className="text-slate-600 text-wrap">
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
      <div className="w-[39%]">Helloss</div>
    </div>
  );
}
