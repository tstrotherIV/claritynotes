import React, { useState } from "react";
import ApplicationViews from "./ApplicationViews";
import "./ClarityNotesApp.scss";
import NavBar from "./shared/sideNav/sideNav";

const ClarityNotes = (props) => {

  const loggedUserId = 107;

  return (
    <>
      <NavBar />
      <ApplicationViews
        // hasUser={hasUser}
        // setUser={setUser}
        userId={loggedUserId}
      />
    </>
  );
};

export default ClarityNotes;
