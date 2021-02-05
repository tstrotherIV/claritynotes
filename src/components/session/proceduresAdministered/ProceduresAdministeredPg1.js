import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import DataManager from "../../../data_module/DataManager";
//pdf page 103

function ProceduresAdministeredPg1(props) {
  const [item, setItem] = useState("");
  const [
    patientProceduresAdministeredPg1,
    setPatientProceduresAdministeredPg1,
  ] = useState({
    procedures_administered_pg1_a: false,
    procedures_administered_pg1_b: false,
    procedures_administered_pg1_c: false,
    procedures_administered_pg1_d: false,
    procedures_administered_pg1_e: false,
    procedures_administered_pg1_f: false,
    procedures_administered_pg1_g: false,
    procedures_administered_pg1_h: false,
    procedures_administered_pg1_i: false,
    procedures_administered_pg1_j: false,
    procedures_administered_pg1_k: false,
    procedures_administered_pg1_l: false,
    procedures_administered_pg1_m: false,
    procedures_administered_pg1_n: false,
    procedures_administered_pg1_o: false,
  });

  const next = "/wasi-ii";
  const back = "/behavioral_observations_and_testing_conditions_pg_5";

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setPatientProceduresAdministeredPg1({
      ...patientProceduresAdministeredPg1,
      [e.target.name]: value,
    });
  };

  const captureFieldName = (e) => {
    const fieldID = e.target.name;
    setItem(fieldID);
  };

  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      procedures_administered_pg1_a:
        patientProceduresAdministeredPg1.procedures_administered_pg1_a,
      procedures_administered_pg1_b:
        patientProceduresAdministeredPg1.procedures_administered_pg1_b,
      procedures_administered_pg1_c:
        patientProceduresAdministeredPg1.procedures_administered_pg1_c,
      procedures_administered_pg1_d:
        patientProceduresAdministeredPg1.procedures_administered_pg1_d,
      procedures_administered_pg1_e:
        patientProceduresAdministeredPg1.procedures_administered_pg1_e,
      procedures_administered_pg1_f:
        patientProceduresAdministeredPg1.procedures_administered_pg1_f,
      procedures_administered_pg1_g:
        patientProceduresAdministeredPg1.procedures_administered_pg1_g,
      procedures_administered_pg1_h:
        patientProceduresAdministeredPg1.procedures_administered_pg1_h,
      procedures_administered_pg1_i:
        patientProceduresAdministeredPg1.procedures_administered_pg1_i,
      procedures_administered_pg1_j:
        patientProceduresAdministeredPg1.procedures_administered_pg1_j,
      procedures_administered_pg1_k:
        patientProceduresAdministeredPg1.procedures_administered_pg1_k,
      procedures_administered_pg1_l:
        patientProceduresAdministeredPg1.procedures_administered_pg1_l,
      procedures_administered_pg1_m:
        patientProceduresAdministeredPg1.procedures_administered_pg1_m,
      procedures_administered_pg1_n:
        patientProceduresAdministeredPg1.procedures_administered_pg1_n,
      procedures_administered_pg1_o:
        patientProceduresAdministeredPg1.procedures_administered_pg1_o,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = [
        "procedures_administered_pg1_a",
        "procedures_administered_pg1_b",
        "procedures_administered_pg1_c",
        "procedures_administered_pg1_d",
        "procedures_administered_pg1_e",
        "procedures_administered_pg1_f",
        "procedures_administered_pg1_g",
        "procedures_administered_pg1_h",
        "procedures_administered_pg1_i",
        "procedures_administered_pg1_j",
        "procedures_administered_pg1_k",
        "procedures_administered_pg1_l",
        "procedures_administered_pg1_m",
        "procedures_administered_pg1_n",
        "procedures_administered_pg1_o",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientProceduresAdministeredPg1(filtered);
    });
  };

  useEffect(() => {
    getData();
  }, );

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <Heading />
          <h2 className="textWhite text-center mb-4">
            Procedures Administered
          </h2>
          <div className="questionsContainer pl-5">
            <div className="m-1">
              <input
                className="m-1"
                type="checkbox"
                id="procedures_administered_pg1_a"
                name="procedures_administered_pg1_a"
                checked={
                  patientProceduresAdministeredPg1.procedures_administered_pg1_a
                }
                onChange={handleFieldChange}
                onClick={captureFieldName}
              />
              <Label className="text-white m-0 p-0">
                Wechsler Abbreviated Scale of Intelligence-Second Edition
                (WASI-II)
              </Label>
            </div>
            <div className="m-1">
              <input
                className="m-1"
                type="checkbox"
                id="procedures_administered_pg1_b"
                name="procedures_administered_pg1_b"
                checked={
                  patientProceduresAdministeredPg1.procedures_administered_pg1_b
                }
                onChange={handleFieldChange}
                onClick={captureFieldName}
              />
              <Label className="text-white m-0 p-0">
                Wechsler Adult Intelligence Scale-Fourth Edition (WAIS-IV)
              </Label>
            </div>
            <div className="m-1">
              <input
                className="m-1"
                type="checkbox"
                id="procedures_administered_pg1_c"
                name="procedures_administered_pg1_c"
                checked={
                  patientProceduresAdministeredPg1.procedures_administered_pg1_c
                }
                onChange={handleFieldChange}
                onClick={captureFieldName}
              />
              <Label className="text-white m-0 p-0">
                Shipley Intelligence Assessment 2
              </Label>
            </div>
            <div className="m-1">
              <input
                className="m-1"
                type="checkbox"
                id="procedures_administered_pg1_d"
                name="procedures_administered_pg1_d"
                checked={
                  patientProceduresAdministeredPg1.procedures_administered_pg1_d
                }
                onChange={handleFieldChange}
                onClick={captureFieldName}
              />
              <Label className="text-white m-0 p-0">
                Reynolds Adaptable Intelligence Test (RAIT)
              </Label>
            </div>
            <div className="m-1">
              <input
                className="m-1"
                type="checkbox"
                id="procedures_administered_pg1_e"
                name="procedures_administered_pg1_e"
                checked={
                  patientProceduresAdministeredPg1.procedures_administered_pg1_e
                }
                onChange={handleFieldChange}
                onClick={captureFieldName}
              />
              <Label className="text-white m-0 p-0">
                Wide Range Achievement Test-Revision 5(WRAT-5)
              </Label>
            </div>
            <div className="m-1">
              <input
                className="m-1"
                type="checkbox"
                id="procedures_administered_pg1_f"
                name="procedures_administered_pg1_f"
                checked={
                  patientProceduresAdministeredPg1.procedures_administered_pg1_f
                }
                onChange={handleFieldChange}
                onClick={captureFieldName}
              />
              <Label className="text-white m-0 p-0">
                Aimsweb Plus Achievement Test
              </Label>
            </div>
            <div className="m-1">
              <input
                className="m-1"
                type="checkbox"
                id="procedures_administered_pg1_g"
                name="procedures_administered_pg1_g"
                checked={
                  patientProceduresAdministeredPg1.procedures_administered_pg1_g
                }
                onChange={handleFieldChange}
                onClick={captureFieldName}
              />
              <Label className="text-white m-0 p-0">
                Continuous Performance Test 3rd Edition (CPT 3)
              </Label>
            </div>
            <div className="m-1">
              <input
                className="m-1"
                type="checkbox"
                id="procedures_administered_pg1_h"
                name="procedures_administered_pg1_h"
                checked={
                  patientProceduresAdministeredPg1.procedures_administered_pg1_h
                }
                onChange={handleFieldChange}
                onClick={captureFieldName}
              />
              <Label className="text-white m-0 p-0">
                Computerized Neurocognitive Assessment (CNS)
              </Label>
            </div>
            <div className="m-1">
              <input
                className="m-1"
                type="checkbox"
                id="procedures_administered_pg1_i"
                name="procedures_administered_pg1_i"
                checked={
                  patientProceduresAdministeredPg1.procedures_administered_pg1_i
                }
                onChange={handleFieldChange}
                onClick={captureFieldName}
              />
              <Label className="text-white m-0 p-0">
                Paulhus Deception Scales (PDS)
              </Label>
            </div>
            <div className="m-1">
              <input
                className="m-1"
                type="checkbox"
                id="procedures_administered_pg1_j"
                name="procedures_administered_pg1_j"
                checked={
                  patientProceduresAdministeredPg1.procedures_administered_pg1_j
                }
                onChange={handleFieldChange}
                onClick={captureFieldName}
              />
              <Label className="text-white m-0 p-0">
                Substance Abuse Subtle Screening Inventory-4 (SASSI-4)
              </Label>
            </div>
            <div className="m-1">
              <input
                className="m-1"
                type="checkbox"
                id="procedures_administered_pg1_k"
                name="procedures_administered_pg1_k"
                checked={
                  patientProceduresAdministeredPg1.procedures_administered_pg1_k
                }
                onChange={handleFieldChange}
                onClick={captureFieldName}
              />
              <Label className="text-white m-0 p-0">
                Iowa Gambling Task (IGT)
              </Label>
            </div>
            <div className="m-1">
              <input
                className="m-1"
                type="checkbox"
                id="procedures_administered_pg1_l"
                name="procedures_administered_pg1_l"
                checked={
                  patientProceduresAdministeredPg1.procedures_administered_pg1_l
                }
                onChange={handleFieldChange}
                onClick={captureFieldName}
              />
              <Label className="text-white m-0 p-0">
                Minnesota Multiphasic Personality Inventory-2 (MMPI-2)
              </Label>
            </div>
            <div className="m-1">
              <input
                className="m-1"
                type="checkbox"
                id="procedures_administered_pg1_m"
                name="procedures_administered_pg1_m"
                checked={
                  patientProceduresAdministeredPg1.procedures_administered_pg1_m
                }
                onChange={handleFieldChange}
                onClick={captureFieldName}
              />
              <Label className="text-white m-0 p-0">
                Millon Clinical Multiaxial Inventory-IV (MCMI-IV)
              </Label>
            </div>
            <div className="m-1">
              <input
                className="m-1"
                type="checkbox"
                id="procedures_administered_pg1_n"
                name="procedures_administered_pg1_n"
                checked={
                  patientProceduresAdministeredPg1.procedures_administered_pg1_n
                }
                onChange={handleFieldChange}
                onClick={captureFieldName}
              />
              <Label className="text-white m-0 p-0">
                Rorschach Performance Assessment System (R-PAS)
              </Label>
            </div>
            <div className="m-1">
              <input
                className="m-1"
                type="checkbox"
                id="procedures_administered_pg1_o"
                name="procedures_administered_pg1_o"
                checked={
                  patientProceduresAdministeredPg1.procedures_administered_pg1_o
                }
                onChange={handleFieldChange}
                onClick={captureFieldName}
              />
              <Label className="text-white m-0 p-0">
                Thematic Apperceptions Test (TAT)
              </Label>
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation
              next={next}
              back={back}
              updatePatient={updatePatient}
              patient={props.patientId}
              patientNotes={patientProceduresAdministeredPg1}
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

export default ProceduresAdministeredPg1;
