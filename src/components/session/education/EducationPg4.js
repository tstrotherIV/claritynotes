import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 49

function EducationPg4(props) {
  const [item, setItem] = useState("");
  const [patientEducation_pg4, setPatientEducation_pg4] = useState({});

  const next = "/history_of_legal_pg_1";
  const back = "/education_pg_3";

  const handleFieldChange = (e) => {
    setPatientEducation_pg4({
      ...patientEducation_pg4,
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
      education_pg4_a: patientEducation_pg4.education_pg4_a,
      education_pg4_b: patientEducation_pg4.education_pg4_b,
      education_pg4_c: patientEducation_pg4.education_pg4_c,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientEducation_pg4(props.patientDetails);
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
              Do you feel your substance use impacted your grades?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="education_pg4_a"
                  name="education_pg4_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientEducation_pg4.education_pg4_a}
                />
              </div>
              <h4 className="textWhite centerItem">
                Do you feel your substance use impacted your behavior in school?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="education_pg4_b"
                  name="education_pg4_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientEducation_pg4.education_pg4_b}
                />
              </div>
              <h4 className="textWhite centerItem">
                Looking back, should you have tried harder?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="education_pg4_c"
                  name="education_pg4_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientEducation_pg4.education_pg4_c}
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
              patientNotes={patientEducation_pg4}
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

export default EducationPg4;
