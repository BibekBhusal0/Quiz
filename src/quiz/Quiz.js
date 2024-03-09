import { useContext, useEffect, useState } from "react";
import Question from "./Question";
import axios from "axios";
import { valuesContext } from "../App";

const insertRandom = (arr, itm) => {
  const index = Math.floor(Math.random() * (arr.length + 1));
  arr.splice(index, 0, itm);
};

function Quiz() {
  const {
    values: { no, catagory, type, difficulty, playing, firstGame, score },
  } = useContext(valuesContext);
  const base_url = "https://opentdb.com/api.php?";
  var url = `${base_url}amount=${no ? no : 10}${
    catagory ? `&catagoty=${catagory}` : ""
  }${difficulty ? `&difficulty=${difficulty}` : ""}${
    type ? `&type=${type}` : ""
  }`;

  const [data, setData] = useState({ results: [] });
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios(url);
        const text = await response.data;
        console.log(text);
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

  return (
    <div className=" px-2 sm:px-5">
      <div className="text-2xl py-3 font-bold">Score : {score} </div>
      {data.results.map((question, i) => {
        return <Question key={i} i={i + 1} question={question} />;
      })}
    </div>
  );
}

export default Quiz;
