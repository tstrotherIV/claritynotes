import React, { useState } from "react";
import "./interviews.css";
import { Label, Input, Button } from "reactstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Family_Pg5(props) {
  return (
    <>
      <h1 className="titleFontSize whiteBgd d-flex justify-content-center">
        Psychological Evaluation
      </h1>

      <div className="header">
        <h1 className="textWhite">Family</h1>
      </div>

      <br></br>
      <h4 className="textWhite centerItem">
        Did you feel loved and accepted by each parent, even when you
        disappointed them?
      </h4>
      <section className="interview_section1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <Input
            className="interview_fieldData"
            type="text"
            name=""
            id=""
            placeholder=""
          />
        </div>
      </section>
      <section className="interview_section1">
        <div className="interview_line1 textWhite">
            (IF THEY DO NOT OFFER MORE THAN “YES” OR “NO,” ASK THEM: “How did
            they show you they loved you and accepted you?” AND/OR “Tell me more
            about that.” GET AS MUCH INFO AS POSSIBLE.
        </div>
      </section>
      <br></br>
      <h4 className="textWhite centerItem">
        Do you remember a lot of fighting in the home growing up?
      </h4>
      <section className="interview_section1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <Input
            className="interview_fieldData"
            type="text"
            name=""
            id=""
            placeholder=""
          />
        </div>
      </section>

      <section className="buttonSection mt-6" id="">
        <Button
          color="info"
          className="button"
          onClick={() => {
            props.history.push(`/family_pg_4`);
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
            props.history.push(`/family_pg_6`);
          }}
        >
          Next
        </Button>
        <section className="textWhite p-3">
          <div>Existing Patient: [Case #]</div>
          <div>Patient ID: [Patient ID]</div>
        </section>
      </section>
      <section className="d-flex justify-content-center">
        <DropdownButton
          as={ButtonGroup}
          key="up"
          id="{`dropdown-button-drop-up`}"
          drop="up"
          variant="light"
          title={` Termination of Parental Rights Criteria `}
          className="terminationButton"
        >
          <section className="checkBoxContainer">
            <div className="m-2">
              <h4>Termination of Parental Rights Criteria</h4>
            </div>
            <div className="checkBoxRow">
              <div className="checkBoxSection">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">Unforeseeable Future Change</div>
              </div>
              <div className="checkBoxSection">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">Rehabilitation Failure</div>
              </div>
              <div className="checkBoxSection">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">
                  Failure to Maintain Material Needs
                </div>
              </div>
            </div>
            <div className="checkBoxRow">
              <div className="checkBoxSection">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">
                  Conviction and Imprisonment of Felony
                </div>
              </div>
              <div className="checkBoxSection">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">
                  Serious Physical Injury to child
                </div>
              </div>
              <div className="checkBoxSection">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">
                  Failure to Maintain Consistent Contact
                </div>
              </div>
            </div>
            <div className="checkBoxRow">
              <div className="checkBoxSection">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">
                  Emotional Illness and mental deficiency
                </div>
              </div>
              <div className="checkBoxSection">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">Willful Neglect/Abandonment</div>
              </div>
              <div className="checkBoxSection">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">
                  Parent has tortured, abused, cruelly beaten, or
                </div>
              </div>
            </div>
            <div className="checkBoxRow">
              <div className="checkBoxSection">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">
                  Unable to Discharge Childcare Responsibilities
                </div>
              </div>
              <div className="checkBoxSection">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">
                  Loss of Custody of Other Child(ren)
                </div>
              </div>
              <div className="checkBoxSection">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">otherwise maltreated the child</div>
              </div>
            </div>
            <div className="checkBoxRow">
              <div className="checkBoxSection">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">
                  Excessive Use of a Controlled Substance
                </div>
              </div>
              <div className="checkBoxSection">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">Serious Bodily Injury of Child</div>
              </div>
              <div className="checkBoxSection">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">
                  Lack of Effort to Adjust to His/Her Circumstances
                </div>
              </div>
            </div>
          </section>
        </DropdownButton>
      </section>
    </>
  );
}

export default Family_Pg5;
