import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

function FamilyPg3(props) {
  const [item, setItem] = useState("");
  const [patientFamily_pg3, setPatientFamily_pg3] = useState({});

  const next = "/family_pg_4";
  const back = "/family_pg_2";

  const handleFieldChange = (e) => {
    setPatientFamily_pg3({
      ...patientFamily_pg3,
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
      family_pg3_a: patientFamily_pg3.family_pg3_a,
      family_pg3_b: patientFamily_pg3.family_pg3_b,
      family_pg3_c: patientFamily_pg3.family_pg3_c,
      family_pg3_d: patientFamily_pg3.family_pg3_d,
      family_pg3_e: patientFamily_pg3.family_pg3_e,
    };
    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = async () => {
    setPatientFamily_pg3(props.patientDetails);
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
          <h4 className="textWhite centerItem">
            Did you experience a sudden loss or death as a child?
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
                name="family_pg3_a"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientFamily_pg3.family_pg3_a}
              />
            </div>
          </div>
          <h4 className="textWhite centerItem">
            Did you feel loved and accepted by each parent, even when you
            disappointed them?
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
                name="family_pg3_b"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientFamily_pg3.family_pg3_b}
              />
            </div>
          </div>
          <h4 className="textWhite centerItem">
            What are some ways they showed you love?
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
                name="family_pg3_c"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientFamily_pg3.family_pg3_c}
              />
            </div>
          </div>
          <h4 className="textWhite centerItem">
            Do you remember a lot of fighting in the home growing up?
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
                name="family_pg3_d"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientFamily_pg3.family_pg3_d}
              />
            </div>
          </div>
          <h4 className="textWhite centerItem">
            Was there a lot of drinking in the home growing up?
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
                name="family_pg3_e"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientFamily_pg3.family_pg3_e}
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
            patientNotes={patientFamily_pg3}
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

export default FamilyPg3;
