import React from "react";
import EmptyFooterSpace from "../../shared/EmptyFooterSpace";
import "./referral.scss";
import ButtonNavigation from '../../shared/ButtonNavigation';

function PsychologicalEvaluationReferral(props) {

  const next = "/psychological_evaluation_additional_data";

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
            [Patient Name, First][Patient Name, Last] is a [Patient Age] year old [Marital Status][Patient Gender] who was referred by the [Referral] for a psychological evaluation to determine [Patient Gender, pronoun] current cognitive, emotional, behavioral, and psychological status and make recommendations as to [Patient Gender, pronoun] ability to protect, provide for, and care for [Patient Gender, pronoun] [Patient Children, Ages] and maintain their placement in [Patient Gender, pronoun] home.
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
