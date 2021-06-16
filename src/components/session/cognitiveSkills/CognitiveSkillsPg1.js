// Page Deleted??

import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
// pdf page 96

function CognitiveSkillsPg1(props) {
  const [item, setItem] = useState("");
  const [patientCognitiveSkillsPg1, setPatientCognitiveSkillsPg1] = useState({
    cognitive_skills_pg1_a: "",
    cognitive_skills_pg1_b: "",
    cognitive_skills_pg1_c: "",
    cognitive_skills_pg1_d: "",
  });

  const next = "/material_resources_pg_1";
  const back = "/parent_knowledge_pg_1";

  const handleFieldChange = (e) => {
    setPatientCognitiveSkillsPg1({
      ...patientCognitiveSkillsPg1,
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
      cognitive_skills_pg1_a: patientCognitiveSkillsPg1.cognitive_skills_pg1_a,
      cognitive_skills_pg1_b: patientCognitiveSkillsPg1.cognitive_skills_pg1_b,
      cognitive_skills_pg1_c: patientCognitiveSkillsPg1.cognitive_skills_pg1_c,
      cognitive_skills_pg1_d: patientCognitiveSkillsPg1.cognitive_skills_pg1_d,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientCognitiveSkillsPg1(props.patientDetails);
  };

  useEffect(() => {
    getData();
  }, [props]);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <h2 className="textWhite text-center mb-4">COGNITIVE SKILLS</h2>
          <div className="questionsContainer text-center">
            <h4 className="textWhite centerItem">
              How do you give postive reinforcement?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="cognitive_skills_pg1_a"
                  name="cognitive_skills_pg1_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientCognitiveSkillsPg1.cognitive_skills_pg1_a}
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
                  id="cognitive_skills_pg1_b"
                  name="cognitive_skills_pg1_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientCognitiveSkillsPg1.cognitive_skills_pg1_b}
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
                  id="cognitive_skills_pg1_c"
                  name="cognitive_skills_pg1_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientCognitiveSkillsPg1.cognitive_skills_pg1_c}
                />
              </div>
              <div className="m-auto d-flex align-items-baseline textWhite justify-content-center">
                <Label className="textWhite text-right" for="">
                  {props.patientDetails.patient_first_name}
                </Label>
                <div className="m-2">'s language skills</div>
                <TextareaAutosize
                  className="col-2 mr-2 mb-2 fieldData"
                  type="text"
                  id="cognitive_skills_pg1_d"
                  name="cognitive_skills_pg1_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientCognitiveSkillsPg1.cognitive_skills_pg1_d}
                  placeholder="were/were not"
                />
                impaired.
              </div>
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation
              next={next}
              back={back}
              updatePatient={updatePatient}
              patient={props.patientId}
              patientNotes={patientCognitiveSkillsPg1}
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

export default CognitiveSkillsPg1;
