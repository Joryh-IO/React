import React from "react";

var NavigationBar = ()=>{
    return(
        <div className="navbar">
            <h2>RestoBook</h2>
            <div className="search">
                <input type="text" id="textbox" placeholder="search..."></input>
                <div className="dropdown"></div>
                <button>Locality <img src="RestoBook\Assets\1d578bb732e03c6f591790eb7d2d88e2.avif"></img></button>
            </div>
        </div>
    );  
};

export default NavigationBar;