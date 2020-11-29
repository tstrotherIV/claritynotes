import React from "react";
import ButtonNavigation from '../../shared/ButtonNavigation';

import "./reportSummary.scss";
//pdf page 39

function ReportSummary(props) {

  const next = "/HousingPg_1";

  return (
    <div className="page-container">
      <div  id="content-wrap" className="whiteBGD reportMinHeight">
        <div className="fullpage reportMinHeight">
        <div className="centerContent whiteBGD">
          <div className="d-flex justify-content-center mt-5">
            <h1>Psychological Evaluation</h1>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <h2>Report Summary</h2>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <div className="centerText">
              HELLOOOOOOO
              [Patient Name, First][Patient Name, Last] reported she has been
              married since. She has son/s and daughter/s. [Patient Name,
              First] said she currently lives with _ in [Location] 
              
              
              [Patient
              Name, First] reported she has been married _ times. She has son/s
              and daughter/s. [Patient Name, First] and her current spouse have
              been married for _ years. She said she currently lives with _ in
              [Location]. 
              
              
              Why did they split up?
              
               or 
              
              
              [Patient Name, First]
              reported she has never been married. She has _son/s and
              _daughter/s. [Patient Name, First] said she currently lives with _
              in [Location].
            </div>
          </div>
        </div>
        </div>
        <ButtonNavigation next={next} />
      </div>
    </div>
  );
}

export default ReportSummary;
