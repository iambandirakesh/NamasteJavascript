import React, { useContext } from "react";
import { UserContext } from "./Component1";
function Component5() {
  let name = useContext(UserContext);
  console.log(name);
  return <div>{name || "No name Provided"}</div>;
}

export default Component5;
