import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 91

function ParentingPg2(props) {
  const [item, setItem] = useState("");
  const [patientParentingPg2, setPatientParentingPg2] = useState({
    parenting_pg2_a: "",
    parenting_pg2_b: "",
    parenting_pg2_c: "",
  });

  const next = "/parenting_pg_3";
  const back = "/parenting_pg_1";

  const handleFieldChange = (e) => {
    setPatientParentingPg2({
      ...patientParentingPg2,
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
      parenting_pg2_a: patientParentingPg2.parenting_pg2_a,
      parenting_pg2_b: patientParentingPg2.parenting_pg2_b,
      parenting_pg2_c: patientParentingPg2.parenting_pg2_c,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientParentingPg2(props.patientDetails);
  };

  useEffect(() => {
    getData();
  }, [props]);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <h2 className="textWhite text-center mb-4">PARENTING</h2>
          <div className="questionsContainer text-center">
            <h4 className="textWhite centerItem">
              How do you give positive reinforcement?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="parenting_pg2_a"
                  name="parenting_pg2_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientParentingPg2.parenting_pg2_a}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">
              How do you model impulse control?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="parenting_pg2_b"
                  name="parenting_pg2_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientParentingPg2.parenting_pg2_b}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">
              How do you provide security so your child(ren) feel safe?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="parenting_pg2_c"
                  name="parenting_pg2_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientParentingPg2.parenting_pg2_c}
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
              patientNotes={patientParentingPg2}
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

export default ParentingPg2;
