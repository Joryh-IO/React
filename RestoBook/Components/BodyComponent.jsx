import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const [mainData, setMainData] = useState([]);

var BodyComp = () => {
    var maindata;
    const execute = async () => {
        const api_data = await fetch
        ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const dataSet = await api_data.json();
        maindata = dataSet.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        setMainData(maindata);
        console.log(maindata);
        
    };

    function renderAll(item){
        return(<Card title={info.name} ratings={info.avgRating} duration={info.sla.slaString} />)
    }
};

export default BodyComp;