import React from "react";
import { Label, Input, Button } from "reactstrap";
import "./consent.css";

function PsychologicalEvaluationConsent(props) {
  return (
    <section className="fullpage">
      <div className="whiteBGD">
        <section className="centerContent">
          <div className="d-flex justify-content-center mt-5">
            <h1>Psychological Evaluation</h1>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <h2>Consent</h2>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <div className="centerText">
              Prior to initiating the evaluation, its nature, purpose, the risks
              and benefits were explained to [Patient Name, First][Patient Name,
              Last]. Questions were sought and answered. [Patient Name, First]
              demonstrated a basic understanding by restating the information in
              her own words. [Patient Name, First] indicated willingness to
              participate in the evaluation and complied with requests.
            </div>
          </div>
        </section>
        
        <section className="siblingsFields">
          <div>
            <Input type="checkbox" name="" id="" />
            <Label className="title" for="firstName">
              Check Here to Confirm
            </Label>
          </div>
        </section>
        <section className="buttonSection mt-5" id="">
          <Button
            color="info"
            className="button"
            onClick={() => {
              props.history.push(`/psychological_evaluation_spouse`);
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
              props.history.push(`/psychological_evaluation_referral`);
            }}
          >
            Next
          </Button>
        </section>
      </div>
    </section>
  );
}

export default PsychologicalEvaluationConsent;
