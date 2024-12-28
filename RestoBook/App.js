import React from "react";
import ReactDOM from "react-dom/client";
import BodyComponent from "./Components/BodyComponent";
import Card from "./Components/RestoCard";
import { states } from "./utils/constants";

var root = ReactDOM.createRoot(document.querySelector(".root"));

// function ren(asd){
//     return <Card name={asd} text={asd}/>
// }

// root.render(<>
//     {states.map(ren)}
// </>);

var maindata;
const execute = async () => {
    const api_data = await fetch
    ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const dataSet = await api_data.json();
    maindata = dataSet.data.cards;
    console.log(maindata);
    
};
execute();




