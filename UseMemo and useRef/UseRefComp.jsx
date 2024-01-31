import { useState,useRef } from "react";

export default UseRefComp = () => {
  let gg = 0;
  const [state, setState] = useState(0);
  const Refvalue =useRef(0)
  return (
    <div className="border-2 bg-green-400 w-80 ">
    
      <button
        className="bg-white text-slate-900 w-24 h-9 m-3 "
        onClick={() => {
          gg = gg + 1;
          console.log(gg);
        }}
      >
        Increase let
      </button>
      <button
        className="bg-white text-slate-900 w-24 m-4 "
        onClick={() => {
          setState(state + 1);
        }}
      >
        Increase State
      </button>
      <button
        className="bg-white text-slate-900 w-24 m-4 "
        onClick={() => {
            Refvalue.current=Refvalue.current+1;
            console.log("ref value==",Refvalue.current)
        }}
      >
        Increase Ref value
      </button>
      <p>ref value=={Refvalue.current}</p>
      <p>state=={state}</p>
    </div>
  );
};
