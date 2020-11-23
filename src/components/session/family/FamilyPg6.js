import React from "react";
import { Label, Input, Button } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';

function FamilyPg6(props) {
  return (
    <>
     <div id="page-container">
      <div id="content-wrap">
    <Heading /> 
      <div className="header">
        <h1 className="textWhite">Family</h1>
      </div>
      <h4 className="textWhite centerItem">
        Was there a lot of drinking in the home growing up?
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
      <h4 className="textWhite centerItem">If so, how did you cope?</h4>
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
      <div className="interview_div3">
        <div className="interview_line3">
          <h4 className="textWhite centerItem">
            Responsive [User Name, First]’s Inference and Observations: Does the
            parent think it is OK
          </h4>
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
            props.history.push(`/family_pg_5`);
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
            props.history.push(`/family_pg_7`);
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

export default FamilyPg6;
