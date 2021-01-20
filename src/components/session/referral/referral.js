import React, { useState, useEffect } from "react";
import EmptyFooterSpace from "../../shared/EmptyFooterSpace";
import "./referral.scss";
import ButtonNavigation from "../../shared/ButtonNavigation";
import DataManager from "../../../data_module/DataManager";
import { AgeFromDateString } from "age-calculator";

function PsychologicalEvaluationReferral(props) {
  const [patient, setPatient] = useState("");
  const [patientChildren, setPatientChildren] = useState([]);
  const [lastItem, setLastItem] = useState([]);
  const [startItem, setStartItem] = useState([]);

  const next = "/psychological_evaluation_additional_data";
  const back = "/psychological_evaluation_consent";

  let ageFromString = new AgeFromDateString(patient.patient_Date_of_Birth).age;

  const patientProNoun = () => {
    switch (patient.patient_gender) {
      case "Male":
        return "his";
      case "Female":
        return "her";
      default:
        return "they";
    }
  };

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      setPatient(patientInfo);
    });
  };

  const getChildren = () => {
    DataManager.getChildren(props.patientId).then((children) => {
      setPatientChildren(children);
      setStartItem(children.slice(0, -1));
      setLastItem(children.slice(-1));
    });
  };

  useEffect(() => {
    getData();
    getChildren();
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
                  {patient.patient_first_name} {patient.patient_last_name} is a{" "}
                  {ageFromString} year old {patient.patient_married}{" "}
                  {patient.patient_gender} who was referred by the [Referral]
                  for a psychological evaluation to determine {patientProNoun()}{" "}
                  current cognitive, emotional, behavioral, and psychological
                  status and make recommendations as to {patientProNoun()}{" "}
                  ability to protect, provide for, and care for{" "}
                  {patientProNoun()} children{" "}
                  {startItem.map((child) => {
                    let childAge = new AgeFromDateString(child.child_dob).age;
                    return ` ${child.child_first_name} (${childAge}), `;
                  })}{" "}
                  and{" "}
                  {lastItem.map((child) => {
                    let childAge = new AgeFromDateString(child.child_dob).age;
                    return ` ${child.child_first_name} (${childAge}) `;
                  })}
                  and maintain their placement in {patientProNoun()} home.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <ButtonNavigation next={next} back={back} patient={props.patientId} />
        <EmptyFooterSpace />
      </div>
    </div>
  );
}

export default PsychologicalEvaluationReferral;
