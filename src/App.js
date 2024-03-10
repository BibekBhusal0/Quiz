import { createContext, useEffect, useState } from "react";
import "./App.css";
import Quiz from "./quiz/Quiz";
import Home from "./select";
import Footer from "./footer";

export const valuesContext = createContext();

function App() {
  const [values, setValues] = useState({
    no: 10,
    total_questions: 10,
    catagory: undefined,
    difficulty: undefined,
    type: undefined,
    playing: false,
    firstGame: true,
    score: 0,
    answered: 0,
  });

  useEffect(() => {
    console.log(values.answered);
    if (values.answered === values.total_questions && values.playing === true) {
      setValues((prev) => ({ ...prev, playing: false }));
    }
  }, [values]);
  const setTotalQuestions = () => {
    setValues((prev) => ({ ...prev, total_questions: values.no }));
  };
  const increaseSocre = () => {
    setValues((prev) => ({ ...prev, score: prev.score + 1 }));
  };
  const increaseAnswered = () => {
    setValues((prev) => ({ ...prev, answered: prev.answered + 1 }));
  };
  const resetScore = () => {
    setValues((prev) => ({ ...prev, score: 0 }));
  };
  const resetAnswered = () => {
    setValues((prev) => ({ ...prev, answered: 0 }));
  };
  return (
    <div className="App w-full p-4  sm:p-0 sm:w-10/12 pt-3 mx-auto bg-orange-100">
      <valuesContext.Provider
        value={{
          values,
          setValues,
          increaseSocre,
          setTotalQuestions,
          resetScore,
          increaseAnswered,
          resetAnswered,
        }}>
        {values.playing ? <Quiz /> : <Home />}
      </valuesContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
