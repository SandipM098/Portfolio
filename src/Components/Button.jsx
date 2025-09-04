import React from 'react'

const Button = ({Name}) => {
  return (
    <button className="cursor-pointer border font-semibold bg-red-500 py-2 px-5 shadow-md shadow-red-300 rounded-md hover:bg-transparent hover:text-red-500 transition-colors hover:border text-white">
      {Name}
    </button>
  );
}

export default Button