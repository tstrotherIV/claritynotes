import React, { useState } from "react";
import { Label, Input } from "reactstrap";
import { Form } from "react-bootstrap";
import Heading from '../../shared/PsychologicalHeading';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';
import EmptyFooterSpace from './../../shared/EmptyFooterSpace';
import "./psychologicalEvaluationFamily.scss";

function PsychologicalEvaluationSpouse(props) {

  const next = "/psychological_evaluation_consent";
  

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
          <Form.Label className="textWhite title">Marital Status </Form.Label>
          <Form.Control 
          as="select" 
          className="fieldData col-6" 
          // defaultValue={patientSiblings.sibling_gender}
          // onChange={handleFieldChange}
          >
            <option value="null">Please Select</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Separated">Separated</option>
          </Form.Control>
          </div>
        <div className="line1">
          <Label className="textWhite title" for="spouseFirstName">
            Spouse
          </Label>
          <TextareaAutosize            
            className="fieldData"
            id="spouseFirstName"
            placeholder="Spouse First Name"
          />
        </div>
        <div className="line1">
          <Label className="textWhite title" for="spouseLastName">
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="spouseLastName"
            placeholder="Spouse Last Name"
          />
        </div>
        <div className="line1">
          <Form.Label className="textWhite title fieldData">Gender </Form.Label>
          <Form.Control 
          as="select" 
          className="fieldData col-6" 
          // defaultValue={patientSiblings.sibling_gender}
          // onChange={handleFieldChange}
          >
            <option value="null">Please Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Unspecified">Unspecified</option>
          </Form.Control>
          </div>
        <div className="line1">
          <Label className="textWhite title" for="">DOB</Label>
          <Input            
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
      <EmptyFooterSpace />

      </div>
      </div>
    </>
  );
}

export default PsychologicalEvaluationSpouse;
