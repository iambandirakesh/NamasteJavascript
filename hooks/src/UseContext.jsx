import React, { createContext } from "react";
import { useState, useContext } from "react";
function UseContext() {
  const [count, setCount] = useState(0);
  let UserContext = createContext();
  return (
    <UserContext.Provider count={count}>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </UserContext.Provider>
  );
}
export default UseContext;
