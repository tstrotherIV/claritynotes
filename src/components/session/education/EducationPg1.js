import React, { useState, useEffect } from "react";
import { Input, Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
// pdf page 44

function EducationPg1(props) {
  const [item, setItem] = useState("");
  const [patientEducation_pg1, setPatientEducation_pg1] = useState({});

  const next = "/education_pg_2";
  const back = "/employment_pg_3";

  const handleFieldChange = (e) => {
    setPatientEducation_pg1({
      ...patientEducation_pg1,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckBoxChange = async (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    const editedPatient = {
      id: props.patientId,
      [name]: value,
    };

    setPatientEducation_pg1({
      ...patientEducation_pg1,
      education_pg1_f: value,
    });
    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  const captureFieldName = (e) => {
    const fieldID = e.target.name;
    setItem(fieldID);
  };

  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      education_pg1_a: patientEducation_pg1.education_pg1_a,
      education_pg1_b: patientEducation_pg1.education_pg1_b,
      education_pg1_c: patientEducation_pg1.education_pg1_c,
      education_pg1_d: patientEducation_pg1.education_pg1_d,
      // education_pg1_e: patientEducation_pg1.education_pg1_e,
      education_pg1_f: patientEducation_pg1.education_pg1_f,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientEducation_pg1(props.patientDetails);
  };

  useEffect(() => {
    getData();
  }, [props]);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <h2 className="textWhite text-center mb-4 ">EDUCATION (COGNITIVE)</h2>
          <h4 className="textWhite centerItem questionsContainer mt-5">
            Did you quit school?
          </h4>
          <div className="interview_div1">
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                {props.patientDetails.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="col-6 fieldData"
                type="text"
                id="education_pg1_a"
                name="education_pg1_a"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientEducation_pg1.education_pg1_a}
              />
            </div>
          </div>
          <h4 className="textWhite centerItem questionsContainer mt-5">
            Did you graduate from high school?
          </h4>
          <div className="interview_div1">
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                {props.patientDetails.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="col-6 fieldData"
                type="text"
                id="education_pg1_b"
                name="education_pg1_b"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientEducation_pg1.education_pg1_b}
              />
            </div>
          </div>

          <h4 className="textWhite centerItem questionsContainer mt-5">
            Did you earn a GED?
          </h4>
          <div className="interview_div1">
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                {props.patientDetails.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="col-6 fieldData"
                type="text"
                id="education_pg1_c"
                name="education_pg1_c"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientEducation_pg1.education_pg1_c}
              />
            </div>
          </div>
          <h4 className="textWhite centerItem questionsContainer mt-5">
            Last Grade Completed?
          </h4>
          <div className="interview_div1">
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                {props.patientDetails.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="col-6 fieldData"
                type="text"
                id="education_pg1_d"
                name="education_pg1_d"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientEducation_pg1.education_pg1_d}
              />
            </div>
          </div>
          {/* <h4 className="textWhite centerItem questionsContainer mt-5">
            Were you in special education?
          </h4>
          <div className="interview_div1">
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                {props.patientDetails.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="col-6 fieldData"
                type="text"
                id="education_pg1_e"
                name="education_pg1_e"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientEducation_pg1.education_pg1_e}
              />
            </div>
          </div> */}
          <div className="siblingsFields">
            <div className="m-1">
              <Input
                type="checkbox"
                id="education_pg1_f"
                name="education_pg1_f"
                checked={patientEducation_pg1.education_pg1_f}
                onChange={handleCheckBoxChange}
              />
              <Label className="textWhite">
                The Patients education is less than a High School Diploma.
              </Label>
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation
              next={next}
              back={back}
              updatePatient={updatePatient}
              patient={props.patientId}
              patientNotes={patientEducation_pg1}
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

export default EducationPg1;
