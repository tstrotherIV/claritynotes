import React, { useState } from "react";
import {
  Label,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/termOfParentalRights';
import "./interviews.scss";

function InterviewPg7(props) {
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);
  const toggle3 = () => setModal(!modal);

  return (
    <>
       <div id="page-container">
      <div id="content-wrap">
      <Heading />
      <div className="header">
        <h1 className="textWhite">Interviews</h1>
      </div>
      <h4 className="textWhite centerItem">
      How do you typically discipline your child when they misbehave?
      </h4>
      <section className="interview_section1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <Input
            className="interview_fieldData"
            type="text"
            id=""
          />
        </div>
      </section>
      <h4 className="textWhite centerItem">
      How are you a good fit interpersonally (give and take, interactive, relationship style)?
      </h4>
      <section className="interview_section1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <Input
            className="interview_fieldData"
            type="text"
            id=""
          />
        </div>
      </section>
      <section>
        <div className="section1Fields">
          <div className="in1">
            <h3 className="textWhite">Responsiveness</h3>
            <div className="textWhite containText">
              Is the parent sensitive to and has picked up on the child’s
              disposition, personality, spirit? Is the parent willing to be
              sensitive to the child’s subtle needs to ensure the child is a
              success?)
            </div>
          </div>
          <div className="in1">
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
            <div>
              <Button color="light" className="m-3">
                Edit List
              </Button>
            </div>
          </div>
          <div className="in1">
            <Label className="textWhite title" for="caseNumber">
              Additional Notes:
            </Label>
            <Input
              className="fieldData2"
              type="text"
              id="caseNumber"
            />
            <div>
              <div className="m-3">
                <Button color="light" onClick={toggle3}>
                  Add Notes to Gold
                </Button>
                <Modal isOpen={modal} fade={false} toggle={toggle3}>
                  <ModalHeader toggle={toggle3}>Add Notes to Gold</ModalHeader>
                  <ModalBody>
                    <div className="in1">
                      <Label className=" title" for="caseNumber">
                        Additional Notes:
                      </Label>
                      <Input
                        className=""
                        type="text"
                        id="caseNumber"
                      />
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="info" onClick={toggle3}>
                      Cancel
                    </Button>{" "}
                    <Button color="info" onClick={toggle3}>
                      Save
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </section>
         </div>
      <div id="footer">
      <section className="buttonSection">
        <Button
          color="info"
          className="button"
          onClick={() => {
            props.history.push(`/interview_pg_5`);
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
            props.history.push(`/interview_pg_8`);
          }}
        >
          Next
        </Button>
      </section>
      <TermOfParentalRights />
      </div>
    </div>
    </>
  );
}

export default InterviewPg7;
