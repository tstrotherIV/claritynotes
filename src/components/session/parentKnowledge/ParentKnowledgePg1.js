import React from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';


// pdf page 95

function ParentKnowledgePg1(props) {

  const next = "/cognitive_skills_pg_1";  

  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">PARENT KNOWLEDGE</h2>
        <div className="questionsContainer">
          <div className="interview_div1">

        <div className="m-auto d-flex align-items-center textWhite">
          <Label className="textWhite col-3 text-right" for="">
              [Patient Name, First]
          </Label>
          <div className="m-2"> reported [her children go] to </div>
          <TextareaAutosize              
            className="col-2 mr-2 mb-2 fieldData"
              type="text"
              id=""
              placeholder=""
            />
            for medical care.  
        </div>
        <div className="m-auto d-flex align-items-center textWhite">
          <Label className="textWhite col-3 text-right" for="">
              [Patient Name, First]
          </Label>
          <div className="m-2">reported [her children go]</div>
          <TextareaAutosize              
              className="col-2 mr-2 mb-2 fieldData"
              type="text"
              id=""
              placeholder=""
            />
            for dental care.  
        </div> 

        <div className="m-auto d-flex align-items-center textWhite">
          <Label className="textWhite col-3 text-right" for="">
              [Patient Name, First]
          </Label>
          <div className="m-2">said</div>
          <TextareaAutosize             
              className="col-2 mr-2 mb-2 fieldData"
              type="text"
              id=""
              placeholder=""
            />
            takes [them] to [their] appointments.  
        </div>
        
        <div className="m-auto d-flex align-items-center textWhite">
        <Label className="textWhite col-3 text-right" for="">
            [Patient Name, First]
        </Label> 
        <div className="m-2">reported [her child(ren)] wear</div>
        <TextareaAutosize              
              className="col-2 mr-2 ml-2 mb-2 fieldData"
              type=""
              id=""
              placeholder=""
            />  
            size clothes.
        </div> 
        <div className="m-auto d-flex align-items-center textWhite">
        <Label className="textWhite col-3 text-right" for="">
            [Patient Name, First]
        </Label> 
        <div className="m-2">reported [her child(ren)] favorite color is </div>
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
        <TextareaAutosize              
              className="col-2 mr-2 ml-2 mb-2 text-center fieldData"
              type=""
              id=""
              placeholder="are/are not"
            />  
            old enough to attend school.
        </div> 
        <div className="m-auto d-flex align-items-center textWhite">
        <Label className="textWhite col-3 text-right" for="">
            [Patient Name, First]
        </Label>
        <div className="m-2">reported she attended </div> 
        <TextareaAutosize              
              className="col-1 mr-2 ml-1 mb-2 fieldData"
              type=""
              id=""
              placeholder=""
            />  
            teacher conferences this past school year.
        </div>
        <div className="m-auto d-flex align-items-center textWhite">
        <Label className="textWhite col-3 text-right" for="">
            [Patient Name, First]
        </Label>
        <div className="questionLabelWidth m-2">reported she attended </div> 
        <TextareaAutosize              
              className="col-1 ml-1 mb-2 mr-2 fieldData"
              type=""
              id=""
              placeholder=""
            />  
            <div className="col-5 p-0">extracurricular activites this past school year.</div>
        </div>
        <div className="m-auto d-flex align-items-center textWhite">
        <Label className="textWhite col-3 text-right" for="">
            [Patient Name, First]
        </Label> 
        <TextareaAutosize               
              className="col-3 mr-2 ml-2 mb-2 fieldData"
              type=""
              id=""
              placeholder="knew/did not know"
            />  
            the name(s) of her child's teacher(s).
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

export default ParentKnowledgePg1;
