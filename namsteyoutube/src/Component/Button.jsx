import React from "react";

const Button = ({ name }) => {
  return (
    <div className="bg-slate-300 h-8 text-sm rounded-2xl px-3 py-1 m-3 flex items-center hover:bg-slate-400">
      {name}
    </div>
  );
};

export default Button;
