import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import ButtonNavigation from "../../shared/ButtonNavigation";
import DataManager from "../../../data_module/DataManager";

// pdf page 113

function AimswebPlusAchievementTestPg2(props) {
  const next = "/aimsweb_plus_achievement_test_pg_3";
  const back = "/aimsweb_plus_achievement_test_pg_1";
  const [
    aimswebPlusAchievementTestPg2,
    setAimswebPlusAchievementTestPg2,
  ] = useState({
    aimsweb_plus_achievement_test_pg2_col1_a: "",
    aimsweb_plus_achievement_test_pg2_col1_b: "",
    aimsweb_plus_achievement_test_pg2_col1_c: "",
    aimsweb_plus_achievement_test_pg2_col1_d: "",
    aimsweb_plus_achievement_test_pg2_col1_e: "",
    aimsweb_plus_achievement_test_pg2_col2_a: "",
    aimsweb_plus_achievement_test_pg2_col2_b: "",
    aimsweb_plus_achievement_test_pg2_col2_c: "",
    aimsweb_plus_achievement_test_pg2_col2_d: "",
    aimsweb_plus_achievement_test_pg2_col2_e: "",
  });

  const handleFieldChange = (e) => {
    const target = e.target;

    setAimswebPlusAchievementTestPg2({
      ...aimswebPlusAchievementTestPg2,
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
      aimsweb_plus_achievement_test_pg2_col1_a: String(
        aimswebPlusAchievementTestPg2.aimsweb_plus_achievement_test_pg2_col1_a
      ),
      aimsweb_plus_achievement_test_pg2_col1_b: String(
        aimswebPlusAchievementTestPg2.aimsweb_plus_achievement_test_pg2_col1_b
      ),
      aimsweb_plus_achievement_test_pg2_col1_c: String(
        aimswebPlusAchievementTestPg2.aimsweb_plus_achievement_test_pg2_col1_c
      ),
      aimsweb_plus_achievement_test_pg2_col1_d: String(
        aimswebPlusAchievementTestPg2.aimsweb_plus_achievement_test_pg2_col1_d
      ),
      aimsweb_plus_achievement_test_pg2_col1_e: String(
        aimswebPlusAchievementTestPg2.aimsweb_plus_achievement_test_pg2_col1_e
      ),
      aimsweb_plus_achievement_test_pg2_col2_a: String(
        aimswebPlusAchievementTestPg2.aimsweb_plus_achievement_test_pg2_col2_a
      ),
      aimsweb_plus_achievement_test_pg2_col2_b: String(
        aimswebPlusAchievementTestPg2.aimsweb_plus_achievement_test_pg2_col2_b
      ),
      aimsweb_plus_achievement_test_pg2_col2_c: String(
        aimswebPlusAchievementTestPg2.aimsweb_plus_achievement_test_pg2_col2_c
      ),
      aimsweb_plus_achievement_test_pg2_col2_d: String(
        aimswebPlusAchievementTestPg2.aimsweb_plus_achievement_test_pg2_col2_d
      ),
      aimsweb_plus_achievement_test_pg2_col2_e: String(
        aimswebPlusAchievementTestPg2.aimsweb_plus_achievement_test_pg2_col2_e
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
        "aimsweb_plus_achievement_test_pg2_col1_a",
        "aimsweb_plus_achievement_test_pg2_col1_b",
        "aimsweb_plus_achievement_test_pg2_col1_c",
        "aimsweb_plus_achievement_test_pg2_col1_d",
        "aimsweb_plus_achievement_test_pg2_col1_e",
        "aimsweb_plus_achievement_test_pg2_col2_a",
        "aimsweb_plus_achievement_test_pg2_col2_b",
        "aimsweb_plus_achievement_test_pg2_col2_c",
        "aimsweb_plus_achievement_test_pg2_col2_d",
        "aimsweb_plus_achievement_test_pg2_col2_e",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setAimswebPlusAchievementTestPg2(filtered);
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
              <h3 className="mb-1 col-2">Test Results</h3>
              <h4 className="mb-3">Aimsweb Plus Achievement Test</h4>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
              <div className="col-6">
                <Table>
                  <thead className="tableHeader text-center">
                    <tr className="tableBorder">
                      <th className="tdHeaderWidth" colSpan="4">
                        Math
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr>
                      <th scope="row" className="tdWidth"></th>
                      <td className="tdWidth"></td>
                      <td className="tdWidth">IQ</td>
                      <td className="m-0 p-0 tdWidth">
                        <div className="m-0 p-0">National</div>
                        <div className="m-0 p-0">Percentile</div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="rowHeight">
                        Risk
                      </th>
                      <td></td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="aimsweb_plus_achievement_test_pg2_col1_a"
                          name="aimsweb_plus_achievement_test_pg2_col1_a"
                          onChange={handleFieldChange}
                          value={
                            aimswebPlusAchievementTestPg2.aimsweb_plus_achievement_test_pg2_col1_a
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="aimsweb_plus_achievement_test_pg2_col2_a"
                          name="aimsweb_plus_achievement_test_pg2_col2_a"
                          onChange={handleFieldChange}
                          value={
                            aimswebPlusAchievementTestPg2.aimsweb_plus_achievement_test_pg2_col2_a
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="rowHeight">
                        NSF
                      </th>
                      <td className="tdWidth">
                        <div>Number Sense</div>
                        <div>Fluency</div>
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="aimsweb_plus_achievement_test_pg2_col1_b"
                          name="aimsweb_plus_achievement_test_pg2_col1_b"
                          onChange={handleFieldChange}
                          value={
                            aimswebPlusAchievementTestPg2.aimsweb_plus_achievement_test_pg2_col1_b
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="aimsweb_plus_achievement_test_pg2_col2_b"
                          name="aimsweb_plus_achievement_test_pg2_col2_b"
                          onChange={handleFieldChange}
                          value={
                            aimswebPlusAchievementTestPg2.aimsweb_plus_achievement_test_pg2_col2_b
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="rowHeight">
                        NCF-T
                      </th>
                      <td className="tdWidth m-0 p-0">
                        <div>Number</div>
                        <div>Comparison</div>
                        <div>Fluency-Triads</div>
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="aimsweb_plus_achievement_test_pg2_col1_c"
                          name="aimsweb_plus_achievement_test_pg2_col1_c"
                          onChange={handleFieldChange}
                          value={
                            aimswebPlusAchievementTestPg2.aimsweb_plus_achievement_test_pg2_col1_c
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="aimsweb_plus_achievement_test_pg2_col2_c"
                          name="aimsweb_plus_achievement_test_pg2_col2_c"
                          onChange={handleFieldChange}
                          value={
                            aimswebPlusAchievementTestPg2.aimsweb_plus_achievement_test_pg2_col2_c
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="rowHeight">
                        MCF
                      </th>
                      <td className="tdWidth m-0 p-0">
                        <div>Mental</div>
                        <div>Computation</div>
                        <div>Fluency</div>
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="aimsweb_plus_achievement_test_pg2_col1_d"
                          name="aimsweb_plus_achievement_test_pg2_col1_d"
                          onChange={handleFieldChange}
                          value={
                            aimswebPlusAchievementTestPg2.aimsweb_plus_achievement_test_pg2_col1_d
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="aimsweb_plus_achievement_test_pg2_col2_d"
                          name="aimsweb_plus_achievement_test_pg2_col2_d"
                          onChange={handleFieldChange}
                          value={
                            aimswebPlusAchievementTestPg2.aimsweb_plus_achievement_test_pg2_col2_d
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="rowHeight">
                        CA
                      </th>
                      <td className="tdWidth">
                        <div>Concepts &</div>
                        <div>Applications</div>
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="aimsweb_plus_achievement_test_pg2_col1_e"
                          name="aimsweb_plus_achievement_test_pg2_col1_e"
                          onChange={handleFieldChange}
                          value={
                            aimswebPlusAchievementTestPg2.aimsweb_plus_achievement_test_pg2_col1_e
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="aimsweb_plus_achievement_test_pg2_col2_e"
                          name="aimsweb_plus_achievement_test_pg2_col2_e"
                          onChange={handleFieldChange}
                          value={
                            aimswebPlusAchievementTestPg2.aimsweb_plus_achievement_test_pg2_col2_e
                          }
                        />
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
            patientNotes={aimswebPlusAchievementTestPg2}
          />
        </div>
      </div>
    </>
  );
}

export default AimswebPlusAchievementTestPg2;
