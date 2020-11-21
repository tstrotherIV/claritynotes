import React from "react";
import { Button } from "reactstrap";
import "./additionalData.scss";

function PsychologicalEvaluationAdditionalData(props) {
  return (
    <>
    <div id="page-container" className="sessionStepContainer">
    <div id="content-wrap" className="whiteBGD reportMinHeight">
      <div className="whiteBGD">
        <div className="centerContent">
          <div className="d-flex justify-content-center mt-5">
            <h1>Psychological Evaluation</h1>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <h2>Additional Data</h2>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <div className="centerText">
              Interview with [Patient Name, First][Patient Name, Last] Interview
              with [Specific Username ID], [Specific User Position] Interview
              with []
            </div>
          </div>
        </div>
        </div>
        </div>
        <div id="footer">
        <div className="buttonSection">
          <Button
            color="info"
            className="button"
            onClick={() => {
              props.history.push(`/psychological_evaluation_referral`);
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
              props.history.push(`/interview_pg_1`);
            }}
          >
            Next
          </Button>
        </div>
        </div>
        </div>
    </>
  );
}

export default PsychologicalEvaluationAdditionalData;
