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
    <div className="search-form">
      <form>
        <label for="origin"> Origin: </label>
        <select name="origin">
          <option value="default">--- Please select ---</option>
          <option value="bronx">Bronx</option>
          <option value="brooklyn">Brooklyn</option>
          <option value="manhattan">Manhattan</option>
          <option value="queens">Queens</option>
          <option value="statenisland">Staten Island</option>
        </select>
        <label for="destination"> Destination: </label>
        <select onChange={DestinationChangeHandler} name="destination">
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
          <input type="date"></input>
          <input className="hide" id="arrive-date" type="date"></input>
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
