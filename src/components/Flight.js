import Card from "./UI/Card";
import React, { useState } from "react";
import FlightDate from "./FlightDate";
import "./Flight.css";

const Flight = (props) => {
  const clickHandler = () => {
    alert("Flight is choosen!");
  };
  return (
    <Card className="flight">
      <FlightDate date={props.date} />
      <div className="flight__info">
        {props.airline}
        {props.flightNum}
        {props.transitTime}
        {props.layover}
        {props.luggage}
        
      </div>

      <div className="flight__price">${props.amount}</div>
      <button onClick={clickHandler}>I want this Flight</button>
    </Card>
  );
};

export default Flight;
