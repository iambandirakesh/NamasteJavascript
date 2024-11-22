import React, { useState } from "react";
import { Tiger } from "./Tiger";
import { Oreao } from "./Oreao";
type GreetProps = {
  status: "success" | "error" | "Falied";
};
export const Greet = ({ status }: GreetProps) => {
  const [login, Setlogin] = useState<Record<any, any> | null>(null);
  const onClick = () => {
    console.log("onChange");
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const makeLogin = () => {
    Setlogin({ name: "Oreao", age: 20 });
  };
  const makeLogOut = () => {
    Setlogin(null);
  };
  return (
    <div>
      Hey Hello {status}
      <Tiger
        onClick={onClick}
        onChange={onChange}
        styles={{ border: "1px solid black", padding: "1rem" }}
      >
        <Oreao />
      </Tiger>
      <div></div>
    </div>
  );
};

export default Greet;
