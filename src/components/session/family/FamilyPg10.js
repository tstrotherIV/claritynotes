import React from "react";
import "./interviews.css";
import { Label, Input, Button } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';

function FamilyPg10(props) {
  return (
    <>
    <Heading /> 
      <div className="header">
        <h1 className="textWhite">Family</h1>
      </div>
      <h4 className="textWhite centerItem">
        What is your least favorite childhood memory?
      </h4>
      <section className="interview_section1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <Input
            className="interview_fieldData"
            type="text"
            name=""
            id=""
          />
        </div>
      </section>

      <section className="interview_section3">
        <h3 className="textWhite">Protective</h3>
        <div className="interview_line3">
          <h4 className="textWhite centerItem containText">
            Any memories which were negative, which taught them the importance
            of being protective, cautious, restrained, etc? Did they learn from
            this negative experience? Does the parent try to prevent things from
            happening from anything negative?
          </h4>
          <div className="observationsColumn pl-3">
            <Label className="textWhite " for="">
              [User Name, First]’s Inference and Observations:
            </Label>
            <Input
              className=""
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
      </section>

      <section className="buttonSection mt-6" id="">
        <Button
          color="info"
          className="button"
          onClick={() => {
            props.history.push(`/family_pg_9`);
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
            props.history.push(`/family_pg_11`);
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

export default FamilyPg10;
