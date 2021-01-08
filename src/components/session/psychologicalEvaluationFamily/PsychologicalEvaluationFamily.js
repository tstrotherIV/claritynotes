import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import Heading from "../../shared/PsychologicalHeading";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import EmptyFooterSpace from "./../../shared/EmptyFooterSpace";
import DataManager from "../../../data_module/DataManager";
import convertID from "../../../helpers/formFieldIdConverter";

function PsychologicalEvaluation_family(props) {
  const [item, setItem] = useState("");
  const [patientParents, setPatientParents] = useState({
    patient_father_first_name: "",
    patient_father_last_name: "",
    patient_mother_first_name: "",
    patient_mother_last_name: "",
    patient_guardian_first_name: "",
    patient_guardian_last_name: "",
    patient_guardian_gender: "",
  });

  const next = "/psychological_evaluation_siblings";

  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);


  const convertIDfunc = (e) => {
    const fieldID = convertID.convertID(e);
    setItem(fieldID);
  };

  const handleFieldChange = (e) => {
    setPatientParents({ ...patientParents, [e.target.name]: e.target.value });
  };

  const updatePatient = () => {
    const editedPatient = {
      id: props.patientId,
      patient_father_first_name: patientParents.patient_father_first_name,
      patient_father_last_name: patientParents.patient_father_last_name,
      patient_mother_first_name: patientParents.patient_mother_first_name,
      patient_mother_last_name: patientParents.patient_mother_last_name,
      patient_guardian_first_name: patientParents.patient_guardian_first_name,
      patient_guardian_last_name: patientParents.patient_guardian_last_name,
      patient_guardian_gender: patientParents.patient_guardian_gender,
    };

    DataManager.update("patients", editedPatient).then(() => {
    });
  };

  //CRUD Function END

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      
      const raw = {
        ...patientInfo
      };
      
      const allowed = ['patient_father_first_name',
        'patient_father_last_name',
        'patient_mother_first_name',
        'patient_mother_last_name',
        'patient_guardian_first_name',
        'patient_guardian_last_name',
        'patient_guardian_gender'];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

        setPatientParents(filtered);
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
          <div className="minWidthContainer">
            <div className="header">
              <h1 className="textWhite mt-2">
                Please Confirm or Update Information
              </h1>
            </div>
            <div className="row no-gutters d-flex justify-content-center align-content-center">
              <div className="col-6">
                <div className="d-flex m-4">
                  <Label className="textWhite labelWidth" for="firstName">
                    Parents
                  </Label>
                  <TextareaAutosize
                    className="fieldData col-8"
                    type="text"
                    id={item}
                    name="patient_father_first_name"
                    onChange={handleFieldChange}
                    value={patientParents.patient_father_first_name}
                    placeholder="Father First Name"
                    onClick={convertIDfunc}
                  />
                </div>
                <div className="d-flex m-4">
                  <Label className="textWhite labelWidth" for=""></Label>
                  <TextareaAutosize
                    className="fieldData col-8"
                    type="text"
                    id={item}
                    name="patient_father_last_name"
                    onChange={handleFieldChange}
                    value={patientParents.patient_father_last_name}
                    placeholder="Father Last Name"
                    onClick={convertIDfunc}
                  />
                </div>
                <div className="d-flex m-4">
                  <Label className="textWhite labelWidth" for=""></Label>
                  <TextareaAutosize
                    className="fieldData col-8"
                    type="text"
                    id={item}
                    name="patient_mother_first_name"
                    onChange={handleFieldChange}
                    value={patientParents.patient_mother_first_name}
                    placeholder="Mother First Name"
                    onClick={convertIDfunc}
                  />
                </div>
                <div className="d-flex m-4">
                  <Label className="textWhite labelWidth" for=""></Label>
                  <TextareaAutosize
                    className="fieldData col-8"
                    type="text"
                    id={item}
                    name="patient_mother_last_name"
                    onChange={handleFieldChange}
                    value={patientParents.patient_mother_last_name}
                    placeholder="Mother Last Name"
                    onClick={convertIDfunc}
                  />
                </div>
              </div>

              {/* --------------------------------------------- */}
              <div className="col-6">
                <div className="d-flex m-4">
                  <Label className="textWhite labelWidth" for="caseNumber">
                    Other Guardians
                  </Label>
                  <TextareaAutosize
                    className="fieldData col-8"
                    type="text"
                    id={item}
                    name="patient_guardian_first_name"
                    onChange={handleFieldChange}
                    value={patientParents.patient_guardian_first_name}
                    placeholder="Guardian First Name"
                    onClick={convertIDfunc}
                  />
                </div>
                <div className="d-flex m-4">
                  <Label
                    className="textWhite labelWidth"
                    for="examplePassword"
                  ></Label>
                  <TextareaAutosize
                    className="fieldData col-8"
                    type="text"
                    id={item}
                    name="patient_guardian_last_name"
                    onChange={handleFieldChange}
                    value={patientParents.patient_guardian_last_name}
                    placeholder="Guardian Last Name"
                    onClick={convertIDfunc}
                  />
                </div>
                <div className="d-flex m-4 flex-wrap">
                  <Dropdown
                    isOpen={dropdownOpen1}
                    toggle={toggle1}
                    className="col-8"
                  >
                    <DropdownToggle
                      color="light"
                      className="dropdown text-center"
                      caret
                      value={patientParents.patient_guardian_gender}
                    >
                      {patientParents.patient_guardian_gender}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="patient_guardian_gender"
                        value="None Selected"
                      >
                        None Selected
                      </DropdownItem>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="patient_guardian_gender"
                        value="Female"
                      >
                        Female
                      </DropdownItem>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="patient_guardian_gender"
                        value="Male"
                      >
                        Male
                      </DropdownItem>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="patient_guardian_gender"
                        value="Other"
                      >
                        Other
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <div className="text-center">
                  <div className="textWhite">
                    <i className="fas fa-plus fa-lg mr-2"></i>Click to Add More
                    Guardians
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
              patientNotes={patientParents}
            />
            <EmptyFooterSpace />
          </div>
        </div>
      </div>
    </>
  );
}

export default PsychologicalEvaluation_family;
