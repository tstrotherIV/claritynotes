import React, {useState} from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';
// pdf page 44

function EducationPg1(props) {

  const [patientEducation_pg1, setPatientEducation_pg1] = useState({
    education_pg1_a: "",
    education_pg1_b: "",
    education_pg1_c: "",
    education_pg1_d: "",
    education_pg1_e: "",
  })

  const next = "/education_pg_2";

  const handleFieldChange = (e) => {
    setPatientEducation_pg1({ ...patientEducation_pg1, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4 ">Education</h2>
        <div className="questionsContainerWide row d-flex flex-wrap center-text justify-items-center align-items-end">
        <Label className="textWhite col-4 text-center" for="">
            [Patient Name, First] said:
          </Label>
          <div className="d-flex flex-wrap justify-content-center col-4">
          <p className="textWhite">Did you quit school?</p>
          <TextareaAutosize            
            className="col-10 fieldData"
            type="text"
            id="education_pg1_a"
            name="education_pg1_a"
            onChange={handleFieldChange}
            value={patientEducation_pg1.education_pg1_a}
          />  
        </div>
          <div className="d-flex flex-wrap justify-content-center col-4">
          <p className="textWhite">Last grade completed:</p>
          <TextareaAutosize            
            className="col-10 fieldData"
            type="text"
            id="education_pg1_b"
            name="education_pg1_b"
            onChange={handleFieldChange}
            value={patientEducation_pg1.education_pg1_b}
          />  
        </div>
        </div>
        {/* --------------LINE TWO------------------  */}
        <div className="questionsContainerWide row d-flex flex-wrap center-text justify-items-center align-items-end pt-3">
        <Label className="textWhite col-4 text-center" for="graduateHighSchool">
            [Patient Name, First] said:
          </Label>
          <div className="d-flex flex-wrap justify-content-center text-center col-4">
          <p className="textWhite">Did you graduate from high school?</p>
          <TextareaAutosize            
            className="col-10 fieldData"
            type="text"
            id="education_pg1_c"
            name="education_pg1_c"
            onChange={handleFieldChange}
            value={patientEducation_pg1.education_pg1_c}
          />  
        </div>
          <div className="d-flex flex-wrap justify-content-center text-center col-4">
          <p className="textWhite">Earned GED in:</p>
          <TextareaAutosize            
            className="col-10 fieldData"
            type="text"
            id="education_pg1_d"
            name="education_pg1_d"
            onChange={handleFieldChange}
            value={patientEducation_pg1.education_pg1_d}
          />  
        </div>
        </div>
        <p className="textWhite centerItem questionsContainer mt-5">Were you in special education? If so, why?</p>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize           
            className="col-6 fieldData"
            type="text"
            id="education_pg1_e"
            name="education_pg1_e"
            onChange={handleFieldChange}
            value={patientEducation_pg1.education_pg1_e}
          />
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

export default EducationPg1;
