import React from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';
// pdf page 44

function EducationPg1(props) {

  const next = "/education_pg_2";

  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4 ">Education</h2>
        <div className="questionsContainerWide row d-flex flex-wrap center-text justify-items-center align-items-end">
        <Label className="textWhite col-4 text-center" for="">
            [Patient Name, First] said:
          </Label>
          <div className="d-flex flex-wrap justify-content-center col-4">
          <p className="textWhite">Did you quit school?</p>
          <TextareaAutosize            
            className="col-10 fieldData"
            type="text"
            id="quitSchool"
          />  
        </div>
          <div className="d-flex flex-wrap justify-content-center col-4">
          <p className="textWhite">Last grade completed:</p>
          <TextareaAutosize            
            className="col-10 fieldData"
            type="text"
            id="lastGrade"
          />  
        </div>
        </div>
        {/* --------------LINE TWO------------------  */}
        <div className="questionsContainerWide row d-flex flex-wrap center-text justify-items-center align-items-end pt-3">
        <Label className="textWhite col-4 text-center" for="graduateHighSchool">
            [Patient Name, First] said:
          </Label>
          <div className="d-flex flex-wrap justify-content-center text-center col-4">
          <p className="textWhite">Did you graduate from high school?</p>
          <TextareaAutosize            
            className="col-10 fieldData"
            type="text"
            id="graduateHighSchool"
          />  
        </div>
          <div className="d-flex flex-wrap justify-content-center text-center col-4">
          <p className="textWhite">Earned GED in:</p>
          <TextareaAutosize            
            className="col-10 fieldData"
            type="text"
            id="earnGed"
          />  
        </div>
        </div>
        <p className="textWhite centerItem questionsContainer mt-5">Were you in special education? If so, why?</p>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize           
            className="col-6 fieldData"
            type="text"
            id="specialEducation"
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

export default EducationPg1;
