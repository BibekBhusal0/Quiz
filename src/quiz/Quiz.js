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
      {/* {questionsFormatted(questions.results)} */}
      {questions.results.map((question, i) => (
        <Question key={i} question={question} />
      ))}
      {/* <Display obj={questions.results} /> */}
    </div>
  );
}

export default Quiz;
