import { Route } from "react-router-dom";
import React from "react";
import Login from "./login/login"
import CreateUser from "./createUser/createUser"
import PatientHomePage from "./patient/patientHome"
import SessionStep1 from "./session/sessionBeggining/sessionHome"
import PsychologicalEvaluation from "./session/psychologicalEvaluation/psychologicalEvaluation"
import PsychologicalEvaluation_family from "./session/psychologicalEvaluation_family/psychologicalEvaluation_family"

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
      <Route
        exact
        path="/psychological_evaluation"
        render={(props) => {
          return <PsychologicalEvaluation setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/psychological_evaluation_family"
        render={(props) => {
          return <PsychologicalEvaluation_family setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
