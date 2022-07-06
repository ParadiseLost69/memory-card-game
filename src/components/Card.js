import React, { useState } from "react";
import "./Card.css";
import snoopy from "./images/Snoopy.jpg";

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img src={snoopy}></img>
        <h4>Snoopy</h4>
      </div>
    </div>
  );
};

export default Card;
