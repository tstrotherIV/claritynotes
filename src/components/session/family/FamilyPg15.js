import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

//pdf page 38

function FamilyPg15(props) {
  const [item, setItem] = useState("");
  const [patientFamily_pg15, setPatientFamily_pg15] = useState({
    familiy_pg15_a: "",
    familiy_pg15_b: "",
  });

  const next = "housing_pg_1";
  const back = "family_pg_14";

  const handleFieldChange = (e) => {
    setPatientFamily_pg15({
      ...patientFamily_pg15,
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
      family_pg15_a: patientFamily_pg15.family_pg15_a,
      family_pg15_b: patientFamily_pg15.family_pg15_b,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    const check_for_patient = sessionStorage.getItem("patient_id");

    DataManager.getPatient(check_for_patient).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = ["family_pg15_a", "family_pg15_b"];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientFamily_pg15(filtered);
    });
  };

  useEffect(() => {
    getData();
  }, []);

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
                [Patient Name, First] said:
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
                [Patient Name, First] said:
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
