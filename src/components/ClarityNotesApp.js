import React, { useState } from "react";
import ApplicationViews from "./ApplicationViews";
import "./ClarityNotesApp.scss"

const ClarityNotes = (props) => {
  const isAuthenticated = () => sessionStorage.getItem("loggedUser") !== null;
  const loggedUserId = sessionStorage.getItem("loggedUser");

  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUser = (user) => {
    sessionStorage.setItem("loggedUserId", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };

  // const clearUser = () => {
  //   sessionStorage.clear();
  //   setHasUser(isAuthenticated());
  // };

  return (
    <>
      <ApplicationViews
        hasUser={hasUser}
        setUser={setUser}
        userId={loggedUserId}
      />
    </>
  );
};

export default ClarityNotes;
