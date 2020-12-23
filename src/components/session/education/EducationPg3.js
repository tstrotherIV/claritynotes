import React, {useState} from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 48

function EducationPg3(props) {

  const [patientEducation_pg3, setPatientEducation_pg3] = useState({
    education_pg3_a: "",
    education_pg3_b: "",
    education_pg3_c: "",
  })

  const next = "/education_pg_4";

  const handleFieldChange = (e) => {
    setPatientEducation_pg3({ ...patientEducation_pg3, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">Education</h2>
        <div className="questionsContainer text-center">
          <h4 className="textWhite centerItem">Were you ever expelled?</h4>
          <div className="interview_div1">
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="education_pg3_a"
            name="education_pg3_a"
            onChange={handleFieldChange}
            value={patientEducation_pg3.education_pg3_a}
          />
        </div>
        <h4 className="textWhite centerItem">Any emotional problem while in school?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="education_pg3_b"
            name="education_pg3_b"
            onChange={handleFieldChange}
            value={patientEducation_pg3.education_pg3_b}
          />
        </div>
        <h4 className="textWhite centerItem">Any substance use in school?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="education_pg3_c"
            name="education_pg3_c"
            onChange={handleFieldChange}
            value={patientEducation_pg3.education_pg3_c}
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

export default EducationPg3;
