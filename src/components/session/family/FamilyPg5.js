import React from "react";
import "./interviews.css";
import { Label, Input, Button } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/termOfParentalRights';

function FamilyPg5(props) {
  return (
    <>
    <div id="page-container">
    <div id="content-wrap">
    <Heading /> 
      <div className="header">
        <h1 className="textWhite">Family</h1>
      </div>
      
      <h4 className="textWhite centerItem">
        Did you feel loved and accepted by each parent, even when you
        disappointed them?
      </h4>
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
      <section className="interview_section1">
        <div className="interview_line1 textWhite">
            (IF THEY DO NOT OFFER MORE THAN “YES” OR “NO,” ASK THEM: “How did
            they show you they loved you and accepted you?” AND/OR “Tell me more
            about that.” GET AS MUCH INFO AS POSSIBLE.
        </div>
      </section>   
      <h4 className="textWhite centerItem">
        Do you remember a lot of fighting in the home growing up?
      </h4>
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
      </div>
      <div id="footer">
      <section className="buttonSection">
        <Button
          color="info"
          className="button"
          onClick={() => {
            props.history.push(`/family_pg_4`);
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
            props.history.push(`/family_pg_6`);
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

export default FamilyPg5;
