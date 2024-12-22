import React, { useContext } from "react";
import useAxios from "../quiz/getData";
import Options from "./options";
import { valuesContext } from "../App";
import { Slider } from "@nextui-org/slider";
import { Button } from "@nextui-org/button";

function Home() {
  const {
    values: { catagory, difficulty, type, total_questions },
    setValues,
    resetGame,
  } = useContext(valuesContext);
  const catagories = useAxios("https://opentdb.com/api_category.php");

  const noEntertainment = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name.startsWith("Entertainment:")) {
        arr[i].name = arr[i].name.substring("Entertainment:".length).trim();
      }
    }
    return arr;
  };
  const types = [
    { name: "Multiple Choice", id: "multiple" },
    { name: "True/False ", id: "boolean" },
  ];
  const difficulty_levels = [
    { name: "Easy", id: "easy" },
    { name: "Medium", id: "medium" },
    { name: "Hard", id: "hard" },
  ];
  const startGame = () => {
    console.log("starting game");
    setValues((prev) => ({ ...prev, stage: "quiz" }));
    resetGame();
  };

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <h1 className="text-4xl sm:text-5xl pt-4 text-center">Take A Quiz</h1>
      <h1 className="text-3xl sm-text-4xl pt-3 text-center px-4">
        Select the catagory, difficulty and type you like
      </h1>
      <h1 className="text-xl sm-text-4xl pt-3 text-center px-4">
        Note: Value of question can only be between 1 to 50.
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 pt-5 px-2 sm:px-6 sm:pt-10 ">
        <div>
          <Slider
            label="no of questions"
            classNames={{
              label: "text-xl capitalize",
              value: "text-xl",
            }}
            minValue={1}
            maxValue={50}
            value={total_questions}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, total_questions: e }))
            }
          />
        </div>
        <Options
          onChange={handleChange}
          label={"difficulty"}
          opt={difficulty_levels}
          selected={difficulty}
        />
        <Options
          onChange={handleChange}
          selected={type}
          label={"type"}
          opt={types}
        />
        {catagories.trivia_categories && (
          <Options
            onChange={handleChange}
            label={"catagory"}
            selected={catagory}
            opt={noEntertainment(catagories.trivia_categories)}
          />
        )}
      </div>
      <div className="text-center  my-10">
        <Button
          size="lg"
          className="text-2xl font-semibold"
          variant="ghost"
          color="primary"
          onPress={startGame}
          //
        >
          Start
        </Button>
      </div>
    </div>
  );
}

export default Home;
