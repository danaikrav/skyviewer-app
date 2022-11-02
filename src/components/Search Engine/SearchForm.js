import "./SearchForm.css";
import { useState } from "react";
function SearchForm() {
  const [isChecked, SetIsChecked] = useState(true);

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

  return (
    <div className="container">
      <form className="search-form">
        <label for="origin"> From: </label>
        <select className="input-box" name="origin">
          <option value="default">--- Please select ---</option>
          <option value="bronx">Bronx</option>
          <option value="brooklyn">Brooklyn</option>
          <option value="manhattan">Manhattan</option>
          <option value="queens">Queens</option>
          <option value="statenisland">Staten Island</option>
        </select>
        <label for="destination"> To: </label>
        <select className="input-box" onChange={DestinationChangeHandler} name="destination">
          <option value="default">--- Please select ---</option>
          <option value="bronx">Bronx</option>
        </select>
        <p> </p>
        <form className="hide" id="oneway-box">
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
          <input className="input-box"   type="date"></input>
          </div>
        </form>
        <p> </p>
        <button className="button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
export default SearchForm;
