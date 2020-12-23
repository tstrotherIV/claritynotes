import React, {useState} from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';
// pdf page 45

function EducationPg2(props) {

  const [patientEducation_pg2, setPatientEducation_pg2] = useState({
    education_pg2_a: "",
    education_pg2_b: "",
    education_pg2_c: "",
  })

  const next = "/education_pg_3";

  const handleFieldChange = (e) => {
    setPatientEducation_pg2({ ...patientEducation_pg2, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">Education</h2>
        <div className="questionsContainer text-center">
          <h4 className="textWhite centerItem">Any learning disability, ADHD, speech, or language problem, vision, or hearing problem, or physical malady?</h4>
          <div className="interview_div1">
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
          className="fieldData"
            type="text"
            id="education_pg2_a"
            name="education_pg2_a"
            onChange={handleFieldChange}
            value={patientEducation_pg2.education_pg2_a}
          />
        </div>
        <h4 className="textWhite centerItem">Did you repeat any grades?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="education_pg2_b"
            name="education_pg2_b"
            onChange={handleFieldChange}
            value={patientEducation_pg2.education_pg2_b}
          />
        </div>
        <h4 className="textWhite centerItem">Where you ever suspended?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="education_pg2_c"
            name="education_pg2_c"
            onChange={handleFieldChange}
            value={patientEducation_pg2.education_pg2_c}
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

export default EducationPg2;
