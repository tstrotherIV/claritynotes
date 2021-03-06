import React, { useState, useEffect } from "react";
import "./housing.scss";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 41

function HousingPg2(props) {
  const [item, setItem] = useState("");
  const [patientHousing_pg2, setPatientHousing_pg2] = useState({});

  const next = "/housing_pg_3";
  const back = "/housing_pg_1";

  const handleFieldChange = (e) => {
    setPatientHousing_pg2({
      ...patientHousing_pg2,
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
      housing_pg2_a: patientHousing_pg2.housing_pg2_a,
      housing_pg2_b: patientHousing_pg2.housing_pg2_b,
      housing_pg2_c: patientHousing_pg2.housing_pg2_c,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientHousing_pg2(props.patientDetails);
  };

  useEffect(() => {
    getData();
  }, [props]);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <h2 className="textWhite text-center mb-4">Housing</h2>
          <h4 className="textWhite centerItem">All or part?</h4>
          <div className="questionsContainerWide">
            <div className="interview_div1">
              <div className="interview_line1">
                <Label
                  className="textWhite interview_title text-center"
                  for="hs-all-or-part"
                >
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="housing_pg2_a"
                  name="housing_pg2_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHousing_pg2.housing_pg2_a}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">
              How much is your rent or mortgage?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1">
                <Label
                  className="textWhite interview_title text-center"
                  for="hs-housing-cost"
                >
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="housing_pg2_b"
                  name="housing_pg2_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHousing_pg2.housing_pg2_b}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem ">
              Have you ever experienced times without shelter?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1">
                <Label
                  className="textWhite interview_title text-center"
                  for="hs-without-shelter"
                >
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="housing_pg2_c"
                  name="housing_pg2_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHousing_pg2.housing_pg2_c}
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
            patientNotes={patientHousing_pg2}
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

export default HousingPg2;
