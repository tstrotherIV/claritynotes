import React from "react";
import "./interviews.css";
import { Label, Input, Button } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';

function FamilyPg1(props) {
  return (
    <>
    <Heading />   
      {/* <section className="wrapContent mt-5">
        <div className="textWhite m-2 p-2">
          [Patient Name, First] [Patient Name, Last]
        </div>
        <div className="textWhite m-2 p-2">DOB: [Patient DOB]</div>
        <div className="textWhite m-2 p-2">Patient ID: [Patient ID]</div>
        <div className="textWhite m-2 p-2">Existing Patient: [Case #]</div>
      </section> */}
      
      <section>
        <div className="section1Fields">
          <div className="in2">
            <Label className="textWhite title" for="caseNumber">
              [Patient Name, First] reported her
            </Label>
            <Input
              className="fieldData2"
              type="text"
              id="caseNumber"
            />

            <div className="in2">
              <Label className="textWhite title" for="caseNumber">
                raised her in
              </Label>
              <Input
                className="fieldData2"
                type="text"
                id="caseNumber"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="in3">
        <div className="textWhite centerItem">[Patient Name, First] had</div>
        <div className="interview_line2">
          <Input
            className="interview_fieldData1"
            type="text"
            id=""
          />
        </div>
        <div className="textWhite centerItem">brothers and sisters.</div>
      </section>
      
      <h4 className="textWhite centerItem">
        Who raised you from birth until you moved out of the home?
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
      
      <h4 className="textWhite centerItem">What are their names?</h4>
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
      <section className="buttonSection mt-6" id="">
        <Button
          color="info"
          className="button"
          onClick={() => {
            props.history.push(`/interview_pg_9`);
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
            props.history.push(`/family_pg_2`);
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

export default FamilyPg1;
