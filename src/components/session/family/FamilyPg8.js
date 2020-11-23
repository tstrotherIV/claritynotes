import React from "react";
import "./interviews.scss";
import { Label, Input, Button } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';

function FamilyPg8(props) {
  return (
    <>
      <div id="page-container">
      <div id="content-wrap">
      <Heading />  
      <div className="header">
        <h1 className="textWhite">Family</h1>
      </div>      
      <h4 className="textWhite centerItem">
      What is your favorite childhood memory?
      </h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <Input
            className="interview_fieldData"
            type="text"
            id=""
          />
        </div>
      </div>
      <div className="interview_div3">
        <h3 className="textWhite">Impulse Control</h3>
        <div className="interview_line3">
          <h5 className="textWhite centerItem containText">
            Does the parent have any positive memories to reflect upon, empathic
            experience, loving memories, which may help them to be patient
            loving and kind?
          </h5>
          <div className="observationsColumn pl-3">
            <Label className="textWhite" for="">
              [User Name, First]’s Inference and Observations:
            </Label>
            <Input type="text" className="" id="" />
          </div>
        </div>
      </div>
      <div className="interview_div3">
        <h3 className="textWhite">Responsiveness</h3>
        <div className="interview_line3">
          <h5 className="textWhite centerItem containText">
            Does the parent have any loving and warm memories which they can
            reference to guide sensitivity to be responsive to the needs of
            their children?
          </h5>
          <div className="observationsColumn pl-3">
            <Label className="textWhite" for="">
              [User Name, First]’s Inference and Observations:
            </Label>
            <Input type="text" name="" id="" />
          </div>
        </div>
      </div>
      <div className="interview_div3">
        <h3 className="textWhite">Communication</h3>
        <div className="interview_line3">
          <h5 className="textWhite centerItem containText">
            Does the parent have warm and nurturing memories which may guide
            healthy ways to communicate in an effective manner?
          </h5>
          <div className="observationsColumn pl-3">
            <Label className="textWhite" for="">
              [User Name, First]’s Inference and Observations:
            </Label>
            <Input type="text" name="" id="" />
          </div>
        </div>
      </div>
      </div>
      <div className="footerHeight" id="footer">
      <div className="buttonSection">
      <div className="idBox textWhite p-3"></div>
        <Button
          color="info"
          className="button"
          onClick={() => {
            props.history.push(`/family_pg_7`);
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
            props.history.push(`/family_pg_9`);
          }}
          >
          Next
        </Button>
        <div className="idBox textWhite p-3">
          <div className>Existing Patient: [Case #]</div>
          <div>Patient ID: [Patient ID]</div>
      </div>
          </div>
      <TermOfParentalRights />
      </div>
    </div>
    </>
  );
}

export default FamilyPg8;
