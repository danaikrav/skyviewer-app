import "./SearchForm.css";
import { useState } from "react";

const SearchForm = (props)  => {
  const [isChecked, SetIsChecked] = useState(true);
  const [origin, SetOrigin] = useState("");
  
  const originHandler = (event) => {
    document.getElementById('origin').addEventListener('change', function() {
      console.log('You selected: ', this.value);
    });
  }

  const DestinationChangeHandler = (event) => {
    if (event.target.value !== "default") {
      document.getElementById("oneway-box").style.display = "block";
    } else {
      document.getElementById("oneway-box").style.display = "none";
    }
  };

  const DatesHandler = (event) => {
    if (event.target.checked) {
      document.getElementById("arrive-date").style.display = "block";
    } else {
      document.getElementById("arrive-date").style.display = "none";
    }
    SetIsChecked((current) => !current);
  };

  const sumbitHandler = (event) => {
    
  }

  return (
    <div>
    <div className="container">
      <form onSubmit={sumbitHandler} className="search-form">
        <label> From: </label>
        <select onChange={originHandler} id="origin" className="input-box" name="origin">
          <option value="default">--- Please select ---</option>
          <option id="1" value={props.origins[0]}>{props.origins[0]}</option>
          <option value={props.origins[1]}>{props.origins[1]}</option>
          <option value={props.origins[2]}>{props.origins[2]}</option>
          <option value={props.origins[3]}>{props.origins[3]}</option>
          <option value={props.origins[4]}>{props.origins[4]}</option>
        </select>
        <label > To: </label>
        <select
          className="input-box"
          onChange={DestinationChangeHandler}
          name="destination"
        >
          <option value="default">--- Please select ---</option>
          <option value="bronx">Seville</option>
          <option value="bronx">Athens</option>
        </select>
        <p> </p>
        <div className="hide" id="oneway-box">
          <label>Round Trip:</label>
          <input
            onChange={DatesHandler}
            value={isChecked}
            type="checkbox"
          ></input>
          <p> </p>
          <div id="depart-date">
            <label>Depart At:</label>
            <input className="input-box" type="date" min="2022-11-02"></input>
          </div>

          <div className="hide" id="arrive-date">
            <label>Arrive At:</label>
            <input className="input-box" type="date"></input>
          </div>
        </div>
        <p> </p>
        <button className="button" type="submit">
          Search
        </button>
      </form>
    </div></div>
  );
}
export default SearchForm;
