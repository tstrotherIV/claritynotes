import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

//pdf page 29

function FamilyPg6(props) {
  const [item, setItem] = useState("");
  const [patientFamily_pg6, setPatientFamily_pg6] = useState({});

  const next = "/family_pg_7";
  const back = "/family_pg_5";

  const handleFieldChange = (e) => {
    setPatientFamily_pg6({
      ...patientFamily_pg6,
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
      family_pg6_a: patientFamily_pg6.family_pg6_a,
      family_pg6_b: patientFamily_pg6.family_pg6_b,
      family_pg6_c: patientFamily_pg6.family_pg6_c,
      family_pg6_d: patientFamily_pg6.family_pg6_d,
      family_pg6_e: patientFamily_pg6.family_pg6_e,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientFamily_pg6(props.patientDetails);
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
          <div className="questionsContainerWide">
            <h4 className="textWhite centerItem">
              Tell me about your closest friendship that was not a romantic
              relationship.
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
                  name="family_pg6_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientFamily_pg6.family_pg6_a}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">
              Tell me more about relationships with teachers, supervisors,
              schoolmates, bosses, or workmates of any importance.
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
                  name="family_pg6_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientFamily_pg6.family_pg6_b}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">
              How did they shape your view of the world?
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
                  name="family_pg6_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientFamily_pg6.family_pg6_c}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">
              Was there ever anyone that was more important to you than your
              biological family?
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
                  name="family_pg6_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientFamily_pg6.family_pg6_d}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">If so, who and why?</h4>
            <div className="interview_div1">
              <div className="interview_line1">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="interview_fieldData"
                  type="text"
                  id={item}
                  name="family_pg6_e"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientFamily_pg6.family_pg6_e}
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
            patientNotes={patientFamily_pg6}
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

export default FamilyPg6;
