import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import BodyComponent from "./Components/BodyComponent";
import Card from "./Components/RestoCard";
import { states } from "./utils/constants";

var root = ReactDOM.createRoot(document.querySelector(".root"));


root.render(<>
    <BodyComponent/>
</>);


