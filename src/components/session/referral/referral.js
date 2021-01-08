import React, {useState, useEffect} from "react";
import EmptyFooterSpace from "../../shared/EmptyFooterSpace";
import "./referral.scss";
import ButtonNavigation from '../../shared/ButtonNavigation';
import DataManager from "../../../data_module/DataManager";


function PsychologicalEvaluationReferral(props) {

  const [patient, setPatient] = useState("")

  const next = "/psychological_evaluation_additional_data";

  useEffect(() => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      setPatient(patientInfo);
    });
  }, []);

  return (
    <div id="page-container">
    <div id="content-wrap" className="whiteBGD reportMinHeight">
    <div className="fullpage">
      <div className="whiteBGD">
        <div className="centerContent">
          <div className="d-flex justify-content-center mt-5">
            <h1>Psychological Evaluation</h1>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <h2>Reason for Referral</h2>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <div className="centerText">
            {patient.patient_first_name} {patient.patient_last_name} is a [Patient Age] year old {patient.patient_married} [Patient Gender] who was referred by the [Referral] for a psychological evaluation to determine [Patient Gender, pronoun] current cognitive, emotional, behavioral, and psychological status and make recommendations as to [Patient Gender, pronoun] ability to protect, provide for, and care for [Patient Gender, pronoun] [Patient Children, Ages] and maintain their placement in [Patient Gender, pronoun] home.
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
        <div id="footer">
        <ButtonNavigation next={next} />
        <EmptyFooterSpace />
    </div>
    </div>
  );
}

export default PsychologicalEvaluationReferral;
