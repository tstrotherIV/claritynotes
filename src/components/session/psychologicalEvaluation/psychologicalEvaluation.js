import React, {  useState, useEffect } from "react";
import {
  Label,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form
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

 
  const PATIENT_INFO = localStorage.getItem('patient')
  ? JSON.parse(localStorage.getItem('patient'))
  : []

  

  const [patient, setPatient] = useState(PATIENT_INFO)

  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')

 
  function handleFirstNameChange(event) {
    console.log('firstName', event.target.value)
    setFirstName(event.target.value)
  }

  function handleMiddleNameChange(event) {
    console.log('middleName', event.target.value)
    setMiddleName(event.target.value)
  }

  function handleLastNameChange(event) {
    console.log('lastName', event.target.value)
    setLastName(event.target.value)
  }

  const handleSubmitForm = event => {
    event.preventDefault()
  const patient = {firstName, middleName } 

  setPatient([...patient])
  }

  useEffect(() => {
    localStorage.setItem('patient', JSON.stringify(patient))
  }, [patient])

 
  return (

<div>
  <div id="page-container">
  <div id="content-wrap">
  <Heading /> 
  <div className="minWidthContainer">   
      <div className="header">
        <h2 className="textWhite mt-2">Please Confirm or Update Information</h2>
      </div>
      <Form onSubmit={handleSubmitForm}>
     <div className="row no-gutters text-center d-flex justify-content-center minWidthContainer">
        <div className="col-6">
          <div className="d-flex m-4">
            <Label className="textWhite labelWidth" for="firstName">
              Name
            </Label>
            <TextareaAutosize              
              className="fieldData col-8"
              type="text"
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={handleFirstNameChange}

            />
          </div>
          <div className="d-flex m-4">
            <Label className="textWhite labelWidth" for="middleName"></Label>
            <TextareaAutosize             
              className="fieldData col-8"
              type="text"
              id="middleName"
              placeholder="Middle Name"
              value={middleName}
              onChange={handleMiddleNameChange}
            />
          </div>
          <div className="d-flex justify-items-center m-4">
            <Label className="textWhite labelWidth" for="lastName"></Label>
            <TextareaAutosize              
              className="fieldData col-8"
              type="text"
              id="lastName"
              placeholder="lastName"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>
          <div className="d-flex justify-items-center m-4">
            <Label className="textWhite labelWidth " for="dateOfBirth">
              DOB
            </Label>
            <TextareaAutosize              
              className="fieldData col-8"
              type="date"
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
          <div className="d-flex justify-items-center m-4">
            <Label className="textWhite labelWidth" for="officeTime">
              Office Time
            </Label>
            <TextareaAutosize              
              className="fieldData col-8"
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
            <TextareaAutosize               
              className="fieldData col-5"
              type="date"
              id="date"
            />          
              <Button className="col-6 m-2">Add Eval Date</Button>
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
          <div className="textWhite d-flex justify-items-center m-4">
            <Label className="labelWidth" for="intakeTime">
              Interview Time
            </Label>
            <TextareaAutosize              
              className="fieldData col-8"
              type="time"
              id="intakeTime"
            />
          </div>
          <div className="textWhite d-flex justify-items-center m-4">
            <Label className="textWhite labelWidth" for="inTakeTime">
              Intake Time
            </Label>
            <TextareaAutosize              
              className="fieldData col-8"
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