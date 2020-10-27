import React, { useState } from "react";
import "./psychologicalEvaluation_family.css";
import {
  Label,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function PsychologicalEvaluation_spouse(props) {
  const [dropdownOpen1, setDropdownOpen1] = useState(false);

  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);

  return (
    <>
      <h1 className="titleFontSize whiteBgd d-flex justify-content-center">
        Psychological Evaluation
      </h1>
      <section className="wrapContent mt-5">
        <div className="textWhite m-2 p-2">
          [Patient Name, First] [Patient Name, Last]
        </div>
        <div className="textWhite m-2 p-2">DOB: [Patient DOB]</div>
        <div className="textWhite m-2 p-2">Patient ID: [Patient ID]</div>
        <div className="textWhite m-2 p-2">Existing Patient: [Case #]</div>
      </section>
      <div className="header">
        <h1 className="textWhite">Please Confirm or Update Information</h1>
      </div>
      <section className="siblingsFields">
        <div className="line1">
        <Label className="textWhite title" for="examplePassword">
        Marital Status
          </Label>
          <Dropdown isOpen={dropdownOpen1} toggle={toggle1}>
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
        <div className="line1">
          <Label className="textWhite title" for="">
            Spouse
          </Label>
          <Input
            className="fieldData"
            type="text"
            name=""
            id=""
            placeholder="Spouse First Name"
          />
        </div>
        <div className="line1">
          <Label className="textWhite title" for="firstName">
          </Label>
          <Input
            className="fieldData"
            type="text"
            name=""
            id=""
            placeholder="Spouse Last Name"
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
        <div className="line1">
          <Label className="textWhite title" for="">DOB</Label>
          <Input
            className="fieldData"
            type="date"
            name="lastName"
            id="lastName"
            placeholder="Mother Last Name"
          />
        </div>
        <div className="line1 evalDate">
          <Label className="textWhite title" for=""></Label>
          <Button className="evalButton">Click to Add More Guardians</Button>
        </div>
      </section>
      <section className="buttonSection mt-5" id="footer">
      <Button color="info" className="button" onClick={() => {
            props.history.push(`/psychological_evaluation_children`);
          }}>Previous</Button>
        <Button color="info" className="button">
          Save
        </Button>
        <Button color="info" className="button">
          Submit
        </Button>
        <Button color="info" className="button">
          Next
        </Button>
      </section>
    </>
  );
}

export default PsychologicalEvaluation_spouse;