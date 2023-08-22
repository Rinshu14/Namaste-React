import React from "react";
import ReactDOM from "react-dom/client";

//react element
const nestedElement = React.createElement(
  "div",
  { id: "parentDiv", class: "title" },
  [
    React.createElement("h1", { id: "child1" }, "heading1"),
    React.createElement("h2", { id: "child2" }, "heading2"),
    React.createElement("h2", { id: "child3" }, "heading3"),
  ]
);

//jsx code
const nestedElementJSX = (
  <div id="parentDiv" className="title">
    <h1 id="child1">heading1</h1>
    <h2 id="child2">heading2</h2>
    <h3 id="child3">heading3</h3>
  </div>
);

//functional component
const PtagComponent=()=>(
<p className="PtagComponent">paragraph tag Component</p>
)

const PtagElement=<p className="PtagElement">paragraph tag element</p>

const FunctionalCompo = () => (
  <div id="parentDiv" className="title">
    <h1 id="child1">heading1</h1>
    <h2 id="child2">heading2</h2>
    <h3 id="child3">heading3</h3>
    <PtagComponent/>
    {PtagElement}
  </div>
);
//nested elemnt and component
const divTag=<div className="ComponentInElemnt"><FunctionalCompo/></div>



const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<FunctionalCompo/>);

const root1 = ReactDOM.createRoot(document.querySelector("#root1"));
root1.render(divTag);
