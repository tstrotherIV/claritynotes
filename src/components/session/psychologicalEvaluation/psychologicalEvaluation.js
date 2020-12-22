import React, {  useState, useRef } from "react";
import {
  Label,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  Input
} from "reactstrap";
import Heading from '../../shared/PsychologicalHeading.js';
import TextareaAutosize from 'react-textarea-autosize';
import EmptyFooterSpace from './../../shared/EmptyFooterSpace';

import "./psychologicalEvaluation.scss";


function PsychologicalEvaluation(props) {


  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);

  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);
  const toggle2 = () => setDropdownOpen2((prevState) => !prevState);

  const firstName = useRef()
  const middleName = useRef()
  const lastName = useRef()
  const DOBvalue = useRef()


  return (

  <div>
  <div id="page-container">
  <div id="content-wrap">
  <Heading /> 
  <div className="minWidthContainer">   
      <div className="header">
        <h2 className="textWhite mt-2">Please Confirm or Update Information</h2>
      </div>
      <Form>
     <div className="row no-gutters text-center d-flex justify-content-center minWidthContainer">
        <div className="col-6">
          <div className="d-flex m-4">
            <Label className="textWhite labelWidth" for="firstName">
              Name
            </Label>
            <TextareaAutosize              
              ref={firstName}
              className="fieldData col-8"
              type="text"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="d-flex m-4">
            <Label className="textWhite labelWidth" for="middleName"></Label>
            <TextareaAutosize             
              ref={middleName}
              className="fieldData col-8"
              type="text"
              id="middleName"
              placeholder="Middle Name"
              />
          </div>
          <div className="d-flex justify-items-center m-4">
            <Label className="textWhite labelWidth" for="lastName"></Label>
            <TextareaAutosize              
              ref={lastName}
              className="fieldData col-8"
              type="text"
              id="lastName"
              placeholder="lastName"
            />
          </div>
          <div className="d-flex justify-items-center m-4">
            <Label className="textWhite labelWidth " for="dateOfBirth">
              DOB
            </Label>
            <Input              
              ref={DOBvalue}
              type="date"
              className=" col-3 dateField p-3 text-center"
              id="dateOfBirth"
            />
          </div>
          <div className="d-flex justify-items-center m-4">
            <Label className="textWhite labelWidth" for="examplePassword">
              Referral
            </Label>
            <Dropdown isOpen={dropdownOpen2} toggle={toggle2} className="col-8">
              <DropdownToggle color="light" className="dropdown text-center" caret>
                Please Select
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Foo Action</DropdownItem>
                <DropdownItem>Bar Action</DropdownItem>
                <DropdownItem>Quo Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="d-flex justify-items-center m-4">
            <Label className="textWhite labelWidth" for="officeTime">
              Office Time
            </Label>
            <Input            
              className="col-3 dateField p-3 text-center"
              type="time"
              id="officeTime"
            />
          </div>
          <div className="d-flex justify-items-center m-4">
            <Label className="textWhite labelWidth" for="reportWriting">
              Report Writing
            </Label>
            <TextareaAutosize              
              className="fieldData col-8"
              type="text"
              id="reportWriting"
            />
          </div>
          </div>     
  {/* --------------------------------------------- */}    
  <div className="col-6"> 
          <div className="d-flex justify-items-center m-4">
            <Label className="textWhite labelWidth" for="caseNumber">
              Case #
            </Label>
            <TextareaAutosize              
              className="fieldData col-8"
              type="text"
              id="caseNumber"
              placeholder="Case Number"
            />
          </div>
        <div>
          <div className="d-flex justify-items-center m-4">
            <Label className="textWhite labelWidth" for="examplePassword">
              Eval 1 Date
            </Label>
            <div>
            <Input               
              className="fieldData p-3"
              type="date"
              id="date"
            />          
              <Button className="m-2">Add Eval Date</Button>
              </div>
          </div>
        </div>
          <div className="textWhite d-flex justify-items-center m-4">
            <Label className="textWhite labelWidth" for="examplePassword">
              County
            </Label>
            <Dropdown isOpen={dropdownOpen1} toggle={toggle1} className="col-8">
              <DropdownToggle color="light" className="dropdown" caret>
                Please Select
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Foo Action</DropdownItem>
                <DropdownItem>Bar Action</DropdownItem>
                <DropdownItem>Quo Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>         
          <div className="textWhite d-flex justify-items-center m-4">
            <Label className="labelWidth" for="intakeTime">
              Interview Time
            </Label>
            <Input             
              className="fieldData col-4 p-3 text-center"
              type="time"
              id="intakeTime"
            />
          </div>
          <div className="textWhite d-flex justify-items-center m-4">
            <Label className="textWhite labelWidth" for="inTakeTime">
              Intake Time
            </Label>
            <Input             
              className="fieldData col-4 p-3 text-center"
              type="time"
              id="inTakeTime"
              />
          </div>
        </div>
        </div>
     </Form>
        </div>
      <div id="footer">
      <div className="buttonSection">
      <div className="idBox textWhite p-3">
      </div>
      <Button color="info" className="button" onClick={() => {
        props.history.push(`/sessionStep1`);
      }}>Previous</Button>
        <Button color="info" className="button">Save</Button>
        <Button color="info" className="button" type="submit">Submit</Button>
        <Button color="info" className="button" onClick={() => {
          props.history.push(`/psychological_evaluation_family`);
        }}>Next</Button>
        <div className="idBox textWhite p-3">
      </div>
      </div>
      <EmptyFooterSpace />
      </div>
      </div>
      </div>
    </div>
  )
}



export default PsychologicalEvaluation;