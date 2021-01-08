import React, { useState, useEffect } from "react";
import {
  Label,
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
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
import convertID from "../../../helpers/formFieldIdConverter";

import "./interviews.scss";

function InterviewPg7(props) {
  const [item, setItem] = useState("");
  const [patientInterview_pg7, setPatientInterview_pg7] = useState({
    interview_pg7_a: "",
    interview_pg7_b: "",
  });

  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);
  const toggle3 = () => setModal(!modal);

  const next = "/interview_pg_8";

  const handleFieldChange = (e) => {
    setPatientInterview_pg7({
      ...patientInterview_pg7,
      [e.target.name]: e.target.value,
    });
  };

  const convertIDfunc = (e) => {
    const fieldID = convertID.convertID(e);
    setItem(fieldID);
    console.log("input clicked");
  };

  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      id: props.patientId,
      interview_pg7_a: patientInterview_pg7.interview_pg7_a,
      interview_pg7_b: patientInterview_pg7.interview_pg7_b,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = ["interview_pg7_a", "interview_pg7_b"];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientInterview_pg7(filtered);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <Heading />
          <div className="header">
            <h2 className="textWhite">Interviews</h2>
          </div>
          <h4 className="textWhite centerItem">
            How do you typically discipline your child when they misbehave?
          </h4>
          <div className="interview_div1">
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id={item}
                name="interview_pg7_a"
                onChange={handleFieldChange}
                value={patientInterview_pg7.interview_pg7_a}
              />
            </div>
          </div>
          <h4 className="textWhite centerItem">
            How are you a good fit interpersonally (give and take, interactive,
            relationship style)?
          </h4>
          <div className="interview_div1">
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id={item}
                name="interview_pg7_b"
                onChange={handleFieldChange}
                value={patientInterview_pg7.interview_pg7_b}
              />
            </div>
          </div>
          <div>
            <div className="div1Fields">
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
                <TextareaAutosize
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
                      <ModalHeader toggle={toggle3}>
                        Add Notes to Gold
                      </ModalHeader>
                      <ModalBody>
                        <div className="in1">
                          <Label className=" title" for="caseNumber">
                            Additional Notes:
                          </Label>
                          <TextareaAutosize
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
        </div>
        <div id="footer">
          <ButtonNavigation
            next={next}
            updatePatient={updatePatient}
            patient={props.patientId}
            patientFamily_pg1={patientInterview_pg7}
          />
          <TermOfParentalRights />
        </div>
      </div>
    </>
  );
}

export default InterviewPg7;
