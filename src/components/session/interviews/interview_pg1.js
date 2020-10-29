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
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

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
      <section>
        <OverlayTrigger
          trigger="click"
          key='top'
          placement="top"
          overlay={
            <Popover id={`popover-positioned-top`}>
              {/* <Popover.Title as="h3">{`Popover top`}</Popover.Title> */}
              <Popover.Content>
                <div>
                  Content
                </div>
              </Popover.Content>
            </Popover>
          }
        >
          <Button variant="secondary">Termination of Parental Rights Criteria</Button>
        </OverlayTrigger>
      </section>
    </>
  );
}

export default Interview_Pg1;
