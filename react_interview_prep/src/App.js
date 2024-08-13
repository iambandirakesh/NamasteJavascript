import "./App.css";
import Accordian from "./components/Accordian";
import Boxes from "./components/Boxes";
import QuizApp from "./components/QuizApp";
import Timer from "./components/Timer";
function App() {
  return (
    <div className="App">
      <h1>Interview Prep</h1>
      <Timer />
      <Accordian />
      <Boxes />
      <QuizApp />
    </div>
  );
}

export default App;
