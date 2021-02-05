import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 92

function ParentingPg3(props) {
  const [item, setItem] = useState("");
  const [patientParentingPg3, setPatientParentingPg3] = useState({
    parenting_pg3_a: "",
    parenting_pg3_b: "",
  });

  const next = "/positive_role_model_pg_1";
  const back = "/parenting_pg_2";

  const handleFieldChange = (e) => {
    setPatientParentingPg3({
      ...patientParentingPg3,
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
      parenting_pg3_a: patientParentingPg3.parenting_pg3_a,
      parenting_pg3_b: patientParentingPg3.parenting_pg3_b,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = ["parenting_pg3_a", "parenting_pg3_b"];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientParentingPg3(filtered);
    });
  };

  useEffect(() => {
    getData();
  }, );

  return (
    <>
      <div id="page-container">
        <Heading />
        <div id="content-wrap">
          <h2 className="textWhite text-center mb-4">PARENTING</h2>
          <div className="questionsContainer text-center">
            <h4 className="textWhite centerItem">
              Is/Are your child(ren) meeting developmental expectations? How do
              you know?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="parenting_pg3_a"
                  name="parenting_pg3_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientParentingPg3.parenting_pg3_a}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">
              How are you responsive to your child(ren)'s needs?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="parenting_pg3_b"
                  name="parenting_pg3_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientParentingPg3.parenting_pg3_b}
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
              patientNotes={patientParentingPg3}
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

export default ParentingPg3;
