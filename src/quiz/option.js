import React, { useContext, useState } from "react";
import { enabledContext } from "./Question";
import { valuesContext } from "../App";

function Option({ option, correct_answer }) {
  const [color, setColor] = useState("bg-purple-300");
  const { enabled, disable } = useContext(enabledContext);
  const {
    increaseSocre,
    values: { firstGame, no, total_questions },
    setTotalQuestions,
    setValues,
    increaseAnswered,
  } = useContext(valuesContext);
  const checkAnswer = () => {
    if (enabled) {
      increaseAnswered();
      if (firstGame === true) {
        setValues((prev) => ({ ...prev, firstGame: false }));
      }
      if (no !== total_questions) {
        setTotalQuestions();
      }
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
    <div
      onClick={checkAnswer}
      className={`px-2 md:px-5 col-span-2 md:col-span-1 text-2xl transition-colors ease-in duration-50 ${
        enabled ? "hover:bg-purple-500" : ""
      } cursor-pointer py-2 ${color} m-3`}>
      {option}
    </div>
  );
}

export default Option;
