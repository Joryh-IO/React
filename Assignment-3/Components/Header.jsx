import React from "react";
import iim from "../ss.png";
import sse from "../sear.png";



var Header = () =>{
    return(
        <div className="header">
            <h1>Marlboro</h1>
            <div className="input-box">
                <input placeholder={"type..."}/>
                <img src={sse}/>
            </div>
            <div className="far-right">
                <img src={iim}/>
            </div>
        </div>
    );
}



export default Header;