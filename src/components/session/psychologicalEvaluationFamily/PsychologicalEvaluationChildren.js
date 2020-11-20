import React, { useState } from "react";
import "./psychologicalEvaluationFamily.scss";
import {
  Label,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';


function PsychologicalEvaluation_siblings(props) {
  const [dropdownOpen1, setDropdownOpen1] = useState(false);

  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);

  return (
    <>
     <div id="page-container">
    <div id="content-wrap">
    <Heading />   
      <div className="header">
        <h1 className="textWhite">Please Confirm or Update Information</h1>
      </div>
      <div className="siblingsFields">
        <div className="ml-5">
          <Input
            className=""
            type="checkbox"
            id="noChildren"
          />
          <Label className="textWhite title ml-2" for="noChildren">
          Patient Has No Children
          </Label>
        </div>
        <div className="line1">
          <Label className="textWhite title" for="firstName">
            Children
          </Label>
          <Input
            className="fieldData text-center"
            type="text"
            id="firstName"
            placeholder="Child First Name"
          />
        </div>
        <div className="line1">
          <Label className="textWhite title" for="lastName">
          </Label>
          <Input
            className="fieldData text-center"
            type="text"
            id="lastName"
            placeholder="Child Last Name"
          />
        </div>
        
        <div className="line1">
          <Label className="textWhite title" for="examplePassword">
            Gender
          </Label>
          <Dropdown isOpen={dropdownOpen1} toggle={toggle1}>
            <DropdownToggle color="light" className="dropdown" caret>
              Please Select
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Gender</DropdownItem>
              <DropdownItem>Male</DropdownItem>
              <DropdownItem>Female</DropdownItem>
              <DropdownItem>Unspecified</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="line1 d-flex flex-wrap justify-content-center">
          <Label className="textWhite title" for="">DOB</Label>
          <Input
            className="fieldData text-center col-8"
            type="date"
            name="lastName"
            id="lastName"
            placeholder="Mother Last Name"
          />
        </div>
        <div className="d-flex justify-content-center">
            <div className="textWhite"><i class="fas fa-plus fa-lg ml-5 mt-3 mr-2"></i>Click to Add More Children</div>
          </div>
   
      </div>
      </div>
      <div id="footer">
      <div className="buttonSection">
      <Button color="info" className="button" onClick={() => {
            props.history.push(`/psychological_evaluation_siblings`);
          }}>Previous</Button>
        <Button color="info" className="button">
          Save
        </Button>
        <Button color="info" className="button">
          Submit
        </Button>
        <Button color="info" className="button" onClick={() => {
            props.history.push(`/psychological_evaluation_spouse`);
          }}>Next</Button>
      </div>
      </div>
      </div>
    </>
  );
}

export default PsychologicalEvaluation_siblings;
