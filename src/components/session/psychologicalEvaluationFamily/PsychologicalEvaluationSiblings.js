import React, { useState, useEffect } from "react";
import "./psychologicalEvaluationFamily.scss";
import {
  Input,
  Label,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Form } from "react-bootstrap";
import Heading from "../../shared/PsychologicalHeading";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import EmptyFooterSpace from "./../../shared/EmptyFooterSpace";
import DataManager from "../../../data_module/DataManager";
import convertID from "../../../helpers/formFieldIdConverter";

function PsychologicalEvaluationSiblings(props) {

  const [patientSiblings, setPatientSiblings] = useState({
    patient_only_child: false,
    sibling_first_name: "",
    sibling_last_name: "",
    sibling_gender: "",
    sibling_dob: "",
    patient_id: "",
  });

  const next = "/psychological_evaluation_children";

  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);


  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setPatientSiblings({ ...patientSiblings, [name]: value });
  };

  const updatePatient = () => {
    const editedPatient = {
      id: props.userId,
      patient_only_child: patientSiblings.patient_only_child,
      sibling_first_name: patientSiblings.sibling_first_name,
      sibling_last_name: patientSiblings.sibling_last_name,
      sibling_gender: patientSiblings.sibling_gender,
      sibling_dob: patientSiblings.sibling_dob,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  useEffect(() => {
    DataManager.getPatient(props.userId).then((patientInfo) => {
      setPatientSiblings(patientInfo);
    });
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
            <div className="">
              <Input
                className=""
                type="checkbox"
                id="patient_only_child"
                name="patient_only_child"
                checked={patientSiblings.patient_only_child}
                onChange={handleFieldChange}
              />
              <Label className="textWhite title" for="onlyChild">
                Patient is an Only Child
              </Label>
            </div>
            {!patientSiblings.patient_only_child ? (
              <section>
                <div className="line1">
                  <Label className="textWhite title" for="sibFirstName">
                    Siblings
                  </Label>
                  <TextareaAutosize
                    className="fieldData col-8"
                    type="text"
                    id="sibling_first_name"
                    name="sibling_first_name"
                    onChange={handleFieldChange}
                    value={patientSiblings.sibling_first_name}
                    placeholder="Sibling First Name"
                  />
                </div>
                <div className="line1">
                  <Label className="textWhite title" for="sibLastName"></Label>
                  <TextareaAutosize
                    className="fieldData col-8"
                    type="text"
                    id="sibling_last_name"
                    name="sibling_last_name"
                    onChange={handleFieldChange}
                    value={patientSiblings.sibling_last_name}
                    placeholder="Sibling Last Name"
                  />
                </div>
                <div className="line1">
                  <Dropdown
                    isOpen={dropdownOpen1}
                    toggle={toggle1}
                    className=""
                  >
                    <DropdownToggle
                      color="light"
                      className="dropdown text-center"
                      caret
                      value={patientSiblings.sibling_gender}
                    >
                      {patientSiblings.sibling_gender}
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
                <div className="line1 d-flex flex-wrap">
                  <Label className="textWhite labelWidth " for="dateOfBirth">
                    DOB
                  </Label>
                  <Input
                    type="date"
                    className=" col-3 dateField p-3 text-center"
                    id="sibling_dob"
                    name="sibling_dob"
                    onChange={handleFieldChange}
                    value={
                      patientSiblings.sibling_dob
                    }
                  />
                </div>
                <div className="m-4">
                  <div className="textWhite">
                    <i className="fas fa-plus fa-lg mr-2"></i>Click to Add More
                    Siblings
                  </div>
                </div>
              </section>
            ) : (
              console.log("")
            )}
          </div>
        </div>
        <div id="footer">
          <ButtonNavigation
            next={next}
            updatePatient={updatePatient}
            patient={props.userId}
            patientNotes={patientSiblings}
          />
          <EmptyFooterSpace />
        </div>
      </div>
    </>
  );
}

export default PsychologicalEvaluationSiblings;
