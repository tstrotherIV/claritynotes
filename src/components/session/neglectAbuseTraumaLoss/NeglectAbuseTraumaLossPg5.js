import React, {useState} from "react"; 
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 75

function NeglectAbuseTraumaLossPg5(props) {

  const [patientNeglectAbuseTraumaLossPg5, setPatientNeglectAbuseTraumaLossPg5] = useState({
    neglect_abuse_trauma_loss_pg5_a: "",
    neglect_abuse_trauma_loss_pg5_b: "",
    neglect_abuse_trauma_loss_pg5_c: "",
  })

  const next = "/perpetrator_of_neglect_and_abuse_pg_1";

  const handleFieldChange = (e) => {
    setPatientNeglectAbuseTraumaLossPg5({ ...patientNeglectAbuseTraumaLossPg5, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">NEGLECT <span>&#183;</span> ABUSE <span>&#183;</span> TRAUMA <span>&#183;</span> LOSS</h2>
        <div className="questionsContainer text-center">
          <h4 className="textWhite centerItem">Are there concerns, allegations, or assertions your child(ren) have been sexually abused, now or in the past?</h4>
          <div className="interview_div1">
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="neglect_abuse_trauma_loss_pg5_a"
            name="neglect_abuse_trauma_loss_pg5_a"
            onChange={handleFieldChange}
            value={patientNeglectAbuseTraumaLossPg5.neglect_abuse_trauma_loss_pg5_a}
          />
        </div>
        <h4 className="textWhite centerItem">Are there concerns, allegations, or assertions your child(ren) have been physically or emotionally abused, now or in the past?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="neglect_abuse_trauma_loss_pg5_b"
            name="neglect_abuse_trauma_loss_pg5_b"
            onChange={handleFieldChange}
            value={patientNeglectAbuseTraumaLossPg5.neglect_abuse_trauma_loss_pg5_b}
          />
        </div>
        <h4 className="textWhite centerItem">Do you ever feel afraid for your life?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="neglect_abuse_trauma_loss_pg5_c"
            name="neglect_abuse_trauma_loss_pg5_c"
            onChange={handleFieldChange}
            value={patientNeglectAbuseTraumaLossPg5.neglect_abuse_trauma_loss_pg5_c}
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

export default NeglectAbuseTraumaLossPg5;
