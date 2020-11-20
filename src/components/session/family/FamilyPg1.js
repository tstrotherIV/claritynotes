import React from "react";
import "./interviews.css";
import { Label, Input, Button } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/termOfParentalRights';


function FamilyPg1(props) {
  return (
    <>
       <div id="page-container">
      <div id="content-wrap">
    <Heading />    
    <div className="header">
        <h1 className="textWhite">Family</h1>
      </div>
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
      </div>
      <div id="footer">
      <section className="buttonSection">
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
      <TermOfParentalRights />
      </div>
    </div>
    </>
  );
}

export default FamilyPg1;
