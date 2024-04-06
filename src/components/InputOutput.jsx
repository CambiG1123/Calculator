import React from "react";
import { useState } from "react";

const InputOutput = ({ currentInput }) => {
  return (
    <div className="flex flex-col justify-center items-end bg-white rounded-3xl w-auto h-14 sm:h-32 md:h-40 ml-3 md:ml-10 mr-3 md:mr-10 mt-14 truncate">
      <span id="outputText" className="text-2xl sm:text-6xl">
        {currentInput}
      </span>
    </div>
  );
};

export default InputOutput;
