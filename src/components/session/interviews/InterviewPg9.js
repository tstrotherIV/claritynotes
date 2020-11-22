import React from "react";
import {
  Label,
  Input,
  Button,
} from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import "./interviews.scss";

function Interview_Pg9(props) {
  return (
    <>
      <div id="page-container">
      <div id="content-wrap">
    <Heading /> 
      <div className="header">
        <h1 className="textWhite">Interviews</h1>
      </div>
      <h4 className="textWhite centerItem">
        What do you think you need to work on?
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
      <div>
        <div className="div1Fields">
          <div className="in2">
            <Label className="textWhite title" for="caseNumber">
            [Patient Name, First] was dressed in
            </Label>
            <Input
              className="fieldData2"
              type="text"
              id="caseNumber"
            />
          </div>
        </div>
      </div>
      <div className="textWhite centerItem">
      and she appropriately groomed. (Write details! Was she malodourous, had greasy/unbrushed hair, unbathed, etc.? Notate the appearance and add to behavioral observations.)
      </div>
      <div className="interview_div1">
        <div className="interview_line1">
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
        <Button
          color="info"
          className="button"
          onClick={() => {
            props.history.push(`/interview_pg_8`);
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
            props.history.push(`/family_pg_1`);
          }}
        >
          Next
        </Button>
        <div className="idBox textWhite p-3">
              <div className="displayNone">Existing Patient: [Case #]</div>
              <div className="displayNone">Patient ID: [Patient ID]</div>
            </div>
      </div>
      <TermOfParentalRights />
      </div>
    </div>
    </>
  );
}

export default Interview_Pg9;
