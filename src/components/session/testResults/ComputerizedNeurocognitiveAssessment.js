import React, { useState, useEffect } from "react";
import { Table, Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import DataManager from "../../../data_module/DataManager";

// pdf page 117

function ComputerizedNeurocognitiveAssessment(props) {
  const [
    patientComputerizedNeurocognitiveAssessment,
    setPatientComputerizedNeurocognitiveAssessment,
  ] = useState({});

  const [item, setItem] = useState("");

  const next = "/paulhus_deception_scale";
  const back = "/continous_performance_test_3rd_ed";

  const handleFieldChange = (e) => {
    const target = e.target;

    setPatientComputerizedNeurocognitiveAssessment({
      ...patientComputerizedNeurocognitiveAssessment,
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

    setPatientComputerizedNeurocognitiveAssessment({
      ...patientComputerizedNeurocognitiveAssessment,
      computerized_performance_neurocognitive_assessment_a: value,
    });
    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  const UpdateRange = (value) => {
    if (value >= 36 && value <= 55) {
      return "Moderate (36-55)";
    } else if (value >= 56 && value <= 70) {
      return "Mild (56-70)";
    } else if (value >= 71 && value <= 85) {
      return "Borderline (71-85)";
    } else if (value >= 86 && value <= 90) {
      return "Low Average (86-90)";
    } else if (value >= 91 && value <= 109) {
      return "Average (91-109)";
    } else if (value >= 110 && value <= 114) {
      return "High Average (110-114)";
    } else if (value >= 115 && value <= 129) {
      return "High Above Average (115-129)";
    } else if (value >= 130 && value <= 139) {
      return "Gifted (130-139)";
    } else if (value >= 140 && value <= 160) {
      return "Highly Gifted (140-160)";
    } else {
      return "Value Not in Range. Adjust the IQ Value";
    }
  };

  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      computerized_performance_neurocognitive_assessment_col1_a: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_a ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col1_b: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_b ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col1_c: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_c ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col1_d: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_d ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col1_e: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_e ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col1_f: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_f ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col1_g: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_g ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col1_h: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_h ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col1_i: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_i ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col1_j: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_j ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col1_k: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_k ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col1_l: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_l ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col1_m: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_m ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col1_n: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_n ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col1_o: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_o ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col1_p: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_p ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col2_a: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_a ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col2_b: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_b ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col2_c: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_c ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col2_d: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_d ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col2_e: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_e ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col2_f: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_f ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col2_g: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_g ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col2_h: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_h ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col2_i: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_i ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col2_j: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_j ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col2_k: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_k ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col2_l: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_l ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col2_m: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_m ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col2_n: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_n ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col2_o: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_o ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col2_p: String(
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_p ||
          "0"
      ),
      computerized_performance_neurocognitive_assessment_col3_a:
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_a,
      computerized_performance_neurocognitive_assessment_col3_b:
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_b,
      computerized_performance_neurocognitive_assessment_col3_c:
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_c,
      computerized_performance_neurocognitive_assessment_col3_d:
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_d,
      computerized_performance_neurocognitive_assessment_col3_e:
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_e,
      computerized_performance_neurocognitive_assessment_col3_f:
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_f,
      computerized_performance_neurocognitive_assessment_col3_g:
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_g,
      computerized_performance_neurocognitive_assessment_col3_h:
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_h,
      computerized_performance_neurocognitive_assessment_col3_i:
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_i,
      computerized_performance_neurocognitive_assessment_col3_j:
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_j,
      computerized_performance_neurocognitive_assessment_col3_k:
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_k,
      computerized_performance_neurocognitive_assessment_col3_l:
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_l,
      computerized_performance_neurocognitive_assessment_col3_m:
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_m,
      computerized_performance_neurocognitive_assessment_col3_n:
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_n,
      computerized_performance_neurocognitive_assessment_col3_o:
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_o,
      computerized_performance_neurocognitive_assessment_col3_p:
        patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_p,
    };

    DataManager.update("patients", editedPatient).then(() => props.getData());
  };

  //CRUD Function END

  const getData = () => {
    setPatientComputerizedNeurocognitiveAssessment(props.patientDetails);
    setItem("computerized_performance_neurocognitive_assessment_patientNotes");
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
              <h3 className="mb-1 col-2">Test Results</h3>
              <h4 className="mb-3">
                Computerized Neurocognitive Assessment (CNS){" "}
              </h4>
            </div>
            <div className="text-white d-flex flex-wrap">
              <div className="col-4">
                <input
                  className=""
                  type="checkbox"
                  id="computerized_performance_neurocognitive_assessment_a"
                  name="computerized_performance_neurocognitive_assessment_a"
                  checked={
                    patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_a
                  }
                  onChange={handleCheckBoxChange}
                />
                <Label className="m-2" for=""></Label>
                {props.patientDetails.patient_first_name} completed the
                Computerized Neurocognitive Assessment (CNS).
                <p className="m-2">
                  This instrument is a clinical testing procedure used to
                  evaluate the neurocognitive state. It can be successfully
                  completed bu an average child with a fourth grade reading
                  level. Validity indicators are used to indicate whether the
                  patient gave poor effort or generated invalid results
                  (feigning, malingering, etc).
                </p>
                <p className="m-2">
                  *Type in results of areas with significant and moderate
                  impairments.
                </p>
              </div>
              <div className="col-8">
                <Table striped className="mb-4">
                  <thead className="tableHeader text-center">
                    <tr>
                      <th className="m-0 customPadding domainScoreWidth">
                        Domain Scores
                      </th>
                      <th className="m-0 customPadding tdWidth">Score</th>
                      <th className="m-0 customPadding tdWidth">
                        Better Than Percentile
                      </th>
                      <th className="m-0 customPadding tdWidth">
                        Functional Range
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr>
                      <th scope="row" className="m-0 customPadding">
                        Neurocoginition Index (NCI)
                      </th>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={36}
                          max={160}
                          id="computerized_performance_neurocognitive_assessment_col1_a"
                          name="computerized_performance_neurocognitive_assessment_col1_a"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_a
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="computerized_performance_neurocognitive_assessment_col2_a"
                          name="computerized_performance_neurocognitive_assessment_col2_a"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_a
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <p className="m-4">
                          {UpdateRange(
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_a
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="m-0 customPadding">
                        Composite Memory
                      </th>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={36}
                          max={160}
                          type="number"
                          id="computerized_performance_neurocognitive_assessment_col1_b"
                          name="computerized_performance_neurocognitive_assessment_col1_b"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_b
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={10}
                          type="number"
                          id="computerized_performance_neurocognitive_assessment_col2_b"
                          name="computerized_performance_neurocognitive_assessment_col2_b"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_b
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <p className="m-4">
                          {UpdateRange(
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_b
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="m-0 customPadding">
                        Verbal Memory
                      </th>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={36}
                          max={160}
                          type="number"
                          id="computerized_performance_neurocognitive_assessment_col1_c"
                          name="computerized_performance_neurocognitive_assessment_col1_c"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_c
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={10}
                          type="number"
                          id="computerized_performance_neurocognitive_assessment_col2_c"
                          name="computerized_performance_neurocognitive_assessment_col2_c"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_c
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <p className="m-4">
                          {UpdateRange(
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_c
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="m-0 customPadding">
                        Visual Memory
                      </th>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={36}
                          max={160}
                          type="number"
                          id="computerized_performance_neurocognitive_assessment_col1_d"
                          name="computerized_performance_neurocognitive_assessment_col1_d"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_d
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={10}
                          type="number"
                          id="computerized_performance_neurocognitive_assessment_col2_d"
                          name="computerized_performance_neurocognitive_assessment_col2_d"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_d
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <p className="m-4">
                          {UpdateRange(
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_d
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="m-0 customPadding">
                        Psychomotor Speed
                      </th>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={36}
                          max={160}
                          type="number"
                          id="computerized_performance_neurocognitive_assessment_col1_e"
                          name="computerized_performance_neurocognitive_assessment_col1_e"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_e
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={10}
                          type="number"
                          id="computerized_performance_neurocognitive_assessment_col2_e"
                          name="computerized_performance_neurocognitive_assessment_col2_e"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_e
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <p className="m-4">
                          {UpdateRange(
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_e
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="m-0 customPadding">
                        Reaction Time*
                      </th>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={36}
                          max={160}
                          type="number"
                          id="computerized_performance_neurocognitive_assessment_col1_f"
                          name="computerized_performance_neurocognitive_assessment_col1_f"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_f
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={10}
                          type="number"
                          id="computerized_performance_neurocognitive_assessment_col2_f"
                          name="computerized_performance_neurocognitive_assessment_col2_f"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_f
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <p className="m-4">
                          {UpdateRange(
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_f
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="m-0 customPadding">
                        Complex Attention*
                      </th>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={36}
                          max={160}
                          type="number"
                          id="computerized_performance_neurocognitive_assessment_col1_g"
                          name="computerized_performance_neurocognitive_assessment_col1_g"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_g
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={10}
                          type="number"
                          id="computerized_performance_neurocognitive_assessment_col2_g"
                          name="computerized_performance_neurocognitive_assessment_col2_g"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_g
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <p className="m-4">
                          {UpdateRange(
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_g
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="m-0 customPadding">
                        Congitive Flexibility
                      </th>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={36}
                          max={160}
                          type="number"
                          id="computerized_performance_neurocognitive_assessment_col1_h"
                          name="computerized_performance_neurocognitive_assessment_col1_h"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_h
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={10}
                          type="number"
                          id="computerized_performance_neurocognitive_assessment_col2_h"
                          name="computerized_performance_neurocognitive_assessment_col2_h"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_h
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <p className="m-4">
                          {UpdateRange(
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_h
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="m-0 customPadding">
                        Processing Speed
                      </th>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={36}
                          max={160}
                          type="number"
                          id="computerized_performance_neurocognitive_assessment_col1_i"
                          name="computerized_performance_neurocognitive_assessment_col1_i"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_i
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={10}
                          type="number"
                          id="computerized_performance_neurocognitive_assessment_col2_i"
                          name="computerized_performance_neurocognitive_assessment_col2_i"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_i
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <p className="m-4">
                          {UpdateRange(
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_i
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="m-0 customPadding">
                        Executive Function
                      </th>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={36}
                          max={160}
                          type="number"
                          id="computerized_performance_neurocognitive_assessment_col1_j"
                          name="computerized_performance_neurocognitive_assessment_col1_j"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_j
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={10}
                          type="number"
                          id="computerized_performance_neurocognitive_assessment_col2_j"
                          name="computerized_performance_neurocognitive_assessment_col2_j"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_j
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <p className="m-4">
                          {UpdateRange(
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_j
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="m-0 customPadding">
                        Social Acuity
                      </th>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={36}
                          max={160}
                          type="number"
                          id="computerized_performance_neurocognitive_assessment_col1_k"
                          name="computerized_performance_neurocognitive_assessment_col1_k"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_k
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={10}
                          type="number"
                          id="computerized_performance_neurocognitive_assessment_col2_k"
                          name="computerized_performance_neurocognitive_assessment_col2_k"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_k
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <p className="m-4">
                          {UpdateRange(
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_k
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="m-0 customPadding">
                        Reasoning
                      </th>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={36}
                          max={160}
                          type="number"
                          id="computerized_performance_neurocognitive_assessment_col1_l"
                          name="computerized_performance_neurocognitive_assessment_col1_l"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_l
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={10}
                          type="number"
                          id="computerized_performance_neurocognitive_assessment_col2_l"
                          name="computerized_performance_neurocognitive_assessment_col2_l"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_l
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <p className="m-4">
                          {UpdateRange(
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_l
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="m-0 customPadding">
                        Working Memory
                      </th>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={36}
                          max={160}
                          type="number"
                          id="computerized_performance_neurocognitive_assessment_col1_m"
                          name="computerized_performance_neurocognitive_assessment_col1_m"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_m
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={10}
                          type="number"
                          id="computerized_performance_neurocognitive_assessment_col2_m"
                          name="computerized_performance_neurocognitive_assessment_col2_m"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_m
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <p className="m-4">
                          {UpdateRange(
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_m
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="m-0 customPadding">
                        Sustained Attention
                      </th>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={36}
                          max={160}
                          type="number"
                          id="computerized_performance_neurocognitive_assessment_col1_n"
                          name="computerized_performance_neurocognitive_assessment_col1_n"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_n
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={10}
                          type="number"
                          id="computerized_performance_neurocognitive_assessment_col2_n"
                          name="computerized_performance_neurocognitive_assessment_col2_n"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_n
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <p className="m-4">
                          {UpdateRange(
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_n
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="m-0 customPadding">
                        Simple Attention
                      </th>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={36}
                          max={160}
                          type="number"
                          id="computerized_performance_neurocognitive_assessment_col1_o"
                          name="computerized_performance_neurocognitive_assessment_col1_o"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_o
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={10}
                          type="number"
                          id="computerized_performance_neurocognitive_assessment_col2_o"
                          name="computerized_performance_neurocognitive_assessment_col2_o"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_o
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <p className="m-4">
                          {UpdateRange(
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_o
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="m-0 customPadding">
                        Motor Speed
                      </th>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={36}
                          max={160}
                          type="number"
                          id="computerized_performance_neurocognitive_assessment_col1_p"
                          name="computerized_performance_neurocognitive_assessment_col1_p"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_p
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={10}
                          type="number"
                          id="computerized_performance_neurocognitive_assessment_col2_p"
                          name="computerized_performance_neurocognitive_assessment_col2_p"
                          onChange={handleFieldChange}
                          value={
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_p
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <p className="m-4">
                          {UpdateRange(
                            patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_p
                          )}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </Table>
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
            patientNotes={patientComputerizedNeurocognitiveAssessment}
          />
          <TermOfParentalRights
            questionId={item}
            patientId={props.patientId}
            item={item}
          />
        </div>
      </div>
    </>
  );
}

export default ComputerizedNeurocognitiveAssessment;
