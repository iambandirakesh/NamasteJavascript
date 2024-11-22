import React from "react";
import "./App.css";
import Greet from "./components/Greet";

function App() {
  return (
    <div className="App">
      <Greet status={"success"} />
    </div>
  );
}

export default App;
