import React from "react";
import Button from "./Button";
import { buttonList } from "../Utils/Constants";

const ButtonList = () => {
  return (
    <div className="flex">
      {buttonList.map((item, index) => {
        return <Button key={index} name={item}/>;
      })}
    </div>
  );
};

export default ButtonList;





