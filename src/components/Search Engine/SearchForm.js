import "./SearchForm.css";
//import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import Api from "../../Api";

const SearchForm = () =>{
  const [isChecked, SetIsChecked] = useState(true);
  const [destinations, setDestinations] = useState([]);
  const [origins, setOrigins] = useState([]);
  const [origin, setOrigin] = useState("default");
  const [destination, setDestination] = useState("default");
  const [departDate, setDepartDate] = useState(null);
  const [arriveDate, setArriveDate] = useState(null);
  const [flightInfo, setFlightInfo] = useState({});
  //const navigate = useNavigate();

  useEffect(()  => {
    const getOrigins = async () => {
      try{
        const response = await Api.get("/flights/origins");
      setOrigins(response.data);
      console.log(response.data);
    } catch (err) {
      // Not in the 200 response range
      console.log(err.response.data)
    }
    };
    getOrigins();
  }, []);

  useEffect(()  => {
    const getDestinations = async () => {
      try{
        const response = await Api.get("/flights/origins/"+"Paris"+"");
      setDestinations(response.data);
      console.log(response.data);
    } catch (err) {
      // Not in the 200 response range
      console.log(err.response.data)
    }
    };
    getDestinations();
  }, []);
  
  const originHandler = (event) => {
    setOrigin(event.target.value);
    console.log(origin);
  }

  const destinationHandler = (event) => {
    setDestination(event.target.value);
    if (event.target.value!=="default") {
      document.getElementById("oneway-box").style.display = "block";
    } else {
      document.getElementById("oneway-box").style.display = "none";
    }
    console.log(destination);

  };

  const DatesHandler = (event) => {
    if (event.target.checked) {
      document.getElementById("arrive-date").style.display = "block";
    } else {
      document.getElementById("arrive-date").style.display = "none";
    }
    SetIsChecked((current) => !current);
  };

  const departHandler = (event) => {
    setDepartDate(event.target.value);
    console.log(departDate);

  }

  const arriveHandler = (event) => {
    setArriveDate(event.target.value);
  }

  const sumbitHandler = (event) => {
    event.preventDefault();
    setFlightInfo({origin: origin, destination: destination, departDate: departDate, arriveDate: arriveDate})
    console.log(flightInfo);
    //navigate.push("/");
  }

  return (
    <div>
    <div className="container">
      <form onSubmit={sumbitHandler} className="search-form">
        <label> From: </label>
        <select onChange={originHandler} id="origin" className="input-box" name="origin">
          <option value="default">--- Please select ---</option>
          <option id="1" value={origins[0]}>{origins[0]}</option>
          <option value={origins[1]}>{origins[1]}</option>
          <option value={origins[2]}>{origins[2]}</option>
          <option value={origins[3]}>{origins[3]}</option>
          <option value={origins[4]}>{origins[4]}</option>
        </select>
        <label > To: </label>
        <select
          className="input-box"
          onChange={destinationHandler}
          name="destination"
        >
          <option value="default">--- Please select ---</option>
          <option value={destinations[0]}>{destinations[0]}</option>
          <option value={destinations[1]}>{destinations[1]}</option>
          <option value={destinations[2]}>{destinations[2]}</option>
          <option value={destinations[4]}>{destinations[4]}</option>
          <option value={destinations[5]}>{destinations[5]}</option>
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
            <input onChange={departHandler} className="input-box" type="date" min="2022-11-02"></input>
          </div>

          <div className="hide" id="arrive-date">
            <label>Arrive At:</label>
            <input onChange={arriveHandler} className="input-box" type="date"></input>
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
