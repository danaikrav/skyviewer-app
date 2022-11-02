import Card from "../UI/Card";
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
        <h2>Airline: {props.airline}</h2>
        <h2>Flight Number: {props.flightNum}</h2>
      </div>
      <div className="flight__info">
        <h2>Transit Time: {props.transitTime}</h2>
        <h2>Layovers: {props.layover}</h2>
      </div>

      <div className="flight__info">
        <h2>luggage: {props.luggage}</h2>
      </div>

      <div className="flight__info">
        <div className="flight__price">${props.amount}</div>
        <button className="flight__button" onClick={clickHandler}>
          Book
        </button>
      </div>
    </Card>
  );
};

export default Flight;
