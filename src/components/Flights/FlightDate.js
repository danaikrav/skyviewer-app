import React from "react";

import "./FlightDate.css";

const FlightDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="flight-date">
      <div className="flight-date__month">{month}</div>
      <div className="flight-date__year">{year}</div>
      <div className="flight-date__day">{day}</div>
    </div>
  );
};

export default FlightDate;
