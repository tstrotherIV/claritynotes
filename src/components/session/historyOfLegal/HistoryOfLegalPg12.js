import React from "react";
import { Label, Input } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
// pdf page 62

function HistoryOfLegalPg12(props) {

  const next = "/history_of_legal_pg_13";

  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">History of Legal, Crime, and Conviction</h2>
        <div className="questionsContainerWide text-center">
          <div className="m-auto d-flex align-items-center textWhite">
            <Label className="textWhite col-3 text-right" for="">
                [Patient Name, First]
            </Label>
            reported she started using methamphetamines at age 
            <Input
              className="col-4 mr-2 ml-2 mb-2"
              type=""
              id=""
              placeholder=""
            />  
          </div>
          <div className="m-auto d-flex align-items-center textWhite">
            <Label className="textWhite col-3 text-right" for="">
                [Patient Name, First]
            </Label>
            noted the last time she used methamphetamines was 
            <Input
              className="col-4 mr-2 ml-2 mb-2"
              type=""
              id=""
              placeholder=""
            />  
          </div>
          <div className="m-auto d-flex align-items-center textWhite">
            <Label className="textWhite col-3 text-right" for="">
                [Patient Name, First]
            </Label>
            reported she started abusing opiates at age 
            <Input
              className="col-4 mr-2 ml-2 mb-2"
              type=""
              id=""
              placeholder=""
            />  
          </div>
          <div className="m-auto d-flex align-items-center textWhite">
            <Label className="textWhite col-3 text-right" for="">
                [Patient Name, First]
            </Label>
            noted the last time she ever used opiates was 
            <Input
              className="col-4 mr-2 ml-2 mb-2"
              type=""
              id=""
              placeholder=""
            />  
          </div>
          <div className="m-auto d-flex align-items-center textWhite">
            <Label className="textWhite col-3 text-right" for="">
                [Patient Name, First]
            </Label>
            reported she started using heroin at age 
            <Input
              className="col-4 mr-2 ml-2 mb-2"
              type=""
              id=""
              placeholder=""
            />  
          </div>
          <div className="m-auto d-flex align-items-center textWhite">
            <Label className="textWhite col-3 text-right" for="">
                [Patient Name, First]
            </Label>
            She reported the last time she used heroin was
            <Input
              className="col-4 mr-2 ml-2 mb-2"
              type=""
              id=""
              placeholder=""
            />  
          </div>
          <h4 className="mt-2 textWhite centerItem">How many times have you been hungover/had a headache or shakes from drinking too much alcohol?</h4>
          <div className="interview_div1">
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <Input
                className=""
                type="text"
                id=""
              />
            </div>
          </div>
        </div>
        <div id="footer">
          <ButtonNavigation next={next} />
          <TermOfParentalRights />
        </div>
      </div>
    </div>
    </>
  );
}

export default HistoryOfLegalPg12;
