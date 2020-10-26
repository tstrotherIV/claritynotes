import React, { useState } from "react";
import "./psychologicalEvaluation.css";
import {
  Label,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function PsychologicalEvaluation(props) {
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);

  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);
  const toggle2 = () => setDropdownOpen2((prevState) => !prevState);

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
      <section className="">
        <div className="section1Fields">
          <div className="line1">
            <Label className="textWhite title" for="firstName">
              Name
            </Label>
            <Input
              className="fieldData"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="line1">
            <Label className="textWhite title" for="caseNumber">
              Case #
            </Label>
            <Input
              className="fieldData"
              type="text"
              name="caseNumber"
              id="caseNumber"
              placeholder="Case Number"
            />
          </div>
        </div>
        <div className="section1Fields">
          <div className="line1">
            <Label className="textWhite title" for=""></Label>
            <Input
              className="fieldData"
              type="text"
              name="middleName"
              id="middleName"
              placeholder="Middle Name"
            />
          </div>
          <div className="line1">
            <Label className="textWhite title" for="examplePassword">
              Eval 1 Date
            </Label>
            <Input
              className="fieldData"
              type="date"
              name="date"
              id="date"
              placeholder=""
            />
          </div>
        </div>
        <div className="section1Fields">
          <div className="line1">
            <Label className="textWhite title" for=""></Label>
            <Input
              className="fieldData"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
            />
          </div>
          <div className="line1 evalDate">
            <Label className="textWhite title" for=""></Label>
            <Button className="evalButton">Add Eval Date</Button>
          </div>
        </div>
        <div className="section1Fields">
          <div className="line1">
            <Label className="textWhite title" for="">
              DOB
            </Label>
            <Input
              className="fieldData"
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              placeholder=""
            />
          </div>
          <div className="line1">
            <Label className="textWhite title" for="examplePassword">
              County
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
        </div>
        <div className="section1Fields">
          <div className="line1">
            <Label className="textWhite title" for="examplePassword">
              Referral
            </Label>
            <Dropdown isOpen={dropdownOpen2} toggle={toggle2}>
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
            <Label className="textWhite title" for="firstName">
              Interview Time
            </Label>
            <Input
              className="fieldData"
              type="time"
              name="firstName"
              id="firstName"
              placeholder=""
            />
          </div>
        </div>
        <div className="section1Fields">
          <div className="line1">
            <Label className="textWhite title" for="firstName">
              Intake Time
            </Label>
            <Input
              className="fieldData"
              type="time"
              name="firstName"
              id="firstName"
              placeholder=""
            />
          </div>
          <div className="line1">
            <Label className="textWhite title" for="firstName">
              Office Time
            </Label>
            <Input
              className="fieldData"
              type="time"
              name="firstName"
              id="firstName"
              placeholder=""
            />
          </div>
        </div>
        <div className="section1Fields">
          <div className="line1">
            <Label className="textWhite title" for="firstName">
              Report Writing
            </Label>
            <Input
              className="fieldData"
              type="text"
              name="firstName"
              id="firstName"
              placeholder=""
            />
          </div>
          <div className="line1"></div>
        </div>
      </section>
      <section className="buttonSection mt-5">
        <Button color="info" className="button">Previous</Button>
        <Button color="info" className="button">Save</Button>
        <Button color="info" className="button">Submit</Button>
        <Button color="info" className="button">Next</Button>
      </section>
    </>
  );
}

export default PsychologicalEvaluation;
