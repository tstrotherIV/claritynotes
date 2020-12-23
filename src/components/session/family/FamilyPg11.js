import React, {useState} from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

function FamilyPg11(props) {

  const [patientFamily_pg11, setPatientFamily_pg11] = useState({
    familiy_pg11_a: "",
    familiy_pg11_b: "",
    familiy_pg11_c: "",
  })

  const next = "/family_pg_12";

  const handleFieldChange = (e) => {
    setPatientFamily_pg11({ ...patientFamily_pg11, [e.target.name]: e.target.value});
  }
  
  return (
    <>
      <div id="page-container">
      <div id="content-wrap">      
    <Heading /> 
      <div className="header">
        <h2 className="textWhite">Family</h2>
      </div>
      <div className="questionsContainerWide">
      <h5 className="textWhite centerItem mt-4">
      Tell me more about that. How did it make you feel?
      </h5>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            id="family_pg11_a"
            name="family_pg11_a"
            onChange={handleFieldChange}
            value={patientFamily_pg11.family_pg11_a}
          />
        </div>
      </div>
      <h5 className="textWhite centerItem mt-4">
      How do you want the memories of your children to be different?
      </h5>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            id="family_pg11_b"
            name="family_pg11_b"
            onChange={handleFieldChange}
            value={patientFamily_pg11.family_pg11_b}
          />
        </div>
      </div>
      <h5 className="textWhite centerItem mt-4">How do you do this?</h5>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize
            className="interview_fieldData"
            type="text"
            id="family_pg11_c"
            name="family_pg11_c"
            onChange={handleFieldChange}
            value={patientFamily_pg11.family_pg11_c}
          />
        </div>
      </div>      
      </div>
      </div>
      <div id="footer">
      <ButtonNavigation next={next} />
      <TermOfParentalRights />
      </div>
    </div>
    </>
  );
}

export default FamilyPg11;
