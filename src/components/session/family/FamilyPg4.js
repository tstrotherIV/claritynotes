import React, {useState} from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

function FamilyPg4(props) {

  const [patientFamily_pg4, setPatientFamily_pg4] = useState({
    familiy_pg4_a: "",
    familiy_pg4_b: "",
    familiy_pg4_c: "",
  })

  const next = "/family_pg_5";

  const handleFieldChange = (e) => {
    setPatientFamily_pg4({ ...patientFamily_pg4, [e.target.name]: e.target.value});
  }

  return (
    <>
    <div id="page-container">
      <div id="content-wrap">
    <Heading /> 
      <div className="header">
        <h2 className="textWhite mb-4">Family</h2>
      </div>
      <h4 className="textWhite centerItem">
      What kind of a person was your grandmother (maternal or paternal) when you were growing up?
      </h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            id="family_pg4_a"
            name="family_pg4_a"
            onChange={handleFieldChange}
            value={patientFamily_pg4.family_pg4_a}
          />
        </div>
      </div>
      <h4 className="textWhite centerItem">
      What kind of a person was your grandfather when you were growing up?
      </h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            id="family_pg4_b"
            name="family_pg4_b"
            onChange={handleFieldChange}
            value={patientFamily_pg4.family_pg4_b}
          />
        </div>
      </div>
      <h4 className="textWhite centerItem">Did you experience a sudden loss or death?</h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            id="family_pg4_c"
            name="family_pg4_c"
            onChange={handleFieldChange}
            value={patientFamily_pg4.family_pg4_c}
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

export default FamilyPg4;
