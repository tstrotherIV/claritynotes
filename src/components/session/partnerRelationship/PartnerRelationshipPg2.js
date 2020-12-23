import React, {useState} from "react"; 
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 81

function PartnerRelationshipPg2(props) {

  const [patientPartnerRelationshipPg2, setPatientPartnerRelationshipPg2] = useState({
    partner_relationship_pg2_a: "",
    partner_relationship_pg2_b: "",
    partner_relationship_pg2_c: "",
  })

  const next = "/partner_relationship_pg_3";

  const handleFieldChange = (e) => {
    setPatientPartnerRelationshipPg2({ ...patientPartnerRelationshipPg2, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
        <Heading />
      <div id="content-wrap">
        <h2 className="textWhite text-center mb-4">PARTNER RELATIONSHIP</h2>
        <div className="questionsContainer text-center">
          <h4 className="textWhite centerItem">How long have you been together?</h4>
          <div className="interview_div1">
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="partner_relationship_pg2_a"
            name="partner_relationship_pg2_a"
            onChange={handleFieldChange}
            value={patientPartnerRelationshipPg2.partner_relationship_pg2_a}
          />
        </div>
        <h4 className="textWhite centerItem">How did you meet?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="partner_relationship_pg2_b"
            name="partner_relationship_pg2_b"
            onChange={handleFieldChange}
            value={patientPartnerRelationshipPg2.partner_relationship_pg2_b}
          />
        </div>
        <h4 className="textWhite centerItem">Do you feel loved and accepted by [NAME PARTNER]?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="partner_relationship_pg2_c"
            name="partner_relationship_pg2_c"
            onChange={handleFieldChange}
            value={patientPartnerRelationshipPg2.partner_relationship_pg2_c}
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

export default PartnerRelationshipPg2;
