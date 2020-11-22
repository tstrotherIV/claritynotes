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
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import "./interviews.scss";

function InterviewPg1(props) {

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
          <h5 className="textWhite">
            Perspective from [Patient Name, First] [Patient Name, Last]:
          </h5>
          <h4 className="textWhite">
            The following is from [Patient Name, First]’s perspective unless
            otherwise noted.
          </h4>
          <h4 className="textWhite">
            [Patient Name, First], how many times has DHR directly or indirectly
            interacted with you?
          </h4>
        </div>
        <div className="interview_div1">
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
        </div>
        <div>
          <div className="div1Fields">
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
              <div className="m-3">
                <Button color="light" onClick={toggle3}>
                  Add Notes to Gold
                </Button>
                <Modal
                  isOpen={modal}
                  fade={false}
                  toggle={toggle3}
                >
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
      </div>
      <div id="footer">
        <div className="buttonSection">
          <Button
            color="info"
            className="button"
            onClick={() => {
              props.history.push(`/psychological_evaluation_additional_data`);
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
              props.history.push(`/interview_pg_2`);
            }}
          >
            Next
          </Button>
          <div className="idBox textWhite p-3">
              <div className="displayNone">Existing Patient: [Case #]</div>
              <div className="displayNone">Patient ID: [Patient ID]</div>
            </div>
        </div>
        <TermOfParentalRights />
      </div>
    </div>
    </>
  );
}

export default InterviewPg1;
