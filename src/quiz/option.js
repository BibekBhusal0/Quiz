import React, { useState } from "react";

function Option({ option, correct_answer }) {
  const [color, setColor] = useState("bg-purple-400");
  const checkAnswer = () => {
    if (option === correct_answer) {
      setColor("bg-green-400");
    } else {
      setColor("bg-red-400");
    }
  };

  return (
    <div
      onClick={checkAnswer}
      className={`px-4 cursor-pointer py-2 ${color} m-3`}>
      {option}
    </div>
  );
}

export default Option;
