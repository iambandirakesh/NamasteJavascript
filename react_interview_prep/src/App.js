import "./App.css";
import Accordian from "./components/Accordian";
import Boxes from "./components/Boxes";
import Main from "./components/Pagination";
import QuizApp from "./components/QuizApp";
import Timer from "./components/Timer";
import LearnTailwind from "./components/LearnTailwind";
import TodoApplication from "./components/TodoApplication";
import SliderComponent from "./components/Slider";
function App() {
  return (
    <div className="App">
      {/* <Timer />
      <Accordian />
      <Boxes />
      <QuizApp />
      <Main />
      <LearnTailwind />
      <TodoApplication /> */}
      <SliderComponent />
    </div>
  );
}

export default App;
