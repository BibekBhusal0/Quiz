import React from "react";
import { decode } from "html-entities";
import Option from "./option";

function Question({
  question: { correct_answer, incorrect_answers, question },
}) {
  const insertRandom = (arr, itm) => {
    const index = Math.floor(Math.random() * (arr.length + 1));
    if (index < arr.length) {
      const temp = arr[index];
      arr[index] = itm;
      arr.push(temp);
    } else {
      arr.push(itm);
    }
  };

  correct_answer = decode(correct_answer);
  const all_options = [...incorrect_answers];
  insertRandom(all_options, correct_answer);

  return (
    <div>
      <div className="text-3xl">{decode(question)}</div>
      <div className="grid grid-cols-2 text-xl px-3 py-1">
        {all_options.map((ans, index) => {
          return (
            <Option
              key={index}
              correct_answer={correct_answer}
              option={decode(ans)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Question;
