import React, {useState} from "react"; 
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 92

function ParentingPg3(props) {

  const [patientParentingPg3, setPatientParentingPg3] = useState({
    parenting_pg3_a: "",
    parenting_pg3_b: "",
  })

  const next = "/positive_role_model_pg_1";

  const handleFieldChange = (e) => {
    setPatientParentingPg3({ ...patientParentingPg3, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
        <Heading />
      <div id="content-wrap">
        <h2 className="textWhite text-center mb-4">PARENTING</h2>
        <div className="questionsContainer text-center">
          <h4 className="textWhite centerItem">Is/Are your child(ren) meeting developmental expectations? How do you know?</h4>
          <div className="interview_div1">
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="parenting_pg3_a"
            name="parenting_pg3_a"
            onChange={handleFieldChange}
            value={patientParentingPg3.parenting_pg3_a}
          />
        </div>
      </div>
      <h4 className="textWhite centerItem">How are you responsive to your child(ren)'s needs?</h4>
          <div className="interview_div1">
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="parenting_pg3_b"
            name="parenting_pg3_b"
            onChange={handleFieldChange}
            value={patientParentingPg3.parenting_pg3_b}
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

export default ParentingPg3;
