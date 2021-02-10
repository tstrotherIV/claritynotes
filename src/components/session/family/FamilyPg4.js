import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

function FamilyPg4(props) {
  const [item, setItem] = useState("");
  const [patientFamily_pg4, setPatientFamily_pg4] = useState({
    family_pg4_a: "",
    family_pg4_b: "",
    family_pg4_c: "",
  });

  const next = "/family_pg_5";
  const back = "/family_pg_3";

  const handleFieldChange = (e) => {
    setPatientFamily_pg4({
      ...patientFamily_pg4,
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
      family_pg4_a: patientFamily_pg4.family_pg4_a,
      family_pg4_b: patientFamily_pg4.family_pg4_b,
      family_pg4_c: patientFamily_pg4.family_pg4_c,
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

      const allowed = ["family_pg4_a", "family_pg4_b", "family_pg4_c"];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientFamily_pg4(filtered);
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
            <h2 className="textWhite mb-4">Family</h2>
          </div>
          <h4 className="textWhite centerItem">
            What kind of a person was your grandmother (maternal or paternal)
            when you were growing up?
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
                name="family_pg4_a"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientFamily_pg4.family_pg4_a}
              />
            </div>
          </div>
          <h4 className="textWhite centerItem">
            What kind of a person was your grandfather when you were growing up?
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
                name="family_pg4_b"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientFamily_pg4.family_pg4_b}
              />
            </div>
          </div>
          <h4 className="textWhite centerItem">
            Did you experience a sudden loss or death?
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
                name="family_pg4_c"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientFamily_pg4.family_pg4_c}
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
            patientNotes={patientFamily_pg4}
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

export default FamilyPg4;
