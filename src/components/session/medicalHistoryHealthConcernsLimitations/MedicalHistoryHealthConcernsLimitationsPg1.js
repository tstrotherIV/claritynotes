import React, { useState, useEffect } from "react";
import { Label, Navbar } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
// pdf page 70

function MedicalHistoryHealthConcernsLimitationsPg1(props) {
  const [item, setItem] = useState("");
  const [
    patientMedicalHistoryHealthConcernsLimitationsPg1,
    setPatientMedicalHistoryHealthConcernsLimitationsPg1,
  ] = useState({
    mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_a:
      "",
    mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_b:
      "",
    mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_c:
      "",
    mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_d:
      "",
  });

  const next = "/neglect_abuse_trauma_loss_pg_1";
  const back = "/mental_health_history_pg_4";

  const handleFieldChange = (e) => {
    setPatientMedicalHistoryHealthConcernsLimitationsPg1({
      ...patientMedicalHistoryHealthConcernsLimitationsPg1,
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
      mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_a:
        patientMedicalHistoryHealthConcernsLimitationsPg1.mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_a,
      mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_b:
        patientMedicalHistoryHealthConcernsLimitationsPg1.mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_b,
      mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_c:
        patientMedicalHistoryHealthConcernsLimitationsPg1.mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_c,
      mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_d:
        patientMedicalHistoryHealthConcernsLimitationsPg1.mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_d,
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
        "mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_a",
        "mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_b",
        "mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_c",
        "mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_d",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientMedicalHistoryHealthConcernsLimitationsPg1(filtered);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
           
          <h2 className="textWhite text-center mb-4">
            MEDICAL HISTORY <span>&#183;</span> HEALTH CONCERNS{" "}
            <span>&#183;</span> LIMITATIONS
          </h2>
          <div className="questionsContainer text-center">
            <h4 className="textWhite centerItem">
              What are your medical diagnoses?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientName.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_a"
                  name="mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMedicalHistoryHealthConcernsLimitationsPg1.mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">Who is your physician?</h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientName.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_b"
                  name="mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMedicalHistoryHealthConcernsLimitationsPg1.mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                What prescriptions are you taking?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientName.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_c"
                  name="mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMedicalHistoryHealthConcernsLimitationsPg1.mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_c
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                How do these difficulties limit your ability to parent?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientName.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_d"
                  name="mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMedicalHistoryHealthConcernsLimitationsPg1.mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_d
                  }
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
              patientNotes={patientMedicalHistoryHealthConcernsLimitationsPg1}
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

export default MedicalHistoryHealthConcernsLimitationsPg1;
