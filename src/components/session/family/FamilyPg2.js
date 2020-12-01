import React from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

function FamilyPg2(props) {

  const next = "/family_pg_3";

  return (
    <> 
  <div id="page-container">
  <div id="content-wrap">
      <Heading /> 
      <div className="header">
        <h2 className="textWhite">Family</h2>
      </div>
      <h4 className="textWhite centerItem">
      Were different people involved?
      </h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            id=""
          />
        </div>
      </div>
      <h4 className="textWhite centerItem">
      What are their names?
      </h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            name=""
            id=""
          />
        </div>
      </div>
      <h4 className="textWhite centerItem">What city or town did you grow up in?</h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
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
    </>
  );
}

export default FamilyPg2;
