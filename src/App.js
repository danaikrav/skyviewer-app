import React, { Component } from "react";
import "./App.css";
import Header from "./components/UI/Header";
import SearchForm from "./components/Search Engine/SearchForm";
import Flights from "./components/Flights/Flights";
import NewUser from "./components/User Form/NewUser";

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

class App extends Component {
  state = {
    origins: [],
  };

  constructor() {
    super();
    this.getOrigins();
  }

  getOrigins = async () => {
    let data = await api.get("/flights/origins").then(({ data }) => data);
    this.setState ({ origins: data })

  };

  render() {
    return (
      <div className="App">
        <Header></Header>
        <SearchForm
          origins={this.state.origins.map((origin) => (
            <h2>{origin}</h2>
          ))}
        ></SearchForm>
        <Flights id="hide"/>
        <NewUser id="hide"/>
      </div>
    );
  }
}

export default App;
