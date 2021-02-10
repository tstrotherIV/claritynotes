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
  const [patientInterview_pg3, setPatientInterview_pg3] = useState({
    interview_pg3_a: "",
    interview_pg3_b: "",
  });

  const next = "/interview_pg_4";
  const back = "/interview_pg_2";

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

  const captureFieldName = (e) => {
    const fieldID = e.target.name;
    setItem(fieldID);
  };

  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      interview_pg3_a: patientInterview_pg3.interview_pg3_a,
      interview_pg3_b: patientInterview_pg3.interview_pg3_b,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    const check_for_patient = sessionStorage.getItem("patient_id");

    DataManager.getPatient(check_for_patient).then((patientInfo) => {
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
                onClick={captureFieldName}
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
                onClick={captureFieldName}
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
            back={back}
            updatePatient={updatePatient}
            patient={props.patientId}
            patientNotes={patientInterview_pg3}
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

export default Interview_Pg3;
