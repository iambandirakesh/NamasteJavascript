import React, { createContext } from "react";
import Component2 from "./Component2";
export let UserContext = createContext();
function Component1() {
  return (
    <div>
      <UserContext.Provider value={"Rakesh Reddy"}>
        <center>
          <h1>UseContext Hook:</h1>
          <Component2 />
        </center>
      </UserContext.Provider>
    </div>
  );
}

export default Component1;
