import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 44

function EmploymentPg2(props) {
  const [item, setItem] = useState("");
  const [patientEmployment_pg2, setPatientEmployment_pg2] = useState({
    employment_pg2_a: "",
    employment_pg2_b: "",
    employment_pg2_c: "",
  });

  const next = "/employment_pg_3";
  const back = "/employment_pg_1";

  const handleFieldChange = (e) => {
    setPatientEmployment_pg2({
      ...patientEmployment_pg2,
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
      employment_pg2_a: patientEmployment_pg2.employment_pg2_a,
      employment_pg2_b: patientEmployment_pg2.employment_pg2_b,
      employment_pg2_c: patientEmployment_pg2.employment_pg2_c,
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
        "employment_pg2_a",
        "employment_pg2_b",
        "employment_pg2_c",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientEmployment_pg2(filtered);
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
          <h2 className="textWhite text-center mb-4">Employment</h2>
          <div className="questionsContainer">
            <h4 className="textWhite centerItem">
              What behaviors led to your job termination?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title text-center" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="employment_pg2_a"
                  name="employment_pg2_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientEmployment_pg2.employment_pg2_a}
                />
              </div>
              <h4 className="textWhite centerItem">
                What is the longest you have worked at one company?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title text-center" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="employment_pg2_b"
                  name="employment_pg2_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientEmployment_pg2.employment_pg2_b}
                />
              </div>
              <h4 className="textWhite centerItem">
                What do you think limits long-term stable employement?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title text-center" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="employment_pg2_c"
                  name="employment_pg2_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientEmployment_pg2.employment_pg2_c}
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
              patientNotes={patientEmployment_pg2}
            />
            <TermOfParentalRights
              questionId={item}
              patientId={props.patientId}
              item={item}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default EmploymentPg2;
