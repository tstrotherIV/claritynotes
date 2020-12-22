import React, { useState } from "react";
import "./psychologicalEvaluationFamily.scss";
import {
  Input,
  Label,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';
import EmptyFooterSpace from './../../shared/EmptyFooterSpace';


function PsychologicalEvaluation_siblings(props) {

  const [patientChildren, setPatientChildren] = useState({
    patient_has_children: false,
    child_first_name: "",
    child_last_name: "",
    child_gender: "",
    child_dob: "",
    patient_id: "",
  })

  const next = "/psychological_evaluation_spouse";
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);

  const handleFieldChange = (e) => {
    setPatientChildren({ ...patientChildren, [e.target.name]: e.target.value});
  }

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
            id="patient_has_children"
            checked={patientChildren.patient_has_children}
            onChange={(e)=> {setPatientChildren(e.target.checked)}}
          />
          <Label className="textWhite title ml-2" for="noChildren">
          Patient Has No Children
          </Label>
        </div>
        <div className="line1">
          <Label className="textWhite title" for="firstName">
            Children
          </Label>
          <TextareaAutosize            
            className="fieldData text-center"
            type="text"
            id="child_first_name"
            name="child_first_name"
            onChange={handleFieldChange}
            value={patientChildren.child_first_name}
            placeholder="Child First Name"
          />
        </div>
        <div className="line1">
          <Label className="textWhite title" for="lastName">
          </Label>
          <TextareaAutosize            
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
          <TextareaAutosize            
            className="fieldData text-center col-8"
            type="date"
            name="lastName"
            id="lastName"
            placeholder="Date of Birth"
          />
        </div>
        <div className="d-flex justify-content-center">
            <div className="textWhite"><i className="fas fa-plus fa-lg ml-5 mt-3 mr-2"></i>Click to Add More Children</div>
          </div>
      </div>
      </div>
      <div id="footer">
      <ButtonNavigation next={next} />
      <EmptyFooterSpace />

      </div>
      </div>
    </>
  );
}

export default PsychologicalEvaluation_siblings;
