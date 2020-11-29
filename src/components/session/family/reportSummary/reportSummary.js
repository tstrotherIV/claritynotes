import React from "react";
import EmptySpaceFooter from '../../../shared/EmptyFooterSpace';
import ButtonNavigation from '../../../shared/ButtonNavigation';
import "./reportSummary.scss";
//pdf page 39
function FamilyReportSummary(props) {

  const next = "housing_pg_1";

  return (
    <div id="page-container">
    <div id="content-wrap" >
    <div className="fullpage ">
      <div className="whiteBGD reportMinHeight">
        <div className="centerContent">
          <div className=" mt-5">
            <h1 className="text-center">Psychological Evaluation</h1>
          </div>
          <div className="text-center mt-5">
            <h2>Report Summary</h2>
          </div>
          <div className="d-flex flex-wrap text-center justify-content-center mt-5 mr-auto">
            <div className="col-10">
              [Patient Name, First][Patient Name, Last] reported she has been
              married since xx. She has son/s and daughter/s. [Patient Name,
              First] said she currently lives with _ in [Location] 
            </div>
              <div className="col-10 mb-5">
              [Patient
              Name, First] reported she has been married _ times. She has son/s
              and daughter/s. [Patient Name, First] and her current spouse have
              been married for _ years. She said she currently lives with _ in
              [Location]. 
              </div>
              <div className="col-10 mb-3">
              Why did they split up?
              </div>
              <div className="col-10 mb-3">
               or 
               </div>
               <div className="col-10 mb-3">
              [Patient Name, First]
              reported she has never been married. She has _son/s and
              _daughter/s. [Patient Name, First] said she currently lives with _
              in [Location].
            
            </div>
          </div>
        </div>
        </div>
      <div id="footer">
        <ButtonNavigation next={next} />
        <EmptySpaceFooter />
      </div>
    </div>
    </div>
    </div>
  );
}

export default FamilyReportSummary;
