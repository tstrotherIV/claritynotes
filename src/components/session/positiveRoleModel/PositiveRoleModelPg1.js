import React from "react";
import { Label, Input, Button } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
// pdf page 93

function PositiveRoleModelPg1(props) {
  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">POSITIVE ROLE MODEL</h2>
        <div className="questionsContainer">
          <div className="interview_div1">

        <div className="m-auto d-flex align-items-center textWhite">
          <Label className="textWhite col-3 text-right" for="">
              [Patient Name, First]
          </Label>
          <div className="m-2">he/she</div>
          <Input
              className="col-2 mr-2 mb-2"
              type="text"
              id=""
              placeholder="does/does not"
            />
            smokes cigarettes.  
        </div>
        <div className="m-auto d-flex align-items-center textWhite">
          <Label className="textWhite col-3 text-right" for="">
              [Patient Name, First]
          </Label>
          <div className="m-2">he/she</div>
          <Input
              className="col-2 mr-2 mb-2"
              type="text"
              id=""
              placeholder="does/does not"
            />
            drink alcohol and  
            <Input
              className="col-2 mr-2 ml-2 mb-2"
              type="text"
              id=""
              placeholder="confirms/denies"
            />  
            abuse.
        </div> 
        <div className="m-auto d-flex align-items-center textWhite">
        <Label className="textWhite col-3 text-right" for="">
            [Patient Name, First]
        </Label> 
        <Input
              className="col-2 mr-2 ml-2 mb-2"
              type=""
              id=""
              placeholder="confirms/denies"
            />  
            CURRENTLY using substances.
        </div> 
        <div className="m-auto d-flex align-items-center textWhite">
        <Label className="textWhite col-3 text-right" for="">
            [Patient Name, First]
        </Label> 
        <Input
              className="col-2 mr-2 ml-2 mb-2"
              type=""
              id=""
              placeholder="confirms/denies"
            />  
            displaying profanity or prejudice.
        </div> 
        <div className="m-auto d-flex align-items-center textWhite">
        <Label className="textWhite col-3 text-right" for="">
            [Patient Name, First]
        </Label> 
        <Input
              className="col-2 mr-2 ml-2 mb-2"
              type=""
              id=""
              placeholder="confirms/denies"
            />  
            bullying others.
        </div> 
        <div className="m-auto d-flex align-items-center textWhite">
        <Label className="textWhite col-3 text-right" for="">
            [Patient Name, First]
        </Label> 
        <Input
              className="col-2 mr-2 ml-2 mb-2"
              type=""
              id=""
              placeholder="confirms/denies"
            />  
            exhibiting any implusivity or violence.
        </div>
        <div className="mb-4 d-flex flex-wrap justify-content-center mt-4">
        <h5 className="textWhite centerItem text-center offset-2">Give three examples of how you are a positive role model to others?</h5>
          <div className="textWhite d-flex flex-wrap align-content-end col-2 mb-2">
            [Patient Name, First] said:
          </div>
          <div className="col-3 d-flex flex-wrap align-items-end m-0 p-0">
          <Label className="textWhite">
          </Label>
          <Input
            className=""
            type="text"
            id=""
          />
          </div>
          <div className="col-3 d-flex flex-wrap align-items-end ml-2 justify-content-center align-content-end">
          <Label className="textWhite" for="">
          </Label>
          <Input
            className=""
            type="text"
            id=""
            />
        </div>
        <div className="col-3 d-flex flex-wrap align-items-end justify-content-center ml-2 p-0 align-content-end">
          <Label className="textWhite" for="">
          </Label>
          <Input
            className=""
            type="text"
            id=""
            />
          </div>
        </div>

      </div>
        </div>
        <div id="footer">
          <div className="buttonSection">
          <div className="idBox textWhite p-3"></div>
            <Button
              color="info"
              className="button"
              onClick={() => {
                props.history.push(`/parenting_pg_2`);
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
                props.history.push(`/positive_role_model_pg_2`);
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

export default PositiveRoleModelPg1;