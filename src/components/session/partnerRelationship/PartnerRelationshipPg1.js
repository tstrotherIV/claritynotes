import React from "react";
import { Label, Input, Button } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
// pdf page 80

function PartnerRelationshipPg1(props) {
  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">PARTNER RELATIONSHIP</h2>
        <div className="text-center questionsContainerWide row d-flex flex-wrap justify-content-center">
        <h4 className="textWhite centerItem offset-2">How many times have things gotten a little out of control, more than to your liking?</h4>
        <div className="mb-4 d-flex flex-wrap justify-content-center">
          <div className="textWhite d-flex flex-wrap align-content-end col-2 mb-2">
            [Patient Name, First] said:
          </div>
          <div className="col-3 d-flex flex-wrap align-items-end m-0 p-0">
          <Label className="textWhite">
          </Label>
          <Input
            className=""
            type="text"
            id=""
          />
          </div>
          <div className="col-3 d-flex flex-wrap align-items-end ml-2 justify-content-center align-content-end">
          <Label className="textWhite" for="">
          </Label>
          <Input
            className=""
            type="text"
            id=""
            />
        </div>
        <div className="col-3 d-flex flex-wrap align-items-end justify-content-center ml-2 p-0 align-content-end">
          <Label className="textWhite" for="">
          </Label>
          <Input
            className=""
            type="text"
            id=""
            />
          </div>
        </div>
        </div>
        
        <div className="text-center questionsContainerWide">
          <h4 className="textWhite centerItem">Which partner was abusive?</h4>
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
        <h4 className="textWhite centerItem">Are you currently married/in a relationship?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite">
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
                props.history.push(`/perpetrator_of_neglect_and_abuse_pg_4`);
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
                props.history.push(`/partner_relationship_pg_2`);
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

export default PartnerRelationshipPg1;
