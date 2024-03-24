import React from "react";
import Button from "./Button";
import { buttonList } from "../Utils/Constants";

const ButtonList = () => {
  return (
    <div className="w-screen h-[9%] md:h-[10%]  bg-sky-50 flex overflow-x-scroll   ">
      {buttonList.map((item, index) => {
        return <Button key={index} name={item}/>;
      })}
    </div>
  );
};

export default ButtonList;





