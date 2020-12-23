import React, {useState} from "react";
import { Label, Input } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 69

function MentalHealthHistoryPg4(props) {

  const [patientMentalHealthHistory_pg4, setPatientMentalHealthHistory_pg4] = useState({
    mental_health_history_pg4_a: "",
    mental_health_history_pg4_b: "",
    mental_health_history_pg4_c: "",
    mental_health_history_pg4_d: false,
  })

  const next = "/medical_history_health_concerns_limitations_pg_1";

  const handleFieldChange = (e) => {
    setPatientMentalHealthHistory_pg4({ ...patientMentalHealthHistory_pg4, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">Mental Health History</h2>
        <div className="questionsContainer text-center">
          <h4 className="textWhite centerItem">What was it about?</h4>
          <div className="interview_div1">
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="mental_health_history_pg4_a"
            name="mental_health_history_pg4_a"
            onChange={handleFieldChange}
            value={patientMentalHealthHistory_pg4.mental_health_history_pg4_a}
          />
        </div>
        <h4 className="textWhite centerItem">Have you ever cut or deliberately injured yourself?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="mental_health_history_pg4_b"
            name="mental_health_history_pg4_b"
            onChange={handleFieldChange}
            value={patientMentalHealthHistory_pg4.mental_health_history_pg4_b}
          />
        </div>
        <h4 className="textWhite centerItem">Have you ever thought about hurting yourself or anyone else?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="mental_health_history_pg4_c"
            name="mental_health_history_pg4_c"
            onChange={handleFieldChange}
            value={patientMentalHealthHistory_pg4.mental_health_history_pg4_c}
          />
        </div>
      </div>
      <div className="textWhite">IF SUICIDE REPORTED, ASK ABOUT A PLAN? If yes, CALL 911. IF NOT SELECT:</div>
        </div>
        <div className="siblingsFields">
          <div className="m-1">
            <Input 
            type="checkbox" 
            className="" 
            id="mental_health_history_pg4_d"
            name="mental_health_history_pg4_d"
            checked={patientMentalHealthHistory_pg4.mental_health_history_pg4_d}
            onChange={(e)=> {setPatientMentalHealthHistory_pg4(e.target.checked)}}

            />
            <Label className="textWhite" for="firstName">
            [Patient Name, First] denied any current intent or plan.
            </Label>
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

export default MentalHealthHistoryPg4;
