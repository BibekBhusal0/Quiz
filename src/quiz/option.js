import React, { useContext, useState } from "react";
import { enabledContext } from "./Question";

function Option({ option, correct_answer }) {
  const [color, setColor] = useState("bg-purple-400");
  const { enabled, disable } = useContext(enabledContext);
  const checkAnswer = () => {
    if (enabled) {
      if (option === correct_answer) {
        setColor("bg-green-400");
      } else {
        setColor("bg-red-400");
      }
      disable();
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
