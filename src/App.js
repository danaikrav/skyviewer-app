import React, { useEffect, useState } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/UI/Header";
import SearchForm from "./components/Search Engine/SearchForm";
import Flights from "./components/Flights/Flights";
import NewUser from "./components/User Form/NewUser";
import Api from "./Api";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route exact path="/search" element={<SearchForm />}></Route>
        <Route exact path="/user" element={<NewUser />}></Route>
      </Routes>
    </div>
  );
}

export default App;
