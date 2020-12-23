import React, {useState} from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 72


function NeglectAbuseTraumaLossPg2(props) {

  const [patientNeglectAbuseTraumaLossPg2, setPatientNeglectAbuseTraumaLossPg2] = useState({
    neglect_abuse_trauma_loss_pg2_a: "",
    neglect_abuse_trauma_loss_pg2_b: "",
    neglect_abuse_trauma_loss_pg2_c: "",
  })

  const next = "/neglect_abuse_trauma_loss_pg_3";

  const handleFieldChange = (e) => {
    setPatientNeglectAbuseTraumaLossPg2({ ...patientNeglectAbuseTraumaLossPg2, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">NEGLECT <span>&#183;</span> ABUSE <span>&#183;</span> TRAUMA <span>&#183;</span> LOSS</h2>
        <div className="questionsContainer text-center">
          <h4 className="textWhite centerItem">What is it like for you to think about these definitions?</h4>
          <div className="interview_div1">
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="neglect_abuse_trauma_loss_pg2_a"
            name="neglect_abuse_trauma_loss_pg2_a"
            onChange={handleFieldChange}
            value={patientNeglectAbuseTraumaLossPg2.neglect_abuse_trauma_loss_pg2_a}
          />
        </div>
        <h4 className="textWhite centerItem">What stands out the most for you?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="neglect_abuse_trauma_loss_pg2_b"
            name="neglect_abuse_trauma_loss_pg2_b"
            onChange={handleFieldChange}
            value={patientNeglectAbuseTraumaLossPg2.neglect_abuse_trauma_loss_pg2_b}
          />
        </div>
        <h4 className="textWhite centerItem">Tell me about any physical use or abuse experiences?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="neglect_abuse_trauma_loss_pg2_c"
            name="neglect_abuse_trauma_loss_pg2_c"
            onChange={handleFieldChange}
            value={patientNeglectAbuseTraumaLossPg2.neglect_abuse_trauma_loss_pg2_c}
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

export default NeglectAbuseTraumaLossPg2;
