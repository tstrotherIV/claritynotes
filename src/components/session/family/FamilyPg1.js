import React from "react";
import { Label, Input } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';

function FamilyPg1(props) {

  const next = "/family_pg_2";

  return (
    <>
    <div id="page-container">
    <div id="content-wrap">
      <Heading />    
      <div className="header">
        <h1 className="textWhite">Family</h1>
      </div>
      <div className="questionsContainerWide d-flex flex-wrap justify-content-center align-items-baseline m-2">
              <Label className="textWhite m-1" for="">
              [Patient Name, First] his/her
              </Label>
              <Input
                className="col-2 m-0 p-0"
                type="text"
                id=""
              />
          <Label className="textWhite m-2" for="">
          raised him/her in 
              </Label>
              <Input
                    className="col-2 m-0 p-0"
                    type="text"
                    id=""
                    placeholder=""
                  /> 
              <div className="textWhite ml-2">.</div>
           
      </div>
      <div className="questionsContainerWide d-flex flex-wrap justify-content-center align-items-baseline m-2">      
              <Label className="textWhite ml-1 mr-1 mt-0 mb-0" for="">
              [Patient Name, First] had
              </Label>
              <Input
                className="col-2 m-0 p-0"
                type="text"
                id=""
              />
          <div className="textWhite ml-1 mr-1">
          brothers and sisters.</div>
</div>
     <h4 className="textWhite centerItem">
        Who raised you from birth until you moved out of the home?
      </h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <Input
            className="interview_fieldData"
            type="text"
            name=""
            id=""
          />
        </div>
      <h4 className="textWhite centerItem">What are their names?</h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <Input
            className="interview_fieldData"
            type="text"
            name=""
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

export default FamilyPg1;
