import React, { useState } from "react";
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
import EmptyFooterSpace from './../../shared/EmptyFooterSpace';


function PsychologicalEvaluation_family(props) {

const [patientParents, setPatientParents] = useState({
  patient_father_first_name: "",
  patient_father_last_name: "",
  patient_mother_first_name: "",
  patient_mother_last_name: "",
  patient_guardian_first_name: "",
  patient_guardian_last_name: "",
  patient_guardian_gender: "",
})

  const next = "/psychological_evaluation_siblings";
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);

const handleFieldChange = (e) => {
  setPatientParents({ ...patientParents, [e.target.name]: e.target.value});
}

  return (
    <>
     <div id="page-container">
    <div id="content-wrap">
      <Heading />   
      <div className="minWidthContainer">  
      <div className="header">
        <h1 className="textWhite mt-2">Please Confirm or Update Information</h1>
      </div>
      <div className="row no-gutters d-flex justify-content-center align-content-center">
          <div className="col-6">
          <div className="d-flex m-4">
            <Label className="textWhite labelWidth" for="firstName">
              Parents
            </Label>
            <TextareaAutosize              
              className="fieldData col-8"
              type="text"
              id="patient_father_first_name"
              name="patient_father_first_name"
              onChange={handleFieldChange}
              placeholder="Father First Name"
              value={patientParents.patient_father_first_name}
            />
          </div>
          <div className="d-flex m-4">
            <Label className="textWhite labelWidth" for=""></Label>
            <TextareaAutosize              
              className="fieldData col-8"
              type="text"
              id="patient_father_last_name"
              name="patient_father_last_name"
              onChange={handleFieldChange}
              placeholder="Father Last Name"
              value={patientParents.patient_father_last_name}
            />
          </div>
          <div className="d-flex m-4">
            <Label className="textWhite labelWidth" for=""></Label>
            <TextareaAutosize              
              className="fieldData col-8"
              type="text"
              id="patient_mother_first_name"
              name="patient_mother_first_name"
              onChange={handleFieldChange}
              placeholder="Mother First Name"
              value={patientParents.patient_mother_first_name}
            />
            </div>
             <div className="d-flex m-4">
            <Label className="textWhite labelWidth" for=""></Label>
            <TextareaAutosize              
              className="fieldData col-8"
              type="text"
              id="patient_mother_last_name"
              name="patient_mother_last_name"
              onChange={handleFieldChange}
              placeholder="Mother Last Name"
              value={patientParents.patient_mother_last_name}
            />
          </div>
            </div>
     
{/* --------------------------------------------- */}    
<div className="col-6">

          <div className="d-flex m-4">
            <Label className="textWhite labelWidth" for="caseNumber">
              Other Guardians
            </Label>
            <TextareaAutosize              
              className="fieldData col-8"
              type="text"
              id="patient_guardian_first_name"
              name="patient_guardian_first_name"
              onChange={handleFieldChange}
              placeholder="Guardian First Name"
              value={patientParents.patient_guardian_first_name}
            />
          </div>
          <div className="d-flex m-4">
            <Label className="textWhite labelWidth" for="examplePassword"></Label>
            <TextareaAutosize              
              className="fieldData col-8"
              type="text"
              id="patient_guardian_last_name"
              name="patient_guardian_last_name"
              onChange={handleFieldChange}
              placeholder="Guardian Last Name"
              value={patientParents.patient_guardian_last_name}
              />
          </div>
          <div className="d-flex m-4">
            <Label className="textWhite labelWidth" for="examplePassword">
              Gender
            </Label>
            <Dropdown isOpen={dropdownOpen1} toggle={toggle1} className="col-8">
              <DropdownToggle color="light" 
                className="dropdown" caret>
                Please Select
              </DropdownToggle>
              <DropdownMenu 
                id="patient_guardian_gender"
                name="patient_guardian_gender"
                onChange={handleFieldChange}
                value={patientParents.patient_guardian_gender}>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem>Some Action</DropdownItem>
                <DropdownItem disabled>Action (disabled)</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Foo Action</DropdownItem>
                <DropdownItem>Bar Action</DropdownItem>
                <DropdownItem>Quo Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="text-center">
            <div className="textWhite"><i className="fas fa-plus fa-lg mr-2"></i>Click to Add More Guardians</div>
          </div>
        </div>
        </div>
        </div>
      <div id="footer"> 
      <ButtonNavigation next={next} />
      <EmptyFooterSpace />
      </div>
      </div>
      </div>

    </>
  );
}

export default PsychologicalEvaluation_family;
