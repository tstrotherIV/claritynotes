import React from "react";
import "./housing.scss";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

  // pdf page 40

function HousingPg1(props) {

  const next = "/housing_pg_2";

  return (
    <>
      <div id="page-container">
      <div id="content-wrap">
    <Heading />
    <h2 className="textWhite text-center mb-4">Housing</h2>
    <div className="questionsContainer">
      <h4 className="textWhite centerItem">Do you live alone?</h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title text-center" for="hs-live-alone">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
          className="fieldData"
            type="text"
            id="hs-live-alone"
          />
        </div>
      </div>
      <h4 className="textWhite centerItem">Who do you live with?</h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title text-center" for="hs-live-with">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="hs-live-with"
          />
        </div>
      </div>
      <h4 className="textWhite centerItem ">Who pays your rent or mortgage?</h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title text-center" for="hs-who-pays">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="hs-who-pays" 
          />
        </div>
      </div>
      </div>
      </div>
      <div id="footer">
      <ButtonNavigation next={next} />
      <TermOfParentalRights />
      </div>
    </div>
    </>
  );
}

export default HousingPg1;
