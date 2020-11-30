import React from "react";
import EmptyFooterSpace from '../../shared/EmptyFooterSpace';
import ButtonNavigation from '../../shared/ButtonNavigation';
import "./additionalData.scss";

function PsychologicalEvaluationAdditionalData(props) {

  const next = "/family_pg_1";
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
              Interview with [Patient Name, First][Patient Name, Last] Interview
              with [Specific Username ID], [Specific User Position] Interview
              with []
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
    </>
  );
}

export default PsychologicalEvaluationAdditionalData;
