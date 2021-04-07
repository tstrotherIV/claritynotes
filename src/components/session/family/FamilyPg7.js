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
            <p className="textWhite centerItem">
              How was disapproval of your actions displayed by your parents/how
              were you punished when you acted out?
            </p>
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

            <p className="textWhite centerItem">
              How did your parent’s punishment shape how you punish your
              children?
            </p>
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
