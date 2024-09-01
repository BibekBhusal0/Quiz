import React, { useContext, useEffect, useState } from "react";
import { decode } from "html-entities";
import { Radio, RadioGroup } from "@nextui-org/radio";
import { valuesContext } from "../App";

export function Options({ all_options, correct_answer }) {
  const [selected, setSelected] = useState();
  const {
    increaseSocre,
    values: { stage },
  } = useContext(valuesContext);
  const showAns = stage === "score";

  useEffect(() => {
    if (selected === correct_answer && showAns) {
      increaseSocre();
    }
  }, [selected, stage, correct_answer, showAns, increaseSocre]);

  return (
    <RadioGroup
      color="warning"
      value={selected}
      isDisabled={showAns}
      onValueChange={setSelected}
      classNames={{
        wrapper: "grid grid-cols-1 md:grid-cols-2 p-2",
      }}
      //
    >
      {all_options.map((option) => (
        <RadioOptions
          key={option}
          option={option}
          correct_answer={correct_answer}
          showAns={showAns}
        />
      ))}
    </RadioGroup>
  );
}

function RadioOptions({ option, correct_answer, showAns = false }) {
  const correct = correct_answer === option;

  return (
    <Radio
      classNames={{
        label: "text-lg md:text-xl",
        base: [
          "w-10/12 mx-5 my-2 max-w-full rounded-lg gap-3",
          "border-default border-2 data-[selected=true]:border-warning",
          {
            "border-success bg-success-300 bg-opacity-10": correct && showAns,
            "data-[selected=true]:border-danger data-[selected=true]:bg-danger-300 data-[selected=true]:bg-opacity-20":
              !correct && showAns,
            "data-[selected=true]:border-success data-[selected=true]:bg-success-300 data-[selected=true]:bg-opacity-20":
              correct && showAns,
          },
        ],
      }}
      key={option}
      value={option}>
      {decode(option)}
    </Radio>
  );
}
