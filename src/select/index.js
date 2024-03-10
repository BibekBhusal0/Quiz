import React, { useContext } from "react";
import useAxios from "../quiz/getData";
import Options from "./options";
import { valuesContext } from "../App";

function Home() {
  const {
    values: { no, firstGame, total_questions, score },
    setValues,
    resetScore,
    resetAnswered,
  } = useContext(valuesContext);
  const catagories = useAxios("https://opentdb.com/api_category.php");

  const noEntertainment = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name.startsWith("Entertainment:")) {
        arr[i].name = arr[i].name.substring("Entertainment:".length).trim();
      }
      // console.log(arr[i]);
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
    { name: "hard", id: "hard" },
  ];
  const startGame = () => {
    setValues((prev) => ({ ...prev, playing: true }));
    resetScore();
    resetAnswered();
  };

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      {firstGame ? (
        ""
      ) : (
        <h1 className="text-4xl sm:text-5xl pt-4 text-center font-semibold">
          Your score was {score}/{total_questions}
        </h1>
      )}
      <h1 className="text-4xl sm:text-5xl pt-4 text-center">
        {firstGame ? "Take a Quiz" : "Try Again"}
      </h1>
      <h1 className="text-3xl sm-text-4xl pt-3 text-center px-4">
        Select the catagory, difficulty and type you like
      </h1>
      <h1 className="text-xl sm-text-4xl pt-3 text-center px-4">
        Note: Value of question can only be between 1 to 50.
      </h1>
      <div className=" grid grid-cols-4 gap-3 pt-5 px-2 sm:px-6 sm:pt-10 ">
        <div className=" col-span-4 sm:col-span-2 xl:col-span-1 ">
          <label className="text-lg pr-4" htmlFor="no">
            Questions
          </label>
          <input
            onChange={handleChange}
            value={no}
            autoFocus
            type="Number"
            name="no"
            min={1}
            max={50}
            id="no"
          />
        </div>
        <Options
          onChange={handleChange}
          label={"difficulty"}
          opt={difficulty_levels}
        />
        <Options onChange={handleChange} label={"type"} opt={types} />
        {catagories.trivia_categories ? (
          <Options
            onChange={handleChange}
            label={"catagory"}
            opt={noEntertainment(catagories.trivia_categories)}
          />
        ) : (
          ""
        )}
      </div>
      <br />
      <div className="text-center pb-4">
        <button
          className="mx-auto px-4 py-2 font-semibold rounded-lg transition-all ease-out duration-300 text-xl bg-transparent border-2 border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 "
          onClick={startGame}>
          Start
        </button>
      </div>
    </div>
  );
}

export default Home;
