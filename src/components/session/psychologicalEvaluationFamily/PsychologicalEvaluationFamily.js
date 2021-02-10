import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  CardDeck,
} from "reactstrap";

import Heading from "../../shared/PsychologicalHeading";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import EmptyFooterSpace from "./../../shared/EmptyFooterSpace";
import DataManager from "../../../data_module/DataManager";
import convertID from "../../../helpers/formFieldIdConverter";
import GuardianCard from "../../guardians/guardians";

function PsychologicalEvaluation_family(props) {
  const [item, setItem] = useState("");
  const [newGuardian, setNewGuardian] = useState("");
  const [patientGuardians, setPatientGuardians] = useState([]);
  const [patientParents, setPatientParents] = useState({
    patient_father_first_name: "",
    patient_father_last_name: "",
    patient_mother_first_name: "",
    patient_mother_last_name: "",
    patient_guardian_first_name: "",
    patient_guardian_last_name: "",
    patient_guardian_gender: "",
    id: "",
  });

  const next = "/psychological_evaluation_siblings";
  const back = "/psychological_evaluation";

  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);

  const convertIDfunc = (e) => {
    const fieldID = convertID.convertID(e);
    setItem(fieldID);
  };

  const handleFieldChange = (e) => {
    setPatientParents({ ...patientParents, [e.target.name]: e.target.value });
  };

  const handleGuardianChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setNewGuardian({ ...newGuardian, [name]: value });
  };

  const addGuaridan = () => {
    const editedGuardian = {
      first_name: newGuardian.patient_guardian_first_name,
      last_name: newGuardian.patient_guardian_last_name,
      gender: newGuardian.patient_guardian_gender,
    };
    DataManager.add_Item("guardians", editedGuardian).then(() => {
      getGuardians();
    });
  };

  const getGuardians = () => {
    DataManager.getGuardians(props.patientId).then((guardian) => {
      setPatientGuardians(guardian);
    });
  };

  const updatePatient = () => {
    const editedPatient = {
      patient_father_first_name: patientParents.patient_father_first_name,
      patient_father_last_name: patientParents.patient_father_last_name,
      patient_mother_first_name: patientParents.patient_mother_first_name,
      patient_mother_last_name: patientParents.patient_mother_last_name,
      patient_guardian_first_name: patientParents.patient_guardian_first_name,
      patient_guardian_last_name: patientParents.patient_guardian_last_name,
      patient_guardian_gender: patientParents.patient_guardian_gender,
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

      const allowed = [
        "patient_father_first_name",
        "patient_father_last_name",
        "patient_mother_first_name",
        "patient_mother_last_name",
        "patient_guardian_first_name",
        "patient_guardian_last_name",
        "patient_guardian_gender",
        "id",
      ];
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
    getGuardians();
  },[]);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
           
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
                    id="patient_father_first_name"
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
                    id="patient_father_last_name"
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
                    id="patient_mother_first_name"
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
                    id="patient_mother_last_name"
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
                    onChange={handleGuardianChange}
                    placeholder="Guardian First Name"
                    onClick={convertIDfunc}
                  />
                </div>
                <div className="d-flex m-4">
                  <Label className="textWhite labelWidth"></Label>
                  <TextareaAutosize
                    className="fieldData col-8"
                    type="text"
                    id={item}
                    name="patient_guardian_last_name"
                    onChange={handleGuardianChange}
                    placeholder="Guardian Last Name"
                    onClick={convertIDfunc}
                  />
                </div>
                <div className="d-flex m-4">
                  <Label className="textWhite labelWidth"></Label>
                  <Dropdown
                    isOpen={dropdownOpen1}
                    toggle={toggle1}
                    className="fieldData col-8"
                  >
                    <DropdownToggle
                      color="light"
                      className="dropdown text-center"
                      caret
                    >
                      {newGuardian.patient_guardian_gender}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem
                        onClick={handleGuardianChange}
                        name="patient_guardian_gender"
                        value="None Selected"
                      >
                        None Selected
                      </DropdownItem>
                      <DropdownItem
                        onClick={handleGuardianChange}
                        name="patient_guardian_gender"
                        value="Female"
                      >
                        Female
                      </DropdownItem>
                      <DropdownItem
                        onClick={handleGuardianChange}
                        name="patient_guardian_gender"
                        value="Male"
                      >
                        Male
                      </DropdownItem>
                      <DropdownItem
                        onClick={handleGuardianChange}
                        name="patient_guardian_gender"
                        value="Other"
                      >
                        Other
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <div className="d-flex m-4">
                  <Label className="textWhite labelWidth"></Label>
                  <Button
                    className="fieldData col-8 text-center"
                    onClick={addGuaridan}
                  >
                    Add Guardian
                  </Button>
                </div>
              </div>
            </div>
            <div className="familyBoard">
              <CardDeck className="guardianContainer mt-3">
                {patientGuardians.map((guardian) => (
                  <GuardianCard
                    key={guardian.id}
                    id={guardian.id}
                    guardian={guardian}
                    getGuardians={getGuardians}
                    {...props}
                  />
                ))}
              </CardDeck>
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation
              next={next}
              back={back}
              updatePatient={updatePatient}
              patient={patientParents.id}
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
