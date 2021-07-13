import React, { useState, useEffect } from "react";
import { Label, Input } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

//pdf page 119

function SubstanceAbuseSubtleScreeningInventory4(props) {
  const [item, setItem] = useState("");
  const [
    patientSubstanceAbuseSubtleScreeningInventory4,
    setPatientSubstanceAbuseSubtleScreeningInventory4,
  ] = useState({
    substance_abuse_subtle_screening_inventory_4_a: false,
    substance_abuse_subtle_screening_inventory_4_b: "",
    substance_abuse_subtle_screening_inventory_4_c: false,
    substance_abuse_subtle_screening_inventory_4_d: false,
  });

  const next = "/iowa_gambling_task";
  const back = "/paulhus_deception_scale";

  const handleFieldChange = (e) => {
    const target = e.target;

    setPatientSubstanceAbuseSubtleScreeningInventory4({
      ...patientSubstanceAbuseSubtleScreeningInventory4,
      [e.target.name]:
        e.target.type === "number"
          ? parseInt(e.target.value)
          : target.type === "checkbox"
          ? target.checked
          : target.value,
    });
  };

  const handleCheckBoxChange = async (e) => {
    const target = e.target;
    const value = target.checked;
    const name = target.name;

    const editedPatient = {
      id: props.patientId,
      [name]: value,
    };

    setPatientSubstanceAbuseSubtleScreeningInventory4({
      ...patientSubstanceAbuseSubtleScreeningInventory4,
      [name]: value,
    });
    DataManager.update("patients", editedPatient).then(() => props.getData());
  };

  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      // substance_abuse_subtle_screening_inventory_4_a:
      //   patientSubstanceAbuseSubtleScreeningInventory4.substance_abuse_subtle_screening_inventory_4_a,
      substance_abuse_subtle_screening_inventory_4_b:
        patientSubstanceAbuseSubtleScreeningInventory4.substance_abuse_subtle_screening_inventory_4_b,
      // substance_abuse_subtle_screening_inventory_4_c:
      //   patientSubstanceAbuseSubtleScreeningInventory4.substance_abuse_subtle_screening_inventory_4_c,
      // substance_abuse_subtle_screening_inventory_4_d:
      //   patientSubstanceAbuseSubtleScreeningInventory4.substance_abuse_subtle_screening_inventory_4_d,
    };

    DataManager.update("patients", editedPatient).then(() => props.getData());
  };

  //CRUD Function END

  const getData = () => {
    setPatientSubstanceAbuseSubtleScreeningInventory4(props.patientDetails);
    setItem("substance_abuse_subtle_screening_inventory_4_patientNotes");
  };

  useEffect(() => {
    getData();
  }, [props]);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <div className="ml-5 mr-5 mt-3">
            <div className="d-flex flex-wrap text-white align-items-baseline">
              <h3 className=" mb-1 col-2">Test Results</h3>
              <h4>Substance Abuse Subtle Screening Inventory-4</h4>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
              <div className="col-2"></div>
              <div className="col-10 text-white">
                <Input
                  className=""
                  type="checkbox"
                  id={item}
                  name="substance_abuse_subtle_screening_inventory_4_a"
                  checked={
                    patientSubstanceAbuseSubtleScreeningInventory4.substance_abuse_subtle_screening_inventory_4_a
                  }
                  onChange={handleCheckBoxChange}
                />
                <Label>
                  {props.patientDetails.patient_first_name} completed the
                  Substance Abuse Subtle Screening Inventory-4 (SASSI-4)
                </Label>
                <div className="ml-4">
                  <div>
                    <Input
                      className=""
                      type="checkbox"
                      id={item}
                      name="substance_abuse_subtle_screening_inventory_4_f"
                      checked={
                        patientSubstanceAbuseSubtleScreeningInventory4.substance_abuse_subtle_screening_inventory_4_f
                      }
                      onChange={handleCheckBoxChange}
                    />
                    <Label>
                      The results indicated the Low Probability of{" "}
                      {props.patientDetails.patient_first_name} having a
                      Substance Dependence disorder.
                    </Label>
                  </div>
                  <div>
                    <Input
                      className=""
                      type="checkbox"
                      id={item}
                      name="substance_abuse_subtle_screening_inventory_4_g"
                      checked={
                        patientSubstanceAbuseSubtleScreeningInventory4.substance_abuse_subtle_screening_inventory_4_g
                      }
                      onChange={handleCheckBoxChange}
                    />
                    <Label>
                      The results indicated the High Probability of{" "}
                      {props.patientDetails.patient_first_name} having a
                      Substance Dependence disorder.
                    </Label>
                  </div>
                  <div>
                    <Input
                      className=""
                      type="checkbox"
                      id={item}
                      name="substance_abuse_subtle_screening_inventory_4_h"
                      checked={
                        patientSubstanceAbuseSubtleScreeningInventory4.substance_abuse_subtle_screening_inventory_4_h
                      }
                      onChange={handleCheckBoxChange}
                    />
                    <Label>Probability Excluded</Label>
                  </div>
                </div>

                <Label className="mt-3 textTeal col-7" for="">
                  {" "}
                  Paste all results with a bold heading from the third page and
                  format like the following example (make sure to replace "the
                  client" with their name!):
                </Label>
                <div>
                  <TextareaAutosize
                    className="m-2 col-6 fieldData"
                    type="text"
                    id={item}
                    name="substance_abuse_subtle_screening_inventory_4_b"
                    onChange={handleFieldChange}
                    value={
                      patientSubstanceAbuseSubtleScreeningInventory4.substance_abuse_subtle_screening_inventory_4_b
                    }
                  />
                </div>
                <div className="mt-2">
                  <Input
                    className=""
                    type="checkbox"
                    id={item}
                    name="substance_abuse_subtle_screening_inventory_4_c"
                    checked={
                      patientSubstanceAbuseSubtleScreeningInventory4.substance_abuse_subtle_screening_inventory_4_c
                    }
                    onChange={handleCheckBoxChange}
                  />
                  <Label className="col-10" for="">
                    {props.patientDetails.patient_first_name} invalidated this
                    instrument. {props.patientDetails.patient_first_name} gave
                    answers to questions which are not probable.{" "}
                    {props.patientDetails.patient_first_name} appeared to make a
                    significant effort to appear perfect and without flaws.
                    Deliberate non-compliance and passive-aggressive behaviors
                    appear likely.
                  </Label>
                </div>
                <div className="mt-4">
                  <Input
                    className=""
                    type="checkbox"
                    id={item}
                    name="substance_abuse_subtle_screening_inventory_4_d"
                    checked={
                      patientSubstanceAbuseSubtleScreeningInventory4.substance_abuse_subtle_screening_inventory_4_d
                    }
                    onChange={handleCheckBoxChange}
                  />
                  <Label className="col-10" for="">
                    {props.patientDetails.patient_first_name} showed a
                    significant level of defensiveness related to substance
                    (alcohol or drug) misuse.
                    {props.patientDetails.patient_first_name} acknowledged
                    alcohol and drug use, the motivation and consequences of
                    usage, and loss of control.
                  </Label>
                </div>
                <div>
                  <Input
                    className=""
                    type="checkbox"
                    name="substance_abuse_subtle_screening_inventory_4_e"
                    checked={
                      patientSubstanceAbuseSubtleScreeningInventory4.substance_abuse_subtle_screening_inventory_4_e
                    }
                    onChange={handleCheckBoxChange}
                  />
                  <Label className="col-10">
                    {props.patientDetails.patient_first_name} acknowledged a
                    pattern of current or past problematic usage, and the subtle
                    scale scores are somewhat elevated, suggesting the
                    possibility of a mild substance use disorder. Consideration
                    should be given to providing substance use education, values
                    clarification, and ongoing assessment.
                  </Label>
                </div>
              </div>
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation
              next={next}
              back={back}
              updatePatient={updatePatient}
              patient={props.patientId}
              patientNotes={patientSubstanceAbuseSubtleScreeningInventory4}
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

export default SubstanceAbuseSubtleScreeningInventory4;
