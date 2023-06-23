import React from "react";
import ReactDOM from "react-dom";

const fName = "Alvin";
const lName = "Yeboah";
var number = Math.floor(Math.random() * 6);

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>Lucky number is {number}</p>
  </div>,
  document.getElementById("root")
);
