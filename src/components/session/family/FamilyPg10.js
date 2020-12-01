import React from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

function FamilyPg10(props) {

  const next = "/family_pg_11";

  return (
    <> 
    <div id="page-container">
    <div id="content-wrap">
    <Heading /> 
    <div className="questionsContainerWide">
      <div className="header">
        <h2 className="textWhite">Family</h2>
      </div>
      <h4 className="textWhite centerItem">
        What is your least favorite childhood memory?
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
      <div className="interview_div3">
        <h3 className="textWhite">Protective</h3>
        <div className="interview_line3">
          <h4 className="textWhite centerItem containText">
            Any memories which were negative, which taught them the importance
            of being protective, cautious, restrained, etc? Did they learn from
            this negative experience? Does the parent try to prevent things from
            happening from anything negative?
          </h4>
          <div className="observationsColumn pl-3">
            <Label className="textWhite " for="">
              [User Name, First]’s Inference and Observations:
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

export default FamilyPg10;
