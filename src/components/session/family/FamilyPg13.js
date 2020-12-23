import React, {useState} from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';


function FamilyPg13(props) {

  const [patientFamily_pg13, setPatientFamily_pg13] = useState({
    familiy_pg13_a: "",
    familiy_pg13_b: "",
    familiy_pg13_c: "",
  })

  const next = "/family_pg_14";

  const handleFieldChange = (e) => {
    setPatientFamily_pg13({ ...patientFamily_pg13, [e.target.name]: e.target.value});
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
      How did they shape your view of the world?
      </h5>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            name=""
            id="family_pg13_a"
            name="family_pg13_a"
            onChange={handleFieldChange}
            value={patientFamily_pg13.family_pg13_a}
          />
        </div>
      </div>
      <h5 className="textWhite centerItem mt-4">
      Was there ever anyone that was more important to you than your biological family?
      </h5>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            id="family_pg13_b"
            name="family_pg13_b"
            onChange={handleFieldChange}
            value={patientFamily_pg13.family_pg13_b}
          />
        </div>
      </div>
      <h5 className="textWhite centerItem mt-4">If so, who and why?</h5>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            id="family_pg13_c"
            name="family_pg13_c"
            onChange={handleFieldChange}
            value={patientFamily_pg13.family_pg13_c}
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

export default FamilyPg13;
