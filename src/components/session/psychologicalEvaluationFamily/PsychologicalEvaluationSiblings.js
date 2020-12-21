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


function PsychologicalEvaluation_children(props) {

  const next = "/psychological_evaluation_children";
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);

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
            id="sibFirstName"
            placeholder="Sibling First Name"
          />
        </div>
        <div className="line1">
          <Label className="textWhite title" for="sibLastName">
          </Label>
          <TextareaAutosize            
            className="fieldData col-8"
            type="text"
            id="sibLastName"
            placeholder="Sibling Last Name"
          />
        </div>
        <div className="line1">
          <Label className="textWhite title" for="examplePassword">
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
        <div className="line1 ">
          <Label className="textWhite title" for="dob">DOB</Label>
          <TextareaAutosize            
            className="fieldData col-8"
            type="date"
            id="dob"
            placeholder=""
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

export default PsychologicalEvaluation_children;
