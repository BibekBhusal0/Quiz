import Question from "./Question";

import useAxios from "./getData";

function Quiz({ type: { no, catagory, difficulty, type } }) {
  // function Quiz() {
  const base_url = "https://opentdb.com/api.php?";
  const url = `${base_url}amount=${no ? no : 10}${
    catagory ? `&catagoty=${catagory}` : ""
  }${difficulty ? `&difficulty=${difficulty}` : ""}${
    type ? `&type=${type}` : ""
  }`;

  const questions = useAxios(url);

  return (
    <div>
      {questions.results.map((question, i) => {
        return <Question key={i} i={i + 1} question={question} />;
      })}
    </div>
  );
}

export default Quiz;
