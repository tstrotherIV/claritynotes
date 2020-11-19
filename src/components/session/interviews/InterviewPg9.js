import React from "react";
import "./interviews.css";
import {
  Label,
  Input,
  Button,
} from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';


function Interview_Pg9(props) {
  return (
    <>
    <Heading /> 
      <section className="wrapContent mt-5">
        <div className="textWhite m-2 p-2">
          [Patient Name, First] [Patient Name, Last]
        </div>
        <div className="textWhite m-2 p-2">DOB: [Patient DOB]</div>
        <div className="textWhite m-2 p-2">Patient ID: [Patient ID]</div>
        <div className="textWhite m-2 p-2">Existing Patient: [Case #]</div>
      </section>
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
