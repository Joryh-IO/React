import React from "react";
import { states } from "../utils/constants";
import { imgPath } from "../utils/constants";

var Card = (props)=>{
    return(
        <div className="card">
            <img src={imgPath+props.source}></img>
            <h3>{props.title}</h3>
            <div className="roww">
            <p>⭐{props.ratings}</p>
            <p>{props.duration}</p>
            </div>
            <p id="finalP">{props.cusines.join(" ,")}</p>
        </div>
);
};

export default Card;