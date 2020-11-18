import React from "react";
import "./interviews.css";
import { Label, Input, Button } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';

function FamilyPg5(props) {
  return (
    <>
    <Heading /> 
      <div className="header">
        <h1 className="textWhite">Family</h1>
      </div>
      <br></br>
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
      <br></br>
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

      <section className="buttonSection mt-6" id="">
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
    </>
  );
}

export default FamilyPg5;
