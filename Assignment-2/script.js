import React from "react";
import ReactDOM from "react-dom/client";

var root =ReactDOM.createRoot(document.querySelector(".root"));

function BaBa(){
    return(
        <h1>Hello BabaBooye</h1>
    );
}

root.render(<BaBa></BaBa>);