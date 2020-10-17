import { Route } from "react-router-dom";
import React from "react";
import Login from "./login/login"
import CreateUser from "./createUser/createUser"
import PatientHomePage from "./patient/patientHome"
import SessionStep1 from "./session/sessionBeggining/sessionHome"

const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  const userId = parseInt(props.userId);

  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={(props) => {
          return <Login setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/createUser"
        render={(props) => {
          return <CreateUser setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/patient"
        render={(props) => {
          return <PatientHomePage setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/sessionStep1"
        render={(props) => {
          return <SessionStep1 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
