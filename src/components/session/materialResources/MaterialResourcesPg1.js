import React, { useState, useEffect } from "react";
import {
  Label,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
import "./materialResource.css";
// pdf page 97

const next = "/behavioral_observations_and_testing_conditions_pg_1";
const back = "/parent_knowledge_pg_1";

function MaterialResourcesPg1(props) {
  const [item, setItem] = useState("");
  const [
    patientMaterialResourcesPg1,
    setPatientMaterialResourcesPg1,
  ] = useState({});

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const religionList = [
    "Catholic",
    "Assembly of God",
    "Church of Christ",
    "Non Denominational",
    "Baptist",
    "Pentecostal",
    "Methodist",
    "Presbyterian",
    "Jehovah's Witness",
    "Church of Latter Day Saints",
    "Jewish",
    "Islam",
    "Buddhist",
    "Hindu",
    "Atheist",
    "Other",
  ];

  const handleFieldChange = (e) => {
    setPatientMaterialResourcesPg1({
      ...patientMaterialResourcesPg1,
      [e.target.name]: e.target.value,
    });
  };

  const captureFieldName = (e) => {
    const fieldID = e.target.name;
    setItem(fieldID);
  };

  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      material_resources_pg1_a:
        patientMaterialResourcesPg1.material_resources_pg1_a,
      material_resources_pg1_b:
        patientMaterialResourcesPg1.material_resources_pg1_b,
      material_resources_pg1_c:
        patientMaterialResourcesPg1.material_resources_pg1_c,
      material_resources_pg1_d:
        patientMaterialResourcesPg1.material_resources_pg1_d,
      material_resources_pg1_e:
        patientMaterialResourcesPg1.material_resources_pg1_e,
      material_resources_pg1_f:
        patientMaterialResourcesPg1.material_resources_pg1_f,
    };

    DataManager.update("patients", editedPatient).then(() => props.getData());
  };

  //CRUD Function END

  const getData = () => {
    setPatientMaterialResourcesPg1(props.patientDetails);
  };

  useEffect(() => {
    getData();
  }, [props]);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <h2 className="textWhite text-center mb-4">Material Resources</h2>
          <div className="questionsContainer">
            <div className="mb-4 d-flex flex-wrap justify-content-center mt-4">
              <h4 className="textWhite centerItem text-center offset-2">
                Give three examples of financial and material resources you have
                to care for yourself and others?
              </h4>
              <div className="textWhite d-flex flex-wrap align-content-end text-center mb-2">
                {props.patientDetails.patient_first_name} said:
              </div>
              <div className="col-3 d-flex flex-wrap justify-content-center align-items-end p-1">
                <Label className="textWhite"></Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="material_resources_pg1_a"
                  name="material_resources_pg1_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientMaterialResourcesPg1.material_resources_pg1_a}
                />
              </div>
              <div className="col-3 d-flex flex-wrap align-items-end justify-content-center p-1 align-content-end">
                <Label className="textWhite" for=""></Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="material_resources_pg1_b"
                  name="material_resources_pg1_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientMaterialResourcesPg1.material_resources_pg1_b}
                />
              </div>
              <div className="col-3 d-flex flex-wrap align-items-end justify-content-center p-1 align-content-end">
                <Label className="textWhite" for=""></Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="material_resources_pg1_c"
                  name="material_resources_pg1_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientMaterialResourcesPg1.material_resources_pg1_c}
                />
              </div>
            </div>

            <div className="interview_div1">
              <h4 className="textWhite text-center mb-4 mt-4">
                Who is available to you as a support system?
              </h4>
              <div className="interview_line1">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="interview_fieldData"
                  type="text"
                  name=""
                  id="material_resources_pg1_d"
                  name="material_resources_pg1_d"
                  onChange={handleFieldChange}
                  value={patientMaterialResourcesPg1.material_resources_pg1_d}
                  onClick={captureFieldName}
                />
              </div>
              <h2 className="textWhite text-center mb-4 mt-4">
                Community and Cultural Affiliation
              </h2>

              <h4 className="textWhite text-center mb-4 mt-4">
                What is the name of the Church you attend?
              </h4>
              <div className="interview_line1">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="interview_fieldData"
                  type="text"
                  name=""
                  id="material_resources_pg1_f"
                  name="material_resources_pg1_f"
                  onChange={handleFieldChange}
                  value={patientMaterialResourcesPg1.material_resources_pg1_f}
                  onClick={captureFieldName}
                />
              </div>
            </div>
            <div className="row justify-content-center m-3 p-0 align-content-center">
              <p className="textWhite p-0 m-0 d-flex align-items-end">
                {" "}
                Religious Affiliation:
              </p>
              <Dropdown
                className="d-flex textWhite flex-wrap col-1"
                isOpen={dropdownOpen}
                toggle={toggle}
              >
                <DropdownToggle
                  color="light"
                  className="dropdown text-center"
                  caret
                  value={patientMaterialResourcesPg1.material_resources_pg1_e}
                >
                  {patientMaterialResourcesPg1.material_resources_pg1_e
                    ? patientMaterialResourcesPg1.material_resources_pg1_e
                    : "Select Religion"}
                </DropdownToggle>
                <DropdownMenu className="religionDropdown">
                  {religionList.sort().map((religion) => (
                    <DropdownItem
                      onClick={handleFieldChange}
                      name="material_resources_pg1_e"
                      value={religion}
                    >
                      {religion}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation
              next={next}
              back={back}
              updatePatient={updatePatient}
              patient={props.patientId}
              patientNotes={patientMaterialResourcesPg1}
            />
            <TermOfParentalRights
              questionId={item}
              patientId={props.patientId}
              item={item}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MaterialResourcesPg1;
