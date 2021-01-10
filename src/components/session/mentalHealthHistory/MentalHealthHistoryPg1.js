import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
import convertID from "../../../helpers/formFieldIdConverter";

// pdf page 66

function MentalHealthHistoryPg1(props) {
  const [item, setItem] = useState("");
  const [
    patientMentalHealthHistory_pg1,
    setPatientMentalHealthHistory_pg1,
  ] = useState({
    mental_health_history_pg1_a: "",
    mental_health_history_pg1_b: "",
    mental_health_history_pg1_c: "",
  });

  const next = "/mental_health_history_pg_2";

  const handleFieldChange = (e) => {
    setPatientMentalHealthHistory_pg1({
      ...patientMentalHealthHistory_pg1,
      [e.target.name]: e.target.value,
    });
  };

  const convertIDfunc = (e) => {
    const fieldID = convertID.convertID(e);
    setItem(fieldID);
  };

  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      id: props.patientId,
      mental_health_history_pg1_a:
        patientMentalHealthHistory_pg1.mental_health_history_pg1_a,
      mental_health_history_pg1_b:
        patientMentalHealthHistory_pg1.mental_health_history_pg1_b,
      mental_health_history_pg1_c:
        patientMentalHealthHistory_pg1.mental_health_history_pg1_c,
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
        "mental_health_history_pg1_a",
        "mental_health_history_pg1_b",
        "mental_health_history_pg1_c",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientMentalHealthHistory_pg1(filtered);
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
          <h2 className="textWhite text-center mb-4">Mental Health History</h2>
          <div className="questionsContainer text-center">
            <h4 className="textWhite centerItem">
              Have you ever received a mental health diagnosis?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg1_a"
                  name="mental_health_history_pg1_a"
                  onChange={handleFieldChange}
                  value={
                    patientMentalHealthHistory_pg1.mental_health_history_pg1_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Have you ever suspected that you may have a mental health
                diagnosis and what might this diagnosis be?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg1_b"
                  name="mental_health_history_pg1_b"
                  onChange={handleFieldChange}
                  value={
                    patientMentalHealthHistory_pg1.mental_health_history_pg1_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                What prescriptions/medications are you taking for your mental
                health?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg1_c"
                  name="mental_health_history_pg1_c"
                  onChange={handleFieldChange}
                  value={
                    patientMentalHealthHistory_pg1.mental_health_history_pg1_c
                  }
                />
              </div>
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation
              next={next}
              updatePatient={updatePatient}
              patient={props.patientId}
              patientNotes={patientMentalHealthHistory_pg1}
            />
            <TermOfParentalRights />
          </div>
        </div>
      </div>
    </>
  );
}

export default MentalHealthHistoryPg1;
