import React, { useState, useEffect } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Tab, Tabs } from "react-bootstrap";
import { Input, Label } from "reactstrap";
import AdditionalNotes from "./AdditionalNotes";
import DataManager from "../../data_module/DataManager";
import "./ps.scss";

const termTitle = (
  <p className="term">Termination of Parental Rights Criteria</p>
);
const behavioral = (
  <p className="behavioral">Behavioral Observations and Testing Conditions</p>
);
const IQ = <p className="IQWidth">IQ</p>;
const domains = <p className="domainWidth">Domains</p>;
const generalNotes = <p className="generalNotes">General Notes</p>;

const TermOfParentalRights = (props) => {
  // const [noteChanged, setNoteChanged] = useState(false)
  const [patientNotes, setPatientNotes] = useState({});

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    const editedNote = {
      id: patientNotes.id,
      [name]: value,
    };

    DataManager.update("patientNotes", editedNote);

    setPatientNotes({ ...patientNotes, [name]: value });
  };

  const getData = () => {
    DataManager.getQuestionPatientNotes(props.patientId, props.questionId).then(
      (patientNotesResponses) => {
        setPatientNotes(patientNotesResponses[0]);
      }
    );
  };

  useEffect(() => {
    props.questionId ? getData() : console.log();
  }, [props.questionId]);

  return (
    <div className="dropdown_button termBackground ">
      <div className="d-flex justify-content-center termMenu">
        <DropdownButton
          as={ButtonGroup}
          key="up"
          id=""
          drop="up"
          variant="light"
          className="terminationButton p-1 "
          title="Patient Notes"
        >
          <div className="checkBoxContainer">
            <Tabs
              defaultActiveKey="generalNotes"
              id="uncontrolled-tab"
              className="d-flex flex-wrap justify-content-between"
            >
              <Tab
                eventKey="generalNotes"
                title={generalNotes}
                className="contents"
              >
                <AdditionalNotes patientNotes={patientNotes} />
              </Tab>
              <Tab
                eventKey="term"
                title={termTitle}
                className="contents termMenu"
              >
                <div className="pt-3 pl-3 termMenu">
                  <div className="checkBoxRow">
                    <div className="col-4">
                      <Input
                        type="checkbox"
                        className=""
                        id="t2a"
                        name="t2a"
                        checked={patientNotes.t2a}
                        onChange={handleFieldChange}
                      ></Input>
                      <Label for="">Unforeseeable Future Change</Label>
                    </div>
                    <div className="col-4">
                      <Input
                        type="checkbox"
                        className=""
                        id="t2b"
                        name="t2b"
                        checked={patientNotes.t2b}
                        onChange={handleFieldChange}
                      ></Input>
                      <Label className="" for="">
                        Rehabilitation Failure
                      </Label>
                    </div>
                    <div className="col-4">
                      <Input
                        type="checkbox"
                        className=""
                        id="t2c"
                        name="t2c"
                        checked={patientNotes.t2c}
                        onChange={handleFieldChange}
                      ></Input>
                      <Label className="" for="">
                        Failure to Maintain Material Needs
                      </Label>
                    </div>
                  </div>
                  <div className="checkBoxRow">
                    <div className="col-4">
                      <Input
                        type="checkbox"
                        className=""
                        id="t2d"
                        name="t2d"
                        checked={patientNotes.t2d}
                        onChange={handleFieldChange}
                      ></Input>
                      <Label className="" for="">
                        Conviction and Imprisonment of Felony
                      </Label>
                    </div>
                    <div className="col-4">
                      <Input
                        type="checkbox"
                        className=""
                        id="t2e"
                        name="t2e"
                        checked={patientNotes.t2e}
                        onChange={handleFieldChange}
                      ></Input>
                      <Label className="" for="">
                        {" "}
                        Serious Physical Injury to child{" "}
                      </Label>
                    </div>
                    <div className="col-4">
                      <Input
                        type="checkbox"
                        className=""
                        id="t2f"
                        name="t2f"
                        checked={patientNotes.t2f}
                        onChange={handleFieldChange}
                      ></Input>
                      <Label className="" for="">
                        Failure to Maintain Consistent Contact
                      </Label>
                    </div>
                  </div>
                  <div className="checkBoxRow">
                    <div className="col-4">
                      <Input
                        type="checkbox"
                        className=""
                        id="t2g"
                        name="t2g"
                        checked={patientNotes.t2g}
                        onChange={handleFieldChange}
                      ></Input>
                      <Label className="" for="">
                        {" "}
                        Emotional Illness and mental deficiency
                      </Label>
                    </div>
                    <div className="col-4">
                      <Input
                        type="checkbox"
                        className=""
                        id="t2h"
                        name="t2h"
                        checked={patientNotes.t2h}
                        onChange={handleFieldChange}
                      ></Input>
                      <Label className="" for="">
                        Willful Neglect/Abandonment
                      </Label>
                    </div>
                    <div className="col-4">
                      <Input
                        type="checkbox"
                        className=""
                        id="t2i"
                        name="t2i"
                        checked={patientNotes.t2i}
                        onChange={handleFieldChange}
                      ></Input>
                      <Label className="" for="">
                        Parent has tortured, abused, cruelly beaten, or
                      </Label>
                    </div>
                  </div>
                  <div className="checkBoxRow">
                    <div className="col-4">
                      <Input
                        type="checkbox"
                        className=""
                        id="t2j"
                        name="t2j"
                        checked={patientNotes.t2j}
                        onChange={handleFieldChange}
                      ></Input>
                      <Label className="" for="">
                        Unable to Discharge Childcare Responsibilities
                      </Label>
                    </div>
                    <div className="col-4">
                      <Input
                        type="checkbox"
                        className=""
                        id="t2k"
                        name="t2k"
                        checked={patientNotes.t2k}
                        onChange={handleFieldChange}
                      ></Input>
                      <Label className="" for="">
                        Loss of Custody of Other Child(ren){" "}
                      </Label>
                    </div>
                    <div className="col-4">
                      <Input
                        type="checkbox"
                        className=""
                        id="t2l"
                        name="t2l"
                        checked={patientNotes.t2l}
                        onChange={handleFieldChange}
                      ></Input>
                      <Label className="" for="">
                        otherwise maltreated the child
                      </Label>
                    </div>
                  </div>
                  <div className="checkBoxRow">
                    <div className="col-4">
                      <Input
                        type="checkbox"
                        className=""
                        id="t2m"
                        name="t2m"
                        checked={patientNotes.t2m}
                        onChange={handleFieldChange}
                      ></Input>
                      <Label className="" for="">
                        Excessive Use of a Controlled Substance{" "}
                      </Label>
                    </div>
                    <div className="col-4">
                      <Input
                        type="checkbox"
                        className=""
                        id="t2n"
                        name="t2n"
                        checked={patientNotes.t2n}
                        onChange={handleFieldChange}
                      ></Input>
                      <Label className="" for="">
                        Serious Bodily Injury of Child
                      </Label>
                    </div>
                    <div className="col-4">
                      <Input
                        type="checkbox"
                        className=""
                        id="t2o"
                        name="t2o"
                        checked={patientNotes.t2o}
                        onChange={handleFieldChange}
                      ></Input>
                      <Label className="" for="">
                        Lack of Effort to Adjust to His/Her Circumstances
                      </Label>
                    </div>
                  </div>
                </div>
              </Tab>

              <Tab
                eventKey="behavioral"
                title={behavioral}
                className="contents"
              >
                <div className="pt-3 pl-3">
                  <div className="checkBoxRow">
                    <div className="col-4">
                      <Input
                        type="checkbox"
                        className=""
                        id="t3a"
                        name="t3a"
                        checked={patientNotes.t3a}
                        onChange={handleFieldChange}
                      ></Input>
                      <Label className="inputBoldText" for="">
                        Happiness
                      </Label>
                      <p className="m-0">
                        Corners of lips turned up. Slightly raised cheeks. Crows
                        feet at side of eyes.
                      </p>
                    </div>
                    <div className="col-4">
                      <Input
                        type="checkbox"
                        className=""
                        id="t3b"
                        name="t3b"
                        checked={patientNotes.t3b}
                        onChange={handleFieldChange}
                      ></Input>
                      <Label className="inputBoldText" for="">
                        Fear
                      </Label>
                      <p className="m-0">
                        Widened mouth, slightly openrf. Wider eyes with raised
                        eyebrows.
                      </p>
                    </div>
                    <div className="col-4">
                      <Input
                        type="checkbox"
                        className=""
                        id="t3c"
                        name="t3c"
                        checked={patientNotes.t3c}
                        onChange={handleFieldChange}
                      ></Input>
                      <Label className="inputBoldText" for="">
                        Disgust
                      </Label>
                      <p className="m-0">Raised upper lip. Wrinkled nose.</p>
                    </div>
                  </div>
                  <div className="checkBoxRow">
                    <div className="col-4">
                      <Input
                        type="checkbox"
                        className=""
                        id="t3d"
                        name="t3d"
                        checked={patientNotes.t3d}
                        onChange={handleFieldChange}
                      ></Input>
                      <Label className="inputBoldText" for="">
                        Sadness
                      </Label>
                      <p className="m-0">
                        Corners of lips turned down. Eyebrows slanted out,
                        pulled together and riased in middle of forehead.
                      </p>
                    </div>
                    <div className="col-4">
                      <Input
                        type="checkbox"
                        className=""
                        id="t3e"
                        name="t3e"
                        checked={patientNotes.t3e}
                        onChange={handleFieldChange}
                      ></Input>
                      <Label className="inputBoldText" for="">
                        Contempt
                      </Label>
                      <p className="m-0">
                        One side of lips raised. Head slightly back.
                      </p>
                    </div>
                    <div className="col-4">
                      <Input
                        type="checkbox"
                        className=""
                        id="t3f"
                        name="t3f"
                        checked={patientNotes.t3f}
                        onChange={handleFieldChange}
                      ></Input>
                      <Label className="inputBoldText" for="">
                        Surprise
                      </Label>
                      <p className="m-0">
                        Opened mouth. Raised eyebrows. Widened eyes.
                      </p>
                    </div>
                  </div>
                  <div className="checkBoxRow">
                    <div className="col-4">
                      <Input
                        type="checkbox"
                        className=""
                        id="t3g"
                        name="t3g"
                        checked={patientNotes.t3g}
                        onChange={handleFieldChange}
                      ></Input>
                      <Label className="inputBoldText" for="">
                        Anger
                      </Label>
                      <p className="m-0">
                        Lips pressed together. Corners of lips flat or turned
                        down. Eyebrows slanted in, lowered in middle of
                        forehead. Widened eyes (brief stare).
                      </p>
                    </div>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="IQ" title={IQ} className="contents">
                <div className="pt-3 pl-3">
                  <div className="checkBoxRow d-flex flex-wrap justify-content-center">
                    <div className="col-4">
                      <Input
                        type="checkbox"
                        className=""
                        id="t4a"
                        name="t4a"
                        checked={patientNotes.t4a}
                        onChange={handleFieldChange}
                      ></Input>
                      <Label className="" for="">
                        Highly Gifted (140-160)
                      </Label>
                    </div>
                    <div className="col-4">
                      <Input
                        type="checkbox"
                        className=""
                        id="t4b"
                        name="t4b"
                        checked={patientNotes.t4b}
                        onChange={handleFieldChange}
                      ></Input>
                      <Label className="" for="">
                        Low Average (86-90) Mild Concern
                      </Label>
                    </div>
                  </div>
                  <div className="checkBoxRow d-flex flex-wrap justify-content-center">
                    <div className="col-4">
                      <Input
                        type="checkbox"
                        className=""
                        id="t4c"
                        name="t4c"
                        checked={patientNotes.t4c}
                        onChange={handleFieldChange}
                      ></Input>
                      <Label className="" for="">
                        Gifted (130-139)
                      </Label>
                    </div>
                    <div className="col-4">
                      <Input
                        type="checkbox"
                        className=""
                        id="t4d"
                        name="t4d"
                        checked={patientNotes.t4d}
                        onChange={handleFieldChange}
                      ></Input>
                      <Label className="" for="">
                        Borderline (71-85) Moderate to Elevated Concern
                      </Label>
                    </div>
                  </div>
                  <div className="checkBoxRow d-flex flex-wrap justify-content-center">
                    <div className="col-4">
                      <Input
                        type="checkbox"
                        className=""
                        id="t4e"
                        name="t4e"
                        checked={patientNotes.t4e}
                        onChange={handleFieldChange}
                      ></Input>
                      <Label className="" for="">
                        High Above Average (115-129)
                      </Label>
                    </div>
                    <div className="col-4">
                      <Input
                        type="checkbox"
                        className=""
                        id="t4f"
                        name="t4f"
                        checked={patientNotes.t4f}
                        onChange={handleFieldChange}
                      ></Input>
                      <Label className="" for="">
                        Intellectual Disability, Mild (56-70) Profound Concern
                      </Label>
                    </div>
                  </div>
                  <div className="checkBoxRow d-flex flex-wrap justify-content-center">
                    <div className="col-4">
                      <Input
                        type="checkbox"
                        className=""
                        id="t4g"
                        name="t4g"
                        checked={patientNotes.t4g}
                        onChange={handleFieldChange}
                      ></Input>
                      <Label className="" for="">
                        High Average (110-114)
                      </Label>
                    </div>
                    <div className="col-4">
                      <Input
                        type="checkbox"
                        className=""
                        id="t4h"
                        name="t4h"
                        checked={patientNotes.t4h}
                        onChange={handleFieldChange}
                      ></Input>
                      <Label className="" for="">
                        Intellectual Disability, Moderate (36-55)
                      </Label>
                    </div>
                  </div>
                  <div className="checkBoxRow d-flex flex-wrap justify-content-center">
                    <div className="col-4">
                      <Input
                        type="checkbox"
                        className=""
                        id="t4i"
                        name="t4i"
                        checked={patientNotes.t4i}
                        onChange={handleFieldChange}
                      ></Input>
                      <Label className="" for="">
                        Average (91-109)
                      </Label>
                    </div>
                    <div className="col-4"></div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="domains" title={domains} className="contents">
                <div className="pt-3 pl-3"></div>
              </Tab>
            </Tabs>
          </div>
        </DropdownButton>
      </div>
    </div>
  );
};

export default TermOfParentalRights;
