import React, {useState} from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';


function FamilyPg12(props) {

  const [patientFamily_pg12, setPatientFamily_pg12] = useState({
    familiy_pg12_a: "",
    familiy_pg12_b: "",
    familiy_pg12_c: "",
  })

  const next = "/family_pg_13";

  const handleFieldChange = (e) => {
    setPatientFamily_pg12({ ...patientFamily_pg12, [e.target.name]: e.target.value});
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
      How do these memories impact your parenting?
      </h5>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            id="family_pg12_a"
            name="family_pg12_a"
            onChange={handleFieldChange}
            value={patientFamily_pg12.family_pg12_a}
          />
        </div>
      </div> 
      <h5 className="textWhite text-center mt-4">
      Tell me about your most serious relationship that did not result in cohabitation; which can include non-sexual friendships with the same or opposite sex.
      </h5>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            id="family_pg12_b"
            name="family_pg12_b"
            onChange={handleFieldChange}
            value={patientFamily_pg12.family_pg12_b}
          />
        </div>
      </div>      
      <h5 className="textWhite centerItem text-center mt-4">Tell me more about relationships with children, teachers, supervisors, schoolmates, bosses, or workmates of any importance.</h5>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            id="family_pg12_c"
            name="family_pg12_c"
            onChange={handleFieldChange}
            value={patientFamily_pg12.family_pg12_c}
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

export default FamilyPg12;
