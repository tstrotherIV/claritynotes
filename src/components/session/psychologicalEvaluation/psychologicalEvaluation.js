import React, { useState, useEffect } from "react";
import {
  Label,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  Input,
} from "reactstrap";
import Heading from "../../shared/PsychologicalHeading.js";
import TextareaAutosize from "react-textarea-autosize";
import ButtonNavigation from "../../shared/ButtonNavigation";
import DataManager from "../../../data_module/DataManager";

import "./psychologicalEvaluation.scss";

function PsychologicalEvaluation(props) {
  const [
    patientPsychological_Evaluation,
    setPatientPsychological_Evaluation,
  ] = useState({
    patient_first_name: "",
    patient_middle_name: "",
    patient_last_name: "",
    patient_Date_of_Birth: "",
    patient_referral: "",
    patient_office_time: "",
    patient_report_writing: "",
    patient_case_number: "",
    patient_evaluation_Date: "",
    patient_county: "",
    patient_interview_time: "",
    patient_intake_time: "",
    patient_gender: "",
  });

  const alaCounties = [
    "Autauga County",
    "Baldwin County",
    "Barbour County",
    "Bibb County",
    "Blount County",
    "Bullock County",
    "Butler County",
    "Calhoun County",
    "Chambers County",
    "Cherokee County",
    "Chilton County",
    "Choctaw County",
    "Clarke County",
    "Clay County",
    "Cleburne County",
    "Coffee County",
    "Colbert County",
    "Conecuh County",
    "Coosa County",
    "Covington County",
    "Crenshaw County",
    "Cullman County",
    "Dale County",
    "Dallas County",
    "DeKalb County",
    "Elmore County",
    "Escambia County",
    "Etowah County",
    "Fayette County",
    "Franklin County",
    "Geneva County",
    "Greene County",
    "Hale County",
    "Henry County",
    "Houston County",
    "Jackson County",
    "Jefferson County",
    "Lamar County",
    "Lauderdale County",
    "Lawrence County",
    "Lee County",
    "Limestone County",
    "Lowndes County",
    "Macon County",
    "Madison County",
    "Marengo County",
    "Marion County",
    "Marshall County",
    "Mobile County",
    "Monroe County",
    "Montgomery County",
    "Morgan County",
    "Perry County",
    "Pickens County",
    "Pike County",
    "Randolph County",
    "Russell County",
    "St. Clair County",
    "Shelby County",
    "Sumter County",
    "Talladega County",
    "Tallapoosa County",
    "Tuscaloosa County",
    "Walker County",
    "Washington County",
    "Wilcox County",
    "Winston County",
  ];

  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);

  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);
  const toggle2 = () => setDropdownOpen2((prevState) => !prevState);
  const toggle3 = () => setDropdownOpen3((prevState) => !prevState);

  const handleFieldChange = (e) => {
    setPatientPsychological_Evaluation({
      ...patientPsychological_Evaluation,
      [e.target.name]: e.target.value,
    });
  };

  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      // id: props.patientId,
      patient_first_name: patientPsychological_Evaluation.patient_first_name,
      patient_middle_name: patientPsychological_Evaluation.patient_middle_name,
      patient_last_name: patientPsychological_Evaluation.patient_last_name,
      patient_Date_of_Birth:
        patientPsychological_Evaluation.patient_Date_of_Birth,
      patient_referral: patientPsychological_Evaluation.patient_referral,
      patient_office_time: patientPsychological_Evaluation.patient_office_time,
      patient_report_writing:
        patientPsychological_Evaluation.patient_report_writing,
      patient_case_number: patientPsychological_Evaluation.patient_case_number,
      patient_evaluation_Date:
        patientPsychological_Evaluation.patient_evaluation_Date,
      patient_county: patientPsychological_Evaluation.patient_county,
      patient_interview_time:
        patientPsychological_Evaluation.patient_interview_time,
      patient_intake_time: patientPsychological_Evaluation.patient_intake_time,
      patient_gender: patientPsychological_Evaluation.patient_gender,
    };
    DataManager.update("patients", editedPatient, props.patientId).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = [
        "patient_first_name",
        "patient_middle_name",
        "patient_last_name",
        "patient_Date_of_Birth",
        "patient_referral",
        "patient_office_time",
        "patient_report_writing",
        "patient_case_number",
        "patient_evaluation_Date",
        "patient_county",
        "patient_interview_time",
        "patient_intake_time",
        "patient_gender",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientPsychological_Evaluation(filtered);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const next = "/psychological_evaluation_family";
  const back = "/patient";

  return (
    <>
      <div>
        <div id="page-container">
          <div id="content-wrap">
            <Heading />
            <div className="minWidthContainer">
              <div className="header">
                <h2 className="textWhite mt-2">
                  Please Confirm or Update Information
                </h2>
              </div>
              <Form>
                <div className="row no-gutters text-center d-flex justify-content-center minWidthContainer">
                  <div className="col-6">
                    <div className="d-flex m-4">
                      <Label className="textWhite labelWidth" for="firstName">
                        Name
                      </Label>
                      <TextareaAutosize
                        className="fieldData col-8"
                        type="text"
                        placeholder="First Name"
                        id="patient_first_name"
                        name="patient_first_name"
                        onChange={handleFieldChange}
                        value={
                          patientPsychological_Evaluation.patient_first_name
                        }
                      />
                    </div>
                    <div className="d-flex m-4">
                      <Label
                        className="textWhite labelWidth"
                        for="middleName"
                      ></Label>
                      <TextareaAutosize
                        className="fieldData col-8"
                        type="text"
                        placeholder="Middle Name"
                        id="patient_middle_name"
                        name="patient_middle_name"
                        onChange={handleFieldChange}
                        value={
                          patientPsychological_Evaluation.patient_middle_name
                        }
                      />
                    </div>
                    <div className="d-flex justify-items-center m-4">
                      <Label
                        className="textWhite labelWidth"
                        for="lastName"
                      ></Label>
                      <TextareaAutosize
                        className="fieldData col-8"
                        type="text"
                        placeholder="Last Name"
                        id="patient_last_name"
                        name="patient_last_name"
                        onChange={handleFieldChange}
                        value={
                          patientPsychological_Evaluation.patient_last_name
                        }
                      />
                    </div>
                    <div className="d-flex justify-items-center m-4">
                      <Label
                        className="textWhite labelWidth "
                        for="dateOfBirth"
                      >
                        DOB
                      </Label>
                      <Input
                        type="date"
                        className=" col-3 dateField p-3 text-center"
                        id="patient_Date_of_Birth"
                        name="patient_Date_of_Birth"
                        onChange={handleFieldChange}
                        value={
                          patientPsychological_Evaluation.patient_Date_of_Birth
                        }
                      />
                    </div>
                    <div className="d-flex justify-items-center m-4">
                      <Label
                        className="textWhite labelWidth"
                        for="examplePassword"
                      >
                        Referral
                      </Label>

                      <Dropdown
                        isOpen={dropdownOpen1}
                        toggle={toggle1}
                        className="col-8"
                      >
                        <DropdownToggle
                          color="light"
                          className="dropdown text-center"
                          caret
                          value={
                            patientPsychological_Evaluation.patient_referral
                          }
                        >
                          {patientPsychological_Evaluation.patient_referral}
                        </DropdownToggle>
                        <DropdownMenu className="referralDropDown">
                          <DropdownItem>Make a Selection</DropdownItem>
                          {alaCounties.map((county) => (
                            <DropdownItem
                              id={`${county} DHR`}
                              name="patient_referral"
                              value={`${county} DHR`}
                              onClick={handleFieldChange}
                            >
                              {county} DHR
                            </DropdownItem>
                          ))}
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                    <div className="d-flex justify-items-center m-4">
                      <Label className="textWhite labelWidth" for="officeTime">
                        Office Time
                      </Label>
                      <Input
                        className="col-3 dateField p-3 text-center"
                        type="time"
                        id="patient_office_time"
                        name="patient_office_time"
                        onChange={handleFieldChange}
                        value={
                          patientPsychological_Evaluation.patient_office_time
                        }
                      />
                    </div>
                    <div className="d-flex justify-items-center m-4">
                      <Label
                        className="textWhite labelWidth"
                        for="reportWriting"
                      >
                        Report Writing
                      </Label>
                      <TextareaAutosize
                        className="fieldData col-8"
                        type="text"
                        id="patient_report_writing"
                        name="patient_report_writing"
                        onChange={handleFieldChange}
                        value={
                          patientPsychological_Evaluation.patient_report_writing
                        }
                      />
                    </div>
                  </div>
                  {/* --------------------------------------------- */}
                  <div className="col-6">
                    <div className="d-flex justify-items-center m-4">
                      <Label className="textWhite labelWidth" for="caseNumber">
                        Case #
                      </Label>
                      <TextareaAutosize
                        className="fieldData col-8"
                        type="text"
                        placeholder="Case Number"
                        id="patient_case_number"
                        name="patient_case_number"
                        onChange={handleFieldChange}
                        value={
                          patientPsychological_Evaluation.patient_case_number
                        }
                      />
                    </div>
                    <div>
                      <div className="d-flex justify-items-center m-4">
                        <Label
                          className="textWhite labelWidth"
                          for="examplePassword"
                        >
                          Eval 1 Date
                        </Label>
                        <div>
                          <Input
                            className="fieldData p-3"
                            type="date"
                            id="patient_evaluation_Date"
                            name="patient_evaluation_Date"
                            onChange={handleFieldChange}
                            value={
                              patientPsychological_Evaluation.patient_evaluation_Date
                            }
                          />
                          <Button className="m-2">Add Eval Date</Button>
                        </div>
                      </div>
                    </div>
                    <div className="textWhite d-flex justify-items-center m-4">
                      <Label
                        className="textWhite labelWidth"
                        for="examplePassword"
                      >
                        County
                      </Label>
                      <Dropdown
                        isOpen={dropdownOpen2}
                        toggle={toggle2}
                        className="col-8"
                      >
                        <DropdownToggle
                          color="light"
                          className="dropdown text-center"
                          caret
                          value={patientPsychological_Evaluation.patient_county}
                        >
                          {patientPsychological_Evaluation.patient_county}
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownMenu className="referralDropDown">
                            <DropdownItem>Make a Selection</DropdownItem>
                            {alaCounties.map((county) => (
                              <DropdownItem
                                id={county}
                                name="patient_county"
                                value={county}
                                onClick={handleFieldChange}
                              >
                                {county}
                              </DropdownItem>
                            ))}
                          </DropdownMenu>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                    <div className="textWhite d-flex justify-items-center m-4">
                      <Label className="labelWidth" for="intakeTime">
                        Interview Time
                      </Label>
                      <Input
                        className="fieldData col-4 p-3 text-center"
                        type="time"
                        id="patient_interview_time"
                        name="patient_interview_time"
                        onChange={handleFieldChange}
                        value={
                          patientPsychological_Evaluation.patient_interview_time
                        }
                      />
                    </div>
                    <div className="textWhite d-flex justify-items-center m-4">
                      <Label className="textWhite labelWidth" for="inTakeTime">
                        Intake Time
                      </Label>
                      <Input
                        className="fieldData col-4 p-3 text-center"
                        type="time"
                        id="patient_intake_time"
                        name="patient_intake_time"
                        onChange={handleFieldChange}
                        value={
                          patientPsychological_Evaluation.patient_intake_time
                        }
                      />
                    </div>
                    <div className="line1 d-flex flex-wrap">
                      <Dropdown
                        isOpen={dropdownOpen3}
                        toggle={toggle3}
                        className=""
                      >
                        <DropdownToggle
                          color="light"
                          className="dropdown text-center"
                          caret
                          value={patientPsychological_Evaluation.patient_gender}
                        >
                          {patientPsychological_Evaluation.patient_gender
                            ? patientPsychological_Evaluation.patient_gender
                            : "Select Gender"}
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem
                            onClick={handleFieldChange}
                            name="patient_gender"
                            value="None Selected"
                          >
                            None Selected
                          </DropdownItem>
                          <DropdownItem
                            onClick={handleFieldChange}
                            name="patient_gender"
                            value="Female"
                          >
                            Female
                          </DropdownItem>
                          <DropdownItem
                            onClick={handleFieldChange}
                            name="patient_gender"
                            value="Male"
                          >
                            Male
                          </DropdownItem>
                          <DropdownItem
                            onClick={handleFieldChange}
                            name="patient_gender"
                            value="Other"
                          >
                            Other
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
            <div id="footer">
              <ButtonNavigation
                next={next}
                back={back}
                updatePatient={updatePatient}
                patient={props.patientId}
                patientNotes={patientPsychological_Evaluation}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PsychologicalEvaluation;
