import React, { useState } from "react";
import "./interviews.css";
import { Label, Input, Button } from "reactstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Family_Pg7(props) {
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
        What is your least favorite childhood memory?
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

      <section className="interview_section3">
        <h3 className="textWhite">Protective</h3>
        <div className="interview_line3">
          <h4 className="textWhite centerItem containText">
            Any memories which were negative, which taught them the importance
            of being protective, cautious, restrained, etc? Did they learn from
            this negative experience? Does the parent try to prevent things from
            happening from anything negative?
          </h4>
          <div className="observationsColumn pl-3">
            <Label className="textWhite " for="">
              [User Name, First]’s Inference and Observations:
            </Label>
            <Input
              className=""
              type="text"
              name=""
              id=""
              placeholder=""
            />
          </div>
        </div>
      </section>

      <section className="buttonSection mt-6" id="">
        <Button
          color="info"
          className="button"
          onClick={() => {
            props.history.push(`/family_pg_9`);
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
            props.history.push(`/family_pg_11`);
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

export default Family_Pg7;
