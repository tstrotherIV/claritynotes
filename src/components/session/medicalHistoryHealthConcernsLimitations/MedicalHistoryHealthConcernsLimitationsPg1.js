import React, {useState} from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 70

function MedicalHistoryHealthConcernsLimitationsPg1(props) {

  const [patientMedicalHistoryHealthConcernsLimitationsPg1, setPatientMedicalHistoryHealthConcernsLimitationsPg1] = useState({
    mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_a: "",
    mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_b: "",
    mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_c: "",
    mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_d: "",
  })

  const next = "/neglect_abuse_trauma_loss_pg_1";

  const handleFieldChange = (e) => {
    setPatientMedicalHistoryHealthConcernsLimitationsPg1({ ...patientMedicalHistoryHealthConcernsLimitationsPg1, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">MEDICAL HISTORY <span>&#183;</span> HEALTH CONCERNS <span>&#183;</span> LIMITATIONS</h2>
        <div className="questionsContainer text-center">
          <h4 className="textWhite centerItem">What are your medical diagnoses?</h4>
          <div className="interview_div1">
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_a"
            name="mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_a"
            onChange={handleFieldChange}
            value={patientMedicalHistoryHealthConcernsLimitationsPg1.mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_a}
          />
        </div>
        <h4 className="textWhite centerItem">Who is your physician?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_b"
            name="mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_b"
            onChange={handleFieldChange}
            value={patientMedicalHistoryHealthConcernsLimitationsPg1.mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_b}
          />
        </div>
        <h4 className="textWhite centerItem">What prescriptions are you taking?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_c"
            name="mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_c"
            onChange={handleFieldChange}
            value={patientMedicalHistoryHealthConcernsLimitationsPg1.mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_c}
          />
        </div>
        <h4 className="textWhite centerItem">How do these difficulties limit your ability to parent?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_d"
            name="mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_d"
            onChange={handleFieldChange}
            value={patientMedicalHistoryHealthConcernsLimitationsPg1.mental_heamedicalhistory_healthconcerns_limitations_pg1_alth_history_pg4_d}
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

export default MedicalHistoryHealthConcernsLimitationsPg1;
