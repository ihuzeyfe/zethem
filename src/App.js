import Course from "./Course";
import "./App.css";
import { useState } from "react";

function getRandomSayilar() {
  const sayilarArray = [
    "Bir",
    "Iki",
    "Uc",
    "Dort",
    "Bes",
    "Alti",
    "Yedi",
    "Sekiz",
    "Dokuz",
    "On",
  ];

  return sayilarArray[Math.floor(Math.random() * sayilarArray.length)];
}

function App() {
  const [sayilar, setSayilar] = useState([]);

  const handleClick = () => {
    setSayilar([...sayilar, getRandomSayilar()]);
  };

  const sayilarList = sayilar.map((sayilar, index) => {
    return <Course key={index} sayilarName={sayilar} />;
  });

  return (
    <div className="App">
      <button className="appButton" onClick={handleClick}> Rastgele Sayi</button>
      <div className="sayilarList">{sayilarList}</div>
    </div>
  );
}

export default App;
