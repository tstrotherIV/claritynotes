import React, {useState} from "react"; 
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';


// pdf page 79

function PerpetratorOfNeglectAndAbusePg4(props) {

  const [patientPerpetratorOfNeglectAndAbusePg4, setPatientPerpetratorOfNeglectAndAbusePg4] = useState({
    perpetrator_of_neglect_and_abuse_pg4_a: "",
  })

  const next = "/partner_relationship_pg_1";

  const handleFieldChange = (e) => {
    setPatientPerpetratorOfNeglectAndAbusePg4({ ...patientPerpetratorOfNeglectAndAbusePg4, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
        <Heading />
      <div id="content-wrap">
        <h2 className="textWhite text-center mb-4">PERPETRATOR OF NEGLECT AND ABUSE</h2>
        <div className="questionsContainer text-center">
          <h4 className="textWhite centerItem">Is there any other accusations or other information regarding you as a perpetrator of abuse or neglect in your background?</h4>
          <div className="interview_div1">
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="perpetrator_of_neglect_and_abuse_pg4_a"
            name="perpetrator_of_neglect_and_abuse_pg4_a"
            onChange={handleFieldChange}
            value={patientPerpetratorOfNeglectAndAbusePg4.perpetrator_of_neglect_and_abuse_pg4_a}
          />
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

export default PerpetratorOfNeglectAndAbusePg4;
