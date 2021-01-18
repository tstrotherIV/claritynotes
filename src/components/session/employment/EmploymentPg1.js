import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 43

function EmploymentPg1(props) {
  const [item, setItem] = useState("");
  const [patientEmployment_pg1, setPatientEmployment_pg1] = useState({
    employment_pg1_a: "",
    employment_pg1_b: "",
    employment_pg1_c: "",
    employment_pg1_d: "",
    employment_pg1_e: "",
    employment_pg1_f: "",
    employment_pg1_g: "",
    employment_pg1_h: "",
    employment_pg1_i: "",
    employment_pg1_j: "",
  });

  const next = "/employment_pg_2";

  const handleFieldChange = (e) => {
    setPatientEmployment_pg1({
      ...patientEmployment_pg1,
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
      employment_pg1_a: patientEmployment_pg1.employment_pg1_a,
      employment_pg1_b: patientEmployment_pg1.employment_pg1_b,
      employment_pg1_c: patientEmployment_pg1.employment_pg1_c,
      employment_pg1_d: patientEmployment_pg1.employment_pg1_d,
      employment_pg1_e: patientEmployment_pg1.employment_pg1_e,
      employment_pg1_f: patientEmployment_pg1.employment_pg1_f,
      employment_pg1_g: patientEmployment_pg1.employment_pg1_g,
      employment_pg1_h: patientEmployment_pg1.employment_pg1_h,
      employment_pg1_i: patientEmployment_pg1.employment_pg1_i,
      employment_pg1_j: patientEmployment_pg1.employment_pg1_j,
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
        "employment_pg1_a",
        "employment_pg1_b",
        "employment_pg1_c",
        "employment_pg1_d",
        "employment_pg1_e",
        "employment_pg1_f",
        "employment_pg1_g",
        "employment_pg1_h",
        "employment_pg1_i",
        "employment_pg1_j",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientEmployment_pg1(filtered);
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
              Currently, where are you employed?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="interview_fieldData"
                  type="text"
                  id="employment_pg1_a"
                  name="employment_pg1_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientEmployment_pg1.employment_pg1_a}
                />
              </div>
              <div className="m-auto d-flex align-items-center textWhite">
                <Label className="textWhite col-3 text-right" for="">
                  [Patient Name, First]
                </Label>
                <TextareaAutosize
                  className="col-2 mr-2 mb-2 fieldData"
                  type="text"
                  id="employment_pg1_b"
                  name="employment_pg1_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientEmployment_pg1.employment_pg1_b}
                  placeholder="has/has never"
                />
                been employed.
              </div>
              <div className="m-auto d-flex align-items-center textWhite">
                <Label className="textWhite col-3 text-right" for="">
                  [Patient Name, First]
                </Label>
                <TextareaAutosize
                  className="col-2 mr-2 mb-2 fieldData"
                  type="text"
                  id="employment_pg1_c"
                  name="employment_pg1_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientEmployment_pg1.employment_pg1_c}
                  placeholder="is/is not"
                />
                currently employed and
                <TextareaAutosize
                  className="col-2 mr-2 ml-2 mb-2 fieldData"
                  type="text"
                  id="employment_pg1_d"
                  name="employment_pg1_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientEmployment_pg1.employment_pg1_d}
                  placeholder="has/has no"
                />
                income.
              </div>
              <div className="m-auto d-flex align-items-center textWhite">
                <Label className="textWhite text-right col-3" for="">
                  [Patient Name, First]
                </Label>
                last work at
                <TextareaAutosize
                  className="col-2 mr-2 ml-2 mb-2 fieldData"
                  type="text"
                  id="employment_pg1_e"
                  name="employment_pg1_e"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientEmployment_pg1.employment_pg1_e}
                  placeholder=""
                />
                for
                <input
                  className="col-3 mr-2 ml-2 mb-2 fieldData"
                  type="time"
                  id="employment_pg1_f"
                  name="employment_pg1_f"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientEmployment_pg1.employment_pg1_f}
                  placeholder="select time"
                />
                .
              </div>

              <div className="m-auto d-flex align-items-center textWhite">
                <Label className="textWhite col-3 text-right" for="">
                  [Patient Name, First]
                </Label>
                left this job because
                <TextareaAutosize
                  className="col-4 mr-2 ml-2 mb-2 fieldData"
                  type=""
                  id="employment_pg1_g"
                  name="employment_pg1_g"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientEmployment_pg1.employment_pg1_g}
                  placeholder=""
                />
                .
              </div>

              <div className="m-auto d-flex align-items-center textWhite">
                <Label className="textWhite col-3 text-right" for="">
                  [Patient Name, First]
                </Label>
                reported [he/she] worked at
                <TextareaAutosize
                  className="fieldData col-3 mr-2 ml-2 mb-2"
                  type=""
                  id="employment_pg1_h"
                  name="employment_pg1_h"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientEmployment_pg1.employment_pg1_h}
                  placeholder=""
                />
                as
                <TextareaAutosize
                  className="col-2 mr-2 ml-2 mb-2 fieldData"
                  type=""
                  id="employment_pg1_i"
                  name="employment_pg1_i"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientEmployment_pg1.employment_pg1_i}
                  placeholder=""
                />
                .
              </div>

              <div className="m-auto d-flex align-items-center textWhite">
                <Label className="textWhite col-3 text-right" for="">
                  [Patient Name, First]
                </Label>
                has been there
                <TextareaAutosize
                  className="col-4 mr-2 ml-2 mb-2 fieldData"
                  type=""
                  id="employment_pg1_j"
                  name="employment_pg1_j"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientEmployment_pg1.employment_pg1_j}
                  placeholder=""
                />
                .
              </div>
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation
              next={next}
              updatePatient={updatePatient}
              patient={props.patientId}
              patientNotes={patientEmployment_pg1}
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

export default EmploymentPg1;
