import React from "react";
import ApplicationViews from "./ApplicationViews";
import "./ClarityNotesApp.scss";
import NavBar from "./shared/sideNav/sideNav";

const ClarityNotes = (props) => {
  const loggedUserId = sessionStorage.getItem(`logged_in_user`);

  return (
    <>
      <NavBar />
      <ApplicationViews userId={loggedUserId} />
    </>
  );
};

export default ClarityNotes;
