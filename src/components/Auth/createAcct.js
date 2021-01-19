import React, { useState } from "react";
import { Link } from "react-router-dom";
import DataManager from "../../data_module/DataManager";
// import "./login.css";

const CreateAcct = (props) => {
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
  });

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleCreateAcct = (e) => {
    e.preventDefault();
    if (
      credentials.firstName === "" ||
      credentials.lastName === "" ||
      credentials.username === "" ||
      credentials.password === ""
    ) {
      window.alert("Please enter your Login Information below");
    } else {
      const newUser = {
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        username: credentials.username,
        password: credentials.password,
        email: credentials.email,
      };

      DataManager.createNewUser(newUser).then((userFromDb) => {
        sessionStorage.setItem("loggedUser", userFromDb.id);
        sessionStorage.setItem("loggedUserName", userFromDb.firstName);
        let loggedUser = sessionStorage.getItem(`loggedUser`);
        props.setUser(loggedUser);
        props.history.push(`/tours/${userFromDb.id}`);
      });
    }
  };

  return (
    <form onSubmit={handleCreateAcct}>
      <fieldset className="loginFrom center">
        <h4>Create Account</h4>
        <section className="loginAccessSect ">
          <section className="loginCreateAccSect ">
            <div className="logincreateAccBtn">Already have an account?</div>
            <Link to={"/login"}>
              <button className="viewTourBtn gap">Sign In</button>
            </Link>
          </section>
        </section>
        <div className="loginformFields">
          <input
            onChange={handleFieldChange}
            type="text"
            id="firstName"
            placeholder="Enter Your First Name"
            required=""
            autoFocus=""
          />

          <input
            onChange={handleFieldChange}
            type="text"
            id="lastName"
            placeholder="Enter Your Last Name"
            required=""
            autoFocus=""
          />

          <input
            onChange={handleFieldChange}
            type="text"
            id="username"
            placeholder="Enter Username"
            required=""
            autoFocus=""
          />

          <input
            onChange={handleFieldChange}
            type="text"
            id="password"
            placeholder="Enter Password"
            required=""
          />
          <input
            onChange={handleFieldChange}
            type="text"
            id="email"
            placeholder="Enter Email"
            required=""
          />
        </div>
        <button className="signInBtn" type="submit">
          Sign in
        </button>
      </fieldset>
    </form>
  );
};

export default CreateAcct;
