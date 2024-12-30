import React from "react";

var NavigationBar = ()=>{

   

    return(
        <div className="navbar">
            <h2>RestoBook</h2>
            <div className="search">
                <input type="text" id="textbox" placeholder="search..."></input>
                <div className="dropdown"></div>
                <button>search</button>
            </div>
        </div>
    );  
};

export default NavigationBar;