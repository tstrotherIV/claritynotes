import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

function FamilyPg14(props) {
  const [item, setItem] = useState("");
  const [patientFamily_pg14, setPatientFamily_pg14] = useState({});

  const next = "/family_pg_15";
  const back = "/family_pg_13";

  const handleFieldChange = (e) => {
    setPatientFamily_pg14({
      ...patientFamily_pg14,
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
      family_pg14_a: patientFamily_pg14.family_pg14_a,
      family_pg14_b: patientFamily_pg14.family_pg14_b,
      family_pg14_c: patientFamily_pg14.family_pg14_c,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientFamily_pg14(props.patientDetails);
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
            <h5 className="textWhite centerItem mt-4">
              What do you enjoy doing in your free time?
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
                  name="family_pg14_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientFamily_pg14.family_pg14_a}
                />
              </div>
            </div>
            <h5 className="textWhite text-center mt-4">
              What do you want people to say about you someday? How do you want
              to be remembered?
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
                  name="family_pg14_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientFamily_pg14.family_pg14_b}
                />
              </div>
            </div>
            <h5 className="textWhite centerItem mt-4">
              How do you reach toward your potential each day?
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
                  name="family_pg14_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientFamily_pg14.family_pg14_c}
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
            patientNotes={patientFamily_pg14}
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

export default FamilyPg14;
