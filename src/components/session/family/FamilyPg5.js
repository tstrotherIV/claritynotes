import React from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

//pdf page 28

function FamilyPg5(props) {

  const next = "/family_pg_6";

  return (
    <>
    <div id="page-container">
    <div id="content-wrap">
    <Heading /> 
      <div className="header">
        <h2 className="textWhite">Family</h2>
      </div>
      <div className="questionsContainer mt-4">
      <h4 className="textWhite text-center">
        Did you feel loved and accepted by each parent, even when you
        disappointed them?
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
      <div className="interview_div1">
        <div className="interview_line1 textWhite">
            (IF THEY DO NOT OFFER MORE THAN “YES” OR “NO,” ASK THEM: “How did
            they show you they loved you and accepted you?” AND/OR “Tell me more
            about that.” GET AS MUCH INFO AS POSSIBLE.
        </div>
      </div>   
      <h4 className="textWhite centerItem mt-4">
        Do you remember a lot of fighting in the home growing up?
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

export default FamilyPg5;
