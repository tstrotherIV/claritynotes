import React, { useState, useEffect } from "react";
import {
  Label,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 97
const next = "/behavioral_observations_and_testing_conditions_pg_1";

function MaterialResourcesPg1(props) {
  const [item, setItem] = useState("");
  const [
    patientMaterialResourcesPg1,
    setPatientMaterialResourcesPg1,
  ] = useState({
    material_resources_pg1_a: "",
    material_resources_pg1_b: "",
    material_resources_pg1_c: "",
    material_resources_pg1_d: "",
    material_resources_pg1_e: "",
    material_resources_pg1_f: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

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
      id: props.patientId,
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

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = [
        "material_resources_pg1_a",
        "material_resources_pg1_b",
        "material_resources_pg1_c",
        "material_resources_pg1_d",
        "material_resources_pg1_e",
        "material_resources_pg1_f",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientMaterialResourcesPg1(filtered);
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
          <h2 className="textWhite text-center mb-4">Material Resources</h2>
          <div className="questionsContainer">
            <div className="mb-4 d-flex flex-wrap justify-content-center mt-4">
              <p className="textWhite centerItem text-center offset-2">
                Give three examples of financial and material resources you have
                to care for yourself and others?
              </p>
              <div className="textWhite d-flex flex-wrap align-content-end text-center col-3 mb-2">
                [Patient Name, First] said:
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

            <h2 className="textWhite text-center mb-4 mt-4">
              Healthy Adult Social Supports
            </h2>
            <div className="interview_div1">
              <div className="m-auto d-flex align-items-center textWhite">
                <Label className="textWhite col-3 text-right" for="">
                  [Patient Name, First]
                </Label>
                <div className="m-2">indicated [her]</div>
                <TextareaAutosize
                  className="col-2 mr-2 mb-2 fieldData"
                  type="text"
                  id="material_resources_pg1_d"
                  name="material_resources_pg1_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientMaterialResourcesPg1.material_resources_pg1_d}
                />
                are available as a support system for [her].
              </div>
              <h2 className="textWhite text-center mb-4 mt-4">
                Community and Cultural Affiliation
              </h2>
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
                  <DropdownToggle caret>Dropdown</DropdownToggle>
                  <DropdownMenu
                    id="material_resources_pg1_e"
                    name="material_resources_pg1_e"
                    onChange={handleFieldChange}
                    onClick={captureFieldName}
                    value={patientMaterialResourcesPg1.material_resources_pg1_e}
                  >
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem>Some Action</DropdownItem>
                    <DropdownItem text>Dropdown Item Text</DropdownItem>
                    <DropdownItem disabled>Action (disabled)</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Foo Action</DropdownItem>
                    <DropdownItem>Bar Action</DropdownItem>
                    <DropdownItem>Quo Action</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>

              <div className="m-auto d-flex align-items-center justify-content-center textWhite row">
                <Label
                  className="textWhite col-3 p-0 m-0 d-flex align-items-end justify-content-center"
                  for=""
                >
                  [Patient Name, First]
                </Label>
                <div className="m-2">reported [she] attends </div>
                <TextareaAutosize
                  className="col-3 mr-2 mb-2 fieldData"
                  type="text"
                  id="material_resources_pg1_f"
                  name="material_resources_pg1_f"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientMaterialResourcesPg1.material_resources_pg1_f}
                  placeholder=""
                />
                church.
              </div>
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation
              next={next}
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
