import React from "react";
import "./housing.scss";
import { Label, Input, Button } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/termOfParentalRights';
// pdf page 42

function HousingPg3(props) {
  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
      <Heading />
      <h2 className="textWhite text-center mb-4">Housing</h2>
      <div className="questionsContainer">
      <h4 className="textWhite centerItem">Have you ever spent the night in a car or had to stay with another person?</h4>
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
      <h4 className="textWhite centerItem">Is your residence an apartment, house, or trailer?</h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="hs-housing-cost">
            [Patient Name, First] said:
          </Label>
          <Input
            className="interview_fieldData"
            type="text"
            id="hs-housing-cost"
          />
        </div>
      </div>
      <div>

      </div>
      <div className="row  m-auto text-center">
        <div className="col-3"></div>
        <div className="col-3">
      <Label className="textWhite" for="">
            Number of Bedrooms?
          </Label>
          <Input
            className="col-6 m-auto"
            type="text"
            id=""
          />
      </div>
      <div className="col-3">
      <Label className="textWhite" for="">
            Number of Baths?
          </Label>
          <Input
            className="col-6 m-auto"
            type="text"
            id=""
          />
      </div>
      <div className="col-3">
      <Label className="textWhite" for="">
            How old is it?
          </Label>
          <Input
            className="col-6 m-auto"
            type="text"
            id=""
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
            props.history.push(`/housing_pg_2`);
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
            props.history.push(`/employment_pg_1`);
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

export default HousingPg3;
