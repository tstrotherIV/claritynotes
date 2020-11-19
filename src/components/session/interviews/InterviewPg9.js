import React from "react";
import {
  Label,
  Input,
  Button,
} from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import "./interviews.scss";

function Interview_Pg9(props) {
  return (
    <>
    <Heading /> 
      <div className="header">
        <h1 className="textWhite">Interviews</h1>
      </div>
      
      <h4 className="textWhite centerItem">
        What do you think you need to work on?
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

      
      <section>
        <div className="section1Fields">
          <div className="in2">
            <Label className="textWhite title" for="caseNumber">
            [Patient Name, First] was dressed in
            </Label>
            <Input
              className="fieldData2"
              type="text"
              id="caseNumber"
            />
            <div></div>
          </div>
        </div>
      </section>
      
      <div className="textWhite centerItem">
      and she appropriately groomed. (Write details! Was she malodourous, had greasy/unbrushed hair, unbathed, etc.? Notate the appearance and add to behavioral observations.)
      </div>
      <section className="interview_section1">
        <div className="interview_line1">
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
      </section>
    </>
  );
}

export default Interview_Pg9;
