import React from "react";
import "./UserForm.css";

const UserForm = () => {

    const ageHandler = (event) => {
        
        if (event.target.value < 2){
            console.log("Free!")
        }
    }
  return (
    <form className="container">
      <div className="user-form__controls">
        <div className="user-form__control">
          <label>Name</label>
          <input type="text"></input>
        </div>
        <div className="user-form__control">
          <label>Surname</label>
          <input></input>
        </div>
        <div className="user-form__control">
          <label>Nationality</label>
          <input></input>
        </div>
        <div className="user-form__control">
          <label>Identification (NIF or passport)</label>
          <input></input>
        </div>
        <div className="user-form__control">
          <label>Age</label>
          <input onChange={ageHandler}></input>
        </div>
        <div className="user-form__control">
          <label>Bags?</label>
          <input type="checkbox"></input>
        </div>
      </div>
      <div className="user-form__actions">
        <button type="submit">Add Person</button>
      </div>
    </form>
  );
};

export default UserForm;
