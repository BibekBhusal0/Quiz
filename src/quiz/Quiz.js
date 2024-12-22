import { useContext, useEffect, useState } from "react";
import Question, { QuestionSkeleton } from "./Question";
import axios from "axios";
import { valuesContext } from "../App";
import { Button } from "@nextui-org/button";
import { Home, Search } from "../icons";

const insertRandom = (arr, itm) => {
  const index = Math.floor(Math.random() * (arr.length + 1));
  arr.splice(index, 0, itm);
};

function Quiz() {
  const {
    values: { catagory, type, difficulty, stage, total_questions, score },
    setValues,
  } = useContext(valuesContext);

  const review = () => {
    setValues((prev) => ({
      ...prev,
      stage: stage === "score" ? "home" : "score",
    }));
  };

  const [data, setData] = useState({ results: [] });
  useEffect(() => {
    const base_url = "https://opentdb.com/api.php?";
    var url = `${base_url}amount=${total_questions ? total_questions : 10}${
      catagory ? `&catagoty=${catagory}` : ""
    }${difficulty ? `&difficulty=${difficulty}` : ""}${
      type ? `&type=${type}` : ""
    }`;
    const getData = async () => {
      try {
        const response = await axios(url);
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
  }, [catagory, difficulty, total_questions, type]);

  return (
    <div className="px-2 sm:px-5 flex flex-col items-center">
      {data.results.length === 0
        ? [...Array(total_questions)].map((_, i) => (
            <QuestionSkeleton key={i} />
          ))
        : data.results.map((question, i) => {
            return <Question key={i} i={i + 1} question={question} />;
          })}
      <Button
        onClick={review}
        color="warning"
        size="lg"
        className="text-2xl items-center font-semibold"
        startContent={stage === "quiz" ? <Search /> : <Home />}
        children={stage === "quiz" ? "Review" : "Home"}
      />

      {stage === "score" && (
        <div className="text-3xl mt-5 font-semibold">
          Total Score: {score} / {total_questions}
        </div>
      )}
    </div>
  );
}

export default Quiz;
