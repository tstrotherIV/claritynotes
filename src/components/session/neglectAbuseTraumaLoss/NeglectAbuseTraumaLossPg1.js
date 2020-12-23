import React, {useState} from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 71

function NeglectAbuseTraumaLossPg1(props) {

  const [patientNeglectAbuseTraumaLossPg1, setPatientNeglectAbuseTraumaLossPg1] = useState({
    neglect_abuse_trauma_loss_pg1_a: "",
    neglect_abuse_trauma_loss_pg1_b: "",
    neglect_abuse_trauma_loss_pg1_c: "",
  })

  const next = "/neglect_abuse_trauma_loss_pg_2";

  const handleFieldChange = (e) => {
    setPatientNeglectAbuseTraumaLossPg1({ ...patientNeglectAbuseTraumaLossPg1, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">NEGLECT <span>&#183;</span> ABUSE <span>&#183;</span> TRAUMA <span>&#183;</span> LOSS</h2>
        <div className="questionsContainer text-center">
          <h4 className="textWhite centerItem">What is physical abuse in your own words?</h4>
          <div className="interview_div1">
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="neglect_abuse_trauma_loss_pg1_a"
            name="neglect_abuse_trauma_loss_pg1_a"
            onChange={handleFieldChange}
            value={patientNeglectAbuseTraumaLossPg1.neglect_abuse_trauma_loss_pg1_a}
          />
        </div>
        <h4 className="textWhite centerItem">What is sexual abuse in your own words?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="neglect_abuse_trauma_loss_pg1_b"
            name="neglect_abuse_trauma_loss_pg1_b"
            onChange={handleFieldChange}
            value={patientNeglectAbuseTraumaLossPg1.neglect_abuse_trauma_loss_pg1_b}
          />
        </div>
        <h4 className="textWhite centerItem">What is your definition of economic coercive control?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="neglect_abuse_trauma_loss_pg1_c"
            name="neglect_abuse_trauma_loss_pg1_c"
            onChange={handleFieldChange}
            value={patientNeglectAbuseTraumaLossPg1.neglect_abuse_trauma_loss_pg1_c}
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

export default NeglectAbuseTraumaLossPg1;
