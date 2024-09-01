import { createContext, useState } from "react";
import "./App.css";
import Quiz from "./quiz/Quiz";
import Home from "./select";
import Footer from "./footer";
import { NextUIProvider } from "@nextui-org/system";

import { ThemeProvider } from "next-themes";

export const valuesContext = createContext();

function App() {
  const [values, setValues] = useState({
    total_questions: 10,
    catagory: undefined,
    difficulty: undefined,
    type: undefined,
    stage: "home",
    score: 0,
  });

  const increaseSocre = () => {
    setValues((prev) => ({ ...prev, score: prev.score + 1 }));
  };
  const resetGame = () => {
    setValues((prev) => ({ ...prev, score: 0 }));
  };
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <div className="App w-full p-6 sm:pt-8 sm:p-0 sm:w-10/12 pt-2 mx-auto bg-default-50">
          <valuesContext.Provider
            value={{
              values,
              setValues,
              increaseSocre,
              resetGame,
            }}>
            {values.stage === "home" ? <Home /> : <Quiz />}
          </valuesContext.Provider>
          <Footer />
        </div>
      </ThemeProvider>
    </NextUIProvider>
  );
}

export default App;
