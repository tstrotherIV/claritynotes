import React, { useState } from "react";
import "./interviews.css";
import {
  Label,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Interview_Pg1(props) {
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);
  const toggle2 = () => setIsOpen(!isOpen);

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
        <h1 className="textWhite">Interviews</h1>
        <br></br>
        <h5 className="textWhite">
          Perspective from [Patient Name, First] [Patient Name, Last]:
        </h5>
        <br></br>
        <h4 className="textWhite">
          The following is from [Patient Name, First]’s perspective unless
          otherwise noted.
        </h4>
        <br></br>
        <h4 className="textWhite">
          [Patient Name, First], how many times has DHR directly or indirectly
          interacted with you?
        </h4>
        <br></br>
      </div>
      <section className="interview_section1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <Input
            className="interview_fieldData"
            type="text"
            name=""
            id=""
            placeholder=""
          />
        </div>
      </section>
      <section>
        <div className="section1Fields">
          <div className="line1">
            <Label className="textWhite mr-2" for="firstName">
              [User Name, First]’s Inference and Observations:
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
            <Label className="textWhite title" for="caseNumber">
              Additional Notes:
            </Label>
            <Input
              className="fieldData"
              type="text"
              name="caseNumber"
              id="caseNumber"
              placeholder=""
            />
          </div>
        </div>
      </section>
      <section className="buttonSection mt-5" id="">
        <Button
          color="info"
          className="button"
          onClick={() => {
            props.history.push(`/psychological_evaluation_children`);
          }}
        >
          Previous
        </Button>
        <Button color="info" className="button">
          Save
        </Button>
        <Button color="info" className="button">
          Submit
        </Button>
        <Button
          color="info"
          className="button"
          onClick={() => {
            props.history.push(`/psychological_evaluation_consent`);
          }}
        >
          Next
        </Button>
      </section>
      <section className="d-flex justify-content-center">
        <DropdownButton
          as={ButtonGroup}
          key="up"
          id="{`dropdown-button-drop-up`}"
          drop="up"
          variant="light"
          title={` Termination of Parental Rights Criteria `}
          className="terminationButton"
        >
          <section className="checkBoxContainer">
            <div className="m-2">
              <h4>Termination of Parental Rights Criteria</h4>
            </div>
            <div className="checkBoxRow">
              <div className="checkBoxSection">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">Unforeseeable Future Change</div>
              </div>
              <div className="checkBoxSection">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">Rehabilitation Failure</div>
              </div>
              <div className="checkBoxSection">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">Failure to Maintain Material Needs</div>
              </div>
            </div>
            <div className="checkBoxRow">
              <div className="checkBoxSection">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">Conviction and Imprisonment of Felony</div>
              </div>
              <div className="checkBoxSection">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">Serious Physical Injury to child</div>
              </div>
              <div className="checkBoxSection">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">Failure to Maintain Consistent Contact</div>
              </div>
            </div>
            <div className="checkBoxRow">
              <div className="checkBoxSection">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">Emotional Illness and mental deficiency</div>
              </div>
              <div className="checkBoxSection">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">Willful Neglect/Abandonment</div>
              </div>
              <div className="checkBoxSection">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">Parent has tortured, abused, cruelly beaten, or</div>
              </div>
            </div>
            <div className="checkBoxRow">
              <div className="checkBoxSection">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">Unable to Discharge Childcare Responsibilities</div>
              </div>
              <div className="checkBoxSection">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">Loss of Custody of Other Child(ren)</div>
              </div>
              <div className="checkBoxSection">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">otherwise maltreated the child</div>
              </div>
            </div>
            <div className="checkBoxRow">
              <div className="checkBoxSection">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">Excessive Use of a Controlled Substance</div>
              </div>
              <div className="checkBoxSection">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">Serious Bodily Injury of Child</div>
              </div>
              <div className="checkBoxSection">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">Lack of Effort to Adjust to His/Her Circumstances</div>
              </div>
            </div>
          </section>
        </DropdownButton>
      </section>
    </>
  );
}

export default Interview_Pg1;
