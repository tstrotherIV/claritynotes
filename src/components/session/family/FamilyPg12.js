import React from "react";
import { Label, Input, Button } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';

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
      <div className="interview_div1">
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
      </div> 
      <h4 className="textWhite centerItem">
      Tell me about your most serious relationship that did not result in cohabitation; which can include non-sexual friendships with the same or opposite sex.
      </h4>
      <div className="interview_div1">
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
      </div>      
      <h4 className="textWhite centerItem ">Tell me more about relationships with children, teachers, supervisors, schoolmates, bosses, or workmates of any importance.</h4>
      <div className="interview_div1">
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
      </div>
      </div>
      <div id="footer">
      <div className="buttonSection">
      <div className="idBox textWhite p-3"></div>
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

export default FamilyPg12;
