import React from "react";
import "./housing.scss";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 41

function HousingPg2(props) {

  const next = "/housing_pg_3"
  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
      <Heading />
      <h2 className="textWhite text-center mb-4">Housing</h2>
      <h4 className="textWhite centerItem">All or part?</h4>
      <div className="questionsContainerWide">
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title text-center" for="hs-all-or-part">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
          className="fieldData"
            type="text"
            id="hs-all-or-part"
          />
        </div>
      </div>
      <h4 className="textWhite centerItem">How much is your rent or mortgage?</h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title text-center" for="hs-housing-cost">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
          className="fieldData"
            type="text"
            id="hs-housing-cost"
          />
        </div>
      </div>
      <h4 className="textWhite centerItem ">Have you ever experienced times without shelter?</h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title text-center" for="hs-without-shelter">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="hs-without-shelter"
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

export default HousingPg2;
