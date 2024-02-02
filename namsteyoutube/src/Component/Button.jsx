import React from "react";

const Button = ({ name }) => {
  return (
    <div className="bg-slate-300 h-8 rounded-lg px-3 py-1 m-3 text-center  hover:bg-slate-400">
      {name}
    </div>
  );
};

export default Button;
