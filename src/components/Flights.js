import React, { useState } from "react";

import Flight from "./Flight";
import Card from "./UI/Card";
//import FlightsFilter from './FlightsFilter';
import "./Flights.css";

const Flights = (props) => {
  // const [filteredYear, setFilteredYear] = useState('2020');

  //const filterChangeHandler = selectedYear => {
  //setFilteredYear(selectedYear);<FlightsFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
  //};

  const flights = [
    {
      date: new Date(2022, 12, 14),
      airline: "Aegean",
      flightNo: 4357879,
      transitTime: 1.5,
      layover: 1,
      luggage: true,
      amount: 144.34,
    },
    {
      date: new Date(2022, 11, 4),
      airline: "Aegean",
      flightNo: 12634,
      transitTime: 4,
      layover: 2,
      luggage: true,
      amount: 105,
    },
    {
      date: new Date(2022, 12, 14),
      airline: "Ryanair",
      flightNo: 48765454,
      transitTime: 2,
      layover: 1,
      luggage: true,
      amount: 68,
    },
    {
      date: new Date(2022, 12, 14),
      airline: "Danai Air",
      flightNo: 45236432,
      transitTime: 0,
      layover: 0,
      luggage: true,
      amount: 213.5,
    },
  ];

  return (
    <div>
      <Card className="flights">
        <Flight
          date={flights[0].date}
          airline={flights[0].airline}
          flightNo={flights[0].flightNo}
          transitTime={flights[0].transitTime}
          layover={flights[0].layover}
          luggage={flights[0].Luggage}
          amount={flights[0].amount}
        />
        <Flight
          date={flights[1].date}
          airline={flights[1].airline}
          flightNo={flights[1].flightNo}
          transitTime={flights[1].transitTime}
          layover={flights[1].layover}
          luggage={flights[1].Luggage}
          amount={flights[1].amount}
        />
      </Card>
    </div>
  );
};

export default Flights;
