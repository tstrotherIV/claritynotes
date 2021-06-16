import React, { useState, useEffect } from "react";
import "./psychologicalEvaluationFamily.scss";
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
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import EmptyFooterSpace from "./../../shared/EmptyFooterSpace";
import DataManager from "../../../data_module/DataManager";
import SiblingCard from "../../siblings/sibling";

function PsychologicalEvaluationSiblings(props) {
  const [newSibling, setNewSibling] = useState("");
  const [patientSiblings, setPatientSiblings] = useState([]);
  const [checkbox, setCheckbox] = useState(false);

  const next = "/psychological_evaluation_children";
  const back = "/psychological_evaluation_family";

  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setNewSibling({ ...newSibling, [name]: value });
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

  const addSibling = () => {
    const editedSibling = {
      first_name: newSibling.sibling_first_name,
      last_name: newSibling.sibling_last_name,
      gender: newSibling.sibling_gender,
      dob: newSibling.sibling_dob,
    };
    DataManager.add_Item("siblings", editedSibling).then(() => {
      getSiblings();
    });
  };

  const getSiblings = () => {
    DataManager.getSiblings(props.patientId).then((sibling) => {
      setPatientSiblings(sibling);
    });
  };

  const getData = () => {
    setCheckbox(props.patientDetails);
  };

  const updatePatient = () => {};

  useEffect(() => {
    getData();
    getSiblings();
  }, []);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <div className="header">
            <h1 className="textWhite">Please Confirm or Update Information</h1>
          </div>
          <div className="siblingsFields">
            <div className="">
              <Input
                className=""
                type="checkbox"
                id="patient_only_child"
                name="patient_only_child"
                checked={checkbox.patient_only_child}
                onChange={handleCheckBoxChange}
              />
              <Label className="textWhite title" for="onlyChild">
                Patient is an Only Child
              </Label>
            </div>
            {!checkbox.patient_only_child ? (
              <div className="d-flex">
                <div className="col-6">
                  <div className="d-flex m-4">
                    <Label className="textWhite labelWidth" for="sibFirstName">
                      Siblings
                    </Label>
                    <TextareaAutosize
                      className="fieldData text-center"
                      type="text"
                      id="sibling_first_name"
                      name="sibling_first_name"
                      onChange={handleFieldChange}
                      placeholder="Sibling First Name"
                    />
                  </div>
                  <div className="d-flex m-4">
                    <Label
                      className="textWhite labelWidth"
                      for="sibLastName"
                    ></Label>
                    <TextareaAutosize
                      className="fieldData text-center"
                      type="text"
                      id="sibling_last_name"
                      name="sibling_last_name"
                      onChange={handleFieldChange}
                      placeholder="Sibling Last Name"
                    />
                  </div>
                  <div className="d-flex m-4">
                    <Label className="textWhite labelWidth" for="sibLastName">
                      Select Gender
                    </Label>
                    <Dropdown
                      isOpen={dropdownOpen1}
                      toggle={toggle1}
                      className="fieldData text-center"
                    >
                      <DropdownToggle
                        color="light"
                        className="dropdown text-center"
                        caret
                      >
                        {newSibling.sibling_gender}
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem
                          onClick={handleFieldChange}
                          name="sibling_gender"
                          value="None Selected"
                        >
                          None Selected
                        </DropdownItem>
                        <DropdownItem
                          onClick={handleFieldChange}
                          name="sibling_gender"
                          value="Female"
                        >
                          Female
                        </DropdownItem>
                        <DropdownItem
                          onClick={handleFieldChange}
                          name="sibling_gender"
                          value="Male"
                        >
                          Male
                        </DropdownItem>
                        <DropdownItem
                          onClick={handleFieldChange}
                          name="sibling_gender"
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
                      type="date"
                      className="fieldData text-center"
                      id="sibling_dob"
                      name="sibling_dob"
                      onChange={handleFieldChange}
                      placeholder="Date of Birth"
                    />
                  </div>
                  <div className="d-flex m-4">
                    <Label className="textWhite labelWidth"></Label>
                    <Button
                      className="fieldData col-8 text-center"
                      onClick={addSibling}
                    >
                      Add Sibling
                    </Button>
                  </div>
                </div>

                <div className="siblingListBox">
                  <h3 className="text-center">SIBLING LIST</h3>
                  {!checkbox.patient_only_child ? (
                    <div className="familyBoard">
                      <CardDeck className="mt-3 siblingBoard">
                        {patientSiblings.map((sibling) => (
                          <SiblingCard
                            className="siblingCard"
                            key={sibling.id}
                            sibling={sibling}
                            getSiblings={getSiblings}
                            {...props}
                          />
                        ))}
                      </CardDeck>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div id="footer">
          <ButtonNavigation
            next={next}
            back={back}
            updatePatient={updatePatient}
            patient={props.patientId}
            patientNotes={patientSiblings}
          />
          <EmptyFooterSpace />
        </div>
      </div>
    </>
  );
}

export default PsychologicalEvaluationSiblings;
