import React, {useState} from "react"; 
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';


// pdf page 91

function ParentingPg2(props) {

  const [patientParentingPg2, setPatientParentingPg2] = useState({
    parenting_pg2_a: "",
    parenting_pg2_b: "",
    parenting_pg2_c: "",
  })

  const next = "/parenting_pg_3";  

  const handleFieldChange = (e) => {
    setPatientParentingPg2({ ...patientParentingPg2, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
        <Heading />
      <div id="content-wrap">
        <h2 className="textWhite text-center mb-4">PARENTING</h2>
        <div className="questionsContainer text-center">
          <h4 className="textWhite centerItem">How do you give positive reinforcement?</h4>
          <div className="interview_div1">
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="parenting_pg2_a"
            name="parenting_pg2_a"
            onChange={handleFieldChange}
            value={patientParentingPg2.parenting_pg2_a}
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
            id="parenting_pg2_b"
            name="parenting_pg2_b"
            onChange={handleFieldChange}
            value={patientParentingPg2.parenting_pg2_b}
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
            id="parenting_pg2_c"
            name="parenting_pg2_c"
            onChange={handleFieldChange}
            value={patientParentingPg2.parenting_pg2_c}
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

export default ParentingPg2;
