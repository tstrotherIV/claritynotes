import React, { useState, useEffect } from "react";
import {
  Label,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

import "./interviews.scss";

function InterviewPg5(props) {
  const [item, setItem] = useState("");
  const [patientInterview_pg5, setPatientInterview_pg5] = useState({
    interview_pg5_a: "",
    interview_pg5_b: "",
    interview_pg5_c: "",
    interview_pg5_d: "",
  });

  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen4, setDropdownOpen4] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);
  const toggle2 = () => setDropdownOpen2((prevState) => !prevState);
  const toggle3 = () => setModal(!modal);
  const toggle4 = () => setDropdownOpen4((prevState) => !prevState);

  const next = "/interview_pg_6";
  const back = "/interview_pg_4";

  const handleFieldChange = (e) => {
    setPatientInterview_pg5({
      ...patientInterview_pg5,
      [e.target.name]: e.target.value,
    });
  };

  const captureFieldName = (e) => {
    const fieldID = e.target.name;
    setItem(fieldID);
  };
  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      interview_pg5_a: patientInterview_pg5.interview_pg5_a,
      interview_pg5_b: patientInterview_pg5.interview_pg5_b,
      interview_pg5_c: patientInterview_pg5.interview_pg5_c,
      interview_pg5_d: patientInterview_pg5.interview_pg5_d,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = [
        "interview_pg5_a",
        "interview_pg5_b",
        "interview_pg5_c",
        "interview_pg5_d",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientInterview_pg5(filtered);
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
            How many times have you been involved with DHR in Alabama?
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
                name="interview_pg5_a"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientInterview_pg5.interview_pg5_a}
              />
              <div className="ml-1">
                <Dropdown isOpen={dropdownOpen2} toggle={toggle2}>
                  <DropdownToggle color="light" className="dropdown" caret>
                    Please Select
                  </DropdownToggle>
                  <DropdownMenu
                    id={item}
                    name="interview_pg5_b"
                    onChange={handleFieldChange}
                    onClick={captureFieldName}
                    value={patientInterview_pg5.interview_pg5_b}
                  >
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
          </div>
          <h4 className="textWhite centerItem">
            How many times have you been involved with other child protective
            agencies in other states/countries/territories?
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
                name="interview_pg5_c"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientInterview_pg5.interview_pg5_c}
              />
              <div className="ml-1">
                <Dropdown isOpen={dropdownOpen4} toggle={toggle4}>
                  <DropdownToggle color="light" className="dropdown" caret>
                    Please Select
                  </DropdownToggle>
                  <DropdownMenu
                    id={item}
                    name="interview_pg5_d"
                    onChange={handleFieldChange}
                    value={patientInterview_pg5.interview_pg5_d}
                  >
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
            back={back}
            updatePatient={updatePatient}
            patient={props.patientId}
            patientNotes={patientInterview_pg5}
          />
          <TermOfParentalRights
            questionId={item}
            patientId={props.patientId}
            item={item}
          />
        </div>
      </div>
    </>
  );
}

export default InterviewPg5;
