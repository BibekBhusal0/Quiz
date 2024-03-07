import { createContext, useState } from "react";
import Question from "./Question";
import useAxios from "./getData";

export const scoreContext = createContext();

function Quiz({ type: { no, catagory, difficulty, type } }) {
  const base_url = "https://opentdb.com/api.php?";
  const [score, setScore] = useState(0);
  const url = `${base_url}amount=${no ? no : 10}${
    catagory ? `&catagoty=${catagory}` : ""
  }${difficulty ? `&difficulty=${difficulty}` : ""}${
    type ? `&type=${type}` : ""
  }`;

  const questions = useAxios(url);

  return (
    <div>
      <scoreContext.Provider value={{ score, setScore }}>
        <div>Score:{score}</div>
        {questions.results.map((question, i) => {
          return <Question key={i} i={i + 1} question={question} />;
        })}
      </scoreContext.Provider>
    </div>
  );
}

export default Quiz;
