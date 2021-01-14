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
      patientId: props.patientId,
      child_first_name: newChild.child_first_name,
      child_last_name: newChild.child_last_name,
      child_gender: newChild.child_gender,
      child_dob: newChild.child_dob,
    };
    DataManager.post("children", editedChild).then(() => {
      getChildren();
    });
  };

  //CRUD Function END

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

  const updatePatient = () => {

  }

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
              <section>
                <div className="line1">
                  <Label className="textWhite title" for="firstName">
                    Children
                  </Label>
                  <TextareaAutosize
                    className="fieldData"
                    type="text"
                    id="child_first_name"
                    name="child_first_name"
                    onChange={handleFieldChange}
                    placeholder="Child First Name"
                  />
                </div>
                <div className="line1">
                  <Label className="textWhite title" for="lastName"></Label>
                  <TextareaAutosize
                    className="fieldData"
                    type="text"
                    id="child_last_name"
                    name="child_last_name"
                    onChange={handleFieldChange}
                    placeholder="Child Last Name"
                  />
                </div>
                <div className="line1 d-flex flex-wrap">
                  <Dropdown
                    isOpen={dropdownOpen1}
                    toggle={toggle1}
                    className=""
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

                <div className="line1">
                  <Label className="textWhite title" for="">
                    DOB
                  </Label>
                  <Input
                    className="fieldData text-center col-8"
                    type="date"
                    id="child_dob"
                    name="child_dob"
                    onChange={handleFieldChange}
                    placeholder="Date of Birth"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <div className="textWhite">
                    <Button onClick={addChild}>Add Child</Button>
                  </div>
                </div>
              </section>
            ) : (
              console.log("")
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
            console.log("")
          )}
        </div>
        <div id="footer">
          <ButtonNavigation
            next={next}
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
