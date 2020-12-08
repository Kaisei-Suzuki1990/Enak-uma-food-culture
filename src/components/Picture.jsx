import React from "react";
import "../styles/Picture.css";

export default function Picture(props){
    return (
        <div>
            <div className="flagContainer">
                <img src={props.picture[0].foodPic} alt="Indonesian-food" className="pic"></img>
                <img src={props.picture[1].foodPic} alt="Indonesian-food" className="pic"></img>
            </div>
        </div>
    );
}