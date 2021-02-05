import React, { useState, useEffect } from "react";
import { Label, Input } from "reactstrap";
import ButtonNavigation from "../../shared/ButtonNavigation";
import EmptyFooterSpace from "../../shared/EmptyFooterSpace";
import "./consent.scss";
import DataManager from "../../../data_module/DataManager";

function PsychologicalEvaluationConsent(props) {
  const [patientConsent, setPatientConsent] = useState({
    patient_consent: false,
    id: ""
  });

  const next = "/psychological_evaluation_referral";
  const back = "/psychological_evaluation_spouse";

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setPatientConsent({ ...patientConsent, [name]: value });
  };

  const updatePatient = () => {
    const editedPatient = {
      patient_consent: patientConsent.patient_consent,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      
      const raw = {
        ...patientInfo
      };
      
      const allowed = ['patient_consent'];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

        setPatientConsent(filtered);
    });
  };

  useEffect(() => {
    getData();
  }, );

  return (
    <div id="page-container">
      <div id="content-wrap" className="whiteBGD reportMinHeight">
        <div className="whiteBGD ">
          <div className="centerContent">
            <div className="d-flex justify-content-center mt-5">
              <h2>Psychological Evaluation</h2>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <h2>Consent</h2>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <div className="centerText">
                Prior to initiating the evaluation, its nature, purpose, the
                risks and benefits were explained to {patientConsent.patient_first_name} {patientConsent.patient_last_name}. Questions were sought and answered. {patientConsent.patient_first_name} demonstrated a basic understanding by
                restating the information in her own words. {patientConsent.patient_first_name} indicated willingness to participate in the evaluation
                and complied with requests.
              </div>
            </div>
          </div>

          <div className="siblingsFields">
            <div className="m-4">
              <Input
                type="checkbox"
                id="patient_only_child"
                name="patient_consent"
                checked={patientConsent.patient_consent}
                onChange={handleFieldChange}
              />
              <Label className="title">Check Here to Confirm</Label>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <ButtonNavigation
          next={next}
          back={back}
          updatePatient={updatePatient}
          patient={props.patientId}
          patientNotes={patientConsent}
        />
        <EmptyFooterSpace />
      </div>
    </div>
  );
}

export default PsychologicalEvaluationConsent;
