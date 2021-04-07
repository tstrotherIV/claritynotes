import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

function FamilyPg4(props) {
  const [item, setItem] = useState("");
  const [patientFamily_pg4, setPatientFamily_pg4] = useState({});

  const next = "/family_pg_5";
  const back = "/family_pg_3";

  const handleFieldChange = (e) => {
    setPatientFamily_pg4({
      ...patientFamily_pg4,
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
      family_pg4_a: patientFamily_pg4.family_pg4_a,
      family_pg4_b: patientFamily_pg4.family_pg4_b,
      family_pg4_c: patientFamily_pg4.family_pg4_c,
      family_pg4_d: patientFamily_pg4.family_pg4_d,
      family_pg4_e: patientFamily_pg4.family_pg4_e,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientFamily_pg4(props.patientDetails);
  };

  useEffect(() => {
    getData();
  }, [props]);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <div className="header">
            <h2 className="textWhite mb-4">Family</h2>
          </div>
          <h4 className="textWhite centerItem">What about drug use?</h4>
          <div className="interview_div1">
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                {props.patientDetails.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id={item}
                name="family_pg4_a"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientFamily_pg4.family_pg4_a}
              />
            </div>
          </div>
          <h4 className="textWhite centerItem">If so, how did you cope?</h4>
          <div className="interview_div1">
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                {props.patientDetails.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id={item}
                name="family_pg4_b"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientFamily_pg4.family_pg4_b}
              />
            </div>
          </div>
          <h4 className="textWhite centerItem">
            How was disapproval of your actions displayed by your parents/how
            were you punished when you acted out?
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
                name="family_pg4_c"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientFamily_pg4.family_pg4_c}
              />
            </div>
          </div>
          <h4 className="textWhite centerItem">
            What is your favorite childhood memory?
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
                name="family_pg4_d"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientFamily_pg4.family_pg4_d}
              />
            </div>
          </div>
          <h4 className="textWhite centerItem">
            Tell me more about that. How did it make you feel?
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
                name="family_pg4_e"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientFamily_pg4.family_pg4_e}
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
            patientNotes={patientFamily_pg4}
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

export default FamilyPg4;
