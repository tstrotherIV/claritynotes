import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

function FamilyPg9(props) {
  const [item, setItem] = useState("");
  const [patientFamily_pg9, setPatientFamily_pg9] = useState({});

  const next = "/family_pg_10";
  const back = "/family_pg_8";

  const handleFieldChange = (e) => {
    setPatientFamily_pg9({
      ...patientFamily_pg9,
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
      family_pg9_a: patientFamily_pg9.family_pg9_a,
      family_pg9_b: patientFamily_pg9.family_pg9_b,
      family_pg9_c: patientFamily_pg9.family_pg9_c,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientFamily_pg9(props.patientDetails);
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
                name="family_pg9_a"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientFamily_pg9.family_pg9_a}
              />
            </div>
          </div>
          <h4 className="textWhite centerItem">
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
                name="family_pg9_b"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientFamily_pg9.family_pg9_b}
              />
            </div>
          </div>
          <h4 className="textWhite centerItem">How do you do this?</h4>
          <div className="interview_div1">
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                {props.patientDetails.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id={item}
                name="family_pg9_c"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientFamily_pg9.family_pg9_c}
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
            patientNotes={patientFamily_pg9}
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

export default FamilyPg9;
