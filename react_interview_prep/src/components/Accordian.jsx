import React from "react";
import { useState } from "react";
const Accordian = () => {
  const Accordians = [
    { name: "Accordian 1", content: "Content 1", display: false },
    { name: "Accordian 2", content: "Content 2", display: false },
    { name: "Accordian 3", content: "Content 3", display: false },
    { name: "Accordian 4", content: "Content 4", display: false },
    { name: "Accordian 5", content: "Content 5", display: false },
  ];
  const [data, setData] = useState([...Accordians]);
  const handledisplay = (index) => {
    const newData = data.map((item, idx) => {
      if (item.display) {
        item.display = false;
      }
      if (idx === index) {
        item.display = !item.display;
      }
      return item;
    });
    setData(newData);
  };
  return (
    <div className="accordian-container">
      <h1>Accordian</h1>
      <div className="accordians">
        {data.map((accordian, idx) => {
          return (
            <div className="accordian" onClick={() => handledisplay(idx)}>
              <span>{accordian.name}</span>
              {accordian.display ? <div>{accordian.content}</div> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordian;
