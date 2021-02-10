import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
// pdf page 93

function PositiveRoleModelPg1(props) {
  const [item, setItem] = useState("");
  const [
    patientPositiveRoleModelPg1,
    setPatientPositiveRoleModelPg1,
  ] = useState({
    positive_role_model_pg1_a: "",
    positive_role_model_pg1_b: "",
    positive_role_model_pg1_c: "",
    positive_role_model_pg1_d: "",
    positive_role_model_pg1_e: "",
    positive_role_model_pg1_f: "",
    positive_role_model_pg1_g: "",
    positive_role_model_pg1_h: "",
    positive_role_model_pg1_i: "",
    positive_role_model_pg1_j: "",
  });

  const next = "/positive_role_model_pg_2";
  const back = "/parenting_pg_3";

  const handleFieldChange = (e) => {
    setPatientPositiveRoleModelPg1({
      ...patientPositiveRoleModelPg1,
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
      positive_role_model_pg1_a:
        patientPositiveRoleModelPg1.positive_role_model_pg1_a,
      positive_role_model_pg1_b:
        patientPositiveRoleModelPg1.positive_role_model_pg1_b,
      positive_role_model_pg1_c:
        patientPositiveRoleModelPg1.positive_role_model_pg1_c,
      positive_role_model_pg1_d:
        patientPositiveRoleModelPg1.positive_role_model_pg1_d,
      positive_role_model_pg1_e:
        patientPositiveRoleModelPg1.positive_role_model_pg1_e,
      positive_role_model_pg1_f:
        patientPositiveRoleModelPg1.positive_role_model_pg1_f,
      positive_role_model_pg1_g:
        patientPositiveRoleModelPg1.positive_role_model_pg1_g,
      positive_role_model_pg1_h:
        patientPositiveRoleModelPg1.positive_role_model_pg1_h,
      positive_role_model_pg1_i:
        patientPositiveRoleModelPg1.positive_role_model_pg1_i,
      positive_role_model_pg1_j:
        patientPositiveRoleModelPg1.positive_role_model_pg1_j,
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
        "positive_role_model_pg1_a",
        "positive_role_model_pg1_b",
        "positive_role_model_pg1_c",
        "positive_role_model_pg1_d",
        "positive_role_model_pg1_e",
        "positive_role_model_pg1_f",
        "positive_role_model_pg1_g",
        "positive_role_model_pg1_h",
        "positive_role_model_pg1_i",
        "positive_role_model_pg1_j",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientPositiveRoleModelPg1(filtered);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
           
          <h2 className="textWhite text-center mb-4">POSITIVE ROLE MODEL</h2>
          <div className="questionsContainer">
            <h4 className="textWhite centerItem">
              Does the patient report that they smoke cigarettes?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id="positive_role_model_pg1_a"
                name="positive_role_model_pg1_a"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientPositiveRoleModelPg1.positive_role_model_pg1_a}
              />
            </div>
            <h4 className="textWhite centerItem">
              Does the patient report that they drink alcohol?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id="positive_role_model_pg1_b"
                name="positive_role_model_pg1_b"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientPositiveRoleModelPg1.positive_role_model_pg1_b}
              />
            </div>
            <h4 className="textWhite centerItem">
              Does the patient confirm or deny that they abuse alcohol?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id="positive_role_model_pg1_c"
                name="positive_role_model_pg1_c"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientPositiveRoleModelPg1.positive_role_model_pg1_c}
              />
            </div>
            <h4 className="textWhite centerItem">
              Is the patient CURRENTLY using substances?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id="positive_role_model_pg1_d"
                name="positive_role_model_pg1_d"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientPositiveRoleModelPg1.positive_role_model_pg1_d}
              />
            </div>
            <h4 className="textWhite centerItem">
              Is the patient displaying profanity or prejudice?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id="positive_role_model_pg1_e"
                name="positive_role_model_pg1_e"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientPositiveRoleModelPg1.positive_role_model_pg1_e}
              />
            </div>
            <h4 className="textWhite centerItem">
              Is the patient bullying others?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id="positive_role_model_pg1_f"
                name="positive_role_model_pg1_f"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientPositiveRoleModelPg1.positive_role_model_pg1_f}
              />
            </div>
            <h4 className="textWhite centerItem">
              Is the patient exhibiting any impulsivity or violence?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id="positive_role_model_pg1_g"
                name="positive_role_model_pg1_g"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientPositiveRoleModelPg1.positive_role_model_pg1_g}
              />
            </div>
            <div className="mb-4 d-flex flex-wrap justify-content-center mt-4">
              <h5 className="textWhite centerItem text-center offset-2">
                Give three examples of how you are a positive role model to
                others?
              </h5>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  Example 1:
                </Label>
                <TextareaAutosize
                  className="interview_fieldData"
                  type="text"
                  id="positive_role_model_pg1_h"
                  name="positive_role_model_pg1_h"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientPositiveRoleModelPg1.positive_role_model_pg1_h}
                />
              </div>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  Example 2:
                </Label>
                <TextareaAutosize
                  className="interview_fieldData"
                  type="text"
                  id="positive_role_model_pg1_i"
                  name="positive_role_model_pg1_i"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientPositiveRoleModelPg1.positive_role_model_pg1_i}
                />
              </div>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  Example 3:
                </Label>
                <TextareaAutosize
                  className="interview_fieldData"
                  type="text"
                  id="positive_role_model_pg1_j"
                  name="positive_role_model_pg1_j"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientPositiveRoleModelPg1.positive_role_model_pg1_j}
                />
              </div>
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation
              next={next}
              back={back}
              updatePatient={updatePatient}
              patient={props.patientId}
              patientNotes={patientPositiveRoleModelPg1}
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

export default PositiveRoleModelPg1;
