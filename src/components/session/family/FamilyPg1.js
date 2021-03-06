import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

function FamilyPg1(props) {
  const [item, setItem] = useState("");
  const [patientFamily_pg1, setPatientFamily_pg1] = useState({});

  const next = "/family_pg_2";
  const back = "/interview_pg_9";

  const handleFieldChange = (e) => {
    setPatientFamily_pg1({
      ...patientFamily_pg1,
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
      family_pg1_a: patientFamily_pg1.family_pg1_a,
      family_pg1_b: patientFamily_pg1.family_pg1_b,
      family_pg1_c: patientFamily_pg1.family_pg1_c,
      family_pg1_d: patientFamily_pg1.family_pg1_d,
      family_pg1_e: patientFamily_pg1.family_pg1_e,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientFamily_pg1(props.patientDetails);
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
          <div className="interview_div1">
            <h4 className="textWhite centerItem">
              Who raised you from birth until you moved out of the home?
            </h4>
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                {props.patientDetails.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                name=""
                id="family_pg1_a"
                name="family_pg1_a"
                onChange={handleFieldChange}
                value={patientFamily_pg1.family_pg1_a}
                onClick={captureFieldName}
              />
            </div>
            <h4 className="textWhite centerItem">What are their names?</h4>
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                {props.patientDetails.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                name=""
                id="family_pg1_b"
                name="family_pg1_b"
                onChange={handleFieldChange}
                value={patientFamily_pg1.family_pg1_b}
                onClick={captureFieldName}
              />
            </div>
          </div>
          <h4 className="textWhite centerItem">
            Were different people involved?
          </h4>
          <div className="interview_div1">
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                {props.patientDetails.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                name=""
                id="family_pg1_c"
                name="family_pg1_c"
                onChange={handleFieldChange}
                value={patientFamily_pg1.family_pg1_c}
                onClick={captureFieldName}
              />
            </div>
          </div>
          <h4 className="textWhite centerItem">What are their names?</h4>
          <div className="interview_div1">
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                {props.patientDetails.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                name=""
                id="family_pg1_d"
                name="family_pg1_d"
                onChange={handleFieldChange}
                value={patientFamily_pg1.family_pg1_d}
                onClick={captureFieldName}
              />
            </div>
            <h4 className="textWhite centerItem">
              What city or town did you grow up in?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="interview_fieldData"
                  type="text"
                  name=""
                  id="family_pg1_e"
                  name="family_pg1_e"
                  onChange={handleFieldChange}
                  value={patientFamily_pg1.family_pg1_e}
                  onClick={captureFieldName}
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
              patientNotes={patientFamily_pg1}
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

export default FamilyPg1;
