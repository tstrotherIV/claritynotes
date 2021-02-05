import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import ButtonNavigation from "../../shared/ButtonNavigation";
import DataManager from "../../../data_module/DataManager";

// pdf page 106

function ShipleyIntelligenceAssessment2(props) {
  const next = "/rait_pg_1";
  const back = "/wechsler_adult_intelligence_scale_IV";

  const [
    shipleyIntelligenceAssessment2,
    setShipleyIntelligenceAssessment2,
  ] = useState({
    shipley_intelligence_assessment_2_pg1_col1_a: "",
    shipley_intelligence_assessment_2_pg1_col1_b: "",
    shipley_intelligence_assessment_2_pg1_col1_c: "",
    shipley_intelligence_assessment_2_pg1_col1_d: "",
    shipley_intelligence_assessment_2_pg1_col1_e: "",
    shipley_intelligence_assessment_2_pg1_col1_f: "",
    shipley_intelligence_assessment_2_pg1_col2_a: "",
    shipley_intelligence_assessment_2_pg1_col2_b: "",
    shipley_intelligence_assessment_2_pg1_col2_c: "",
    shipley_intelligence_assessment_2_pg1_col2_d: "",
    shipley_intelligence_assessment_2_pg1_col2_e: "",
    shipley_intelligence_assessment_2_pg1_col2_f: "",
  });

  const handleFieldChange = (e) => {
    const target = e.target;

    setShipleyIntelligenceAssessment2({
      ...shipleyIntelligenceAssessment2,
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
      shipley_intelligence_assessment_2_pg1_col1_a: String(
        shipleyIntelligenceAssessment2.shipley_intelligence_assessment_2_pg1_col1_a
      ),
      shipley_intelligence_assessment_2_pg1_col1_b: String(
        shipleyIntelligenceAssessment2.shipley_intelligence_assessment_2_pg1_col1_b
      ),
      shipley_intelligence_assessment_2_pg1_col1_c: String(
        shipleyIntelligenceAssessment2.shipley_intelligence_assessment_2_pg1_col1_c
      ),
      shipley_intelligence_assessment_2_pg1_col1_d: String(
        shipleyIntelligenceAssessment2.shipley_intelligence_assessment_2_pg1_col1_d
      ),
      shipley_intelligence_assessment_2_pg1_col1_e: String(
        shipleyIntelligenceAssessment2.shipley_intelligence_assessment_2_pg1_col1_e
      ),
      shipley_intelligence_assessment_2_pg1_col1_f: String(
        shipleyIntelligenceAssessment2.shipley_intelligence_assessment_2_pg1_col1_f
      ),
      shipley_intelligence_assessment_2_pg1_col2_a: String(
        shipleyIntelligenceAssessment2.shipley_intelligence_assessment_2_pg1_col2_a
      ),
      shipley_intelligence_assessment_2_pg1_col2_b: String(
        shipleyIntelligenceAssessment2.shipley_intelligence_assessment_2_pg1_col2_b
      ),
      shipley_intelligence_assessment_2_pg1_col2_c: String(
        shipleyIntelligenceAssessment2.shipley_intelligence_assessment_2_pg1_col2_c
      ),
      shipley_intelligence_assessment_2_pg1_col2_d: String(
        shipleyIntelligenceAssessment2.shipley_intelligence_assessment_2_pg1_col2_d
      ),
      shipley_intelligence_assessment_2_pg1_col2_e: String(
        shipleyIntelligenceAssessment2.shipley_intelligence_assessment_2_pg1_col2_e
      ),
      shipley_intelligence_assessment_2_pg1_col2_f: String(
        shipleyIntelligenceAssessment2.shipley_intelligence_assessment_2_pg1_col2_f
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
        "shipley_intelligence_assessment_2_pg1_col1_a",
        "shipley_intelligence_assessment_2_pg1_col1_b",
        "shipley_intelligence_assessment_2_pg1_col1_c",
        "shipley_intelligence_assessment_2_pg1_col1_d",
        "shipley_intelligence_assessment_2_pg1_col1_e",
        "shipley_intelligence_assessment_2_pg1_col1_f",
        "shipley_intelligence_assessment_2_pg1_col2_a",
        "shipley_intelligence_assessment_2_pg1_col2_b",
        "shipley_intelligence_assessment_2_pg1_col2_c",
        "shipley_intelligence_assessment_2_pg1_col2_d",
        "shipley_intelligence_assessment_2_pg1_col2_e",
        "shipley_intelligence_assessment_2_pg1_col2_f",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setShipleyIntelligenceAssessment2(filtered);
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
          <div className="ml-5 mr-5 mt-3">
            <div className="d-flex flex-wrap text-white align-items-baseline">
              <h3 className=" mb-1 col-2">Test Results</h3>
              <h4>Shipley Intelligence Assessment 2</h4>
            </div>
            <div className="m-5 d-flex flex-wrap justify-content-around">
              <p className="col-4 text-white">
                {" "}
                Shipley Intelligence Assessment 2, [Patient Name, First]
                achieved a Full Scale IQ of [Score Result] which falls into the
                [Score Result Descriptor Correlation] range of intelligence.{" "}
              </p>
              <div className="">
                <Table>
                  <thead className="tableHeader text-center">
                    <tr className="tableBorder">
                      <th className="tdHeaderWidth">Composite</th>
                      <th className="tdWidth">IQ</th>
                      <th className="tdWidth">Range</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <th scope="row" className="rowHeight">
                        Vocabulary
                      </th>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="shipley_intelligence_assessment_2_pg1_col1_a"
                          name="shipley_intelligence_assessment_2_pg1_col1_a"
                          onChange={handleFieldChange}
                          value={
                            shipleyIntelligenceAssessment2.shipley_intelligence_assessment_2_pg1_col1_a
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="shipley_intelligence_assessment_2_pg1_col2_a"
                          name="shipley_intelligence_assessment_2_pg1_col2_a"
                          onChange={handleFieldChange}
                          value={
                            shipleyIntelligenceAssessment2.shipley_intelligence_assessment_2_pg1_col2_a
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="rowHeight">
                        Abstraction
                      </th>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="shipley_intelligence_assessment_2_pg1_col1_b"
                          name="shipley_intelligence_assessment_2_pg1_col1_b"
                          onChange={handleFieldChange}
                          value={
                            shipleyIntelligenceAssessment2.shipley_intelligence_assessment_2_pg1_col1_b
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="shipley_intelligence_assessment_2_pg1_col2_b"
                          name="shipley_intelligence_assessment_2_pg1_col2_b"
                          onChange={handleFieldChange}
                          value={
                            shipleyIntelligenceAssessment2.shipley_intelligence_assessment_2_pg1_col2_b
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="rowHeight">
                        Block Design
                      </th>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="shipley_intelligence_assessment_2_pg1_col1_c"
                          name="shipley_intelligence_assessment_2_pg1_col1_c"
                          onChange={handleFieldChange}
                          value={
                            shipleyIntelligenceAssessment2.shipley_intelligence_assessment_2_pg1_col1_c
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="shipley_intelligence_assessment_2_pg1_col2_c"
                          name="shipley_intelligence_assessment_2_pg1_col2_c"
                          onChange={handleFieldChange}
                          value={
                            shipleyIntelligenceAssessment2.shipley_intelligence_assessment_2_pg1_col2_c
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="rowHeight p-0">
                        <div>Composite A</div>
                        <div>(Vocabulary + Abstraction)</div>
                      </th>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="shipley_intelligence_assessment_2_pg1_col1_d"
                          name="shipley_intelligence_assessment_2_pg1_col1_d"
                          onChange={handleFieldChange}
                          value={
                            shipleyIntelligenceAssessment2.shipley_intelligence_assessment_2_pg1_col1_d
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="shipley_intelligence_assessment_2_pg1_col2_d"
                          name="shipley_intelligence_assessment_2_pg1_col2_d"
                          onChange={handleFieldChange}
                          value={
                            shipleyIntelligenceAssessment2.shipley_intelligence_assessment_2_pg1_col2_d
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="rowHeight p-0">
                        <div>Composite B</div>
                        <div>(Vocabulary + Block Design)</div>
                      </th>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="shipley_intelligence_assessment_2_pg1_col1_e"
                          name="shipley_intelligence_assessment_2_pg1_col1_e"
                          onChange={handleFieldChange}
                          value={
                            shipleyIntelligenceAssessment2.shipley_intelligence_assessment_2_pg1_col1_e
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="shipley_intelligence_assessment_2_pg1_col2_e"
                          name="shipley_intelligence_assessment_2_pg1_col2_e"
                          onChange={handleFieldChange}
                          value={
                            shipleyIntelligenceAssessment2.shipley_intelligence_assessment_2_pg1_col2_e
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="rowHeight">
                        Full Scale IQ
                      </th>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="shipley_intelligence_assessment_2_pg1_col1_f"
                          name="shipley_intelligence_assessment_2_pg1_col1_f"
                          onChange={handleFieldChange}
                          value={
                            shipleyIntelligenceAssessment2.shipley_intelligence_assessment_2_pg1_col1_f
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="shipley_intelligence_assessment_2_pg1_col2_f"
                          name="shipley_intelligence_assessment_2_pg1_col2_f"
                          onChange={handleFieldChange}
                          value={
                            shipleyIntelligenceAssessment2.shipley_intelligence_assessment_2_pg1_col2_f
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
              patientNotes={shipleyIntelligenceAssessment2}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ShipleyIntelligenceAssessment2;
