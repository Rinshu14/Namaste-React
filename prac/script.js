import React from "react";
import ReactDOM from "react-dom/client";

//JSX code
// const div = (
//   <div>
//     <h1>from div jsx</h1>
//   </div>
// );
//it is not mandatory to put multiple line jsx in Parentheses but it is safe to put in paranthesis
// to avoid javascripts ASI (Automatic semicolon insertion)
// const heading = (
//   <h1 className="H1" id="h1">
//     hii from jsx H1 tag
//   </h1>
// );
const headingElement=<h1 className="headingElement">namste react from heading elemnt</h1>
//console.log(div);
//const root = ReactDOM.createRoot(document.querySelector("#root"));
//root.render(heading)
//Component
// const ChildDiv = () => {
    
//    return( <div className="childDiv">
//     <h1>Namaste React from component from child Div</h1>
//   </div>)

// };

class ChildDiv extends React.Component{
    // constructor(props){
    //     super(props)
    //   console.log(props.name);
    // }
    render(){
        return( <div className="childDiv">
    <h1>Namaste React from component from child Div</h1>
  </div>) 
    }
}





const HeadingComponent = () => (
 
  <div className="parentDiv">
    <ChildDiv />
    {headingElement}
    <h1>Namaste React from component from parent Div</h1>
  </div>
);

const divElement=<div className="divElement"> <HeadingComponent/></div>

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<ChildDiv name={"Rinshu"}/>);
