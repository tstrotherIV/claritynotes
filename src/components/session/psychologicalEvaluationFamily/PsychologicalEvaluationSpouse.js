import React, { useState, useEffect } from "react";
import {
  Label,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import EmptyFooterSpace from "./../../shared/EmptyFooterSpace";
import "./psychologicalEvaluationFamily.scss";
import DataManager from "../../../data_module/DataManager";

function PsychologicalEvaluationSpouse(props) {
  const [patientSpouse, setPatientSpouse] = useState({
    patient_married: "",
    spouse_first_name: "",
    spouse_last_name: "",
    spouse_gender: "",
    spouse_dob: "",
    patient_id: "",
  });

  const next = "/psychological_evaluation_consent";

  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);

  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const toggle2 = () => setDropdownOpen2((prevState) => !prevState);

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setPatientSpouse({ ...patientSpouse, [name]: value });
  };

  const updatePatient = () => {
    const editedPatient = {
      id: props.patientId,
      patient_married: patientSpouse.patient_married,
      spouse_first_name: patientSpouse.spouse_first_name,
      spouse_last_name: patientSpouse.spouse_last_name,
      spouse_gender: patientSpouse.spouse_gender,
      spouse_dob: patientSpouse.spouse_dob,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      
      const raw = {
        ...patientInfo
      };
      
      const allowed = ['patient_married',
        'spouse_first_name',
        'spouse_last_name',
        'spouse_gender',
        'spouse_dob'];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

        setPatientSpouse(filtered);
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
            <h1 className="textWhite">Please Confirm or Update Information</h1>
          </div>
          <div className="siblingsFields">
            <div className="line1">
              <Dropdown isOpen={dropdownOpen1} toggle={toggle1} className="">
                <DropdownToggle
                  color="light"
                  className="dropdown text-center"
                  caret
                  value={patientSpouse.patient_married}
                >
                  {patientSpouse.patient_married}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    onClick={handleFieldChange}
                    name="patient_married"
                    value="Married"
                  >
                    Married
                  </DropdownItem>
                  <DropdownItem
                    onClick={handleFieldChange}
                    name="patient_married"
                    value="Single"
                  >
                    Single
                  </DropdownItem>
                  <DropdownItem
                    onClick={handleFieldChange}
                    name="patient_married"
                    value="Divorced"
                  >
                    Divorced
                  </DropdownItem>
                  <DropdownItem
                    onClick={handleFieldChange}
                    name="patient_married"
                    value="Seperated"
                  >
                    Seperated
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className="line1">
              <Label className="textWhite title" for="spouseFirstName">
                Spouse
              </Label>
              <TextareaAutosize
                className="fieldData"
                id="spouse_first_name"
                name="spouse_first_name"
                onChange={handleFieldChange}
                value={patientSpouse.spouse_first_name}
                placeholder="Spouse First Name"
              />
            </div>
            <div className="line1">
              <Label className="textWhite title" for="spouseLastName"></Label>
              <TextareaAutosize
                className="fieldData"
                type="text"
                id="spouse_last_name"
                name="spouse_last_name"
                onChange={handleFieldChange}
                value={patientSpouse.spouse_last_name}
                placeholder="Spouse Last Name"
              />
            </div>
            <div className="line1">
              <Dropdown isOpen={dropdownOpen2} toggle={toggle2} className="">
                <DropdownToggle
                  color="light"
                  className="dropdown text-center"
                  caret
                  value={patientSpouse.spouse_gender}
                >
                  {patientSpouse.spouse_gender}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    onClick={handleFieldChange}
                    name="spouse_gender"
                    value="None Selected"
                  >
                    None Selected
                  </DropdownItem>
                  <DropdownItem
                    onClick={handleFieldChange}
                    name="spouse_gender"
                    value="Female"
                  >
                    Female
                  </DropdownItem>
                  <DropdownItem
                    onClick={handleFieldChange}
                    name="spouse_gender"
                    value="Male"
                  >
                    Male
                  </DropdownItem>
                  <DropdownItem
                    onClick={handleFieldChange}
                    name="spouse_gender"
                    value="Other"
                  >
                    Other
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className="line1">
              <Label className="textWhite title" for="">
                DOB
              </Label>
              <Input
                className="fieldData text-center col-8"
                type="date"
                id="spouse_dob"
                name="spouse_dob"
                onChange={handleFieldChange}
                value={patientSpouse.spouse_dob}
                placeholder="Date of Birth"
              />
            </div>
            <div className="d-flex justify-content-center">
              <div className="textWhite">
                <i className="fas fa-plus fa-lg ml-5 mt-3 mr-2"></i>Click to Add
                Previous Spouses
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <ButtonNavigation
            next={next}
            updatePatient={updatePatient}
            patient={props.patientId}
            patientNotes={patientSpouse}
          />
          <EmptyFooterSpace />
        </div>
      </div>
    </>
  );
}

export default PsychologicalEvaluationSpouse;
