import React from "react";
import { Label, Input, Button } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/termOfParentalRights';
// pdf page 44

function EducationPg1(props) {
  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4 ">Education</h2>
        <div className="questionsContainer2 row d-flex flex-wrap center-text justify-items-center align-items-end">
        <Label className="textWhite col-4 text-center" for="">
            [Patient Name, First] said:
          </Label>
          <div className="d-flex flex-wrap justify-content-center col-4">
          <p className="textWhite">Did you quit school?</p>
          <Input
            className="col-10"
            type="text"
            id="quitSchool"
          />  
        </div>
          <div className="d-flex flex-wrap justify-content-center col-4">
          <p className="textWhite">Last grade completed:</p>
          <Input
            className="col-10"
            type="text"
            id="lastGrade"
          />  
        </div>
        </div>
        {/* --------------LINE TWO------------------  */}
        <div className="questionsContainer2 row d-flex flex-wrap center-text justify-items-center align-items-end pt-3">
        <Label className="textWhite col-4 text-center" for="graduateHighSchool">
            [Patient Name, First] said:
          </Label>
          <div className="d-flex flex-wrap justify-content-center text-center col-4">
          <p className="textWhite">Did you graduate from high school?</p>
          <Input
            className="col-10"
            type="text"
            id="graduateHighSchool"
          />  
        </div>
          <div className="d-flex flex-wrap justify-content-center text-center col-4">
          <p className="textWhite">Earned GED in:</p>
          <Input
            className="col-10"
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
          <Input
            className="col-6"
            type="text"
            id="specialEducation"
          />
        </div>
      </div>
        <div id="footer">
          <div className="buttonSection">
            <Button
              color="info"
              className="button"
              onClick={() => {
                props.history.push(`/employment_pg_3`);
              }}
            >
              Previous
            </Button>
            <Button color="info" className="button">
              Save
            </Button>
            <Button color="info" className="button">
              Submit
            </Button>
            <Button
              color="info"
              className="button"
              onClick={() => {
                props.history.push(`/education_pg_2`);
              }}
            >
              Next
            </Button>
            <div className="idBox textWhite p-3">
              <div>Existing Patient: [Case #]</div>
              <div>Patient ID: [Patient ID]</div>
            </div>
          </div>
          <TermOfParentalRights />
        </div>
      </div>
    </div>
    </>
  );
}

export default EducationPg1;
