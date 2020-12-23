import React, {useState} from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';
// pdf page 49

function EducationPg4(props) {

  const [patientEducation_pg4, setPatientEducation_pg4] = useState({
    education_pg4_a: "",
    education_pg4_b: "",
    education_pg4_c: "",
  })

  const next = "/history_of_legal_pg_1";

  const handleFieldChange = (e) => {
    setPatientEducation_pg4({ ...patientEducation_pg4, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">Education</h2>
        <div className="questionsContainer text-center">
          <h4 className="textWhite centerItem">Do you feel your substance use impacted your grades?</h4>
          <div className="interview_div1">
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="education_pg4_a"
            name="education_pg4_a"
            onChange={handleFieldChange}
            value={patientEducation_pg4.education_pg4_a}
          />
        </div>
        <h4 className="textWhite centerItem">Do you feel your substance use impacted your behavior in school?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="education_pg4_b"
            name="education_pg4_b"
            onChange={handleFieldChange}
            value={patientEducation_pg4.education_pg4_b}
          />
        </div>
        <h4 className="textWhite centerItem">Looking back, should you have tried harder?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="education_pg4_c"
            name="education_pg4_c"
            onChange={handleFieldChange}
            value={patientEducation_pg4.education_pg4_c}
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

export default EducationPg4;
