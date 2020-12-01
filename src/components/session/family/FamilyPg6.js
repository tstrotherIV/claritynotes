import React from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';


function FamilyPg6(props) {

  const next = "/family_pg_7";

  return (
    <>
     <div id="page-container">
      <div id="content-wrap">
    <Heading /> 
      <div className="header">
        <h2 className="textWhite">Family</h2>
      </div>
      <div className="questionsContainerWide">
      <h4 className="textWhite centerItem">
        Was there a lot of drinking in the home growing up?
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
      <h4 className="textWhite centerItem">If so, how did you cope?</h4>
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
      <div className="row m-5">
        <div className="row col-5 m-0 p-0">
          <div className="col-6 d-flex flex-wrap"></div>
          <h4 className="row col-6 d-flex justify-content-center align-content-end textWhite mr-3 "> Responsive</h4>
          <p className="row col-12 textWhite d-flex justify-content-end align-content-midline m-0">Does the parent think it is OK</p>
          </div>
        <div className="col-6 text-center m-0 p-0">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First]'s Inference and Observations:
          </Label>
          <TextareaAutosize            
            className="fieldData col-12"
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

export default FamilyPg6;
