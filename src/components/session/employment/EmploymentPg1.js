import React, { useState, useEffect } from "react";
import { Label, Navbar } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
// pdf page 43

function EmploymentPg1(props) {
  const [item, setItem] = useState("");
  const [patientEmployment_pg1, setPatientEmployment_pg1] = useState({
    employment_pg1_a: "",
    employment_pg1_b: "",
    employment_pg1_c: "",
    employment_pg1_d: "",
    employment_pg1_e: "",
    employment_pg1_f: "",
    employment_pg1_g: "",
    employment_pg1_h: "",
    employment_pg1_i: "",
    employment_pg1_j: "",
  });

  const next = "/employment_pg_2";
  const back = "/housing_pg_3";

  const handleFieldChange = (e) => {
    setPatientEmployment_pg1({
      ...patientEmployment_pg1,
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
      employment_pg1_a: patientEmployment_pg1.employment_pg1_a,
      employment_pg1_b: patientEmployment_pg1.employment_pg1_b,
      employment_pg1_c: patientEmployment_pg1.employment_pg1_c,
      employment_pg1_d: patientEmployment_pg1.employment_pg1_d,
      employment_pg1_e: patientEmployment_pg1.employment_pg1_e,
      employment_pg1_f: patientEmployment_pg1.employment_pg1_f,
      employment_pg1_g: patientEmployment_pg1.employment_pg1_g,
      employment_pg1_h: patientEmployment_pg1.employment_pg1_h,
      employment_pg1_i: patientEmployment_pg1.employment_pg1_i,
      employment_pg1_j: patientEmployment_pg1.employment_pg1_j,
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
        "employment_pg1_a",
        "employment_pg1_b",
        "employment_pg1_c",
        "employment_pg1_d",
        "employment_pg1_e",
        "employment_pg1_f",
        "employment_pg1_g",
        "employment_pg1_h",
        "employment_pg1_i",
        "employment_pg1_j",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientEmployment_pg1(filtered);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
           
          <h2 className="textWhite text-center mb-4">Employment</h2>
          <div className="questionsContainer">
            <h4 className="textWhite centerItem">
              Currently, where are you employed?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                {props.patientName.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id="employment_pg1_a"
                name="employment_pg1_a"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientEmployment_pg1.employment_pg1_a}
              />
            </div>
            <h4 className="textWhite centerItem">
              The patient (has/has never) been employed.
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                {props.patientName.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id="employment_pg1_b"
                name="employment_pg1_b"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientEmployment_pg1.employment_pg1_b}
              />
            </div>
            <h4 className="textWhite centerItem">
              Is the patient is currently employed?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                {props.patientName.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id="employment_pg1_c"
                name="employment_pg1_c"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientEmployment_pg1.employment_pg1_c}
              />
            </div>
            <h4 className="textWhite centerItem">
              Does the patient have income?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                {props.patientName.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id="employment_pg1_d"
                name="employment_pg1_d"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientEmployment_pg1.employment_pg1_d}
              />
            </div>

            <h4 className="textWhite centerItem">
              Where did that patient last work?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                {props.patientName.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id="employment_pg1_e"
                name="employment_pg1_e"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientEmployment_pg1.employment_pg1_e}
              />
            </div>

            <h4 className="textWhite centerItem">
              When did that patient last work at their previous job?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                {props.patientName.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id="employment_pg1_f"
                name="employment_pg1_f"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientEmployment_pg1.employment_pg1_f}
              />
            </div>

            <h4 className="textWhite centerItem">
              Why did the patient leave their last job?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                {props.patientName.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id="employment_pg1_g"
                name="employment_pg1_g"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientEmployment_pg1.employment_pg1_g}
              />
            </div>
            <h4 className="textWhite centerItem">
              Where did the patient report they worked at?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                {props.patientName.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id="employment_pg1_h"
                name="employment_pg1_h"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientEmployment_pg1.employment_pg1_h}
              />
            </div>
            <h4 className="textWhite centerItem">
              What work role did the patient report?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                {props.patientName.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id="employment_pg1_i"
                name="employment_pg1_i"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientEmployment_pg1.employment_pg1_i}
              />
            </div>
            <h4 className="textWhite centerItem">
              How long has the patient been at their current job?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                {props.patientName.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id="employment_pg1_j"
                name="employment_pg1_j"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientEmployment_pg1.employment_pg1_j}
              />
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation
              next={next}
              back={back}
              updatePatient={updatePatient}
              patient={props.patientId}
              patientNotes={patientEmployment_pg1}
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

export default EmploymentPg1;
