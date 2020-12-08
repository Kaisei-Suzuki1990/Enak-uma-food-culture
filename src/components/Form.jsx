import React from "react";
import "../styles/Form.css";

export default function Form(){
    return (
        <div className="container">
            <input type="text" id="text" className="form-control" placeholder="input food / seasoning here" />
            <button className="btn" onClick={() =>{
                const inputFood = document.querySelector("#text");
                const inputFoodValue = document.querySelector("#text").value;
                console.log(inputFoodValue);
                // props.setFoodName(inputFoodValue); 
                inputFood.value = "";
            }}>Serch</button>
        </div>
    );
}