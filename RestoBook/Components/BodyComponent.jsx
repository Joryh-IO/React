import React, { useEffect, useState } from "react";
import Card from "./RestoCard";
import Shimmer from "./shimmer";

var BodyComp = () => {
    useEffect( () =>{
        execute();
    },[]);
    const [mainData, setMainData] = useState([]);
    var maindata;
    
    const execute = async () => {
        const api_data = await fetch
        ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const dataSet = await api_data.json();
        maindata = dataSet.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        setMainData(maindata);
        console.log(maindata);
        
    };
    function renderAll(RestInfo){
        return(<Card title={RestInfo.info.name} 
            ratings={RestInfo.info.avgRating} 
            duration={RestInfo.info.sla.slaString} 
            source={RestInfo.info.cloudinaryImageId}
            cusines={RestInfo.info.cuisines}/>);
    }

    return(
        <div className="container">
        {mainData.map(renderAll)}
        </div>
    );
};

export default BodyComp;