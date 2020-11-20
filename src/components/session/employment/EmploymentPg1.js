import React from "react";
import { Label, Input, Button } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/termOfParentalRights';
// pdf page 42

function EmploymentPg1(props) {
  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">Employment</h2>
        <div className="questionsContainer">
          <h4 className="textWhite centerItem">Currently, where are you employed?</h4>
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
        <div className="m-auto d-flex align-items-center textWhite">
          <Label className="textWhite col-3 text-right" for="">
              [Patient Name, First]
          </Label>
          <Input
              className="col-2 mr-2 mb-2"
              type="text"
              id=""
              placeholder="has/has never"
            />
            been employed.  
        </div>
        <div className="m-auto d-flex align-items-center textWhite">
          <Label className="textWhite col-3 text-right" for="">
              [Patient Name, First]
          </Label>
          <Input
              className="col-2 mr-2 mb-2"
              type="text"
              id=""
              placeholder="is/is not"
            />
            currently employed and 
            <Input
              className="col-2 mr-2 ml-2 mb-2"
              type="text"
              id=""
              placeholder="has/has no"
            />  
            income.
        </div>
        <div className="m-auto d-flex align-items-center textWhite">
          <Label className="textWhite col-3 text-right" for="">
              [Patient Name, First]
          </Label>
        last work at 
        <Input
              className="col-2 mr-2 ml-2 mb-2"
              type="text"
              id=""
              placeholder=""
            />  
        for
        <Input
              className="col-2 mr-2 ml-2 mb-2"
              type=""
              id=""
              placeholder="select time"
            />  
            .
        </div>
        
        <div className="m-auto d-flex align-items-center textWhite">
          <Label className="textWhite col-3 text-right" for="">
              [Patient Name, First]
          </Label>
        left this job because 
        <Input
              className="col-4 mr-2 ml-2 mb-2"
              type=""
              id=""
              placeholder=""
            />  
            .
        </div> 

        <div className="m-auto d-flex align-items-center textWhite">
          <Label className="textWhite col-3 text-right" for="">
              [Patient Name, First]
          </Label>
        reported [he/she] worked at 
        <Input
              className="col-3 mr-2 ml-2 mb-2"
              type=""
              id=""
              placeholder=""
            />  
            as
            <Input
              className="col-2 mr-2 ml-2 mb-2"
              type=""
              id=""
              placeholder=""
            />
            .  
        </div> 

        <div className="m-auto d-flex align-items-center textWhite">
          <Label className="textWhite col-3 text-right" for="">
              [Patient Name, First]
          </Label>
          has been there 
        <Input
              className="col-4 mr-2 ml-2 mb-2"
              type=""
              id=""
              placeholder=""
            />  
            .
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
                props.history.push(`/Housing_pg_4`);
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

export default EmploymentPg1;
