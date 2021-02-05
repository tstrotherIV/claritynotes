import React, { useState, useEffect } from "react";
import {
  Label,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CardDeck,
  Button,
} from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import EmptyFooterSpace from "./../../shared/EmptyFooterSpace";
import "./psychologicalEvaluationFamily.scss";
import DataManager from "../../../data_module/DataManager";
import SpouseCard from "../../spouse/spouse";

function PsychologicalEvaluationSpouse(props) {
  const [newSpouse, setNewSpouse] = useState("");
  const [patientSpouse, setPatientSpouse] = useState([]);
  const [relationshipStatus, setrelationshipStatus] = useState(false);

  const next = "/psychological_evaluation_consent";
  const back = "/psychological_evaluation_children";

  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);

  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const toggle2 = () => setDropdownOpen2((prevState) => !prevState);

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setNewSpouse({ ...newSpouse, [name]: value });
  };

  const handleRelationshipChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    const editedPatient = {
      id: props.patientId,
      [name]: value,
    };

    DataManager.update("patients", editedPatient);

    setrelationshipStatus({ ...relationshipStatus, [name]: value });
  };

  const addSpouse = () => {
    const editedSpouse = {
      first_name: newSpouse.spouse_first_name,
      last_name: newSpouse.spouse_last_name,
      gender: newSpouse.spouse_gender,
      dob: newSpouse.spouse_dob,
    };

    DataManager.add_Item("spouses", editedSpouse).then(() => {
      getSpouses();
    });
  };

  const getSpouses = () => {
    DataManager.getSpouses(props.patientId).then((spouse) => {
      setPatientSpouse(spouse);
    });
  };

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = ["patient_married"];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setrelationshipStatus(filtered);
    });
  };

  const updatePatient = () => {};

  useEffect(() => {
    getData();
    getSpouses();
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
            <div className="col-6">
              <div className="d-flex m-4">
                <Label
                  className="textWhite labelWidth"
                  for="sibLastName"
                >Relationship Status</Label>
                <Dropdown
                  isOpen={dropdownOpen1}
                  toggle={toggle1}
                  className="fieldData col-8 text-center"
                >
                  <DropdownToggle
                    color="light"
                    className="dropdown text-center"
                    caret
                  >
                    {relationshipStatus.patient_married}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem
                      onClick={handleRelationshipChange}
                      name="patient_married"
                      value="Married"
                    >
                      Married
                    </DropdownItem>
                    <DropdownItem
                      onClick={handleRelationshipChange}
                      name="patient_married"
                      value="Single"
                    >
                      Single
                    </DropdownItem>
                    <DropdownItem
                      onClick={handleRelationshipChange}
                      name="patient_married"
                      value="Divorced"
                    >
                      Divorced
                    </DropdownItem>
                    <DropdownItem
                      onClick={handleRelationshipChange}
                      name="patient_married"
                      value="Separated"
                    >
                      Separated
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
            {relationshipStatus.patient_married !== "Single" ? (
              <div className="col-6">
                <div className="d-flex m-4">
                  <Label className="textWhite labelWidth" for="spouseFirstName">
                    Spouse First Name
                  </Label>
                  <TextareaAutosize
                    className="fieldData col-8 text-center"
                    id="spouse_first_name"
                    name="spouse_first_name"
                    onChange={handleFieldChange}
                    placeholder="Spouse First Name"
                  />
                </div>
                <div className="d-flex m-4">
                  <Label className="textWhite labelWidth" for="spouseLastName">
                    Spouse Last Name
                  </Label>
                  <TextareaAutosize
                    className="fieldData col-8 text-center"
                    type="text"
                    id="spouse_last_name"
                    name="spouse_last_name"
                    onChange={handleFieldChange}
                    placeholder="Spouse Last Name"
                  />
                </div>
                <div className="d-flex m-4">
                  <Label className="textWhite labelWidth" for="">
                    Gender
                  </Label>
                  <Dropdown
                    isOpen={dropdownOpen2}
                    toggle={toggle2}
                    className="fieldData col-8 text-center"
                  >
                    <DropdownToggle
                      color="light"
                      className="dropdown text-center"
                      caret
                    >
                      {newSpouse.spouse_gender}
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
                <div className="d-flex justify-items-center m-4">
                  <Label className="textWhite labelWidth " for="">
                    DOB
                  </Label>
                  <Input
                    className="fieldData col-8 text-center"
                    type="date"
                    id="spouse_dob"
                    name="spouse_dob"
                    onChange={handleFieldChange}
                    placeholder="Date of Birth"
                  />
                </div>
                <div className="d-flex m-4">
                  <Label className="textWhite labelWidth"></Label>
                  <Button
                    className="fieldData col-8 text-center"
                    onClick={addSpouse}
                  >
                    Add Spouse
                  </Button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          {relationshipStatus.patient_married !== "Single" ? (
            <CardDeck className="childContainer mt-3">
              {patientSpouse.map((spouse) => (
                <SpouseCard
                  key={spouse.id}
                  spouse={spouse}
                  getSpouses={getSpouses}
                  {...props}
                />
              ))}
            </CardDeck>
          ) : (
            ""
          )}
        </div>
        <div id="footer">
          <ButtonNavigation
            next={next}
            back={back}
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
