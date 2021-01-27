import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

function FamilyPg2(props) {
  const [item, setItem] = useState("");
  const [patientFamily_pg2, setPatientFamily_pg2] = useState({
    familiy_pg2_a: "",
    familiy_pg2_b: "",
    familiy_pg2_c: "",
  });

  const next = "/family_pg_3";
  const back = "/family_pg_1";

  const handleFieldChange = (e) => {
    setPatientFamily_pg2({
      ...patientFamily_pg2,
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
      family_pg2_a: patientFamily_pg2.family_pg2_a,
      family_pg2_b: patientFamily_pg2.family_pg2_b,
      family_pg2_c: patientFamily_pg2.family_pg2_c,
      family_pg2_d: patientFamily_pg2.family_pg2_d,
      family_pg2_e: patientFamily_pg2.family_pg2_e,
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
        "family_pg2_a",
        "family_pg2_b",
        "family_pg2_c",
        "family_pg2_d",
        "family_pg2_e",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientFamily_pg2(filtered);
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
          <div className="header">
            <h2 className="textWhite">Family</h2>
          </div>
          <h4 className="textWhite centerItem">
            Were different people involved?
          </h4>
          <div className="interview_div1">
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id={item}
                name="family_pg2_a"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientFamily_pg2.family_pg2_a}
              />
            </div>
          </div>
          <h4 className="textWhite centerItem">What are their names?</h4>
          <div className="interview_div1">
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id={item}
                name="family_pg2_b"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientFamily_pg2.family_pg2_b}
              />
            </div>
          </div>
          <h4 className="textWhite centerItem">
            What city or town did you grow up in?
          </h4>
          <div className="interview_div1">
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id={item}
                name="family_pg2_c"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientFamily_pg2.family_pg2_c}
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
            patientNotes={patientFamily_pg2}
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

export default FamilyPg2;
