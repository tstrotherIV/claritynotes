import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import ButtonNavigation from "../../shared/ButtonNavigation";
import DataManager from "../../../data_module/DataManager";

// pdf page 104

function WasiII(props) {
  const next = "/wechsler_adult_intelligence_scale_IV";
  const back = "/procedures_administered_pg_1";

  const [wasiii, setWasiii] = useState({
    wasiii_pg1_col1_a: "",
    wasiii_pg1_col1_b: "",
    wasiii_pg1_col1_c: "",
    wasiii_pg1_col1_d: "",
    wasiii_pg1_col2_a: "",
    wasiii_pg1_col2_b: "",
    wasiii_pg1_col2_c: "",
    wasiii_pg1_col2_d: "",
  });

  const handleFieldChange = (e) => {
    const target = e.target;

    setWasiii({
      ...wasiii,
      [e.target.name]:
        e.target.type === "number"
          ? parseInt(e.target.value)
          : target.type === "checkbox"
          ? target.checked
          : target.value,
    });
  };

  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      wasiii_pg1_col1_a: String(wasiii.wasiii_pg1_col1_a),
      wasiii_pg1_col1_b: String(wasiii.wasiii_pg1_col1_b),
      wasiii_pg1_col1_c: String(wasiii.wasiii_pg1_col1_c),
      wasiii_pg1_col1_d: String(wasiii.wasiii_pg1_col1_d),
      wasiii_pg1_col2_a: String(wasiii.wasiii_pg1_col2_a),
      wasiii_pg1_col2_b: String(wasiii.wasiii_pg1_col2_b),
      wasiii_pg1_col2_c: String(wasiii.wasiii_pg1_col2_c),
      wasiii_pg1_col2_d: String(wasiii.wasiii_pg1_col2_d),
    };

    DataManager.update("patients", editedPatient);
  };

  //CRUD Function END

  const getData = () => {
    const check_for_patient = sessionStorage.getItem("patient_id");

    DataManager.getPatient(check_for_patient).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = [
        "wasiii_pg1_col1_a",
        "wasiii_pg1_col1_b",
        "wasiii_pg1_col1_c",
        "wasiii_pg1_col1_d",
        "wasiii_pg1_col2_a",
        "wasiii_pg1_col2_b",
        "wasiii_pg1_col2_c",
        "wasiii_pg1_col2_d",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setWasiii(filtered);
    });
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
           
          <div className="ml-5 mr-5 mt-3">
            <div className="d-flex flex-wrap text-white align-items-baseline">
              <h3 className=" mb-1 col-2">Test Results</h3>
              <h4>
                Wechsler Abbreviated Scale of Intelligence-Second Edition
                (WASI-II)
              </h4>
            </div>
            <div className="m-5 d-flex flex-wrap justify-content-around">
              <p className="col-4 text-white">
                {" "}
                On the Wechsler Abbreviated Scale of Intelligence-Second Edition
                (WASI-II). {props.patientName.patient_first_name} achieved a Full Scale IQ Score
                of [Score Result] which falls in the [Score Result Descriptor
                Correlation] range of intelligence.
              </p>
              <div className="">
                <Table>
                  <thead className="tableHeader text-center">
                    <tr className="tableBorder">
                      <th className="tdHeaderWidth">Composite</th>
                      <th className="thWidth"></th>
                      <th className="tdWidth">IQ</th>
                      <th className="tdWidth">Range</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <th scope="row" className="rowHeight">
                        Verbal Comprehension
                      </th>
                      <td>VCI</td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="wasiii_pg1_col1_a"
                          name="wasiii_pg1_col1_a"
                          onChange={handleFieldChange}
                          value={wasiii.wasiii_pg1_col1_a}
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={100}
                          id="wasiii_pg1_col2_a"
                          name="wasiii_pg1_col2_a"
                          onChange={handleFieldChange}
                          value={wasiii.wasiii_pg1_col2_a}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="rowHeight">
                        Perceptual Reasoning
                      </th>
                      <td>PRI</td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="wasiii_pg1_col1_b"
                          name="wasiii_pg1_col1_b"
                          onChange={handleFieldChange}
                          value={wasiii.wasiii_pg1_col1_b}
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={100}
                          id="wasiii_pg1_col2_b"
                          name="wasiii_pg1_col2_b"
                          onChange={handleFieldChange}
                          value={wasiii.wasiii_pg1_col2_b}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="rowHeight">
                        IQ-2
                      </th>
                      <td>IQ-2</td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="wasiii_pg1_col1_c"
                          name="wasiii_pg1_col1_c"
                          onChange={handleFieldChange}
                          value={wasiii.wasiii_pg1_col1_c}
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={100}
                          id="wasiii_pg1_col2_c"
                          name="wasiii_pg1_col2_c"
                          onChange={handleFieldChange}
                          value={wasiii.wasiii_pg1_col2_c}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="rowHeight">
                        Full Scale IQ
                      </th>
                      <td>FSIQ</td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="wasiii_pg1_col1_d"
                          name="wasiii_pg1_col1_d"
                          onChange={handleFieldChange}
                          value={wasiii.wasiii_pg1_col1_d}
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={100}
                          id="wasiii_pg1_col2_d"
                          name="wasiii_pg1_col2_d"
                          onChange={handleFieldChange}
                          value={wasiii.wasiii_pg1_col2_d}
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation
              next={next}
              back={back}
              updatePatient={updatePatient}
              patient={props.patientId}
              patientNotes={wasiii}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default WasiII;
