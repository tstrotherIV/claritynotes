import React from "react";
import "./sessionHome.css";
import { Button, Container, Row, Col } from "reactstrap";

function SessionStep1() {
  let USERNAME = "Chris";
  let FirstName = "John";
  let LastName = "Doe";

  return (
    <>
      <section className="wrapContent mt-5">
        <div className="textWhite m-2 p-2">
          [Patient Name, First] [Patient Name, Last]
        </div>
        <div className="textWhite m-2 p-2">DOB: [Patient DOB]</div>
        <div className="textWhite m-2 p-2">Patient ID: [Patient ID]</div>
        <div className="textWhite m-2 p-2">Existing Patient: [Case #]</div>
      </section>
      <div className="header">
        `
        <h1>
          What would you like to do for {FirstName} {LastName}?
        </h1>
        `
      </div>
      <h4 className="d-flex justify-content-center textWhite">
        Please select an option
      </h4>
      <br></br>
      <section section className="buttonSection mt-5">
        <Button
          className="button"
          color="light"
          // onClick={() => {
          //   props.history.push(`/tourViewer/${props.tour.id}`);
          // }}
        >
          Psychological Evaluation
        </Button>
        <Button
          className="button"
          color="light"
          // onClick={() => {
          //   props.history.push(`/tourViewer/${props.tour.id}`);
          // }}
        >
          Conclusion Report
        </Button>

        <Button
          className="button"
          color="light"
          // onClick={() => {
          //   props.history.push(`/tourViewer/${props.tour.id}`);
          // }}
        >
          Treatment Plan
        </Button>
      </section>
    </>
  );
}

export default SessionStep1;
