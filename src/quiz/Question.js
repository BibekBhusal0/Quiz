import React, { createContext, useState } from "react";
import { decode } from "html-entities";
import Option from "./option";

export const enabledContext = createContext();

function Question({
  i,
  question: { correct_answer, incorrect_answers, question },
}) {
  const insertRandom = (arr, itm) => {
    const index = Math.floor(Math.random() * (arr.length + 1));
    arr.splice(index, 0, itm);
  };

  const [enabled, setEnabled] = useState(true);
  const disable = () => {
    setEnabled(false);
  };

  correct_answer = decode(correct_answer);
  const all_options = [...incorrect_answers];
  insertRandom(all_options, correct_answer);

  return (
    <div>
      <div className="text-3xl">
        {i}: {decode(question)}
      </div>
      <div className="grid grid-cols-2 text-xl px-3 py-1">
        <enabledContext.Provider value={{ enabled, disable }}>
          {all_options.map((ans, index) => {
            return (
              <Option
                key={index}
                correct_answer={correct_answer}
                option={decode(ans)}
              />
            );
          })}
        </enabledContext.Provider>
      </div>
    </div>
  );
}

export default Question;
