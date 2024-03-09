import { createContext, useState } from "react";
import "./App.css";
import Quiz from "./quiz/Quiz";
import Home from "./select";

export const valuesContext = createContext();

function App() {
  const [values, setValues] = useState({
    no: 10,
    catagory: undefined,
    difficulty: undefined,
    type: undefined,
    playing: false,
    firstGame: true,
    score: 0,
  });
  const increaseSocre = () => {
    setValues((prev) => ({ ...prev, score: prev.score + 1 }));
  };
  const resetScore = () => {
    setValues((prev) => ({ ...prev, score: 0 }));
  };
  return (
    <valuesContext.Provider
      value={{ values, setValues, increaseSocre, resetScore }}>
      <div className="App w-full p-4  sm:p-0 sm:w-10/12 pt-3 mx-auto bg-orange-100">
        {/* {values.playing ? <Quiz /> : <Home />} */}
        <Quiz />
      </div>
    </valuesContext.Provider>
  );
}

export default App;
