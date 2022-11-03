import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom"
import "./App.css";
import Header from "./components/UI/Header";
import SearchForm from "./components/Search Engine/SearchForm";
import Flights from "./components/Flights/Flights";
import NewUser from "./components/User Form/NewUser";
import Api from "./Api";

function App () {
  
  


    return (
      <div className="App">
        <Header></Header>
        <SearchForm></SearchForm>
        
        <Flights/>
        <NewUser/>
        
      </div>
    );
}

export default App;
