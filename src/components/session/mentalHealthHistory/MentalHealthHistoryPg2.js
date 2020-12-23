import React, {useState} from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 67

function MentalHealthHistoryPg2(props) {

  const [patientMentalHealthHistory_pg2, setPatientMentalHealthHistory_pg2] = useState({
    mental_health_history_pg2_a: "",
    mental_health_history_pg2_b: "",
    mental_health_history_pg2_c: "",
  })

  const next = "/mental_health_history_pg_3";

  const handleFieldChange = (e) => {
    setPatientMentalHealthHistory_pg2({ ...patientMentalHealthHistory_pg2, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">Mental Health History</h2>
        <div className="questionsContainer text-center">
          <h4 className="textWhite centerItem">Tell me about your mental health treatment history, if any?</h4>
          <div className="interview_div1">
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="mental_health_history_pg2_a"
            name="mental_health_history_pg2_a"
            onChange={handleFieldChange}
            value={patientMentalHealthHistory_pg2.mental_health_history_pg2_a}
          />
        </div>
        <h4 className="textWhite centerItem">How many times have you been hospitalized, and mental health has been part or all of the reason?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="mental_health_history_pg2_b"
            name="mental_health_history_pg2_b"
            onChange={handleFieldChange}
            value={patientMentalHealthHistory_pg2.mental_health_history_pg2_b}
          />
        </div>
        <h4 className="textWhite centerItem"> Home many times have you gone to the emergency room for mental health reasons?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="mental_health_history_pg2_c"
            name="mental_health_history_pg2_c"
            onChange={handleFieldChange}
            value={patientMentalHealthHistory_pg2.mental_health_history_pg2_c}
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

export default MentalHealthHistoryPg2;
