import React from "react";
import "./housing.scss";
import { Label, Input, Button } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/termOfParentalRights';
  // pdf page 40

function HousingPg1(props) {
  return (
    <>
      <div id="page-container">
      <div id="content-wrap">
    <Heading />
    <h2 className="textWhite text-center mb-4">Housing</h2>
      <h4 className="textWhite centerItem">Do you live alone?</h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="hs-live-alone">
            [Patient Name, First] said:
          </Label>
          <Input
            className="interview_fieldData"
            type="text"
            id="hs-live-alone"
          />
        </div>
      </div>
      <h4 className="textWhite centerItem">Who do you live with?</h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="hs-live-with">
            [Patient Name, First] said:
          </Label>
          <Input
            className="interview_fieldData"
            type="text"
            id="hs-live-with"
          />
        </div>
      </div>
      <h4 className="textWhite centerItem ">Who pays your rent or mortgage?</h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="hs-who-pays">
            [Patient Name, First] said:
          </Label>
          <Input
            className="interview_fieldData"
            type="text"
            id="hs-who-pays" 
          />
        </div>
      </div>
      </div>
      <div id="footer">
      <div className="buttonSection">
        <Button
          color="info"
          className="button"
          onClick={() => {
            props.history.push(`/psychological_evaluation_report_summary`);
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
            props.history.push(`/housing_pg_2`);
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
    </>
  );
}

export default HousingPg1;
