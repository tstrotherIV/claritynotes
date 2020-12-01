import React, { useState } from "react";
import "./psychologicalEvaluationFamily.scss";
import {
  Label,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';


function PsychologicalEvaluation_spouse(props) {

  const next = "/psychological_evaluation_consent";

  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);
  const toggle2 = () => setDropdownOpen2((prevState) => !prevState);
  

  return (
    <>
    <div id="page-container">
    <div id="content-wrap">
    <Heading />   
      <div className="header">
        <h1 className="textWhite">Please Confirm or Update Information</h1>
      </div>
      <div className="siblingsFields">
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
          <TextareaAutosize            
            className="fieldData text-center"
            id="spouseFirstName"
            placeholder="Spouse First Name"
          />
        </div>
        <div className="line1">
          <Label className="textWhite title" for="spouseLastName">
          </Label>
          <TextareaAutosize            
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
          <TextareaAutosize            
            className="fieldData text-center col-8"
            type="date"
            id="lastName"
            placeholder="Date of Birth"
          />
        </div>
        <div className="d-flex justify-content-center">
            <div className="textWhite"><i className="fas fa-plus fa-lg ml-5 mt-3 mr-2"></i>Click to Add Previous Spouses</div>
          </div>
      </div>
      </div>
      <div id="footer">
      <ButtonNavigation next={next} />
      </div>
      </div>
    </>
  );
}

export default PsychologicalEvaluation_spouse;
