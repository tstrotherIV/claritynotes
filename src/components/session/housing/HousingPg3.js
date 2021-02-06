import React, { useState, useEffect } from "react";
import "./housing.scss";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 42

function HousingPg3(props) {
  const [item, setItem] = useState("");
  const [patientHousing_pg3, setPatientHousing_pg3] = useState({
    housing_pg3_a: "",
    housing_pg3_b: "",
    housing_pg3_c: 0,
    housing_pg3_d: 0,
    housing_pg3_e: 0,
  });

  const next = "/employment_pg_1";
  const back = "/housing_pg_2";

  const handleFieldChange = (e) => {
    setPatientHousing_pg3({
      ...patientHousing_pg3,
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
      housing_pg3_a: patientHousing_pg3.housing_pg3_a,
      housing_pg3_b: patientHousing_pg3.housing_pg3_b,
      housing_pg3_c: patientHousing_pg3.housing_pg3_c,
      housing_pg3_d: patientHousing_pg3.housing_pg3_d,
      housing_pg3_e: patientHousing_pg3.housing_pg3_e,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = [
        "housing_pg3_a",
        "housing_pg3_b",
        "housing_pg3_c",
        "housing_pg3_d",
        "housing_pg3_e",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientHousing_pg3(filtered);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <Heading />
          <h2 className="textWhite text-center mb-4">Housing</h2>
          <div className="questionsContainer">
            <h4 className="textWhite centerItem">
              Have you ever spent the night in a car or had to stay with another
              person?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="interview_fieldData"
                  type="text"
                  id="housing_pg3_a"
                  name="housing_pg3_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHousing_pg3.housing_pg3_a}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">
              Is your residence an apartment, house, or trailer?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1">
                <Label
                  className="textWhite interview_title"
                  for="hs-housing-cost"
                >
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="interview_fieldData"
                  type="text"
                  id="housing_pg3_b"
                  name="housing_pg3_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHousing_pg3.housing_pg3_b}
                />
              </div>
            </div>
            <div></div>
            <div className="row  m-auto text-center">
              <div className="col-3"></div>
              <div className="col-3">
                <Label className="textWhite" for="">
                  Number of Bedrooms?
                </Label>
                <input
                  className="col-6 m-auto fieldData"
                  type="number"
                  id="housing_pg3_c"
                  name="housing_pg3_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHousing_pg3.housing_pg3_c}
                />
              </div>
              <div className="col-3">
                <Label className="textWhite" for="">
                  Number of Baths?
                </Label>
                <input
                  className="col-6 m-auto fieldData"
                  type="number"
                  id="housing_pg3_d"
                  name="housing_pg3_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHousing_pg3.housing_pg3_d}
                />
              </div>
              <div className="col-3">
                <Label className="textWhite" for="">
                  How old is it?
                </Label>
                <input
                  className="col-6 m-auto fieldData"
                  type="number"
                  id="housing_pg3_e"
                  name="housing_pg3_e"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHousing_pg3.housing_pg3_e}
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
            patientNotes={patientHousing_pg3}
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

export default HousingPg3;
