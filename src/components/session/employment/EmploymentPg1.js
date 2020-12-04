import React from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 43

function EmploymentPg1(props) {

  const next = "/employment_pg_2";

  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">Employment</h2>
        <div className="questionsContainer">
          <h4 className="textWhite centerItem">Currently, where are you employed?</h4>
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
        <div className="m-auto d-flex align-items-center textWhite">
          <Label className="textWhite col-3 text-right" for="">
              [Patient Name, First]
          </Label>
          <TextareaAutosize              
              className="col-2 mr-2 mb-2 fieldData"
              type="text"
              id=""
              placeholder="has/has never"
            />
            been employed.  
        </div>
        <div className="m-auto d-flex align-items-center textWhite">
          <Label className="textWhite col-3 text-right" for="">
              [Patient Name, First]
          </Label>
          <TextareaAutosize              
              className="col-2 mr-2 mb-2 fieldData"
              type="text"
              id=""
              placeholder="is/is not"
            />
            currently employed and 
            <TextareaAutosize              
              className="col-2 mr-2 ml-2 mb-2 fieldData"
              type="text"
              id=""
              placeholder="has/has no"
            />  
            income.
        </div>
        <div className="m-auto d-flex align-items-center textWhite">
          <Label className="textWhite text-right col-3" for="">
              [Patient Name, First]
          </Label>
        last work at 
        <TextareaAutosize              
              className="col-2 mr-2 ml-2 mb-2 fieldData"
              type="text"
              id=""
              placeholder=""
            />  
        for
        <input              
              className="col-3 mr-2 ml-2 mb-2 fieldData"
              type="time"
              id=""
              placeholder="select time"
            />  
            .
        </div>
        
        <div className="m-auto d-flex align-items-center textWhite">
          <Label className="textWhite col-3 text-right" for="">
              [Patient Name, First]
          </Label>
        left this job because 
        <TextareaAutosize              
              className="col-4 mr-2 ml-2 mb-2 fieldData"
              type=""
              id=""
              placeholder=""
            />  
            .
        </div> 

        <div className="m-auto d-flex align-items-center textWhite">
          <Label className="textWhite col-3 text-right" for="">
              [Patient Name, First]
          </Label>
        reported [he/she] worked at 
        <TextareaAutosize              
              className="fieldData col-3 mr-2 ml-2 mb-2"
              type=""
              id=""
              placeholder=""
            />  
            as
            <TextareaAutosize              
              className="col-2 mr-2 ml-2 mb-2 fieldData"
              type=""
              id=""
              placeholder=""
            />
            .  
        </div> 

        <div className="m-auto d-flex align-items-center textWhite">
          <Label className="textWhite col-3 text-right" for="">
              [Patient Name, First]
          </Label>
          has been there 
        <TextareaAutosize              
              className="col-4 mr-2 ml-2 mb-2 fieldData"
              type=""
              id=""
              placeholder=""
            />  
            .
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

export default EmploymentPg1;
