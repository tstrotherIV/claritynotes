import React, { useState, useEffect } from "react";
import EmptyFooterSpace from "../../shared/EmptyFooterSpace";
import ButtonNavigation from "../../shared/ButtonNavigation";
import "./additionalData.scss";
import DataManager from "../../../data_module/DataManager";

function PsychologicalEvaluationAdditionalData(props) {
  const [patient, setPatient] = useState("");
  const [user, setUser] = useState("");

  const next = "/interview_pg_1";
  const back = "/psychological_evaluation_consent";

  const updatePatient = () => {
    
  };

  useEffect(() => {
    const check_for_patient = sessionStorage.getItem("patient_id");

    DataManager.getPatient(check_for_patient).then((patientInfo) => {
      setPatient(patientInfo);
    });
    DataManager.getUser(props.userId).then((userInfo) => {
      setUser(userInfo);
    });
  }, []);

  return (
    <>
      <div>
        <div>
          <div>
            <div className="centerContent">
              <div className="d-flex justify-content-center mt-5">
                <h2 className="text-white">Psychological Evaluation</h2>
              </div>
              <div className="d-flex justify-content-center mt-5">
                <h2 className="text-white">Additional Data</h2>
              </div>
              <div className="d-flex justify-content-center mt-5">
                <div className="centerText text-white">
                  Interview with {patient.patient_first_name}{" "}
                  {patient.patient_last_name} <br></br>Interview with {user.first_name} {user.last_name}, ID: {user.id},{" "}
                  {user.position}
                  <br></br>Interview with []
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <ButtonNavigation next={next} back={back} patient={props.patientId} updatePatient={updatePatient}/>
          <EmptyFooterSpace />
        </div>
      </div>
    </>
  );
}

export default PsychologicalEvaluationAdditionalData;
