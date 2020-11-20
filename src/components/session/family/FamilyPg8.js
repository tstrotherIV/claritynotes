import React from "react";
import "./interviews.css";
import { Label, Input, Button } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/termOfParentalRights';

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
      <section className="interview_section1">
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
      </section>
      <section className="interview_section3">
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
            <Input className="" type="text" name="" id="" />
          </div>
        </div>
      </section>
      <section className="interview_section3">
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
            <Input className="" type="text" name="" id="" />
          </div>
        </div>
      </section>
      <section className="interview_section3">
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
            <Input className="" type="text" name="" id="" />
          </div>
        </div>
      </section>
      </div>
      <div id="footer">
      <section className="buttonSection">
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
        <section className="textWhite p-3">
          <div>Existing Patient: [Case #]</div>
          <div>Patient ID: [Patient ID]</div>
        </section>
      </section>
      <TermOfParentalRights />
      </div>
    </div>
    </>
  );
}

export default FamilyPg8;
