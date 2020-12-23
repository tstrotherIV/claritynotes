import React, {useState} from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';


function FamilyPg14(props) {

  const [patientFamily_pg14, setPatientFamily_pg14] = useState({
    familiy_pg14_a: "",
    familiy_pg14_b: "",
    familiy_pg14_c: "",
  })

  const next = "/family_pg_15";

  const handleFieldChange = (e) => {
    setPatientFamily_pg14({ ...patientFamily_pg14, [e.target.name]: e.target.value});
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
        What do you enjoy doing in your free time?
      </h5>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            id="family_pg14_a"
            name="family_pg14_a"
            onChange={handleFieldChange}
            value={patientFamily_pg14.family_pg14_a}
          />
        </div>
      </div>
      <h5 className="textWhite text-center mt-4">
        What do you want people to say about you someday? How do you want to be
        remembered?
      </h5>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            id="family_pg14_b"
            name="family_pg14_b"
            onChange={handleFieldChange}
            value={patientFamily_pg14.family_pg14_b}
          />
        </div>
      </div>    
      <h5 className="textWhite centerItem mt-4">
        How do you reach toward your potential each day?
      </h5>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            id="family_pg14_c"
            name="family_pg14_c"
            onChange={handleFieldChange}
            value={patientFamily_pg14.family_pg14_c}
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

export default FamilyPg14;
