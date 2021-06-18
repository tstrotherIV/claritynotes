import React, { useState, useEffect } from "react";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import DataManager from "../../../data_module/DataManager";
import { Table } from "reactstrap";
import "./test.css";
// pdf page 108

function RAITpg2(props) {
  const [patientRAITpg2, setPatientRAITpg2] = useState({});

  const next = "/rait_pg_4";
  const back = "/shipley_intelligence_assessment_2";

  const handleFieldChange = (e) => {
    setPatientRAITpg2({
      ...patientRAITpg2,
      [e.target.name]:
        e.target.type === "number" ? parseInt(e.target.value) : e.target.value,
    });
  };

  const UpdateRange = (value) => {
    if (value >= 36 && value <= 55) {
      return "Intellectual Disability, Moderate (36-55)";
    } else if (value >= 56 && value <= 70) {
      return "Intellectual Disability, Mild (56-70) Profound Concern";
    } else if (value >= 71 && value <= 85) {
      return "Borderline (71-85) Moderate to Elevated Concern";
    } else if (value >= 86 && value <= 90) {
      return "Low Average (86-90) Mild Concern";
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
      rait_pg2_col1_a: String(patientRAITpg2.rait_pg2_col1_a || "0"),
      rait_pg2_col1_b: String(patientRAITpg2.rait_pg2_col1_b || "0"),
      rait_pg2_col1_c: String(patientRAITpg2.rait_pg2_col1_c || "0"),
      rait_pg2_col1_d: String(patientRAITpg2.rait_pg2_col1_d || "0"),
      rait_pg2_col1_e: String(patientRAITpg2.rait_pg2_col1_e || "0"),
      rait_pg2_col2_a: String(patientRAITpg2.rait_pg2_col2_a || "0"),
      rait_pg2_col2_b: String(patientRAITpg2.rait_pg2_col2_b || "0"),
      rait_pg2_col2_c: String(patientRAITpg2.rait_pg2_col2_c || "0"),
      rait_pg2_col2_d: String(patientRAITpg2.rait_pg2_col2_d || "0"),
      rait_pg2_col2_e: String(patientRAITpg2.rait_pg2_col2_e || "0"),
      rait_pg2_col4_a: String(patientRAITpg2.rait_pg2_col4_a || "0"),
      rait_pg2_col4_b: String(patientRAITpg2.rait_pg2_col4_b || "0"),
      rait_pg2_col4_c: String(patientRAITpg2.rait_pg2_col4_c || "0"),
      rait_pg2_col4_d: String(patientRAITpg2.rait_pg2_col4_d || "0"),
      rait_pg2_col4_e: String(patientRAITpg2.rait_pg2_col4_e || "0"),
      rait_pg2_col5_a: String(patientRAITpg2.rait_pg2_col5_a || "0"),
      rait_pg2_col5_b: String(patientRAITpg2.rait_pg2_col5_b || "0"),
      rait_pg2_col5_c: String(patientRAITpg2.rait_pg2_col5_c || "0"),
      rait_pg2_col5_d: String(patientRAITpg2.rait_pg2_col5_d || "0"),
      rait_pg2_col5_e: String(patientRAITpg2.rait_pg2_col5_e || "0"),
    };

    DataManager.update("patients", editedPatient).then(() => props.getData());
  };

  //CRUD Function END

  const getData = () => {
    setPatientRAITpg2(props.patientDetails);
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
              <h4>Reynolds Adaptable Intelligence Test (RAIT)</h4>
            </div>
            <div className="m-5 d-flex flex-wrap justify-content-around align-content-center">
              <p className="text-white">
                The RAIT is composed of seven subtests that assess crystallized
                intelligence, fluid intelligence, and quantitative aptitude or
                intelligence. It is designed to provide continuity of
                measurement across a wide age span. The RAIT requires minimal
                reading skill and almost no motor coordination and visual-motor
                skill, reducing the complications that can occur when
                manipulated objects (e.g., blocks) are used to assess
                intelligence.
              </p>
              <div className="fullWidth m-3">
                <div>
                  <Table striped className="">
                    <thead className="tableHeader text-center">
                      <tr className="tableBorder">
                        <th className="tdHeaderWidth"></th>
                        <th className="tdWidth">IQ</th>
                        <th className="tdWidth">%</th>
                        <th className="tdWidth">Defined</th>
                        <th className="tdWidth">Designation</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr>
                        <th scope="row" className="rowHeight">
                          Crystalized Intelligence Index (CII)
                        </th>
                        <td className="m-0 p-0">
                          <input
                            className="form-control text-center"
                            type="number"
                            min={36}
                            max={160}
                            name="rait_pg2_col1_a"
                            onChange={handleFieldChange}
                            value={patientRAITpg2.rait_pg2_col1_a}
                          />
                        </td>
                        <td className="m-0 p-0">
                          <p>Better than</p>
                          <input
                            className="form-control text-center"
                            type="number"
                            min={36}
                            max={160}
                            id="rait_pg2_col2_a"
                            name="rait_pg2_col2_a"
                            onChange={handleFieldChange}
                            value={patientRAITpg2.rait_pg2_col2_a}
                          />
                          <p>out of 100</p>
                        </td>
                        <td className="m-4 p-3">
                          <p>
                            Verbal Reasoning. Ability to access and apply prior
                            learning when solving language-related tasks.
                          </p>
                        </td>
                        <td className="m-0 p-0">
                          <p className="m-4">
                            {UpdateRange(patientRAITpg2.rait_pg2_col1_a)}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="rowHeight">
                          Fluid Intelligence Index (FII)
                        </th>
                        <td className="m-0 p-0">
                          <input
                            className="form-control text-center"
                            type="number"
                            min={36}
                            max={160}
                            id="rait_pg2_col1_b"
                            name="rait_pg2_col1_b"
                            onChange={handleFieldChange}
                            value={patientRAITpg2.rait_pg2_col1_b}
                          />
                        </td>
                        <td className="m-0 p-0">
                          <p>Better than</p>
                          <input
                            className="form-control text-center"
                            type="number"
                            min={36}
                            max={160}
                            id="rait_pg2_col2_b"
                            name="rait_pg2_col2_b"
                            onChange={handleFieldChange}
                            value={patientRAITpg2.rait_pg2_col2_b}
                          />
                          <p>out of 100</p>
                        </td>
                        <td className="m-4 p-4">
                          <p>
                            Problem solving in the absence of requisite factual
                            knowledge, assessed through nonverbal reasoning
                            tasks, and tends to invoke deductive rather than
                            inductive reasoning.
                          </p>
                        </td>
                        <td className="m-0 p-0">
                          <p className="m-4">
                            {UpdateRange(patientRAITpg2.rait_pg2_col1_b)}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="rowHeight">
                          Total Intelligence Index (TII)
                        </th>
                        <td className="m-0 p-0">
                          <input
                            className="form-control text-center"
                            type="number"
                            min={36}
                            max={160}
                            id="rait_pg2_col1_c"
                            name="rait_pg2_col1_c"
                            onChange={handleFieldChange}
                            value={patientRAITpg2.rait_pg2_col1_c}
                          />
                        </td>
                        <td className="m-0 p-0">
                          <p>Better than</p>
                          <input
                            className="form-control text-center"
                            type="number"
                            min={36}
                            max={160}
                            id="rait_pg2_col2_c"
                            name="rait_pg2_col2_c"
                            onChange={handleFieldChange}
                            value={patientRAITpg2.rait_pg2_col2_c}
                          />
                          <p>out of 100</p>
                        </td>
                        <td className="m-4 p-3">
                          <p>
                            Alternative summary estimate of general intelligence
                            or, g, that does not consider quantitative
                            intelligence.
                          </p>
                        </td>
                        <td className="m-0 p-0">
                          <p className="m-4">
                            {UpdateRange(patientRAITpg2.rait_pg2_col1_c)}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="rowHeight">
                          Quantitative Intelligence Index (QII)
                        </th>
                        <td className="m-0 p-0">
                          <input
                            className="form-control text-center"
                            type="number"
                            min={36}
                            max={160}
                            id="rait_pg2_col1_d"
                            name="rait_pg2_col1_d"
                            onChange={handleFieldChange}
                            value={patientRAITpg2.rait_pg2_col1_d}
                          />
                        </td>
                        <td className="m-0 p-0">
                          <p>Better than</p>
                          <input
                            className="form-control text-center"
                            type="number"
                            min={36}
                            max={160}
                            id="rait_pg2_col2_d"
                            name="rait_pg2_col2_d"
                            onChange={handleFieldChange}
                            value={patientRAITpg2.rait_pg2_col2_d}
                          />
                          <p>out of 100</p>
                        </td>
                        <td className="m-4 p-3">
                          <p>
                            Both Crystallized (Verbal Reasoning) & Fluid
                            Quantitative Reasoning. Uses 2 subtests:
                            Quantitative Knowledge (Crystal), Quantitative
                            Reasoning (Problem Solving)
                          </p>
                        </td>
                        <td className="m-0 p-0">
                          <p className="m-4">
                            {UpdateRange(patientRAITpg2.rait_pg2_col1_d)}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="rowHeight">
                          Total Battery Intelligence Index (TBII)
                        </th>
                        <td className="m-0 p-0">
                          <input
                            className="form-control text-center"
                            type="number"
                            min={36}
                            max={160}
                            id="rait_pg2_col1_e"
                            name="rait_pg2_col1_e"
                            onChange={handleFieldChange}
                            value={patientRAITpg2.rait_pg2_col1_e}
                          />
                        </td>
                        <td className="m-0 p-0">
                          <p>Better than</p>
                          <input
                            className="form-control text-center"
                            type="number"
                            min={36}
                            max={160}
                            id="rait_pg2_col2_e"
                            name="rait_pg2_col2_e"
                            onChange={handleFieldChange}
                            value={patientRAITpg2.rait_pg2_col2_e}
                          />
                          <p>out of 100</p>
                        </td>
                        <td className="m-4 p-3">
                          <p>
                            A summary of general intelligence, or g, derived
                            from the administration of all seven RAIT subtests.
                          </p>
                        </td>
                        <td className="m-0 p-0">
                          <p className="m-4">
                            {UpdateRange(patientRAITpg2.rait_pg2_col1_e)}
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
              patientNotes={patientRAITpg2}
            />
            <TermOfParentalRights />
          </div>
        </div>
      </div>
    </>
  );
}

export default RAITpg2;
