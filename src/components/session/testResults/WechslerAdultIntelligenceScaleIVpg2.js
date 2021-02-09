import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import ButtonNavigation from "../../shared/ButtonNavigation";
import DataManager from "../../../data_module/DataManager";

// pdf page 110

function WechslerAdultIntelligenceScaleIVpg2(props) {
  const next = "/wide_range_achievement_test_5";
  const back = "/rait_pg_3";

  const [
    wechslerAdultIntelligenceScaleIV_pg2,
    setWechslerAdultIntelligenceScaleIV_pg2,
  ] = useState({
    wechsler_adult_intelligence_scale_IV_pg2_col1_a: "",
    wechsler_adult_intelligence_scale_IV_pg2_col1_b: "",
    wechsler_adult_intelligence_scale_IV_pg2_col1_c: "",
    wechsler_adult_intelligence_scale_IV_pg2_col2_a: "",
    wechsler_adult_intelligence_scale_IV_pg2_col2_b: "",
    wechsler_adult_intelligence_scale_IV_pg2_col2_c: "",
    wechsler_adult_intelligence_scale_IV_pg2_col3_a: "",
    wechsler_adult_intelligence_scale_IV_pg2_col3_b: "",
    wechsler_adult_intelligence_scale_IV_pg2_col3_c: "",
    wechsler_adult_intelligence_scale_IV_pg2_col4_a: "",
    wechsler_adult_intelligence_scale_IV_pg2_col4_b: "",
    wechsler_adult_intelligence_scale_IV_pg2_col4_c: "",
    wechsler_adult_intelligence_scale_IV_pg2_col5_a: "",
    wechsler_adult_intelligence_scale_IV_pg2_col5_b: "",
    wechsler_adult_intelligence_scale_IV_pg2_col5_c: "",
  });

  const handleFieldChange = (e) => {
    const target = e.target;

    setWechslerAdultIntelligenceScaleIV_pg2({
      ...wechslerAdultIntelligenceScaleIV_pg2,
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
      wechsler_adult_intelligence_scale_IV_pg2_col1_a: String(
        wechslerAdultIntelligenceScaleIV_pg2.wechsler_adult_intelligence_scale_IV_pg2_col1_a
      ),
      wechsler_adult_intelligence_scale_IV_pg2_col1_b: String(
        wechslerAdultIntelligenceScaleIV_pg2.wechsler_adult_intelligence_scale_IV_pg2_col1_b
      ),
      wechsler_adult_intelligence_scale_IV_pg2_col1_c: String(
        wechslerAdultIntelligenceScaleIV_pg2.wechsler_adult_intelligence_scale_IV_pg2_col1_c
      ),
      wechsler_adult_intelligence_scale_IV_pg2_col2_a: String(
        wechslerAdultIntelligenceScaleIV_pg2.wechsler_adult_intelligence_scale_IV_pg2_col2_a
      ),
      wechsler_adult_intelligence_scale_IV_pg2_col2_b: String(
        wechslerAdultIntelligenceScaleIV_pg2.wechsler_adult_intelligence_scale_IV_pg2_col2_b
      ),
      wechsler_adult_intelligence_scale_IV_pg2_col2_c: String(
        wechslerAdultIntelligenceScaleIV_pg2.wechsler_adult_intelligence_scale_IV_pg2_col2_c
      ),
      wechsler_adult_intelligence_scale_IV_pg2_col3_a: String(
        wechslerAdultIntelligenceScaleIV_pg2.wechsler_adult_intelligence_scale_IV_pg2_col3_a
      ),
      wechsler_adult_intelligence_scale_IV_pg2_col3_b: String(
        wechslerAdultIntelligenceScaleIV_pg2.wechsler_adult_intelligence_scale_IV_pg2_col3_b
      ),
      wechsler_adult_intelligence_scale_IV_pg2_col3_c: String(
        wechslerAdultIntelligenceScaleIV_pg2.wechsler_adult_intelligence_scale_IV_pg2_col3_c
      ),
      wechsler_adult_intelligence_scale_IV_pg2_col4_a: String(
        wechslerAdultIntelligenceScaleIV_pg2.wechsler_adult_intelligence_scale_IV_pg2_col4_a
      ),
      wechsler_adult_intelligence_scale_IV_pg2_col4_b: String(
        wechslerAdultIntelligenceScaleIV_pg2.wechsler_adult_intelligence_scale_IV_pg2_col4_b
      ),
      wechsler_adult_intelligence_scale_IV_pg2_col4_c: String(
        wechslerAdultIntelligenceScaleIV_pg2.wechsler_adult_intelligence_scale_IV_pg2_col4_c
      ),
      wechsler_adult_intelligence_scale_IV_pg2_col5_a: String(
        wechslerAdultIntelligenceScaleIV_pg2.wechsler_adult_intelligence_scale_IV_pg2_col5_a
      ),
      wechsler_adult_intelligence_scale_IV_pg2_col5_b: String(
        wechslerAdultIntelligenceScaleIV_pg2.wechsler_adult_intelligence_scale_IV_pg2_col5_b
      ),
      wechsler_adult_intelligence_scale_IV_pg2_col5_c: String(
        wechslerAdultIntelligenceScaleIV_pg2.wechsler_adult_intelligence_scale_IV_pg2_col5_c
      ),
    };

    DataManager.update("patients", editedPatient);
  };

  //CRUD Function END

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = [
        "wechsler_adult_intelligence_scale_IV_pg2_col1_a",
        "wechsler_adult_intelligence_scale_IV_pg2_col1_b",
        "wechsler_adult_intelligence_scale_IV_pg2_col1_c",
        "wechsler_adult_intelligence_scale_IV_pg2_col2_a",
        "wechsler_adult_intelligence_scale_IV_pg2_col2_b",
        "wechsler_adult_intelligence_scale_IV_pg2_col2_c",
        "wechsler_adult_intelligence_scale_IV_pg2_col3_a",
        "wechsler_adult_intelligence_scale_IV_pg2_col3_b",
        "wechsler_adult_intelligence_scale_IV_pg2_col3_c",
        "wechsler_adult_intelligence_scale_IV_pg2_col4_a",
        "wechsler_adult_intelligence_scale_IV_pg2_col4_b",
        "wechsler_adult_intelligence_scale_IV_pg2_col4_c",
        "wechsler_adult_intelligence_scale_IV_pg2_col5_a",
        "wechsler_adult_intelligence_scale_IV_pg2_col5_b",
        "wechsler_adult_intelligence_scale_IV_pg2_col5_c",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setWechslerAdultIntelligenceScaleIV_pg2(filtered);
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
              <h3 className="mb-1 col-2">Test Results</h3>
              <h4>Wechsler Adult Intelligence Scale-IV</h4>
            </div>
            <div className="m-5 d-flex flex-wrap justify-content-around">
              <div className="">
                <Table>
                  <thead className="tableHeader text-center">
                    <tr className="tableBorder">
                      <th className="tdHeaderWidth"></th>
                      <th className="tdWidth">
                        Crystallized Intelligence Index (CII)
                      </th>
                      <th className="tdWidth">
                        Fluid Intelligence Index (FII)
                      </th>
                      <th className="tdWidth">
                        Total Intelligence Index (TII)
                      </th>
                      <th className="tdWidth">
                        Quantitative Intelligence Index (QII)
                      </th>
                      <th className="tdWidth">
                        Total Battery Intelligence Index (TBII)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <th scope="row" className="rowHeight">
                        IQ
                      </th>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="wechsler_adult_intelligence_scale_IV_pg2_col1_a"
                          name="wechsler_adult_intelligence_scale_IV_pg2_col1_a"
                          onChange={handleFieldChange}
                          value={
                            wechslerAdultIntelligenceScaleIV_pg2.wechsler_adult_intelligence_scale_IV_pg2_col1_a
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="wechsler_adult_intelligence_scale_IV_pg2_col2_a"
                          name="wechsler_adult_intelligence_scale_IV_pg2_col2_a"
                          onChange={handleFieldChange}
                          value={
                            wechslerAdultIntelligenceScaleIV_pg2.wechsler_adult_intelligence_scale_IV_pg2_col2_a
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="wechsler_adult_intelligence_scale_IV_pg2_col3_a"
                          name="wechsler_adult_intelligence_scale_IV_pg2_col3_a"
                          onChange={handleFieldChange}
                          value={
                            wechslerAdultIntelligenceScaleIV_pg2.wechsler_adult_intelligence_scale_IV_pg2_col3_a
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="wechsler_adult_intelligence_scale_IV_pg2_col4_a"
                          name="wechsler_adult_intelligence_scale_IV_pg2_col4_a"
                          onChange={handleFieldChange}
                          value={
                            wechslerAdultIntelligenceScaleIV_pg2.wechsler_adult_intelligence_scale_IV_pg2_col4_a
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="wechsler_adult_intelligence_scale_IV_pg2_col5_a"
                          name="wechsler_adult_intelligence_scale_IV_pg2_col5_a"
                          onChange={handleFieldChange}
                          value={
                            wechslerAdultIntelligenceScaleIV_pg2.wechsler_adult_intelligence_scale_IV_pg2_col5_a
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="rowHeight">
                        Better Than Percentile
                      </th>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={100}
                          type="number"
                          id="wechsler_adult_intelligence_scale_IV_pg2_col1_b"
                          name="wechsler_adult_intelligence_scale_IV_pg2_col1_b"
                          onChange={handleFieldChange}
                          value={
                            wechslerAdultIntelligenceScaleIV_pg2.wechsler_adult_intelligence_scale_IV_pg2_col1_b
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={100}
                          type="number"
                          id="wechsler_adult_intelligence_scale_IV_pg2_col2_b"
                          name="wechsler_adult_intelligence_scale_IV_pg2_col2_b"
                          onChange={handleFieldChange}
                          value={
                            wechslerAdultIntelligenceScaleIV_pg2.wechsler_adult_intelligence_scale_IV_pg2_col2_b
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={100}
                          type="number"
                          id="wechsler_adult_intelligence_scale_IV_pg2_col3_b"
                          name="wechsler_adult_intelligence_scale_IV_pg2_col3_b"
                          onChange={handleFieldChange}
                          value={
                            wechslerAdultIntelligenceScaleIV_pg2.wechsler_adult_intelligence_scale_IV_pg2_col3_b
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={100}
                          type="number"
                          id="wechsler_adult_intelligence_scale_IV_pg2_col1_b"
                          name="wechsler_adult_intelligence_scale_IV_pg2_col4_b"
                          onChange={handleFieldChange}
                          value={
                            wechslerAdultIntelligenceScaleIV_pg2.wechsler_adult_intelligence_scale_IV_pg2_col4_b
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={100}
                          type="number"
                          id="wechsler_adult_intelligence_scale_IV_pg2_col5_b"
                          name="wechsler_adult_intelligence_scale_IV_pg2_col5_b"
                          onChange={handleFieldChange}
                          value={
                            wechslerAdultIntelligenceScaleIV_pg2.wechsler_adult_intelligence_scale_IV_pg2_col5_b
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="rowHeight">
                        Percentile Rank
                      </th>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="wechsler_adult_intelligence_scale_IV_pg2_col1_c"
                          name="wechsler_adult_intelligence_scale_IV_pg2_col1_c"
                          onChange={handleFieldChange}
                          value={
                            wechslerAdultIntelligenceScaleIV_pg2.wechsler_adult_intelligence_scale_IV_pg2_col1_c
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="wechsler_adult_intelligence_scale_IV_pg2_col2_c"
                          name="wechsler_adult_intelligence_scale_IV_pg2_col2_c"
                          onChange={handleFieldChange}
                          value={
                            wechslerAdultIntelligenceScaleIV_pg2.wechsler_adult_intelligence_scale_IV_pg2_col2_c
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="wechsler_adult_intelligence_scale_IV_pg2_col3_c"
                          name="wechsler_adult_intelligence_scale_IV_pg2_col3_c"
                          onChange={handleFieldChange}
                          value={
                            wechslerAdultIntelligenceScaleIV_pg2.wechsler_adult_intelligence_scale_IV_pg2_col3_c
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="wechsler_adult_intelligence_scale_IV_pg2_col1_c"
                          name="wechsler_adult_intelligence_scale_IV_pg2_col4_c"
                          onChange={handleFieldChange}
                          value={
                            wechslerAdultIntelligenceScaleIV_pg2.wechsler_adult_intelligence_scale_IV_pg2_col4_c
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="wechsler_adult_intelligence_scale_IV_pg2_col5_c"
                          name="wechsler_adult_intelligence_scale_IV_pg2_col5_c"
                          onChange={handleFieldChange}
                          value={
                            wechslerAdultIntelligenceScaleIV_pg2.wechsler_adult_intelligence_scale_IV_pg2_col5_c
                          }
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
              patientNotes={wechslerAdultIntelligenceScaleIV_pg2}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default WechslerAdultIntelligenceScaleIVpg2;
