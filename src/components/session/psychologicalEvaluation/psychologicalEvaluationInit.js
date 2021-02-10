import React, { useState, useEffect } from "react";
import {
  Label,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
} from "reactstrap";
import Heading from "../../shared/PsychologicalHeading.js";
import TextareaAutosize from "react-textarea-autosize";
import ButtonNavigation from "../../shared/ButtonNavigation";
import DataManager from "../../../data_module/DataManager";
import { v4 as uuidv4 } from "uuid";

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
    sessionStorage.setItem("currentPatientId", user);
  };

  const createNewPatient = () => {
    const newPatient = {
      // id: uuidv4(),
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

  const getData = () => {
    const check_for_patient = sessionStorage.getItem("patient_id");

    DataManager.getPatient(check_for_patient).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = [
        "patient_first_name",
        "patient_middle_name",
        "patient_last_name",
        "patient_Date_of_Birth",
        "patient_gender",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatient(filtered);
    });
  };

  useEffect(() => {
    getData();
  }, []);

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
              <section>
                <div className="row no-gutters text-center d-flex justify-content-center minWidthContainer">
                  <div className="col-6">
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
                      <Label
                        className="textWhite labelWidth "
                        for="dateOfBirth"
                      >
                        DOB
                      </Label>
                      <Input
                        type="date"
                        className=" col-3 dateField p-3 text-center"
                        id="patient_Date_of_Birth"
                        name="patient_Date_of_Birth"
                        onChange={handleFieldChange}
                        value={patient.patient_Date_of_Birth}
                      />
                    </div>

                    <div className="line1 d-flex flex-wrap">
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
                  </div>
                </div>
              </section>
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
