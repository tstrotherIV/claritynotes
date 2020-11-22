import React from "react"; 
import { Label, Input, Button } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
// pdf page 84

function PartnerRelationshipPg5(props) {
  return (
    <>  
    <div id="page-container">
        <Heading />
      <div id="content-wrap">
        <h2 className="textWhite text-center mb-4">PARTNER RELATIONSHIP</h2>
        <div className="questionsContainer text-center">
          <h4 className="textWhite centerItem">What does [NAME] dislike about you?</h4>
          <div className="interview_div1">
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <Input
            className=""
            type="text"
            id=""
          />
        </div>
        <h4 className="textWhite centerItem">(IF DOMESTIC VIOLENCE)</h4>
        <h4 className="textWhite centerItem">Did [NAME] critize your family or friends; separate you from family and friends</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <Input
            className=""
            type="text"
            id=""
          />
        </div>
        <h4 className="textWhite centerItem">Did [NAME] tell you how you should dress?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <Input
            className=""
            type="text"
            id=""
          />
        </div>
      </div>
        </div>
        <div id="footer">
          <div className="buttonSection">
            <Button
              color="info"
              className="button"
              onClick={() => {
                props.history.push(`/partner_relationship_pg_4`);
              }}
            >
              Previous
            </Button>
            <Button color="info" className="button">
              Save
            </Button>
            <Button color="info" className="button">
              Submit
            </Button>
            <Button
              color="info"
              className="button"
              onClick={() => {
                props.history.push(`/partner_relationship_pg_6`);
              }}
            >
              Next
            </Button>
            <div className="idBox textWhite p-3">
              <div>Existing Patient: [Case #]</div>
              <div>Patient ID: [Patient ID]</div>
            </div>
          </div>
          <TermOfParentalRights />
        </div>
      </div>
    </div>
    </>
  );
}

export default PartnerRelationshipPg5;
