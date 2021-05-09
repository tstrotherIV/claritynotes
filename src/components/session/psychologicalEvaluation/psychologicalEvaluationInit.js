import React, { useState, useEffect } from "react";
import {
  Label,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Container,
} from "reactstrap";
import TextareaAutosize from "react-textarea-autosize";
import ButtonNavigation from "../../shared/ButtonNavigation";
import DataManager from "../../../data_module/DataManager";

import "./psychologicalEvaluation.scss";

function PsychologicalEvaluationInit(props) {
  const [patient, setPatient] = useState({
    patient_first_name: "",
    patient_middle_name: "",
    patient_last_name: "",
    patient_Date_of_Birth: "",
    patient_gender: "",
  });

  const [dropdownOpen3, setDropdownOpen3] = useState(false);

  const toggle3 = () => setDropdownOpen3((prevState) => !prevState);

  const handleFieldChange = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
  };

  const setUser = (user) => {
    const patientSession = sessionStorage.getItem("patient_id");
    if (patientSession) {
      sessionStorage.removeItem("patient_id");
      sessionStorage.setItem("patient_id", user);
    } else {
      sessionStorage.setItem("patient_id", user);
    }
    props.history.push(`/sessionStep1`);
  };

  const createNewPatient = () => {
    const newPatient = {
      patient_first_name: patient.patient_first_name,
      patient_middle_name: patient.patient_middle_name,
      patient_last_name: patient.patient_last_name,
      patient_Date_of_Birth: patient.patient_Date_of_Birth,
      patient_gender: patient.patient_gender,
    };

    DataManager.post("patients", newPatient).then((data) => {
      setUser(data.id);
      setPatient(data);
    });
  };

  const next = "/sessionStep1";
  const back = "/patient";

  return (
    <>
      <div>
        <div id="page-container">
          <div id="content-wrap">
            <div className="minWidthContainer">
              <div className="header">
                <h2 className="textWhite mt-2">
                  Enter Details for the New Patient
                </h2>
              </div>
              <Container>
                <div className="d-flex m-4">
                  <Label className="textWhite labelWidth" for="firstName">
                    Name
                  </Label>
                  <TextareaAutosize
                    className="fieldData col-8"
                    type="text"
                    placeholder="First Name"
                    id="patient_first_name"
                    name="patient_first_name"
                    onChange={handleFieldChange}
                    value={patient.patient_first_name}
                  />
                </div>
                <div className="d-flex m-4">
                  <Label
                    className="textWhite labelWidth"
                    for="middleName"
                  ></Label>
                  <TextareaAutosize
                    className="fieldData col-8"
                    type="text"
                    placeholder="Middle Name"
                    id="patient_middle_name"
                    name="patient_middle_name"
                    onChange={handleFieldChange}
                    value={patient.patient_middle_name}
                  />
                </div>
                <div className="d-flex justify-items-center m-4">
                  <Label
                    className="textWhite labelWidth"
                    for="lastName"
                  ></Label>
                  <TextareaAutosize
                    className="fieldData col-8"
                    type="text"
                    placeholder="Last Name"
                    id="patient_last_name"
                    name="patient_last_name"
                    onChange={handleFieldChange}
                    value={patient.patient_last_name}
                  />
                </div>
                <div className="d-flex justify-items-center m-4">
                  <Label className="textWhite labelWidth " for="dateOfBirth">
                    DOB
                  </Label>
                  <Input
                    type="date"
                    className=" fieldData col-8"
                    id="patient_Date_of_Birth"
                    name="patient_Date_of_Birth"
                    onChange={handleFieldChange}
                    value={patient.patient_Date_of_Birth}
                  />
                </div>

                <div className="d-flex justify-items-center m-4">
                  <Label className="textWhite labelWidth " for=""></Label>
                  <Dropdown
                    isOpen={dropdownOpen3}
                    toggle={toggle3}
                    className=""
                  >
                    <DropdownToggle
                      color="light"
                      className="dropdown text-center"
                      caret
                      value={patient.patient_gender}
                    >
                      {patient.patient_gender
                        ? patient.patient_gender
                        : "Select Gender"}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="patient_gender"
                        value="None Selected"
                      >
                        None Selected
                      </DropdownItem>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="patient_gender"
                        value="Female"
                      >
                        Female
                      </DropdownItem>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="patient_gender"
                        value="Male"
                      >
                        Male
                      </DropdownItem>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="patient_gender"
                        value="Other"
                      >
                        Other
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </Container>
            </div>
            <div id="footer">
              <ButtonNavigation
                next={next}
                back={back}
                updatePatient={createNewPatient}
                patient={props.patientId}
                patientNotes={patient}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PsychologicalEvaluationInit;
