import React from "react";
import { Label, Input, Button } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
// pdf page 63

function HistoryOfLegalPg13(props) {
  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">History of Legal, Crime, and Conviction</h2>
        <div className="text-center questionsContainer">
          <h4 className="textWhite centerItem">How many times have things gotten a little out of control, more than to your liking?</h4>
          <div className="m-auto d-flex align-items-center textWhite">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <Input
            className=""
            type="text"
            id=""
          />
        </div>
        <h4 className="textWhite centerItem">How many times have you ever had to use more than alcohol to get the same buzz? What about drugs?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title ">
            [Patient Name, First] said:        
          </Label>
          <Input
            className=""
            type="text"
            id=""
          />    
        </div>
        <div className="mb-4 d-flex flex-wrap justify-content-center">
          <div className="textWhite d-flex flex-wrap align-content-end col-2 mb-2">
            [Patient Name, First] said:
          </div>
          <div className="col-4 d-flex flex-wrap align-items-end m-0 p-0">
          <Label className="textWhite interview_title ">
          How many times have you completed or left a substance abuse outpatient, inpatient, or residential program?
          </Label>
          <Input
            className=""
            type="text"
            id=""
          />
          </div>
 <div className="col-2 d-flex flex-wrap align-items-end ml-2 justify-content-center align-content-end">
          <Label className="textWhite" for="">
          Rehabilitation Program Location
          </Label>
          <Input
            className=""
            type="text"
            id=""
            />
        </div>
 <div className="col-2 d-flex flex-wrap align-items-end justify-content-center ml-2 p-0 align-content-end">
          <Label className="textWhite" for="">
          Date of Rehab
          </Label>
          <Input
            className=""
            type="text"
            id=""
            />
        </div>
        </div>
        </div>
        <div id="footer">
          <div className="buttonSection">
          <div className="idBox textWhite p-3"></div>
            <Button
              color="info"
              className="button"
              onClick={() => {
                props.history.push(`/history_of_legal_pg_12`);
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
                props.history.push(`/history_of_legal_pg_14`);
              }}
            >
              Next
            </Button>
            <div className="idBox textWhite p-3">
              <div>Existing Patient: [Case #]</div>
              <div>Patient ID: [Patient ID]</div>
            </div>
          </div>
          <TermOfParentalRights />
        </div>
      </div>
    </div>
    </>
  );
}

export default HistoryOfLegalPg13;
