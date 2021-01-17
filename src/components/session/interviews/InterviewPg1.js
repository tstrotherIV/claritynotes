import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
// import GoldNotes from "../../shared/GoldNotes";

import "./interviews.scss";

function InterviewPg1(props) {
  const [item, setItem] = useState("");
  const [patientNotes, setPatientNotes] = useState("");
  const [patientInterview_pg1, setPatientInterview_pg1] = useState({
    interview_pg1_a: "",
  });

  const next = "/interview_pg_2";

  const handleFieldChange = (e) => {
    setPatientInterview_pg1({
      ...patientInterview_pg1,
      [e.target.name]: e.target.value,
    });
  };

  const handlePatientNotesChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    const editedNote = {
      id: patientNotes.id,
      [name]: value,
    };

    DataManager.update("patientNotes", editedNote).then((data) => {
      setPatientNotes(data);
    });
  };

  const createResponse = (e) => {
    const fieldID = e.target.name;
    DataManager.getQuestionPatientNotes(props.patientId, fieldID).then(
      (patientNotesResponses) => {
        if (patientNotesResponses[0] === undefined) {
          const newNote = {
            patientId: props.patientId,
            questionId: fieldID,
            t1a: "",
            t2a: false,
            t2b: false,
            t2c: false,
            t2d: false,
            t2e: false,
            t2f: false,
            t2g: false,
            t2h: false,
            t2i: false,
            t2j: false,
            t2k: false,
            t2l: false,
            t2m: false,
            t2n: false,
            t2o: false,
            t3a: false,
            t3b: false,
            t3c: false,
            t3d: false,
            t3e: false,
            t3f: false,
            t3g: false,
            t4a: false,
            t4b: false,
            t4c: false,
            t4d: false,
            t4e: false,
            t4f: false,
            t4g: false,
            t4h: false,
            t4i: false,
          };
          DataManager.post("patientNotes", newNote).then((data) => {
            setPatientNotes(data);
            setItem(fieldID);
          });
        } else {
          setPatientNotes(patientNotesResponses[0]);
          setItem(fieldID);
        }
      }
    );
  };

  const updatePatient = () => {
    const editedPatient = {
      id: props.patientId,
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
                onClick={createResponse}
                value={patientInterview_pg1.interview_pg1_a}
              />
            </div>
          </div>
          <div>
            <div className="div1Fields">
              {/* <div className="in1">
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
            </div> */}

              {/* <GoldNotes /> */}
            </div>
          </div>
        </div>
        <div id="footer">
          <ButtonNavigation
            next={next}
            updatePatient={updatePatient}
            patient={props.patientId}
            patientNotes={patientInterview_pg1}
          />
          <TermOfParentalRights
            questionId={item}
            patientId={props.patientId}
            notesData={patientNotes}
            handlePatientNotesChange={handlePatientNotesChange}
          />
        </div>
      </div>
    </>
  );
}

export default InterviewPg1;
