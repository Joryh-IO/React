import React from "react";
import ReactDOM from "react-dom/client";

//Without using JSX
// var r = React.createElement("div",{className:"title"},
//     React.createElement('h1', {}, "Hello"),
//     React.createElement('h2', {}, "Blue"),
//     React.createElement('h3', {}, "World"),
// );

var Heads = (prop)=>{
    return(
        <>
        <h1>{prop.h1}</h1>
        <h2>{prop.h2}</h2>
        <h3>{prop.h3}</h3>
        </>
    );
}

//Using JSX
var root =ReactDOM.createRoot(document.querySelector(".root"));
var Title = (prop)=>{
    return(
        <div className="title">
            <Heads h1="Hello" h2="Blue" h3="World"></Heads>
        </div>
    );
}
root.render(<Title />);