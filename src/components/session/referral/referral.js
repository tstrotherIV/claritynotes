import React from "react";
import { Button } from "reactstrap";
import "./referral.css";

function PsychologicalEvaluationReferral(props) {
  return (
    <section className="fullpage">
      <div className="whiteBGD">
        <section className="centerContent">
          <div className="d-flex justify-content-center mt-5">
            <h1>Psychological Evaluation</h1>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <h2>Reason for Referral</h2>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <div className="centerText">
            [Patient Name, First][Patient Name, Last] is a [Patient Age] year old [Marital Status][Patient Gender] who was referred by the [Referral] for a psychological evaluation to determine [Patient Gender, pronoun] current cognitive, emotional, behavioral, and psychological status and make recommendations as to [Patient Gender, pronoun] ability to protect, provide for, and care for [Patient Gender, pronoun] [Patient Children, Ages] and maintain their placement in [Patient Gender, pronoun] home.
            </div>
          </div>
        </section>
        
        
        <section className="buttonSection mt-5" id="">
          <Button
            color="info"
            className="button"
            onClick={() => {
              props.history.push(`/psychological_evaluation_consent`);
            }}
          >
            Previous
          </Button>
          <Button color="info" className="button">
            Save
          </Button>
          <Button color="info" className="button">
            Submit
          </Button>
          <Button
            color="info"
            className="button"
            onClick={() => {
              props.history.push(`/psychological_evaluation_additional_data`);
            }}
          >
            Next
          </Button>
        </section>
      </div>
    </section>
  );
}

export default PsychologicalEvaluationReferral;
