import React from "react";
import "../styles/Detail.css";

export default function Detail(props){
    return (
        <div className="detailContainer">
            <div>
                <div>{props.detail[0].RestaurantName}</div>
                <div>{props.detail[0].address}</div>
                <div>{props.detail[0].RestaurantPic}</div>
                <div>{props.detail[0].comment}</div>
            </div>
            <div>
                <div>{props.detail[1].RestaurantName}</div>
                <div>{props.detail[1].address}</div>
                <div>{props.detail[1].RestaurantPic}</div>
                <div>{props.detail[1].comment}</div>
            </div>
        </div>
    );
}