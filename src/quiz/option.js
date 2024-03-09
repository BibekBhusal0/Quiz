import React, { useContext, useState } from "react";
import { enabledContext } from "./Question";
import { valuesContext } from "../App";

function Option({ option, correct_answer }) {
  const [color, setColor] = useState("bg-purple-400");
  const { enabled, disable } = useContext(enabledContext);
  const { increaseSocre } = useContext(valuesContext);
  const checkAnswer = () => {
    if (enabled) {
      if (option === correct_answer) {
        setColor("bg-green-400");
        increaseSocre();
      } else {
        setColor("bg-red-400");
      }
      disable();
    }
  };

  return (
    <div>
      <div
        onClick={checkAnswer}
        className={`px-4 cursor-pointer py-2 ${color} m-3`}>
        {option}
      </div>
    </div>
  );
}

export default Option;
