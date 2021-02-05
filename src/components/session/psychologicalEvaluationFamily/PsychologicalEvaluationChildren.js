import React, { useState, useEffect } from "react";
import {
  Input,
  Label,
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
import ChildrenCard from "../../children/child";

function PsychologicalEvaluation_siblings(props) {
  const [newChild, setNewChild] = useState("");
  const [patientChildren, setPatientChildren] = useState([]);
  const [checkbox, setCheckbox] = useState(false);

  const next = "/psychological_evaluation_spouse";
  const back = "/psychological_evaluation_siblings";

  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setNewChild({ ...newChild, [name]: value });
  };

  const handleCheckBoxChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    const editedPatient = {
      id: props.patientId,
      [name]: value,
    };

    DataManager.update("patients", editedPatient);

    setCheckbox({ ...checkbox, [name]: value });
  };

  const addChild = () => {
    const editedChild = {
      first_name: newChild.child_first_name,
      last_name: newChild.child_last_name,
      gender: newChild.child_gender,
      dob: newChild.child_dob,
    };
    DataManager.add_Item("children", editedChild).then(() => {
      getChildren();
    });
  };

  const getChildren = () => {
    DataManager.getChildren(props.patientId).then((children) => {
      setPatientChildren(children);
    });
  };

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = ["patient_has_children"];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setCheckbox(filtered);
    });
  };

  const updatePatient = () => {};

  useEffect(() => {
    getData();
    getChildren();
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
            <div className="ml-5">
              <Input
                className=""
                type="checkbox"
                name="patient_has_children"
                id={"patient_has_children"}
                checked={checkbox.patient_has_children}
                onChange={handleCheckBoxChange}
              />
              <Label className="textWhite title ml-2" for="noChildren">
                Patient Has No Children
              </Label>
            </div>
            {!checkbox.patient_has_children ? (
              <div className="col-6">
                <div className="d-flex m-4">
                  <Label className="textWhite labelWidth" for="firstName">
                    Children
                  </Label>
                  <TextareaAutosize
                    className="fieldData col-8 text-center"
                    type="text"
                    id="child_first_name"
                    name="child_first_name"
                    onChange={handleFieldChange}
                    placeholder="Child First Name"
                  />
                </div>
                <div className="d-flex m-4">
                  <Label
                    className="textWhite labelWidth"
                    for="lastName"
                  ></Label>
                  <TextareaAutosize
                    className="fieldData col-8 text-center"
                    type="text"
                    id="child_last_name"
                    name="child_last_name"
                    onChange={handleFieldChange}
                    placeholder="Child Last Name"
                  />
                </div>
                <div className="d-flex m-4">
                  <Label className="textWhite labelWidth"></Label>
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
                      {newChild.child_gender}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="child_gender"
                        value="None Selected"
                      >
                        None Selected
                      </DropdownItem>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="child_gender"
                        value="Female"
                      >
                        Female
                      </DropdownItem>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="child_gender"
                        value="Male"
                      >
                        Male
                      </DropdownItem>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="child_gender"
                        value="Other"
                      >
                        Other
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>

                <div className="d-flex justify-items-center m-4">
                  <Label className="textWhite labelWidth " for="dateOfBirth">
                    DOB
                  </Label>
                  <Input
                    className="fieldData col-8 text-center"
                    type="date"
                    id="child_dob"
                    name="child_dob"
                    onChange={handleFieldChange}
                    placeholder="Date of Birth"
                  />
                </div>
                <div className="d-flex m-4">
                  <Label className="textWhite labelWidth"></Label>
                  <Button
                    className="fieldData col-8 text-center"
                    onClick={addChild}
                  >
                    Add Child
                  </Button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          {!checkbox.patient_has_children ? (
            <CardDeck className="childContainer mt-3">
              {patientChildren.map((child) => (
                <ChildrenCard
                  key={child.id}
                  child={child}
                  getChildren={getChildren}
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
            patientNotes={patientChildren}
          />
          <EmptyFooterSpace />
        </div>
      </div>
    </>
  );
}

export default PsychologicalEvaluation_siblings;
