import React from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';
// pdf page 101

function BehaviorObservationsAndTestingConditionsPg4(props) {
  const next = "/behavioral_observations_and_testing_conditions_pg_5";  
  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">Behavioral Observations and Testing Conditions</h2>
        <div className="questionsContainer">
          <div className="interview_div1">

        <div className="d-flex align-items-center textWhite m-2">
          <Label className="textWhite col-3 text-right p-0 m-0" for="">
              [Patient Name, First]
          </Label>
          <div className="ml-2 p-0 mr-2">mood was</div>
          <TextareaAutosize              
              className="mb-2 fieldData"
              type="text"
              id=""
              placeholder="depressed/anxious/irritable"
            /> 
        </div>
        <div className="d-flex align-items-center textWhite m-2">
          <Label className="textWhite col-3 text-right p-0 m-0" for="">
              [Patient Name, First]
          </Label>
          <div className="ml-2 p-0 col-4">was very hyperactive.</div>
          <TextareaAutosize              
              className="col-2 mr-2 mb-2 fieldData"
              type="text"
              id=""
              placeholder="yes/no"
            /> 
        </div> 

        <div className="d-flex align-items-center textWhite m-2">
          <Label className="textWhite col-3 text-right p-0 m-0" for="">
              [Patient Name, First]
          </Label>
          <div className="ml-2 p-0 col-4">was irritable.</div>
          <TextareaAutosize              
              className="col-2 mr-2 mb-2 fieldData"
              type="text"
              id=""
              placeholder="yes/no"
            />
        </div>
        
        <div className="d-flex align-items-center textWhite m-2">
        <Label className="textWhite col-3 text-right p-0 m-0" for="">
            [Patient Name, First]
        </Label> 
        <div className="ml-2 p-0 col-4">was withdrawn.</div>
        <TextareaAutosize              
              className="col-2 mr-2 mb-2 fieldData"
              type=""
              id=""
              placeholder="yes/no"
            />
        </div> 
        <div className="d-flex align-items-center textWhite m-2">
        <Label className="textWhite col-3 text-right p-0 m-0" for="">
            [Patient Name, First]
        </Label> 
        <div className="ml-1 p-0 col-4">’s eye contact was strong. </div>
        <TextareaAutosize              
              className="col-2 mr-2 mb-2 fieldData ml-1"
              type=""
              id=""
              placeholder="yes/no"
            />
        </div> 
        <div className="d-flex align-items-center textWhite m-2">
        <Label className="textWhite col-3 text-right p-0 m-0" for="">
            [Patient Name, First]
        </Label> 
        <div className="ml-2 p-0 col-4">was circumspect in her answers.</div>
        <TextareaAutosize              
              className="col-2 mr-2 mb-2 fieldData"
              type=""
              id=""
              placeholder="yes/no"
            /> 
        </div> 
        <div className="d-flex align-items-center textWhite m-2">
        <Label className="textWhite col-3 text-right p-0 m-0" for="">
            [Patient Name, First]
        </Label>
        <div className="ml-2 p-0 col-4">offered information readily. </div> 
        <TextareaAutosize              
              className="col-2 mr-2 mb-2 fieldData"
              type=""
              id=""
              placeholder="yes/no"
            /> 
        </div>
        </div>
        </div>
        <div id="footer">
          <ButtonNavigation next={next}  />
          <TermOfParentalRights />
        </div>
      </div>
    </div>
    </>
  );
}

export default BehaviorObservationsAndTestingConditionsPg4;
