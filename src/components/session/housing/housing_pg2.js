import React, { useState } from "react";
import "./housing.css";
import { Label, Input, Button } from "reactstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Housing_Pg2(props) {
  return (
    <>
      <h1 className="titleFontSize whiteBgd d-flex justify-content-center">
        Sarah's Psychological Evaluation
      </h1>

      <div className="header">
        <h1 className="textWhite">Housing</h1>
      </div>

      <br></br>
      <h4 className="textWhite centerItem">All or part?</h4>
      <section className="interview_section1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="hs-all-or-part">
            [Patient Name, First] said:
          </Label>
          <Input
            className="interview_fieldData"
            type="text"
            id="hs-all-or-part"
          />
        </div>
      </section>
      <br></br>
      <h4 className="textWhite centerItem">How much is your rent or mortgage?</h4>
      <section className="interview_section1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="hs-housing-cost">
            [Patient Name, First] said:
          </Label>
          <Input
            className="interview_fieldData"
            type="text"
            id="hs-housing-cost"
          />
        </div>
      </section>
      <br></br>
      <h4 className="textWhite centerItem ">Have you ever experienced times without shelter?</h4>
      <section className="interview_section1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="hs-without-shelter">
            [Patient Name, First] said:
          </Label>
          <Input
            className="interview_fieldData"
            type="text"
            id="hs-without-shelter"
          />
        </div>
      </section>

      <section className="buttonSection mt-6" id="">
        <Button
          color="info"
          className="button"
          onClick={() => {
            props.history.push(`/psychological_evaluation_report_summary`);
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
            props.history.push(`/housing_pg_2`);
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

export default Housing_Pg2;