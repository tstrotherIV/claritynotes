import React, {useState} from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

function FamilyPg3(props) {

  const [patientFamily_pg3, setPatientFamily_pg3] = useState({
    familiy_pg3_a: "",
    familiy_pg3_b: "",
    familiy_pg3_c: "",
  })

  const next = "/family_pg_4";

  const handleFieldChange = (e) => {
    setPatientFamily_pg3({ ...patientFamily_pg3, [e.target.name]: e.target.value});
  }
 
  return (
    <>
       <div id="page-container">
      <div id="content-wrap">
      <Heading />
      <div className="header">
        <h2 className="textWhite">Family</h2>
      </div>
      <h4 className="textWhite centerItem">
      What are the names of your siblings?
      </h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            id="family_pg3_a"
            name="family_pg3_a"
            onChange={handleFieldChange}
            value={patientFamily_pg3.family_pg3_a}
          />
        </div>
      </div>
      <h4 className="textWhite centerItem">
      What kind of a person was your biological mother when you were growing up?
      </h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            id="family_pg3_b"
            name="family_pg3_b"
            onChange={handleFieldChange}
            value={patientFamily_pg3.family_pg3_b}
          />
        </div>
      </div>
      <h4 className="textWhite centerItem">What kind of a person was your biological father when you were growing up?</h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            id="family_pg3_c"
            name="family_pg3_c"
            onChange={handleFieldChange}
            value={patientFamily_pg3.family_pg3_c}
          />
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

export default FamilyPg3;
