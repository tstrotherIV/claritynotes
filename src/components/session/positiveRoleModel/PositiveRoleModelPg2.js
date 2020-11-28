import React from "react";
import { Label, Input, Button } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
// pdf page 94

function PositiveRoleModelPg2(props) {
  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">POSITIVE ROLE MODEL</h2>
        <div className="questionsContainer">
          <div className="interview_div1"> 
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
        <div className="mb-4 d-flex flex-wrap justify-content-center mt-4">
        <h5 className="textWhite centerItem text-center offset-2">Give three examples of how you have followed through on promises to yourself and others?</h5>
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
      <div className="siblingsFields">
      <div className="m-1">
      <h5 className="textWhite text-center">If they are unable to give THREE examples, add:</h5>
            <Input type="checkbox" name="" id="" />
            <Label className="textWhite text-center" for="firstName">
            [Patient Name, First] appears to be lacking knowledge and examples which illustrates probable deficits in this area. 
            [Patient Name, First] will need this area to be further developed in therapy. She/he needs her/his goals and values developed in order to guide 
            their own behavior as well as that of their children.
            </Label>
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
                props.history.push(`/positive_role_model_pg_1`);
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
                props.history.push(`/parent_knowledge_pg_1`);
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

export default PositiveRoleModelPg2;
