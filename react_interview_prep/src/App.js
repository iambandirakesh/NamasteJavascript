import "./App.css";
import Accordian from "./components/Accordian";
import Boxes from "./components/Boxes";
import Main from "./components/Pagination";
import QuizApp from "./components/QuizApp";
import Timer from "./components/Timer";
import LearnTailwind from "./components/LearnTailwind";
import TodoApplication from "./components/TodoApplication";
function App() {
  return (
    <div className="App">
      <h1>Interview Prep</h1>
      <Timer />
      <Accordian />
      <Boxes />
      <QuizApp />
      <Main />
      <LearnTailwind />
      <TodoApplication />
    </div>
  );
}

export default App;
