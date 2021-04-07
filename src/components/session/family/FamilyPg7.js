import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

function FamilyPg7(props) {
  const [item, setItem] = useState("");
  const [patientFamily_pg7, setPatientFamily_pg7] = useState({});

  const next = "/family_pg_8";
  const back = "/family_pg_6";

  const handleFieldChange = (e) => {
    setPatientFamily_pg7({
      ...patientFamily_pg7,
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
      family_pg7_a: patientFamily_pg7.family_pg7_a,
      family_pg7_b: patientFamily_pg7.family_pg7_b,
      family_pg7_c: patientFamily_pg7.family_pg7_c,
      family_pg7_d: patientFamily_pg7.family_pg7_d,
      family_pg7_e: patientFamily_pg7.family_pg7_e,
      family_pg7_f: patientFamily_pg7.family_pg7_f,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientFamily_pg7(props.patientDetails);
  };

  useEffect(() => {
    getData();
  }, [props]);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <div className="header">
            <h2 className="textWhite">Family</h2>
          </div>
          <div className="questionsContainer">
            <h4 className="textWhite centerItem">
              What do you enjoy doing in your free time
            </h4>
            <div className="interview_div1">
              <div className="interview_line1">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="interview_fieldData"
                  type="text"
                  id={item}
                  name="family_pg7_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientFamily_pg7.family_pg7_a}
                />
              </div>
            </div>

            <h4 className="textWhite centerItem">
              What do you want people to say about you someday? How do you want
              to be remembered?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="interview_fieldData"
                  type="text"
                  id={item}
                  name="family_pg7_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientFamily_pg7.family_pg7_b}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">
              How do you reach toward your potential each day?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="interview_fieldData"
                  type="text"
                  id={item}
                  name="family_pg7_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientFamily_pg7.family_pg7_c}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">
              What are your values in life?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="interview_fieldData"
                  type="text"
                  id={item}
                  name="family_pg7_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientFamily_pg7.family_pg7_d}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">
              What are your values in life?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="interview_fieldData"
                  type="text"
                  id={item}
                  name="family_pg7_e"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientFamily_pg7.family_pg7_e}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">
              How old were you the fi rst time you left home to live on your
              own? Was it on positive terms?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="interview_fieldData"
                  type="text"
                  id={item}
                  name="family_pg7_f"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientFamily_pg7.family_pg7_f}
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
            patientNotes={patientFamily_pg7}
          />
          <TermOfParentalRights
            questionId={item}
            patientId={props.patientId}
            item={item}
          />
        </div>
      </div>
    </>
  );
}

export default FamilyPg7;
