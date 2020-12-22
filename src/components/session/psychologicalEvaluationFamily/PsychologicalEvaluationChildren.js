import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Input, Label } from "reactstrap";

import Heading from '../../shared/PsychologicalHeading';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';
import EmptyFooterSpace from './../../shared/EmptyFooterSpace';
import "./psychologicalEvaluationFamily.scss";

function PsychologicalEvaluation_siblings(props) {

  const next = "/psychological_evaluation_spouse";

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
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="firstName"
            placeholder="Child First Name"
          />
        </div>
        <div className="line1">
          <Label className="textWhite title" for="lastName">
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="lastName"
            placeholder="Child Last Name"
          />
        </div>
        <div className="line1 d-flex flex-wrap">
          <Form.Label className="textWhite title">Gender </Form.Label>
          <Form.Control 
          as="select" 
          className="col-6" 
          // defaultValue={}
          // onChange={handleFieldChange}
          >
            <option>Please Select</option>
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
