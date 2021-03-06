import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 48

function EducationPg3(props) {
  const [item, setItem] = useState("");
  const [patientEducation_pg3, setPatientEducation_pg3] = useState({});

  const next = "/education_pg_4";
  const back = "/education_pg_2";

  const handleFieldChange = (e) => {
    setPatientEducation_pg3({
      ...patientEducation_pg3,
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
      education_pg3_a: patientEducation_pg3.education_pg3_a,
      education_pg3_b: patientEducation_pg3.education_pg3_b,
      education_pg3_c: patientEducation_pg3.education_pg3_c,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientEducation_pg3(props.patientDetails);
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
            <h4 className="textWhite centerItem">Were you ever expelled?</h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="education_pg3_a"
                  name="education_pg3_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientEducation_pg3.education_pg3_a}
                />
              </div>
              <h4 className="textWhite centerItem">
                Any emotional problem while in school?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="education_pg3_b"
                  name="education_pg3_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientEducation_pg3.education_pg3_b}
                />
              </div>
              <h4 className="textWhite centerItem">
                Any substance use in school?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="education_pg3_c"
                  name="education_pg3_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientEducation_pg3.education_pg3_c}
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
              patientNotes={patientEducation_pg3}
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

export default EducationPg3;
