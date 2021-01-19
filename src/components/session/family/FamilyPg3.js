import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

function FamilyPg3(props) {
  const [item, setItem] = useState("");
  const [patientFamily_pg3, setPatientFamily_pg3] = useState({
    familiy_pg3_a: "",
    familiy_pg3_b: "",
    familiy_pg3_c: "",
  });

  const next = "/family_pg_4";
  const back = "/family_pg_2";

  const handleFieldChange = (e) => {
    setPatientFamily_pg3({
      ...patientFamily_pg3,
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
      id: props.patientId,
      family_pg3_a: patientFamily_pg3.family_pg3_a,
      family_pg3_b: patientFamily_pg3.family_pg3_b,
      family_pg3_c: patientFamily_pg3.family_pg3_c,
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
        "family_pg3_a",
        "family_pg3_b",
        "family_pg3_c",
        "family_pg3_d",
        "family_pg3_e",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientFamily_pg3(filtered);
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
            What are the names of your siblings?
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
                name="family_pg3_a"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientFamily_pg3.family_pg3_a}
              />
            </div>
          </div>
          <h4 className="textWhite centerItem">
            What kind of a person was your biological mother when you were
            growing up?
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
                name="family_pg3_b"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientFamily_pg3.family_pg3_b}
              />
            </div>
          </div>
          <h4 className="textWhite centerItem">
            What kind of a person was your biological father when you were
            growing up?
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
                name="family_pg3_c"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientFamily_pg3.family_pg3_c}
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
            patientNotes={patientFamily_pg3}
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

export default FamilyPg3;
