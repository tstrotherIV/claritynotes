import React from "react";
import { Label, Input } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
// pdf page 45

function EmploymentPg3(props) {

  const next = "/education_pg_1"

  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">Employment</h2>
        <div className="questionsContainer">
          <h4 className="textWhite centerItem">How much do you receive monthly in food stamps?</h4>
          <div className="interview_div1">
        <div className="interview_line1 mb-4 text">
          <Label className="textWhite interview_title text-center" for="">
            [Patient Name, First] said:
          </Label>
          <Input
            className=""
            type="text"
            id=""
          />
        </div>
        <h4 className="textWhite centerItem text-center">Do you receive a pension or disability income?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title text-center" for="">
            [Patient Name, First] said:
          </Label>
          <Input
            className=""
            type="text"
            id=""
          />
        </div>
        <h4 className="textWhite centerItem text-center">Have you ever been very vulnerable to a partner who used money to control you?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title text-center" for="">
            [Patient Name, First] said:
          </Label>
          <Input
            className=""
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
    </div>
    </>
  );
}

export default EmploymentPg3;
