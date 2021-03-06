import React, { useState, useEffect } from "react";
import "./housing.scss";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 40

function HousingPg1(props) {
  const [item, setItem] = useState("");
  const [patientHousing_pg1, setPatientHousing_pg1] = useState({});

  const next = "/housing_pg_2";
  const back = "/family_pg_15";

  const handleFieldChange = (e) => {
    setPatientHousing_pg1({
      ...patientHousing_pg1,
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
      housing_pg1_a: patientHousing_pg1.housing_pg1_a,
      housing_pg1_b: patientHousing_pg1.housing_pg1_b,
      housing_pg1_c: patientHousing_pg1.housing_pg1_c,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientHousing_pg1(props.patientDetails);
  };

  useEffect(() => {
    getData();
  }, [props]);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <h2 className="textWhite text-center mb-4">Housing</h2>
          <div className="questionsContainer">
            <h4 className="textWhite centerItem">Do you live alone?</h4>
            <div className="interview_div1">
              <div className="interview_line1">
                <Label
                  className="textWhite interview_title text-center"
                  for="hs-live-alone"
                >
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id={item}
                  name="housing_pg1_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHousing_pg1.housing_pg1_a}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">Who do you live with?</h4>
            <div className="interview_div1">
              <div className="interview_line1">
                <Label
                  className="textWhite interview_title text-center"
                  for="hs-live-with"
                >
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id={item}
                  name="housing_pg1_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHousing_pg1.housing_pg1_b}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem ">
              Who pays your rent or mortgage?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1">
                <Label
                  className="textWhite interview_title text-center"
                  for="hs-who-pays"
                >
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id={item}
                  name="housing_pg1_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHousing_pg1.housing_pg1_c}
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
            patientNotes={patientHousing_pg1}
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

export default HousingPg1;
