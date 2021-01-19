import React, {useState, useEffect} from "react";
import EmptyFooterSpace from '../../shared/EmptyFooterSpace';
import ButtonNavigation from '../../shared/ButtonNavigation';
import "./additionalData.scss";
import DataManager from "../../../data_module/DataManager";


function PsychologicalEvaluationAdditionalData(props) {

  const [patient, setPatient] = useState("")


  const next = "/interview_pg_1";
  const back = "/psychological_evaluation_referral";

  useEffect(() => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      setPatient(patientInfo);
    });
  }, []);

  return (
    <>
    <div id="page-container" className="sessionStepContainer">
    <div id="content-wrap" className="whiteBGD reportMinHeight">
      <div className="whiteBGD">
        <div className="centerContent">
          <div className="d-flex justify-content-center mt-5">
            <h2>Psychological Evaluation</h2>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <h2>Additional Data</h2>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <div className="centerText">
              Interview with {patient.patient_first_name} {patient.patient_last_name} Interview
              with [Specific Username ID], [Specific User Position] Interview
              with []
            </div>
          </div>
        </div>
        </div>
        </div>
        <div id="footer">
        <ButtonNavigation next={next} back={back}/>  
        <EmptyFooterSpace />
        </div>
        </div>
    </>
  );
}

export default PsychologicalEvaluationAdditionalData;
