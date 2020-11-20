import React from "react";
import "./interviews.scss";
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
      <div>
        <div className="div1Fields">
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
      </div>
      
      <div className="in3">
        <div className="textWhite centerItem">[Patient Name, First] had</div>
        <div className="interview_line2">
          <Input
            className="interview_fieldData1"
            type="text"
            id=""
          />
        </div>
        <div className="textWhite centerItem">brothers and sisters.</div>
      </div>
      
      <h4 className="textWhite centerItem">
        Who raised you from birth until you moved out of the home?
      </h4>
      <div className="interview_div1">
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
      </div>
      <h4 className="textWhite centerItem">What are their names?</h4>
      <div className="interview_div1">
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
      </div>
      
      <div id="footer">
      <div className="buttonSection">
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
        <div className="idBox textWhite p-3">
          <div>Existing Patient: [Case #]</div>
          <div>Patient ID: [Patient ID]</div>
        </div>
      </div>
      <TermOfParentalRights />
      </div>
    </div>
    </div>
    </>
  );
}

export default FamilyPg1;
