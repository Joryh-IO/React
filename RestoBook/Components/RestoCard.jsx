import React from "react";
import { states } from "../utils/constants";


var Card = (props)=>{
    return(
        <div className="card">
            <img src={props.source}></img>
            <h3>{props.title}</h3>
            <div className="roww">
            <p>⭐{props.ratings}</p>
            <p>{props.duration}</p>
            </div>
            <p>{props.cusines}</p>
        </div>
);
};

export default Card;