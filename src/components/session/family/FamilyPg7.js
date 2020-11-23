import React from "react";
import { Label, Input, Button } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights'; 

function FamilyPg7(props) {
  return (
    <>
       <div id="page-container">
      <div id="content-wrap">
    <Heading /> 
      <div className="header">
        <h1 className="textWhite">Family</h1>
      </div>
      
      <h4 className="textWhite centerItem">
        How was disapproval of your actions displayed by your parents/how were
        you punished when you acted out?s
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
      <div className="interview_div3">
        <div className="interview_line3">
          <h4 className="textWhite centerItem">
            Discipline [User Name, First]’s Inference and Observations: Put
            information about harsh discipline into the discipline conclusion.
            How did their punishment shape how they punish? Does this appear
            genuine or are they saying more than what sounds good.
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
            props.history.push(`/family_pg_6`);
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
            props.history.push(`/family_pg_8`);
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

export default FamilyPg7;
