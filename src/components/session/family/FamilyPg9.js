import React, {useState} from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

function FamilyPg9(props) {

  const [patientFamily_pg9, setPatientFamily_pg9] = useState({
    familiy_pg9_a: "",
    familiy_pg9_b: "",
    familiy_pg9_c: "",
  })

  const next = "/family_pg_10";

  const handleFieldChange = (e) => {
    setPatientFamily_pg9({ ...patientFamily_pg9, [e.target.name]: e.target.value});
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
      Tell me more about that. How did it make you feel?
      </h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            id="family_pg9_a"
            name="family_pg9_a"
            onChange={handleFieldChange}
            value={patientFamily_pg9.family_pg9_a}
          />
        </div>
      </div>
      <h4 className="textWhite centerItem">
      How do you want the memories of your children to be different?
      </h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            id="family_pg9_b"
            name="family_pg9_b"
            onChange={handleFieldChange}
            value={patientFamily_pg9.family_pg9_b}
          />
        </div>
      </div>
      <h4 className="textWhite centerItem">How do you do this?</h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            id="family_pg9_c"
            name="family_pg9_c"
            onChange={handleFieldChange}
            value={patientFamily_pg9.family_pg9_c}
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

export default FamilyPg9;
