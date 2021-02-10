import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
// pdf page 95

function ParentKnowledgePg1(props) {
  const [item, setItem] = useState("");
  const [patientParentKnowledgePg1, setPatientParentKnowledgePg1] = useState({
    parent_knowledge_pg1_a: "",
    parent_knowledge_pg1_b: "",
    parent_knowledge_pg1_c: "",
    parent_knowledge_pg1_d: "",
    parent_knowledge_pg1_e: "",
    parent_knowledge_pg1_f: "",
    parent_knowledge_pg1_g: "",
    parent_knowledge_pg1_h: "",
    parent_knowledge_pg1_i: "",
  });

  const next = "/cognitive_skills_pg_1";
  const back = "/positive_role_model_pg_2";

  const handleFieldChange = (e) => {
    setPatientParentKnowledgePg1({
      ...patientParentKnowledgePg1,
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
      parent_knowledge_pg1_a: patientParentKnowledgePg1.parent_knowledge_pg1_a,
      parent_knowledge_pg1_b: patientParentKnowledgePg1.parent_knowledge_pg1_b,
      parent_knowledge_pg1_c: patientParentKnowledgePg1.parent_knowledge_pg1_c,
      parent_knowledge_pg1_d: patientParentKnowledgePg1.parent_knowledge_pg1_d,
      parent_knowledge_pg1_e: patientParentKnowledgePg1.parent_knowledge_pg1_e,
      parent_knowledge_pg1_f: patientParentKnowledgePg1.parent_knowledge_pg1_f,
      parent_knowledge_pg1_g: patientParentKnowledgePg1.parent_knowledge_pg1_g,
      parent_knowledge_pg1_h: patientParentKnowledgePg1.parent_knowledge_pg1_h,
      parent_knowledge_pg1_i: patientParentKnowledgePg1.parent_knowledge_pg1_i,
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

      const allowed = [
        "parent_knowledge_pg1_a",
        "parent_knowledge_pg1_b",
        "parent_knowledge_pg1_c",
        "parent_knowledge_pg1_d",
        "parent_knowledge_pg1_e",
        "parent_knowledge_pg1_f",
        "parent_knowledge_pg1_g",
        "parent_knowledge_pg1_h",
        "parent_knowledge_pg1_i",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientParentKnowledgePg1(filtered);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
           
          <h2 className="textWhite text-center mb-4">PARENT KNOWLEDGE</h2>
          <div className="text-center questionsContainer">
            <h4 className="textWhite centerItem">
              Where do your children go for medical care?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="fieldData mb-2"
                type="text"
                id="parent_knowledge_pg1_a"
                name="parent_knowledge_pg1_a"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientParentKnowledgePg1.parent_knowledge_pg1_a}
              />
            </div>
            <h4 className="textWhite centerItem">
              Where do your children go for dental care?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="fieldData mb-2"
                type="text"
                id="parent_knowledge_pg1_b"
                name="parent_knowledge_pg1_b"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientParentKnowledgePg1.parent_knowledge_pg1_b}
              />
            </div>

            <h4 className="textWhite centerItem">
              Who takes your children to their appointments?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="fieldData mb-2"
                type="text"
                id="parent_knowledge_pg1_c"
                name="parent_knowledge_pg1_c"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientParentKnowledgePg1.parent_knowledge_pg1_c}
              />
            </div>

            <h4 className="textWhite centerItem">
              What size clothers do your children wear?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="fieldData mb-2"
                type="text"
                id="parent_knowledge_pg1_d"
                name="parent_knowledge_pg1_d"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientParentKnowledgePg1.parent_knowledge_pg1_d}
              />
            </div>
            <h4 className="textWhite centerItem">
              What is your child's favorite color?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="fieldData mb-2"
                type="text"
                id="parent_knowledge_pg1_e"
                name="parent_knowledge_pg1_e"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientParentKnowledgePg1.parent_knowledge_pg1_e}
              />
            </div>
            <h4 className="textWhite centerItem">
              Are your kids old enough to attend school?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="fieldData mb-2"
                type="text"
                id="parent_knowledge_pg1_f"
                name="parent_knowledge_pg1_f"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientParentKnowledgePg1.parent_knowledge_pg1_f}
              />
            </div>
            <h4 className="textWhite centerItem">
              How many parent teacher conferences did you attend this past year?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="fieldData mb-2"
                type="text"
                id="parent_knowledge_pg1_g"
                name="parent_knowledge_pg1_g"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientParentKnowledgePg1.parent_knowledge_pg1_g}
              />
            </div>
            <h4 className="textWhite centerItem">
              How many extracurricular activites did you attend this past year?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="fieldData mb-2"
                type="text"
                id="parent_knowledge_pg1_h"
                name="parent_knowledge_pg1_h"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientParentKnowledgePg1.parent_knowledge_pg1_h}
              />
            </div>
            <h4 className="textWhite centerItem">
              What are the names of your child's teacher(s)?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="fieldData mb-2"
                type="text"
                id="parent_knowledge_pg1_i"
                name="parent_knowledge_pg1_i"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientParentKnowledgePg1.parent_knowledge_pg1_i}
              />
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation
              next={next}
              back={back}
              updatePatient={updatePatient}
              patient={props.patientId}
              patientNotes={patientParentKnowledgePg1}
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

export default ParentKnowledgePg1;
