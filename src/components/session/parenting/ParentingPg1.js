import React from "react"; 
import { Label, Input, Button } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
// pdf page 90

function ParentingPg1(props) {
  return (
    <>  
    <div id="page-container">
        <Heading />
      <div id="content-wrap">
        <h2 className="textWhite text-center mb-4">PARENTING</h2>
        <div className="questionsContainer text-center">
          <h4 className="textWhite centerItem">How do you show affections to your children?</h4>
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
      </div>
      <h4 className="textWhite centerItem">How do you monitor school progress?</h4>
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
      </div>
      <h4 className="textWhite centerItem">How do you keep the the child(ren) socially involved?</h4>
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
      </div>
        </div>
        <div id="footer">
          <div className="buttonSection">
          <div className="idBox textWhite p-3"></div>
            <Button
              color="info"
              className="button"
              onClick={() => {
                props.history.push(`/partner_relationship_pg_10`);
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
                props.history.push(`/parenting_pg_2`);
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

export default ParentingPg1;
