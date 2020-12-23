import React, {useState} from "react"; 
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 88

function PartnerRelationshipPg9(props) {

  const [patientPartnerRelationshipPg9, setPatientPartnerRelationshipPg9] = useState({
    partner_relationship_pg9_a: "",
    partner_relationship_pg9_b: "",
    partner_relationship_pg9_c: "",
  })

  const next = "/partner_relationship_pg_10";

  const handleFieldChange = (e) => {
    setPatientPartnerRelationshipPg9({ ...patientPartnerRelationshipPg9, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
        <Heading />
      <div id="content-wrap">
        <h2 className="textWhite text-center mb-4">PARTNER RELATIONSHIP</h2>
        <div className="questionsContainer text-center">
          <h4 className="textWhite centerItem">Did [NAME] humiliate you in public, tell others personal information about you?</h4>
          <div className="interview_div1">
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="partner_relationship_pg9_a"
            name="partner_relationship_pg9_a"
            onChange={handleFieldChange}
            value={patientPartnerRelationshipPg9.partner_relationship_pg9_a}
          />
        </div>
        <h4 className="textWhite centerItem">Did [NAME] coerce unwanted sexual activity?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="partner_relationship_pg9_b"
            name="partner_relationship_pg9_b"
            onChange={handleFieldChange}
            value={patientPartnerRelationshipPg9.partner_relationship_pg9_b}
          />
        </div>
        <h4 className="textWhite centerItem">Did [NAME] disparage your career, accomplishments, or make you quit your job to stay home?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="partner_relationship_pg9_c"
            name="partner_relationship_pg9_c"
            onChange={handleFieldChange}
            value={patientPartnerRelationshipPg9.partner_relationship_pg9_c}
          />
        </div>
      </div>
        </div>
        <div id="footer">
          <ButtonNavigation next={next}  />
          <TermOfParentalRights />
        </div>
      </div>
    </div>
    </>
  );
}

export default PartnerRelationshipPg9;
