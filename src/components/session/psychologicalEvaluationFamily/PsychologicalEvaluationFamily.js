import React, { useState } from "react";
import { Label } from "reactstrap";
import { Form } from "react-bootstrap";

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
              value={patientParents.patient_father_first_name}
              placeholder="Father First Name"
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
              value={patientParents.patient_father_last_name}
              placeholder="Father Last Name"
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
              value={patientParents.patient_mother_first_name}
              placeholder="Mother First Name"
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
              value={patientParents.patient_mother_last_name}
              placeholder="Mother Last Name"
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
              value={patientParents.patient_guardian_first_name}
              placeholder="Guardian First Name"
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
              value={patientParents.patient_guardian_last_name}
              placeholder="Guardian Last Name"
              />
          </div>
          <div className="d-flex m-4 flex-wrap">
          <Form.Label className="textWhite m-1 col-2 text-right">Gender: </Form.Label>
          <Form.Control 
          as="select" 
          className="col-3" 
          defaultValue={patientParents.patient_guardian_gender}
          onChange={handleFieldChange}
          >
            <option>Please Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Unspecified">Unspecified</option>
          </Form.Control>
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
