import React from "react";
import "../styles/FoodName.css";

export default function FoodName(props){
    return (
        <div>
            <div className="cuisine-container" >
                <div className="cuisine">{props.foodName[0].foodName}</div>
                <div className="cuisine">{props.foodName[1].foodName}</div>
            </div>
        </div>
    );
}