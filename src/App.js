// import logo from './logo.svg';
import './App.css';
import JPFlag from "./img/Japan.png";
import IDFlag from "./img/Indonesia.png";
import JPpic from "./img/sample.jpg"
import IDpic from "./img/nasi-goreng.jpg";
import React, { useState } from 'react';
import Form from './components/Form.jsx';
import Picture from "./components/Picture.jsx";
import FoodName from "./components/FoodName.jsx";
import Detail from "./components/Detail.jsx";

function App() {
  const sampleDetail = [{
    foodName: "cup noodle",
    foodPic: JPpic,
    RestaurantName: "SEAFOOD",
    address: "Tokyo",
    RestaurantPic: "none",
    comment: "delicous"
  },
  {
    foodName: "nasi-goreng",
    foodPic: IDpic,
    RestaurantName: "sample",
    address: "Indonesia",
    RestaurantPic: "none",
    comment: "Super-nice"
  }
];

  //It is better to define one useState
  const [picture, setPicture] = useState(sampleDetail);
  const [foodName, setFoodName] = useState(sampleDetail);
  const [detail, setDetail] = useState(sampleDetail);

  return (
    <div className="App">
      <h1>〜 Food culture Japanese and Indonesian 〜</h1>
      <Form setPicure={setPicture} setFoodName={setFoodName} setDetail={setDetail} />
      <div className="flagContainer"><img src={JPFlag} alt="JapaneseFlag" className="flag"></img>
      <img src={IDFlag} alt="IndonesianFlag" className="flag"></img></div>
      <Picture picture={picture} />
      <FoodName foodName={foodName}/>
      <Detail detail={detail}/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
