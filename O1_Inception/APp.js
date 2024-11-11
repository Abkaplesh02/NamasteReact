import React from "react";
import ReactDOM from "react-dom/client";

const root2=ReactDOM.createRoot(document.getElementById("root"));

const HeadingComponent = () =>( 
    <h1>
        <HeadingComponent2/>
        {/* This is component composition */}
        Namaste react Functional component
        </h1>
);

// These both are same of kind

const HeadingComponent2 = () => <p> Namaste react Functional component using mast </p>;

root2.render(<HeadingComponent/>)


const Component1=()=>{
    return (
    <h1>
        What is going on
    </h1>
)}

const Component2=()=>(
    <p>{element1}<Component1/>
    {Component3()}
    This is namaste react course going on </p>
);

const Component3= function(){
    return (

        <h1>
            This is 

        </h1>
        // This simple function to create functional component
    )
};

const element1=(
    <span>This is project start </span>
    
);

const element2=(
    <span>{element1}This is second element</span>
)

root2.render(<Component2/>);







// JSX (Transpiled before it reaches the jS engine):This jsx code is converted into code which JS engine or Browsers can understand then it is sent to js engine.
// Transpiling is done by parcel .through package named babel(Js comiler or transpiler)

// JSX => Babel transpiles it to React.createElement => ReactElement-JsObject => HTMLElement(render)

// const JSXHeading= <h1>This is JSX</h1>
// const root1=ReactDOM.createRoot(document.getElementById("root"));
// root1.render(JSXHeading)






















// React element
// React.createElement=> ReactElement-JsObject => HTMLElement(render)

// const heading =React.createElement("h1",{id:"heading"},"This is my data");
// console.log(heading);
// This is our react element
// This is an object 
// When we render this document on to dom then it becomes HTML document.
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

























// const heading = React.createElement(
//     "h1",
//     {
//         id: "heading"
//     },
//     "What is going on !"
// );

// This is creating object

// This takes 3 arguements::: tag, object: to give attributes to tag , content in tag

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// this render method convert heading javascript object or react element onto browser.
// https://github.com/Abkaplesh02/NamasteReact.git

// const parent = React.createElement(
//     "div", {id: "parent"},
//     [React.createElement("div",{id: "child"},
//         [React.createElement("h1",{id: "h11"}," This is namaste React"), 
//         React.createElement("h2",{id: "h11"}," I am h2 tag")]
//     ),

//     React.createElement("div",{id: "child2"},
//         [React.createElement("h1",{id: "h11"}," I am h1 tag in child2"), 
//         React.createElement("h2",{id: "h11"}," I am h2 tag in child2")]
//     )
// ]
// )

// JSX :: exists because of this complex structure of react

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);