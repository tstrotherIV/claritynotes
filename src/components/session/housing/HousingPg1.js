import React from "react";
import "./housing.css";
import { Label, Input, Button } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/termOfParentalRights';

function HousingPg1(props) {
  return (
    <>
      <div id="page-container">
      <div id="content-wrap">
    <Heading />
      <h4 className="textWhite centerItem">Do you live alone?</h4>
      <section className="interview_section1">
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
      </section>
      <h4 className="textWhite centerItem">Who do you live with?</h4>
      <section className="interview_section1">
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
      </section>
      <h4 className="textWhite centerItem ">Who pays your rent or mortgage?</h4>
      <section className="interview_section1">
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
      </section>
      </div>
      <div id="footer">
      <section className="buttonSection">
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
        <section className="textWhite p-3">
          <div>Existing Patient: [Case #]</div>
          <div>Patient ID: [Patient ID]</div>
        </section>
      </section>
      <TermOfParentalRights />
      </div>
    </div>
    </>
  );
}

export default HousingPg1;
