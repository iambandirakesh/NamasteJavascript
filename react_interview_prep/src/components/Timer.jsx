import React, { useRef, useState } from "react";
//Question 1: create a timer using react hooks
const Timer = () => {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef();
  const Start = () => {
    timerRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };
  const Stop = () => {
    clearInterval(timerRef.current);
  };
  const Reset = () => {
    clearInterval(timerRef.current);
    setTimer(0);
  };
  const converter = (time) => {
    let hours = `0${Math.floor(time / 3600)}`.slice(-2);
    let minutes = `0${Math.floor((time % 3600) / 60)}`.slice(-2);
    let seconds = `0${time % 60}`.slice(-2);
    return `${hours}:${minutes}:${seconds}`;
  };
  return (
    <div className="timer-main">
      <div className="timer-container">
        <h1>Timer</h1>
        <h1> {converter(timer)}</h1>
        <div className="btn-container">
          <button onClick={Start}>Start</button>
          <button onClick={Stop}>Stop</button>
          <button onClick={Reset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
