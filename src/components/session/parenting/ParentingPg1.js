import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
// pdf page 90

function ParentingPg1(props) {
  const [item, setItem] = useState("");
  const [patientParentingPg1, setPatientParentingPg1] = useState({
    parenting_pg1_a: "",
    parenting_pg1_b: "",
    parenting_pg1_c: "",
  });

  const next = "/parenting_pg_2";
  const back = "/partner_relationship_pg_10";

  const handleFieldChange = (e) => {
    setPatientParentingPg1({
      ...patientParentingPg1,
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
      parenting_pg1_a: patientParentingPg1.parenting_pg1_a,
      parenting_pg1_b: patientParentingPg1.parenting_pg1_b,
      parenting_pg1_c: patientParentingPg1.parenting_pg1_c,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientParentingPg1(props.patientDetails);
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
              How do you show affections to your children?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="parenting_pg1_a"
                  name="parenting_pg1_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientParentingPg1.parenting_pg1_a}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">
              How do you monitor school progress?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="parenting_pg1_b"
                  name="parenting_pg1_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientParentingPg1.parenting_pg1_b}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">
              How do you keep the the child(ren) socially involved?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="parenting_pg1_c"
                  name="parenting_pg1_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientParentingPg1.parenting_pg1_c}
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
              patientNotes={patientParentingPg1}
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

export default ParentingPg1;
