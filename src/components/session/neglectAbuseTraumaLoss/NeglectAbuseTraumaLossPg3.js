import React, {useState} from "react"; 
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 73

function NeglectAbuseTraumaLossPg3(props) {

  const [patientNeglectAbuseTraumaLossPg3, setPatientNeglectAbuseTraumaLossPg3] = useState({
    neglect_abuse_trauma_loss_pg3_a: "",
    neglect_abuse_trauma_loss_pg3_b: "",
    neglect_abuse_trauma_loss_pg3_c: "",
  })

  const next = "/neglect_abuse_trauma_loss_pg_4";

  const handleFieldChange = (e) => {
    setPatientNeglectAbuseTraumaLossPg3({ ...patientNeglectAbuseTraumaLossPg3, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
        <Heading />
      <div id="content-wrap">
        <h2 className="textWhite text-center mb-4">NEGLECT <span>&#183;</span> ABUSE <span>&#183;</span> TRAUMA <span>&#183;</span> LOSS</h2>
        <div className="questionsContainer text-center">
          <h4 className="textWhite centerItem">Tell me about any emotional use or abuse experiences?</h4>
          <div className="interview_div1">
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="neglect_abuse_trauma_loss_pg3_a"
            name="neglect_abuse_trauma_loss_pg3_a"
            onChange={handleFieldChange}
            value={patientNeglectAbuseTraumaLossPg3.neglect_abuse_trauma_loss_pg3_a}
          />
        </div>
        <h4 className="textWhite centerItem">Tell me about any financial use or abuse experiences?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="neglect_abuse_trauma_loss_pg3_b"
            name="neglect_abuse_trauma_loss_pg3_b"
            onChange={handleFieldChange}
            value={patientNeglectAbuseTraumaLossPg3.neglect_abuse_trauma_loss_pg3_b}
          />
        </div>
        <h4 className="textWhite centerItem">Were you ever a victim of physical or sexual abuse?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="neglect_abuse_trauma_loss_pg3_c"
            name="neglect_abuse_trauma_loss_pg3_c"
            onChange={handleFieldChange}
            value={patientNeglectAbuseTraumaLossPg3.neglect_abuse_trauma_loss_pg3_c}
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

export default NeglectAbuseTraumaLossPg3;
