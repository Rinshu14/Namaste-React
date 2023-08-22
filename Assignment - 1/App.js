// const hTag= React.createElement("h1",{id:"heading"},"Hello World");
// const root= ReactDOM.createRoot(document.querySelector("body"));
// root.render(hTag)

// console.log(hTag)

//nested element

{/* <div id="parent1">
    <div id="parent2">
        <h1></h1>
        <h2></h2>
    </div>
</div> */}



const nested = React.createElement("div", { id: "parent1" },
    React.createElement("div", { id: "parent2" },
        [React.createElement("h1", {}, "Heading 1"),
        React.createElement("h2", {}, "Heading 1")]))

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(nested)