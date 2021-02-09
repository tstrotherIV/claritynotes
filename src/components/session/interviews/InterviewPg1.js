import React, { useState, useEffect } from "react";
import {
  Label,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  Button,
  DropdownMenu,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form,
  FormGroup,
} from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
import GoldNotes from "../../shared/GoldNotes";

import "./interviews.scss";

function InterviewPg1(props) {
  const [item, setItem] = useState("");
  const [patientInterview_pg1, setPatientInterview_pg1] = useState({
    interview_pg1_a: "",
  });

  const next = "/interview_pg_2";
  const back = "/psychological_evaluation_additional_data";

  const [dropdownOpen1, setDropdownOpen1] = useState(false);

  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);

  const handleFieldChange = (e) => {
    setPatientInterview_pg1({
      ...patientInterview_pg1,
      [e.target.name]: e.target.value,
    });
  };

  const captureFieldName = (e) => {
    const fieldID = e.target.name;
    setItem(fieldID);
  };

  const updatePatient = () => {
    const editedPatient = {
      interview_pg1_a: patientInterview_pg1.interview_pg1_a,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = ["interview_pg1_a"];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientInterview_pg1(filtered);
    });
  };

  //Gold Notes Modal
  const [goldNote, setGoldNote] = useState("");
  const [modal, setModal] = useState(false);

  const toggle3 = () => setModal(!modal);

  const createGoldNote = () => {
    const newGoldNote = {
      patientId: props.patientId,
      goldNotes_1a: goldNote.goldNotes_1a
    }
    DataManager.post("goldNotes", newGoldNote).then((data) => {
      setGoldNote(data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
           
          <div className="header">
            <h2 className="textWhite">Interviews</h2>
            <h5 className="textWhite">
              Perspective from [Patient Name, First] [Patient Name, Last]:
            </h5>
            <h4 className="textWhite">
              The following is from [Patient Name, First]’s perspective unless
              otherwise noted.
            </h4>
            <h4 className="textWhite">
              [Patient Name, First], how many times has DHR directly or
              indirectly interacted with you?
            </h4>
          </div>
          <div className="interview_div1">
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id={item}
                name="interview_pg1_a"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientInterview_pg1.interview_pg1_a}
              />
            </div>
          </div>
          {/* <div>
            <div className="div1Fields">
              <div className="in1">
                <Label className="textWhite mr-2" for="firstName">
                  [User Name, First]’s Inference and Observations:
                </Label>
                <Dropdown isOpen={dropdownOpen1} toggle={toggle1}>
                  <DropdownToggle color="light" className="dropdown" caret>
                    Please Select
                  </DropdownToggle>
                  <DropdownMenu
                    id="interview_pg1_b"
                    name="interview_pg1_b"
                    defaultValue={patientInterview_pg1.interview_pg1_b}
                    onChange={handleFieldChange}
                  >
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem>Some Action</DropdownItem>
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

              <div>
                <Form inline onSubmit={(e) => e.preventDefault()}>
                  <Button color="danger" onClick={toggle3}>
                    Add Gold Notes
                  </Button>
                </Form>
                <Modal
                  isOpen={modal}
                  toggle={toggle3}
                  // className={className}
                  backdrop="true"
                  // keyboard={keyboard}
                >
                  <ModalHeader toggle={toggle3}>Gold Note</ModalHeader>
                  <ModalBody>
                    <div className="interview_line1">
                      <Label className=" interview_title" for="">
                        Give the note a Title: 
                      </Label>
                      <TextareaAutosize
                        className="interview_fieldData"
                        type="text"
                        id="goldNotes_1a"
                        name="goldNotes_1a"
                        // onChange={handleFieldChange}
                        // onClick={captureFieldName}
                      />
                    </div>
                    <GoldNotes />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={toggle3}>
                      Save Note
                    </Button>{" "}
                    <Button color="secondary" onClick={toggle3}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
            </div>
          </div> */}
        </div>
        <div id="footer">
          <ButtonNavigation
            next={next}
            back={back}
            updatePatient={updatePatient}
            patient={props.patientId}
            patientNotes={patientInterview_pg1}
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

export default InterviewPg1;
