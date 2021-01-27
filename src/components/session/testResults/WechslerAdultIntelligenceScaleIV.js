import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import ButtonNavigation from "../../shared/ButtonNavigation";
import DataManager from "../../../data_module/DataManager";

// pdf page 105

function WechslerAdultIntelligenceScaleIV(props) {
  const next = "/shipley_intelligence_assessment_2";
  const back = "/wasi-ii";

  const [
    wechslerAdultIntelligenceScaleIV,
    setWechslerAdultIntelligenceScaleIV,
  ] = useState({
    wechsler_adult_intelligence_scale_IV_pg1_col1_a: "",
    wechsler_adult_intelligence_scale_IV_pg1_col1_b: "",
    wechsler_adult_intelligence_scale_IV_pg1_col1_c: "",
    wechsler_adult_intelligence_scale_IV_pg1_col1_d: "",
    wechsler_adult_intelligence_scale_IV_pg1_col1_e: "",
    wechsler_adult_intelligence_scale_IV_pg1_col2_a: "",
    wechsler_adult_intelligence_scale_IV_pg1_col2_b: "",
    wechsler_adult_intelligence_scale_IV_pg1_col2_c: "",
    wechsler_adult_intelligence_scale_IV_pg1_col2_d: "",
    wechsler_adult_intelligence_scale_IV_pg1_col2_e: "",
  });

  const handleFieldChange = (e) => {
    const target = e.target;

    setWechslerAdultIntelligenceScaleIV({
      ...wechslerAdultIntelligenceScaleIV,
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
      wechsler_adult_intelligence_scale_IV_pg1_col1_a:
        String(wechslerAdultIntelligenceScaleIV.wechsler_adult_intelligence_scale_IV_pg1_col1_a),
      wechsler_adult_intelligence_scale_IV_pg1_col1_b:
      String(wechslerAdultIntelligenceScaleIV.wechsler_adult_intelligence_scale_IV_pg1_col1_b),
      wechsler_adult_intelligence_scale_IV_pg1_col1_c:
      String(wechslerAdultIntelligenceScaleIV.wechsler_adult_intelligence_scale_IV_pg1_col1_c),
      wechsler_adult_intelligence_scale_IV_pg1_col1_d:
      String(wechslerAdultIntelligenceScaleIV.wechsler_adult_intelligence_scale_IV_pg1_col1_d),
      wechsler_adult_intelligence_scale_IV_pg1_col1_e:
      String(wechslerAdultIntelligenceScaleIV.wechsler_adult_intelligence_scale_IV_pg1_col1_e),
      wechsler_adult_intelligence_scale_IV_pg1_col2_a:
      String( wechslerAdultIntelligenceScaleIV.wechsler_adult_intelligence_scale_IV_pg1_col2_a),
      wechsler_adult_intelligence_scale_IV_pg1_col2_b:
      String(wechslerAdultIntelligenceScaleIV.wechsler_adult_intelligence_scale_IV_pg1_col2_b),
      wechsler_adult_intelligence_scale_IV_pg1_col2_c:
      String(wechslerAdultIntelligenceScaleIV.wechsler_adult_intelligence_scale_IV_pg1_col2_c),
      wechsler_adult_intelligence_scale_IV_pg1_col2_d:
      String(wechslerAdultIntelligenceScaleIV.wechsler_adult_intelligence_scale_IV_pg1_col2_d),
      wechsler_adult_intelligence_scale_IV_pg1_col2_e:
      String(wechslerAdultIntelligenceScaleIV.wechsler_adult_intelligence_scale_IV_pg1_col2_e),
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
        "wechsler_adult_intelligence_scale_IV_pg1_col1_a",
        "wechsler_adult_intelligence_scale_IV_pg1_col1_b",
        "wechsler_adult_intelligence_scale_IV_pg1_col1_c",
        "wechsler_adult_intelligence_scale_IV_pg1_col1_d",
        "wechsler_adult_intelligence_scale_IV_pg1_col1_e",
        "wechsler_adult_intelligence_scale_IV_pg1_col2_a",
        "wechsler_adult_intelligence_scale_IV_pg1_col2_b",
        "wechsler_adult_intelligence_scale_IV_pg1_col2_c",
        "wechsler_adult_intelligence_scale_IV_pg1_col2_d",
        "wechsler_adult_intelligence_scale_IV_pg1_col2_e",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setWechslerAdultIntelligenceScaleIV(filtered);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <Heading />
          <div className="ml-5 mr-5 mt-3">
            <div className="d-flex flex-wrap text-white align-items-baseline">
              <h3 className=" mb-1 col-2">Test Results</h3>
              <h4>Wechsler Adult Intelligence Scale-IV</h4>
            </div>
            <div className="m-5 d-flex flex-wrap justify-content-around">
              <p className="col-4 text-white">
                On the Wechsler Adult Intelligence Scale-IV, [Patient Name,
                First] achieved a Full Scale IQ Score of [Score Result] which
                falls in the [Score Result Descriptor Correlation] range of
                intelligence.{" "}
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
                          type="number"
                          id="wechsler_adult_intelligence_scale_IV_pg1_col1_a"
                          name="wechsler_adult_intelligence_scale_IV_pg1_col1_a"
                          onChange={handleFieldChange}
                          value={
                            wechslerAdultIntelligenceScaleIV.wechsler_adult_intelligence_scale_IV_pg1_col1_a
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
                          id="wechsler_adult_intelligence_scale_IV_pg1_col2_a"
                          name="wechsler_adult_intelligence_scale_IV_pg1_col2_a"
                          onChange={handleFieldChange}
                          value={
                            wechslerAdultIntelligenceScaleIV.wechsler_adult_intelligence_scale_IV_pg1_col2_a
                          }
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
                          type="number"
                          id="wechsler_adult_intelligence_scale_IV_pg1_col1_b"
                          name="wechsler_adult_intelligence_scale_IV_pg1_col1_b"
                          onChange={handleFieldChange}
                          value={
                            wechslerAdultIntelligenceScaleIV.wechsler_adult_intelligence_scale_IV_pg1_col1_b
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
                          id="wechsler_adult_intelligence_scale_IV_pg1_col2_b"
                          name="wechsler_adult_intelligence_scale_IV_pg1_col2_b"
                          onChange={handleFieldChange}
                          value={
                            wechslerAdultIntelligenceScaleIV.wechsler_adult_intelligence_scale_IV_pg1_col2_b
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="rowHeight">
                        Working Memory
                      </th>
                      <td>WMI</td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          type="number"
                          id="wechsler_adult_intelligence_scale_IV_pg1_col1_c"
                          name="wechsler_adult_intelligence_scale_IV_pg1_col1_c"
                          onChange={handleFieldChange}
                          value={
                            wechslerAdultIntelligenceScaleIV.wechsler_adult_intelligence_scale_IV_pg1_col1_c
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
                          id="wechsler_adult_intelligence_scale_IV_pg1_col2_c"
                          name="wechsler_adult_intelligence_scale_IV_pg1_col2_c"
                          onChange={handleFieldChange}
                          value={
                            wechslerAdultIntelligenceScaleIV.wechsler_adult_intelligence_scale_IV_pg1_col2_c
                          }
                        />
                      </td>
                    </tr>

                    <tr>
                      <th scope="row" className="rowHeight">
                        Processing Speed
                      </th>
                      <td>PSI</td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          type="number"
                          id="wechsler_adult_intelligence_scale_IV_pg1_col1_d"
                          name="wechsler_adult_intelligence_scale_IV_pg1_col1_d"
                          onChange={handleFieldChange}
                          value={
                            wechslerAdultIntelligenceScaleIV.wechsler_adult_intelligence_scale_IV_pg1_col1_d
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
                          id="wechsler_adult_intelligence_scale_IV_pg1_col2_d"
                          name="wechsler_adult_intelligence_scale_IV_pg1_col2_d"
                          onChange={handleFieldChange}
                          value={
                            wechslerAdultIntelligenceScaleIV.wechsler_adult_intelligence_scale_IV_pg1_col2_d
                          }
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
                          type="number"
                          id="wechsler_adult_intelligence_scale_IV_pg1_col1_e"
                          name="wechsler_adult_intelligence_scale_IV_pg1_col1_e"
                          onChange={handleFieldChange}
                          value={
                            wechslerAdultIntelligenceScaleIV.wechsler_adult_intelligence_scale_IV_pg1_col1_e
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
                          id="wechsler_adult_intelligence_scale_IV_pg1_col2_e"
                          name="wechsler_adult_intelligence_scale_IV_pg1_col2_e"
                          onChange={handleFieldChange}
                          value={
                            wechslerAdultIntelligenceScaleIV.wechsler_adult_intelligence_scale_IV_pg1_col2_e
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
              patientNotes={wechslerAdultIntelligenceScaleIV}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default WechslerAdultIntelligenceScaleIV;
