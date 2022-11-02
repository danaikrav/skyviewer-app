import React from "react";
import "./NewUser.css";
import UserForm from "./UserForm";

const NewUser = () => {
  return (
    <div  className="new-user">
          <UserForm ></UserForm>
          <button type="submit">Books</button>
    </div>
  );
};

export default NewUser;
