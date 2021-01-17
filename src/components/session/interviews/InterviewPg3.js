import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import "./interviews.scss";
import DataManager from "../../../data_module/DataManager";

function Interview_Pg3(props) {
  const [item, setItem] = useState("");
  const [patientNotes, setPatientNotes] = useState("");
  const [patientInterview_pg3, setPatientInterview_pg3] = useState({
    interview_pg3_a: "",
    interview_pg3_b: "",
  });

  const next = "/interview_pg_4";

  // const [dropdownOpen1, setDropdownOpen1] = useState(false);
  // const [modal, setModal] = useState(false);

  // const toggle1 = () => setDropdownOpen1((prevState) => !prevState);
  // const toggle3 = () => setModal(!modal);

  const handleFieldChange = (e) => {
    setPatientInterview_pg3({
      ...patientInterview_pg3,
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

  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      id: props.patientId,
      interview_pg3_a: patientInterview_pg3.interview_pg3_a,
      interview_pg3_b: patientInterview_pg3.interview_pg3_b,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = ["interview_pg3_a", "interview_pg3_b"];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientInterview_pg3(filtered);
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
            What grains of truth are there in DHR allegations?
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
                name="interview_pg3_a"
                onChange={handleFieldChange}
                onClick={createResponse}
                value={patientInterview_pg3.interview_pg3_a}
              />
            </div>
          </div>
          <h4 className="textWhite centerItem">What steps did DHR take?</h4>
          <div className="interview_div1">
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id={item}
                name="interview_pg3_b"
                onChange={handleFieldChange}
                onClick={createResponse}
                value={patientInterview_pg3.interview_pg3_b}
              />
            </div>
          </div>
          <div>
            {/* <div className="div1Fields">
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
            <TextareaAutosize              className="fieldData2"
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
                      <TextareaAutosize                        className=""
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
        </div> */}
          </div>
        </div>
        <div id="footer">
          <ButtonNavigation
            next={next}
            updatePatient={updatePatient}
            patient={props.patientId}
            patientNotes={patientInterview_pg3}
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

export default Interview_Pg3;
