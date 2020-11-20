import React from "react";
import { Button } from "reactstrap";
import "./reportSummary.scss";

function PsychologicalEvaluationReportSummary(props) {
  return (
    <div className="fullpage">
      <div className="whiteBGD">
        <div className="centerContent">
          <div className="d-flex justify-content-center mt-5">
            <h1>Psychological Evaluation</h1>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <h2>Report Summary</h2>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <div className="centerText">
              [Patient Name, First][Patient Name, Last] reported she has been
              married since xx. She has son/s and daughter/s. [Patient Name,
              First] said she currently lives with _ in [Location] 
              
              
              [Patient
              Name, First] reported she has been married _ times. She has son/s
              and daughter/s. [Patient Name, First] and her current spouse have
              been married for _ years. She said she currently lives with _ in
              [Location]. 
              
              
              Why did they split up?
              
               or 
              
              
              [Patient Name, First]
              reported she has never been married. She has _son/s and
              _daughter/s. [Patient Name, First] said she currently lives with _
              in [Location].
            </div>
          </div>
        </div>
        

        <div className="buttonSection mt-6" id="">
          <Button
            color="info"
            className="button"
            onClick={() => {
              props.history.push(`/family_pg_15`);
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
              props.history.push(`/HousingPg_1`);
            }}
          >
            Next
          </Button>
          <div className="p-3">
            <div>Existing Patient: [Case #]</div>
            <div>Patient ID: [Patient ID]</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PsychologicalEvaluationReportSummary;
