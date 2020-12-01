import React from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 64

function HistoryOfLegalPg14(props) {

  const next = "/history_of_legal_pg_15";

  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">History of Legal, Crime, and Conviction</h2>
        <div className=" text-center questionsContainer">
          <h4 className="textWhite centerItem">What is your self-care routine/plan?</h4>
            <div className="m-auto d-flex align-items-center textWhite">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize                
                className="fieldData mb-2"
                type="text"
                id=""
              />
            </div>   
            <h4 className="textWhite centerItem mt-2">Who do you call when you have a craving?</h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize                
                className="fieldData"
                type="text"
                id=""
              />
              </div>
            <h4 className="textWhite centerItem">What do you make of the fact that DHR has concern about your use and you have had problems with employment and housing?</h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize                
                className="fieldData"
                type="text"
                id=""
              />
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

export default HistoryOfLegalPg14;
