//Problem Statement:
//Create a UI and functionality that looks exactly like shown in this https://medium.com/womenintechnology/commonly-asked-machine-coding-problem-in-front-end-interviews-e16042ab1e10
//Things To Be Implemented:
//1.The UI should look like shown in the image above with 7 boxes shaped in C shape.
//2.On clicking the box, its color changes to green.
//3.When all boxes are green, they should again go back to the previous color yellow, one by one, by a 1-second delay, in the same order as they were clicked.
import React, { useRef } from "react";

const Boxes = () => {
  const [arr, setArr] = React.useState([]);
  let boxsRef = useRef();
  const [boxes, setBoxes] = React.useState([
    { id: 1, color: false },
    { id: 2, color: false },
    { id: 3, color: false },
    { id: 4, color: false },
    { id: 5, color: false },
    { id: 6, color: false },
    { id: 7, color: false },
  ]);
  const handleClick = (index) => {
    const newBoxes = [...boxes];
    setArr([...arr, index]);
    newBoxes[index].color = true;
    setBoxes(newBoxes);
    console.log(arr);
    console.log(arr.length);
    if (arr.length + 1 === 7) {
      setTimeout(() => {
        Reversehandle([...arr, index]);
      }, 1000);
    }
  };
  const Reversehandle = (list) => {
    let i = 0;
    boxsRef.current = setInterval(() => {
      let newBoxes = [...boxes];
      newBoxes[list[i]].color = false;
      i++;
      setBoxes(newBoxes);
      if (i === 7) {
        setArr([]);
        clearInterval(boxsRef.current);
      }
    }, 1000);
  };
  return (
    <div>
      <h1>Box Container</h1>
      <div className="boxs-container">
        <div className="line1">
          <div
            className={`box ${boxes[0].color ? "colorgreen" : "coloryellow"}`}
            key={0}
            onClick={() => handleClick(0)}
          >
            1
          </div>
          <div
            className={`box ${boxes[1].color ? "colorgreen" : "coloryellow"}`}
            key={1}
            onClick={() => handleClick(1)}
          >
            2
          </div>
          <div
            className={`box ${boxes[2].color ? "colorgreen" : "coloryellow"}`}
            key={2}
            onClick={() => handleClick(2)}
          >
            3
          </div>
        </div>
        <div className="line2">
          <div
            className={`box ${boxes[3].color ? "colorgreen" : "coloryellow"}`}
            key={3}
            onClick={() => handleClick(3)}
          >
            4
          </div>
          <div
            className={`box ${boxes[4].color ? "colorgreen" : "coloryellow"}`}
            key={4}
            onClick={() => handleClick(4)}
          >
            5
          </div>
        </div>
        <div className="line3">
          <div
            className={`box ${boxes[5].color ? "colorgreen" : "coloryellow"}`}
            key={5}
            onClick={() => handleClick(5)}
          >
            6
          </div>

          <div
            className={`box ${boxes[6].color ? "colorgreen" : "coloryellow"}`}
            key={7}
            onClick={() => handleClick(6)}
          >
            7
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
