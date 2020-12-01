import React from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';


function FamilyPg13(props) {

  const next = "/family_pg_14";

  return (
    <>
     <div id="page-container">
      <div id="content-wrap">
    <Heading />       
      <div className="header">
        <h2 className="textWhite">Family</h2>
      </div>
      <div className="questionsContainerWide">
      <h5 className="textWhite centerItem mt-4">
      How did they shape your view of the world?
      </h5>
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
      <h5 className="textWhite centerItem mt-4">
      Was there ever anyone that was more important to you than your biological family?
      </h5>
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
      <h5 className="textWhite centerItem mt-4">If so, who and why?</h5>
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

export default FamilyPg13;
