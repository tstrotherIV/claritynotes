import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 45

function EducationPg2(props) {
  const [item, setItem] = useState("");
  const [patientEducation_pg2, setPatientEducation_pg2] = useState({});

  const next = "/education_pg_3";
  const back = "/education_pg_1";

  const handleFieldChange = (e) => {
    setPatientEducation_pg2({
      ...patientEducation_pg2,
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
      education_pg2_a: patientEducation_pg2.education_pg2_a,
      education_pg2_b: patientEducation_pg2.education_pg2_b,
      education_pg2_c: patientEducation_pg2.education_pg2_c,
      education_pg2_d: patientEducation_pg2.education_pg2_d,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientEducation_pg2(props.patientDetails);
  };

  useEffect(() => {
    getData();
  }, [props]);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <h2 className="textWhite text-center mb-4">EDUCATION (COGNITIVE)</h2>
          <div className="questionsContainer text-center">
            <h4 className="textWhite centerItem">
              Any learning disability, ADHD, speech or language problem, vision
              or hearing problem, or physical malady?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="education_pg2_a"
                  name="education_pg2_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientEducation_pg2.education_pg2_a}
                />
              </div>
              <h4 className="textWhite centerItem">
                Did you repeat any grades?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="education_pg2_b"
                  name="education_pg2_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientEducation_pg2.education_pg2_b}
                />
              </div>
              <h4 className="textWhite centerItem">
                Where you ever suspended?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="education_pg2_c"
                  name="education_pg2_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientEducation_pg2.education_pg2_c}
                />
              </div>
              <h4 className="textWhite centerItem questionsContainer mt-5">
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
                    id="education_pg2_d"
                    name="education_pg2_d"
                    onChange={handleFieldChange}
                    onClick={captureFieldName}
                    value={patientEducation_pg2.education_pg2_d}
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation
              next={next}
              back={back}
              updatePatient={updatePatient}
              patient={props.patientId}
              patientNotes={patientEducation_pg2}
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

export default EducationPg2;
