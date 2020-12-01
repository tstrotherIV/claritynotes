import React from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights'; 
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

function FamilyPg7(props) {

  const next = "/family_pg_8";

  return (
    <>
       <div id="page-container">
      <div id="content-wrap">
    <Heading /> 
      <div className="header">
        <h2 className="textWhite">Family</h2>
      </div>
      <div className="questionsContainer">
      <p className="textWhite centerItem">
        How was disapproval of your actions displayed by your parents/how were
        you punished when you acted out?s
      </p>
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
      <div className="interview_div3">
        <div className="interview_line3 row d-flex flex-wrap justify-content-center">
        <div className="col-5 text-center">
        <h2 className="textWhite">Discipline</h2>
          <p className="textWhite">
            Put information about harsh discipline into the discipline conclusion.
            How did their punishment shape how they punish? Does this appear
            genuine or are they saying more than what sounds good.
          </p>
          </div>
          <div className="col-6 d-flex flex-wrap align-content-center">
          <Label className="textWhite" for="">
            [Patient Name, First]'s Inference and Observations:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id=""
          />
          </div>
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

export default FamilyPg7;
