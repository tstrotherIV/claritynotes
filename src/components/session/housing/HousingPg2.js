import React from "react";
import "./housing.scss";
import { Label, Input, Button } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/termOfParentalRights';
// pdf page 41

function HousingPg2(props) {
  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
      <Heading />
      <h2 className="textWhite text-center mb-4">Housing</h2>
      <h4 className="textWhite centerItem">All or part?</h4>
      <div className="questionsContainer2">
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title text-center" for="hs-all-or-part">
            [Patient Name, First] said:
          </Label>
          <Input
            className=""
            type="text"
            id="hs-all-or-part"
          />
        </div>
      </div>
      <h4 className="textWhite centerItem">How much is your rent or mortgage?</h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title text-center" for="hs-housing-cost">
            [Patient Name, First] said:
          </Label>
          <Input
            className="]"
            type="text"
            id="hs-housing-cost"
          />
        </div>
      </div>
      <h4 className="textWhite centerItem ">Have you ever experienced times without shelter?</h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title text-center" for="hs-without-shelter">
            [Patient Name, First] said:
          </Label>
          <Input
            className=""
            type="text"
            id="hs-without-shelter"
          />
          </div>
        </div>
      </div>
      </div>
      <div id="footer">
      <div className="buttonSection">
        <Button
          color="info"
          className="button"
          onClick={() => {
            props.history.push(`/housing_pg_1`);
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
            props.history.push(`/housing_pg_3`);
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

export default HousingPg2;
