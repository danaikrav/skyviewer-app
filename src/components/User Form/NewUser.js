import React from "react";
import "./NewUser.css";
import UserForm from "./UserForm";

const NewUser = () => {
  return (
    <div className="container"><div  className="new-user">
          <UserForm ></UserForm>
          <button type="submit">Books</button>
    </div></div>
  );
};

export default NewUser;
