import React from "react";
import "./housing.scss";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 42

function HousingPg3(props) {

  const next = "/employment_pg_1"

  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
      <Heading />
      <h2 className="textWhite text-center mb-4">Housing</h2>
      <div className="questionsContainer">
      <h4 className="textWhite centerItem">Have you ever spent the night in a car or had to stay with another person?</h4>
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
      <h4 className="textWhite centerItem">Is your residence an apartment, house, or trailer?</h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="hs-housing-cost">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            id="hs-housing-cost"
          />
        </div>
      </div>
      <div>

      </div>
      <div className="row  m-auto text-center">
        <div className="col-3"></div>
        <div className="col-3">
      <Label className="textWhite" for="">
            Number of Bedrooms?
          </Label>
          <TextareaAutosize            
            className="col-6 m-auto fieldData"
            type="text"
            id=""
          />
      </div>
      <div className="col-3">
      <Label className="textWhite" for="">
            Number of Baths?
          </Label>
          <TextareaAutosize            
            className="col-6 m-auto fieldData"
            type="text"
            id=""
          />
      </div>
      <div className="col-3">
      <Label className="textWhite" for="">
            How old is it?
          </Label>
          <TextareaAutosize            
          className="col-6 m-auto fieldData"
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

export default HousingPg3;
