import React from "react";
import { Label, Input } from "reactstrap";
import "./consent.scss";
import ButtonNavigation from '../../shared/ButtonNavigation';
import EmptyFooterSpace from "../../shared/EmptyFooterSpace";

function PsychologicalEvaluationConsent(props) {

  const next = "/psychological_evaluation_referral";

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
              Prior to initiating the evaluation, its nature, purpose, the risks
              and benefits were explained to [Patient Name, First][Patient Name,
              Last]. Questions were sought and answered. [Patient Name, First]
              demonstrated a basic understanding by restating the information in
              her own words. [Patient Name, First] indicated willingness to
              participate in the evaluation and complied with requests.
            </div>
          </div>
        </div>
        
        <div className="siblingsFields">
          <div className="m-4">
            <Input type="checkbox" name="" id="" />
            <Label className="title" for="firstName">
              Check Here to Confirm
            </Label>
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

export default PsychologicalEvaluationConsent;
