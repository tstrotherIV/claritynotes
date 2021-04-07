import React, { useState, useEffect } from "react";
import { Label, Tooltip } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
import "./neglectAbuseTraumaLoss.css";
// pdf page 71

function NeglectAbuseTraumaLossPg1(props) {
  const [item, setItem] = useState("");
  const [
    patientNeglectAbuseTraumaLossPg1,
    setPatientNeglectAbuseTraumaLossPg1,
  ] = useState({});

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  const [tooltipOpen1, setTooltipOpen1] = useState(false);
  const toggle1 = () => setTooltipOpen1(!tooltipOpen1);

  const [tooltipOpen2, setTooltipOpen2] = useState(false);
  const toggle2 = () => setTooltipOpen2(!tooltipOpen2);

  const next = "/neglect_abuse_trauma_loss_pg_2";
  const back = "/medical_history_health_concerns_limitations_pg_1";

  const handleFieldChange = (e) => {
    setPatientNeglectAbuseTraumaLossPg1({
      ...patientNeglectAbuseTraumaLossPg1,
      [e.target.name]: e.target.value,
    });
  };

  const captureFieldName = (e) => {
    const fieldID = e.target.name;
    setItem(fieldID);
  };

  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      neglect_abuse_trauma_loss_pg1_a:
        patientNeglectAbuseTraumaLossPg1.neglect_abuse_trauma_loss_pg1_a,
      neglect_abuse_trauma_loss_pg1_b:
        patientNeglectAbuseTraumaLossPg1.neglect_abuse_trauma_loss_pg1_b,
      neglect_abuse_trauma_loss_pg1_c:
        patientNeglectAbuseTraumaLossPg1.neglect_abuse_trauma_loss_pg1_c,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    const check_for_patient = sessionStorage.getItem("patient_id");

    DataManager.getPatient(check_for_patient).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = [
        "neglect_abuse_trauma_loss_pg1_a",
        "neglect_abuse_trauma_loss_pg1_b",
        "neglect_abuse_trauma_loss_pg1_c",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientNeglectAbuseTraumaLossPg1(props.patientDetails);
    });
  };

  useEffect(() => {
    getData();
  }, [props]);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <h2 className="textWhite text-center mb-4">
            NEGLECT <span>&#183;</span> ABUSE <span>&#183;</span> TRAUMA{" "}
            <span>&#183;</span> LOSS
          </h2>
          <div className="questionsContainer text-center">
            <h4 className="textWhite centerItem testRed">
              What is physical abuse in your own words?
              <span className="textWhite" id="question1">
                {" "}
                &#9432;{" "}
              </span>
              <Tooltip
                placement="bottom"
                isOpen={tooltipOpen}
                target="question1"
                toggle={toggle}
                id="tooltip"
              >
                <div>
                  <p>Physical Abuse</p>
                  <p>
                    Deliberately aggressive or violent behavior by one person
                    toward another that results in bodily injury. Physical abuse
                    may involve such actions as punching, kicking, biting,
                    choking, burning, shaking, and beating, which may at times
                    be severe enough to result in permanent damage (e.g.,
                    traumatic brain injury) or death. It is most frequently
                    observed in relationships of trust, particularly between
                    parents and children or between intimate partners (e.g., in
                    a marriage); indeed, violence against women and children in
                    these types of relationships is recognized as a major public
                    health problem, although few eff ective interventions to
                    reduce its occurrence have yet been developed. Individuals
                    who experience physical abuse oft en feel helpless and
                    isolated and are prone to the subsequent development of
                    numerous pathological conditions, including depression,
                    eating disorders, posttraumatic stress disorder, anxiety
                    disorders, and substance use problems. Th ere is signifi
                    cant controversy over whether certain common forms of
                    physical discipline (e.g., spanking) that are neither
                    malicious nor meant to infl ict harm could be construed as
                    overly harsh and thus considered to be physical abuse. See
                    also battered-child syndrome; battered-woman syndrome;
                    domestic violence; intimate partner violence.
                  </p>
                </div>
              </Tooltip>
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="neglect_abuse_trauma_loss_pg1_a"
                  name="neglect_abuse_trauma_loss_pg1_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientNeglectAbuseTraumaLossPg1.neglect_abuse_trauma_loss_pg1_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                What is sexual abuse in your own words?
                <span className="textWhite" id="question2">
                  {" "}
                  &#9432;{" "}
                </span>
                <Tooltip
                  placement="bottom"
                  isOpen={tooltipOpen1}
                  target="question2"
                  toggle={toggle1}
                  id="tooltip"
                >
                  <div>
                    <p>Sexual Abuse</p>
                    <p>
                      Sexual abuse is unwanted sexual activity, with
                      perpetrators using force, making threats or taking
                      advantage of victims not able to give consent. Most
                      victims and perpetrators know each other. Immediate
                      reactions to sexual abuse include shock, fear or
                      disbelief. Long-term symptoms include anxiety, fear or
                      post-traumatic stress disorder. While eff orts to treat
                      sex off enders remain unpromising, psychological
                      interventions for survivors — especially group therapy —
                      appears eff ective.
                    </p>
                  </div>
                </Tooltip>
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="neglect_abuse_trauma_loss_pg1_b"
                  name="neglect_abuse_trauma_loss_pg1_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientNeglectAbuseTraumaLossPg1.neglect_abuse_trauma_loss_pg1_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                What is your definition of economic coercive control?
                <span className="textWhite" id="question3">
                  {" "}
                  &#9432;{" "}
                </span>
                <Tooltip
                  placement="bottom"
                  isOpen={tooltipOpen2}
                  target="question3"
                  toggle={toggle2}
                  id="tooltip"
                >
                  <div>
                    <p>Economic Coercize Control</p>
                    <p>
                      Th is occurs when a person controls someone’s access to
                      money and does not allow them to make fi nancial
                      decisions. Th is can leave a person without food or
                      clothing and make it harder for them to leave the
                      relationship.
                    </p>
                  </div>
                </Tooltip>
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="neglect_abuse_trauma_loss_pg1_c"
                  name="neglect_abuse_trauma_loss_pg1_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientNeglectAbuseTraumaLossPg1.neglect_abuse_trauma_loss_pg1_c
                  }
                />
              </div>
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation
              next={next}
              back={back}
              updatePatient={updatePatient}
              patient={props.patientId}
              patientNotes={patientNeglectAbuseTraumaLossPg1}
            />
            <TermOfParentalRights
              questionId={item}
              patientId={props.patientId}
              item={item}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NeglectAbuseTraumaLossPg1;
