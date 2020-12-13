import React from 'react';
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Tab, Tabs } from "react-bootstrap";
import { Input, Label } from "reactstrap";
import AdditionalNotes from "./AdditionalNotes";
import './ps.scss';

const termTitle = <p className="term">Termination of Parental Rights Criteria</p>;
const behavioral = <p className="behavioral">Behavioral Observations and Testing Conditions</p>;
const IQ = <p className="IQWidth">IQ</p>;
const domains =<p className="domainWidth">Domains</p>;
const generalNotes=<p className="generalNotes">General Notes</p>

const TermOfParentalRights = () => {
 
    return(
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
          <Tabs defaultActiveKey="generalNotes" id="uncontrolled-tab" className="d-flex flex-wrap justify-content-between" >
          <Tab eventKey="generalNotes" title={generalNotes} className="contents">
          <AdditionalNotes />         
          </Tab>
            <Tab eventKey="term" title={termTitle} className="contents termMenu"> 
              <div className="pt-3 pl-3 termMenu">
                      <div className="checkBoxRow">
                        <div className="col-4">
                          <Input type="checkbox" className="" id=""></Input>
                          <Label for="">Unforeseeable Future Change</Label>
                        </div>
                        <div className="col-4">
                          <Input type="checkbox" className="" id=""></Input>
                          <Label className="" for="">Rehabilitation Failure</Label>
                        </div>  
                        <div className="col-4">
                          <Input type="checkbox" className="" id=""></Input>
                          <Label className="" for="">Failure to Maintain Material Needs</Label>
                        </div>
                      </div>
                      <div className="checkBoxRow">
                        <div className="col-4">
                          <Input type="checkbox" className="" id=""></Input>
                          <Label className="" for="">Conviction and Imprisonment of Felony</Label>
                        </div>
                        <div className="col-4">
                          <Input type="checkbox" className="" id=""></Input>
                          <Label className="" for=""> Serious Physical Injury to child </Label>
                        </div>
                        <div className="col-4">
                          <Input type="checkbox" className="" id=""></Input>
                          <Label className="" for="">Failure to Maintain Consistent Contact</Label>
                        </div>
                      </div>
                      <div className="checkBoxRow">
                        <div className="col-4">
                          <Input type="checkbox" className="" id=""></Input>
                          <Label className="" for=""> Emotional Illness and mental deficiency</Label>
                        </div>
                        <div className="col-4">
                          <Input type="checkbox" className="" id=""></Input>
                          <Label className="" for="">Willful Neglect/Abandonment</Label>
                        </div>
                        <div className="col-4">
                          <Input type="checkbox" className="" id=""></Input>
                          <Label className="" for="">Parent has tortured, abused, cruelly beaten, or</Label>
                        </div>
                      </div>
                      <div className="checkBoxRow">
                        <div className="col-4">
                          <Input type="checkbox" className="" id=""></Input>
                          <Label className="" for="">Unable to Discharge Childcare Responsibilities</Label>
                        </div>
                        <div className="col-4">
                          <Input type="checkbox" className="" id=""></Input>
                          <Label className="" for="">Loss of Custody of Other Child(ren) </Label>
                        </div>
                        <div className="col-4">
                          <Input type="checkbox" className="" id=""></Input>
                          <Label className="" for="">otherwise maltreated the child</Label>
                        </div>
                      </div>
                      <div className="checkBoxRow">
                        <div className="col-4">
                          <Input type="checkbox" className="" id=""></Input>
                          <Label className="" for="">Excessive Use of a Controlled Substance </Label>
                        </div>
                        <div className="col-4">
                          <Input type="checkbox" className="" id=""></Input>
                          <Label className="" for="">Serious Bodily Injury of Child</Label>
                        </div>
                        <div className="col-4">
                          <Input type="checkbox" className="" id=""></Input>
                          <Label className="" for="">Lack of Effort to Adjust to His/Her Circumstances</Label>
                        </div>
                    </div>
                </div>
            </Tab>
            <Tab eventKey="behavioral" title={behavioral} className="contents">
            <div className="pt-3 pl-3">
                      <div className="checkBoxRow">
                        <div className="col-4">                          
                          <Input type="checkbox" className="" id=""></Input>
                          <Label className="inputBoldText" for="">Happiness</Label>
                          <p className="m-0">Corners of lips turned up. Slightly raised cheeks. Crows feet at side of eyes.</p>
                        </div>
                        <div className="col-4">
                          <Input type="checkbox" className="" id=""></Input>
                          <Label className="inputBoldText" for="">Fear</Label>
                          <p className="m-0">Widened mouth, slightly openrf. Wider eyes with raised eyebrows.</p>
                        </div>
                        <div className="col-4">
                          <Input type="checkbox" className="" id=""></Input>
                          <Label className="inputBoldText" for="">Disgust</Label>
                          <p className="m-0">Raised upper lip. Wrinkled nose.</p>
                          </div>
                      </div>
                      <div className="checkBoxRow">
                        <div className="col-4">
                          <Input type="checkbox" className=""id=""></Input>
                          <Label className="inputBoldText" for="">Sadness</Label>
                          <p className="m-0">Corners of lips turned down. Eyebrows slanted out, pulled together and riased in middle of forehead.</p>
                        </div>
                        <div className="col-4">
                          <Input type="checkbox" className="" id=""></Input>
                          <Label className="inputBoldText" for="">Contempt</Label>
                          <p className="m-0">One side of lips raised. Head slightly back.</p>
                        </div>
                        <div className="col-4">
                          <Input type="checkbox" className="" id=""></Input>
                          <Label className="inputBoldText" for="">Surprise</Label>
                          <p className="m-0">Opened mouth. Raised eyebrows. Widened eyes.</p>
                        </div>
                        
                      </div> 
                      <div className="checkBoxRow">
                      <div className="col-4">
                          <Input type="checkbox" className=""id=""></Input>
                          <Label className="inputBoldText" for="">Anger</Label>
                          <p className="m-0">Lips pressed together. Corners of lips flat or turned down. Eyebrows slanted in, lowered in middle of forehead. Widened eyes (brief stare).</p>
                        </div>   
                        </div>            
                </div>
            </Tab>

            <Tab eventKey="IQ" title={IQ} className="contents">
            <div className="pt-3 pl-3">
                      <div className="checkBoxRow d-flex flex-wrap justify-content-center">
                        <div className="col-4">                          
                          <Input type="checkbox" className="" id=""></Input>
                          <Label className="" for="">Highly Gifted (140-160)</Label>
                        </div>
                        <div className="col-4">
                          <Input type="checkbox" className="" id=""></Input>
                          <Label className="" for="">Low Average (86-90) Mild Concern</Label>
                        </div>     
                      </div>
                      <div className="checkBoxRow d-flex flex-wrap justify-content-center">
                        <div className="col-4">
                          <Input type="checkbox" className=""id=""></Input>
                          <Label className="" for="">Gifted (130-139)</Label>
                        </div>
                        <div className="col-4">
                          <Input type="checkbox" className="" id=""></Input>
                          <Label className="" for="">Borderline (71-85) Moderate to Elevated Concern</Label>
                        </div>
                      </div>
                      <div className="checkBoxRow d-flex flex-wrap justify-content-center">
                        <div className="col-4">
                          <Input type="checkbox" className="" id=""></Input>
                          <Label className="" for="">High Above Average (115-129)</Label>
                        </div>
                        <div className="col-4">
                          <Input type="checkbox" className="" id=""></Input>
                          <Label className="" for="">Intellectual Disability, Mild (56-70) Profound Concern</Label>
                        </div>
                    </div>  
                    <div className="checkBoxRow d-flex flex-wrap justify-content-center">
                        <div className="col-4">
                          <Input type="checkbox" className="" id=""></Input>
                          <Label className="" for="">High Average (110-114)</Label>
                        </div>
                        <div className="col-4">
                          <Input type="checkbox" className="" id=""></Input>
                          <Label className="" for="">Intellectual Disability, Moderate (36-55)</Label>
                        </div>
                    </div>
                    <div className="checkBoxRow d-flex flex-wrap justify-content-center">
                        <div className="col-4">
                          <Input type="checkbox" className="" id=""></Input>
                          <Label className="" for="">Average (91-109)</Label>
                        </div>
                        <div className="col-4">
                        </div>
                      </div>                  
                </div>

            </Tab>
            <Tab eventKey="domains" title={domains} className="contents">
            <div className="pt-3 pl-3">
          
            </div>
            </Tab>
          </Tabs> 
          </div>
        </DropdownButton>
      </div>
      </div>
    )
}

export default TermOfParentalRights;
