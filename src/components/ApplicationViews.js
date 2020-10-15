import { Route } from "react-router-dom";
import React from "react";
import Login from "./login/login"

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
    </React.Fragment>
  );
};

export default ApplicationViews;
