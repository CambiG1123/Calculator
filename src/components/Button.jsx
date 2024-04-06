import React from 'react'

const Button = ({type,handleInput}) => {
  const buttonClick = () => {
    handleInput(type);
  };
  return (
    <button onClick={buttonClick} className="border-solid border border-black bg-red-100 hover:scale-105 rounded-3xl w-2/5 sm:w-1/5 ml-3 sm:mr-5 mt-2 text-center">{type}</button>
  )
}

export default Button