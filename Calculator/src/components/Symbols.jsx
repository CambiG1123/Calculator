import React from 'react'

const Symbols = ({type,handleSymbol}) => {
  const symbolClick = () => {
    handleSymbol(type);
  };

  const className = `border-solid border border-black bg-red-50 hover:scale-105 rounded-3xl w-full md:w-1/3 flex-grow ml-3 md:mr-5 mt-2 text-center ${
    type === '=' ? 'bg-red-300' : '' // Change bg color if type is '='
  }`;
  return (
    <button onClick={symbolClick} className={className}>{type}</button>
     
  )
}

export default Symbols