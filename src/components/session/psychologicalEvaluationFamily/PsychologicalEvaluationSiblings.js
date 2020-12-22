import React, { useState } from "react";
import "./psychologicalEvaluationFamily.scss";
import { Input, Label } from "reactstrap";
import { Form } from "react-bootstrap";
import Heading from '../../shared/PsychologicalHeading';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';
import EmptyFooterSpace from './../../shared/EmptyFooterSpace';


function PsychologicalEvaluationSiblings(props) {

  const [patientSiblings, setPatientSiblings] = useState({
    patient_only_child: false,
    sibling_first_name: "",
    sibling_last_name: "",
    sibling_gender: "",
    sibling_dob: "",
    patient_id: "",
  })

  const next = "/psychological_evaluation_children";

  const handleFieldChange = (e) => {
    setPatientSiblings({ ...patientSiblings, [e.target.name]: e.target.value});
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
        <div className="">
          <Input            
            className=""
            type="checkbox"
            id="onlyChild"
            checked={patientSiblings.patient_only_child}
            onChange={(e)=> {setPatientSiblings(e.target.checked)}}
          />
          <Label className="textWhite title" for="onlyChild">
          Patient is an Only Child
          </Label>
        </div>
        <div className="line1">
          <Label className="textWhite title" for="sibFirstName">
            Siblings
          </Label>
          <TextareaAutosize            
            className="fieldData col-8"
            type="text"
            id="sibling_first_name"
            name="sibling_first_name"
            onChange={handleFieldChange}
            value={patientSiblings.sibling_first_name}
            placeholder="Sibling First Name"
          />
        </div>
        <div className="line1">
          <Label className="textWhite title" for="sibLastName">
          </Label>
          <TextareaAutosize            
            className="fieldData col-8"
            type="text"
            id="sibling_last_name"
            name="sibling_last_name"
            onChange={handleFieldChange}
            value={patientSiblings.sibling_last_name}
            placeholder="Sibling Last Name"
          />
        </div>
        <div className="line1">
          <Form.Label className="textWhite title fieldData">Gender </Form.Label>
          <Form.Control 
          as="select" 
          className="fieldData col-6" 
          defaultValue={patientSiblings.sibling_gender}
          onChange={handleFieldChange}
          >
            <option value="null">Please Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Unspecified">Unspecified</option>
          </Form.Control>
          </div>
        <div className="line1 d-flex flex-wrap">
          <Label className="textWhite title" for="dob">DOB</Label>
          <Input         
            className="fieldData col-6 text-center"
            type="date"
            id="dob"
    
          />
        </div>
        <div className="m-4">
            <div className="textWhite"><i className="fas fa-plus fa-lg mr-2"></i>Click to Add More Siblings</div>
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

export default PsychologicalEvaluationSiblings;
