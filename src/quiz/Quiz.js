import { createContext, useEffect, useState } from "react";
import Question from "./Question";
import axios from "axios";

export const scoreContext = createContext();

const insertRandom = (arr, itm) => {
  const index = Math.floor(Math.random() * (arr.length + 1));
  arr.splice(index, 0, itm);
};

function Quiz({ type: { no, catagory, difficulty, type } }) {
  const base_url = "https://opentdb.com/api.php?";
  const [score, setScore] = useState(0);
  const url = `${base_url}amount=${no ? no : 10}${
    catagory ? `&catagoty=${catagory}` : ""
  }${difficulty ? `&difficulty=${difficulty}` : ""}${
    type ? `&type=${type}` : ""
  }`;

  // const questions = useAxios(url);
  const [data, setData] = useState({ results: [] });
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(url);
        const text = await response.data;
        for (let i = 0; i < text.results.length; i++) {
          const all_answers = [...text.results[i].incorrect_answers];
          insertRandom(all_answers, text.results[i].correct_answer);
          text.results[i]["all_answers"] = all_answers;
        }
        setData(text);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [url]);
  // return data;
  // useEffect(() => {
  //
  // }, [url]);

  return (
    <div>
      <scoreContext.Provider value={{ score, setScore }}>
        <div>Score:{score}</div>
        {data.results.map((question, i) => {
          return <Question key={i} i={i + 1} question={question} />;
        })}
      </scoreContext.Provider>
    </div>
  );
}

export default Quiz;
