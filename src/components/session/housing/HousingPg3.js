import React from "react";
import "./housing.css";
import { Label, Input, Button } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/termOfParentalRights';

function HousingPg3(props) {
  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
      <Heading />
      <h4 className="textWhite centerItem">Housing pg 3</h4>
        <section className="interview_section1">
          <div className="interview_line1">
            <Label className="textWhite interview_title" for="">
              [Patient Name, First] said:
            </Label>
            <Input
              className="interview_fieldData"
              type="text"
              id=""
            />
        </div>
      </section>
      <h4 className="textWhite centerItem">How much is your rent or mortgage?</h4>
      <section className="interview_section1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="hs-housing-cost">
            [Patient Name, First] said:
          </Label>
          <Input
            className="interview_fieldData"
            type="text"
            id="hs-housing-cost"
          />
        </div>
      </section>
      <h4 className="textWhite centerItem ">Have you ever experienced times without shelter?</h4>
      <section className="interview_section1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="hs-without-shelter">
            [Patient Name, First] said:
          </Label>
          <Input
            className="interview_fieldData"
            type="text"
            id="hs-without-shelter"
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
            props.history.push(`/Housing_pg_3`);
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

export default HousingPg3;
