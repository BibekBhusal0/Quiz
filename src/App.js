import "./App.css";
import Quiz from "./quiz/Quiz";

function App() {
  const type = { no: 11, catagory: 17, difficulty: "easy", type: undefined };
  return (
    <div className="App w-10/12 pt-3 mx-auto">
      <Quiz type={type} />
    </div>
  );
}

export default App;
