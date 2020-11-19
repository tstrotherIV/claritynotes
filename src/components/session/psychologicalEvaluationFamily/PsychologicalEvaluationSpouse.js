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

function PsychologicalEvaluation_spouse(props) {
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);
  const toggle2 = () => setDropdownOpen2((prevState) => !prevState);

  return (
    <>
    <Heading />   
      <div className="header">
        <h1 className="textWhite">Please Confirm or Update Information</h1>
      </div>
      <section className="siblingsFields">
        <div className="line1">
        <Label className="textWhite title" for="examplePassword">
        Marital Status
          </Label>
          <Dropdown isOpen={dropdownOpen1} toggle={toggle1}>
            <DropdownToggle color="light" className="dropdown" caret>
              Please Select
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Married Status</DropdownItem>
              <DropdownItem>Married</DropdownItem>
              <DropdownItem>Divorced</DropdownItem>
              <DropdownItem>Separated</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="line1">
          <Label className="textWhite title" for="spouseFirstName">
            Spouse
          </Label>
          <Input
            className="fieldData text-center"
            id="spouseFirstName"
            placeholder="Spouse First Name"
          />
        </div>
        <div className="line1">
          <Label className="textWhite title" for="spouseLastName">
          </Label>
          <Input
            className="fieldData text-center"
            type="text"
            id="spouseLastName"
            placeholder="Spouse Last Name"
          />
        </div>
        
        <div className="line1">
          <Label className="textWhite title" for="examplePassword">
            Gender
          </Label>
          <Dropdown isOpen={dropdownOpen2} toggle={toggle2}>
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
            id="lastName"
            placeholder="Mother Last Name"
          />
        </div>
        <div className="d-flex justify-content-center">
            <div className="textWhite"><i class="fas fa-plus fa-lg ml-5 mt-3 mr-2"></i>Click to Add Previous Spouses</div>
          </div>
      </section>
      <section className="buttonSection mt-5" id="">
      <Button color="info" className="button" onClick={() => {
            props.history.push(`/psychological_evaluation_children`);
          }}>Previous</Button>
        <Button color="info" className="button">
          Save
        </Button>
        <Button color="info" className="button">
          Submit
        </Button>
        <Button color="info" className="button" onClick={() => {
            props.history.push(`/psychological_evaluation_consent`);
          }}>Next</Button>
      </section>
    </>
  );
}

export default PsychologicalEvaluation_spouse;
