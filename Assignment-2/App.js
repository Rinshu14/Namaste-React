import React from "react"
import ReactDOM from "react-dom/client";


const nested = React.createElement("div", { id: "parent1" },
    React.createElement("div", { id: "parent2" },
        [React.createElement("h1", {}, "Heading 1"),
        React.createElement("h2", {}, "Heading 1")]))

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(nested)
