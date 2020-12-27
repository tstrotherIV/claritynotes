import React, {useState} from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';


// pdf page 95

function ParentKnowledgePg1(props) {

  const [patientParentKnowledgePg1, setPatientParentKnowledgePg1] = useState({
    parent_knowledge_pg1_a: "",
    parent_knowledge_pg1_b: "",
    parent_knowledge_pg1_c: "",
    parent_knowledge_pg1_d: "",
    parent_knowledge_pg1_e: "",
    parent_knowledge_pg1_f: "",
    parent_knowledge_pg1_g: "",
    parent_knowledge_pg1_h: "",
    parent_knowledge_pg1_i: "",
    
  })

  const next = "/cognitive_skills_pg_1";  

  const handleFieldChange = (e) => {
    setPatientParentKnowledgePg1({ ...patientParentKnowledgePg1, [e.target.name]: e.target.value});
  }

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
              id="parent_knowledge_pg1_a"
              name="parent_knowledge_pg1_a"
              onChange={handleFieldChange}
              value={patientParentKnowledgePg1.parent_knowledge_pg1_a}
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
              id="parent_knowledge_pg1_b"
              name="parent_knowledge_pg1_b"
              onChange={handleFieldChange}
              value={patientParentKnowledgePg1.parent_knowledge_pg1_b}
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
              id="parent_knowledge_pg1_c"
              name="parent_knowledge_pg1_c"
              onChange={handleFieldChange}
              value={patientParentKnowledgePg1.parent_knowledge_pg1_c}
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
              id="parent_knowledge_pg1_d"
              name="parent_knowledge_pg1_d"
              onChange={handleFieldChange}
              value={patientParentKnowledgePg1.parent_knowledge_pg1_d}
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
              id="parent_knowledge_pg1_e"
              name="parent_knowledge_pg1_e"
              onChange={handleFieldChange}
              value={patientParentKnowledgePg1.parent_knowledge_pg1_e}
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
              id="parent_knowledge_pg1_f"
              name="parent_knowledge_pg1_f"
              onChange={handleFieldChange}
              value={patientParentKnowledgePg1.parent_knowledge_pg1_f}
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
              id="parent_knowledge_pg1_g"
              name="parent_knowledge_pg1_g"
              onChange={handleFieldChange}
              value={patientParentKnowledgePg1.parent_knowledge_pg1_g}
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
              id="parent_knowledge_pg1_h"
              name="parent_knowledge_pg1_h"
              onChange={handleFieldChange}
              value={patientParentKnowledgePg1.parent_knowledge_pg1_h}
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
              id="parent_knowledge_pg1_i"
              name="parent_knowledge_pg1_i"
              onChange={handleFieldChange}
              value={patientParentKnowledgePg1.parent_knowledge_pg1_i}
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
