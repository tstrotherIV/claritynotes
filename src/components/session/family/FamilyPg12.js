import React from "react";
import "./interviews.css";
import { Label, Input, Button } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/termOfParentalRights';

function FamilyPg12(props) {
  return (
    <>
     <div id="page-container">
      <div id="content-wrap">
    <Heading /> 
      <div className="header">
        <h1 className="textWhite">Family</h1>
      </div>
      <h4 className="textWhite centerItem">
      How do these memories impact your parenting?
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
      <h4 className="textWhite centerItem">
      Tell me about your most serious relationship that did not result in cohabitation; which can include non-sexual friendships with the same or opposite sex.
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
      <h4 className="textWhite centerItem ">Tell me more about relationships with children, teachers, supervisors, schoolmates, bosses, or workmates of any importance.</h4>
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
            props.history.push(`/family_pg_11`);
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
            props.history.push(`/family_pg_13`);
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

export default FamilyPg12;
