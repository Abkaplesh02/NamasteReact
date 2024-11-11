const heading = React.createElement(
    "h1",
    {
        id: "heading"
    },
    "What is going on !"
);

// This is creating object

// This takes 3 arguements::: tag, object: to give attributes to tag , content in tag

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// this render method convert heading javascript object or react element onto browser.


const parent = React.createElement(
    "div", {id: "parent"},
    [React.createElement("div",{id: "child"},
        [React.createElement("h1",{id: "h11"}," I am h1 tag"), 
        React.createElement("h2",{id: "h11"}," I am h2 tag")]
    ),

    React.createElement("div",{id: "child2"},
        [React.createElement("h1",{id: "h11"}," I am h1 tag in child2"), 
        React.createElement("h2",{id: "h11"}," I am h2 tag in child2")]
    )
]
)

// JSX :: exists because of this complex structure of react

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);