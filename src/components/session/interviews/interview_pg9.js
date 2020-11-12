import React, { useState } from "react";
import "./interviews.css";
import {
  Label,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Interview_Pg9(props) {
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);
  const toggle3 = () => setModal(!modal);

  return (
    <>
      <h1 className="titleFontSize whiteBgd d-flex justify-content-center">
        Psychological Evaluation
      </h1>
      <section className="wrapContent mt-5">
        <div className="textWhite m-2 p-2">
          [Patient Name, First] [Patient Name, Last]
        </div>
        <div className="textWhite m-2 p-2">DOB: [Patient DOB]</div>
        <div className="textWhite m-2 p-2">Patient ID: [Patient ID]</div>
        <div className="textWhite m-2 p-2">Existing Patient: [Case #]</div>
      </section>
      <div className="header">
        <h1 className="textWhite">Interviews</h1>
      </div>
      <br></br>
      <h4 className="textWhite centerItem">
        What do you think you need to work on?
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

      <br></br>
      <section>
        <div className="section1Fields">
          <div className="in2">
            <Label className="textWhite title" for="caseNumber">
            [Patient Name, First] was dressed in
            </Label>
            <Input
              className="fieldData2"
              type="text"
              name="caseNumber"
              id="caseNumber"
              placeholder=""
            />
            <div></div>
          </div>
        </div>
      </section>
      <br></br>
      <div className="textWhite centerItem">
      and she appropriately groomed. (Write details! Was she malodourous, had greasy/unbrushed hair, unbathed, etc.? Notate the appearance and add to behavioral observations.)
      </div>
      <section className="interview_section1">
        <div className="interview_line1">
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
            props.history.push(`/interview_pg_8`);
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
            props.history.push(`/family_pg_1`);
          }}
        >
          Next
        </Button>
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

export default Interview_Pg9;
