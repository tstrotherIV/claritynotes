import React, {useState} from "react"; 
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 96

function CognitiveSkillsPg1(props) {

  const [patientCognitiveSkillsPg1, setPatientCognitiveSkillsPg1] = useState({
    cognitive_skills_pg1_a: "",
    cognitive_skills_pg1_b: "",
    cognitive_skills_pg1_c: "",
    cognitive_skills_pg1_d: "",
    
  })

  const next = "/material_resources_pg_1";  

  const handleFieldChange = (e) => {
    setPatientCognitiveSkillsPg1({ ...patientCognitiveSkillsPg1, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
        <Heading />
      <div id="content-wrap">
        <h2 className="textWhite text-center mb-4">COGNITIVE SKILLS</h2>
        <div className="questionsContainer text-center">
          <h4 className="textWhite centerItem">How do you give postive reinforcement?</h4>
          <div className="interview_div1">
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="cognitive_skills_pg1_a"
            name="cognitive_skills_pg1_a"
            onChange={handleFieldChange}
            value={patientCognitiveSkillsPg1.cognitive_skills_pg1_a}
          />
        </div>
      </div>
      <h4 className="textWhite centerItem">How do you model impulse control?</h4>
          <div className="interview_div1">
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="cognitive_skills_pg1_b"
            name="cognitive_skills_pg1_b"
            onChange={handleFieldChange}
            value={patientCognitiveSkillsPg1.cognitive_skills_pg1_b}
          />
        </div>
      </div>
      <h4 className="textWhite centerItem">How do you provide security so your child(ren) feel safe?</h4>
          <div className="interview_div1">
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="cognitive_skills_pg1_c"
            name="cognitive_skills_pg1_c"
            onChange={handleFieldChange}
            value={patientCognitiveSkillsPg1.cognitive_skills_pg1_c}
          />
        </div>
        <div className="m-auto d-flex align-items-baseline textWhite justify-content-center">
          <Label className="textWhite text-right" for="">
              [Patient Name, First]
          </Label>
          <div className="m-2">'s language skills</div>
          <TextareaAutosize              
              className="col-2 mr-2 mb-2 fieldData"
              type="text"
              id="cognitive_skills_pg1_d"
              name="cognitive_skills_pg1_d"
              onChange={handleFieldChange}
              value={patientCognitiveSkillsPg1.cognitive_skills_pg1_d}
              placeholder="were/were not"
            />
            impaired.  
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

export default CognitiveSkillsPg1;
