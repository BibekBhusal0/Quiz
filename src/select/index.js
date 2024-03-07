import React, { useContext } from "react";
import useAxios from "../quiz/getData";
import Options from "./options";
import { valuesContext } from "../App";

function Home() {
  const { values, setValues } = useContext(valuesContext);
  console.log(values);
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
  };

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <h1 className="text-4xl text-center">Take a Quiz </h1>
      <h1 className="text-3xl text-center">Select the catagory you like </h1>
      <br />
      <input
        onChange={handleChange}
        value={values.no}
        autoFocus
        type="Number"
        name="no"
        min={1}
        max={50}
        id="no"
      />
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
      <button onClick={startGame}> Start </button>
    </div>
  );
}

export default Home;
