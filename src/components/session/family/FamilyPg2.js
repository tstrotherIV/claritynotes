import React, {useState} from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

function FamilyPg2(props) {

  const [patientFamily_pg2, setPatientFamily_pg2] = useState({
    familiy_pg2_a: "",
    familiy_pg2_b: "",
    familiy_pg2_c: "",
  })

  const next = "/family_pg_3";

  const handleFieldChange = (e) => {
    setPatientFamily_pg2({ ...patientFamily_pg2, [e.target.name]: e.target.value});
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
      Were different people involved?
      </h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            id="family_pg2_a"
            name="family_pg2_a"
            onChange={handleFieldChange}
            value={patientFamily_pg2.family_pg2_a}
          />
        </div>
      </div>
      <h4 className="textWhite centerItem">
      What are their names?
      </h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            id="family_pg2_b"
            name="family_pg2_b"
            onChange={handleFieldChange}
            value={patientFamily_pg2.family_pg2_b}
          />
        </div>
      </div>
      <h4 className="textWhite centerItem">What city or town did you grow up in?</h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            id="family_pg2_c"
            name="family_pg2_c"
            onChange={handleFieldChange}
            value={patientFamily_pg2.family_pg2_c}
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

export default FamilyPg2;
