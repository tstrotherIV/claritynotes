import React, { useState, useEffect } from "react";
import { Input, Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

//pdf page 38

function FamilyPg15(props) {
  const [item, setItem] = useState("");
  const [patientFamily_pg15, setPatientFamily_pg15] = useState({});

  const next = "housing_pg_1";
  const back = "family_pg_14";

  const handleFieldChange = (e) => {
    setPatientFamily_pg15({
      ...patientFamily_pg15,
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

    setPatientFamily_pg15({
      ...patientFamily_pg15,
      family_pg15_c: value,
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
      family_pg15_a: patientFamily_pg15.family_pg15_a,
      family_pg15_b: patientFamily_pg15.family_pg15_b,
      family_pg15_c: patientFamily_pg15.family_pg15_c,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientFamily_pg15(props.patientDetails);
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
          <h5 className="textWhite centerItem mt-4">
            What are your values and goals?
          </h5>
          <div className="interview_div1">
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                {props.patientDetails.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id={item}
                name="family_pg15_a"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientFamily_pg15.family_pg15_a}
              />
            </div>
          </div>
          <h5 className="textWhite centerItem mt-4">
            How did your leaving home occur? How old were you? Was it on
            positive terms?
          </h5>
          <div className="interview_div1">
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                {props.patientDetails.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id={item}
                name="family_pg15_b"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientFamily_pg15.family_pg15_b}
              />
            </div>
          </div>
          <div className="siblingsFields">
            <div className="m-1">
              <Input
                type="checkbox"
                id="family_pg15_c"
                name="family_pg15_c"
                checked={patientFamily_pg15.family_pg15_c}
                onChange={handleCheckBoxChange}
              />
              <Label className="textWhite">
                The Patient does not have good Values or Goals.
              </Label>
            </div>
          </div>
        </div>
        <div id="footer">
          <ButtonNavigation
            next={next}
            back={back}
            updatePatient={updatePatient}
            patient={props.patientId}
            patientNotes={patientFamily_pg15}
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

export default FamilyPg15;
