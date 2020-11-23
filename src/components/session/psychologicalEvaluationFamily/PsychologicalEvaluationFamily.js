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

function PsychologicalEvaluation_family(props) {
  const [dropdownOpen1, setDropdownOpen1] = useState(false);

  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);

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
            <Input
              className="text-center col-8"
              type="text"
              id="firstName"
              placeholder="Father First Name"
            />
          </div>
          <div className="d-flex m-4">
            <Label className="textWhite labelWidth" for=""></Label>
            <Input
              className="text-center col-8"
              type="text"
              id="middleName"
              placeholder="Father Last Name"
            />
          </div>
          <div className="d-flex m-4">
            <Label className="textWhite labelWidth" for=""></Label>
            <Input
              className="text-center col-8"
              type="text"
              id="dateOfBirth"
              placeholder="Mother First Name"
            />
            </div>
             <div className="d-flex m-4">
            <Label className="textWhite labelWidth" for=""></Label>
            <Input
              className="text-center col-8"
              type="text"
              id="lastName"
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
            <Input
              className="text-center col-8"
              type="text"
              id="caseNumber"
              placeholder="Guardian First Name"
            />
          </div>
          <div className="d-flex m-4">
            <Label className="textWhite labelWidth" for="examplePassword"></Label>
            <Input
              className="text-center col-8"
              type="text"
              name="date"
              id="date"
              placeholder="Guardian Last Name"
              />
          </div>
          <div className="d-flex m-4">
            <Label className="textWhite labelWidth" for="examplePassword">
              Gender
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
          <div className="text-center">
            <div className="textWhite"><i class="fas fa-plus fa-lg mr-2"></i>Click to Add More Guardians</div>
          </div>
        </div>
        </div>
        </div>
      <div id="footer"> 
      <div className="buttonSection">
      <div className="idBox textWhite p-3">
      </div>
      <Button color="info" className="button" onClick={() => {
            props.history.push(`/psychological_evaluation`);
          }}>Previous</Button>
        <Button color="info" className="button">
          Save
        </Button>
        <Button color="info" className="button">
          Submit
        </Button>
        <Button color="info" className="button" onClick={() => {
            props.history.push(`/psychological_evaluation_siblings`);
        }}>Next</Button>
      <div className="idBox textWhite p-3"></div>
      </div>
      </div>
      </div>
      </div>

    </>
  );
}

export default PsychologicalEvaluation_family;
