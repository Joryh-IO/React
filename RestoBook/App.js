import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import BodyComponent from "./Components/BodyComponent";
import NavigationBar from "./Components/NavBarComponent";


var root = ReactDOM.createRoot(document.querySelector(".root"));


root.render(<>
    
    <NavigationBar/>
    <BodyComponent/>
</>);


