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
  });
  return (
    <valuesContext.Provider value={{ values, setValues }}>
      <div className="App w-10/12 pt-3 mx-auto">
        {values.playing ? <Quiz type={values} /> : <Home />}
      </div>
    </valuesContext.Provider>
  );
}

export default App;
