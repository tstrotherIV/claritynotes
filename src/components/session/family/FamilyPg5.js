import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

//pdf page 28

function FamilyPg5(props) {
  const [item, setItem] = useState("");
  const [patientFamily_pg5, setPatientFamily_pg5] = useState({
    family_pg5_a: "",
    family_pg5_b: "",
  });

  const next = "/family_pg_6";
  const back = "/family_pg_4";

  const handleFieldChange = (e) => {
    setPatientFamily_pg5({
      ...patientFamily_pg5,
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
      family_pg5_a: patientFamily_pg5.family_pg5_a,
      family_pg5_b: patientFamily_pg5.family_pg5_b,
      family_pg5_c: patientFamily_pg5.family_pg5_c,
      family_pg5_d: patientFamily_pg5.family_pg5_d,
      family_pg5_e: patientFamily_pg5.family_pg5_e,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientFamily_pg5(props.patientDetails);
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
          <div className="questionsContainer mt-4">
            <h4 className="textWhite text-center">
              What is your least favorite childhood memory?
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
                  name="family_pg5_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientFamily_pg5.family_pg5_a}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem mt-4">
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
                  name="family_pg5_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientFamily_pg5.family_pg5_b}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem mt-4">
              How do you want the memories of your children to be different?
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
                  name="family_pg5_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientFamily_pg5.family_pg5_c}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem mt-4">How do you do this?</h4>
            <div className="interview_div1">
              <div className="interview_line1">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="interview_fieldData"
                  type="text"
                  id={item}
                  name="family_pg5_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientFamily_pg5.family_pg5_d}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem mt-4">
              How do these memories impact your parenting?
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
                  name="family_pg5_e"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientFamily_pg5.family_pg5_e}
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
            patientNotes={patientFamily_pg5}
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

export default FamilyPg5;
