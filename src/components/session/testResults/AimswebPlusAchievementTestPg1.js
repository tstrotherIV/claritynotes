import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import ButtonNavigation from "../../shared/ButtonNavigation";
import DataManager from "../../../data_module/DataManager";
import TermOfParentalRights from "../../shared/TermOfParentalRights";

// pdf page 112

function AimswebPlusAchievementTestPg1(props) {
  const next = "/aimsweb_plus_achievement_test_pg_2";
  const back = "/wide_range_achievement_test_5";

  const [item, setItem] = useState("");

  const [aimswebPlusAchievementTestPg1, setAimswebPlusAchievementTestPg1] =
    useState({});

  const handleFieldChange = (e) => {
    const target = e.target;

    setAimswebPlusAchievementTestPg1({
      ...aimswebPlusAchievementTestPg1,
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
      aimsweb_plus_achievement_test_pg1_col1_a: String(
        aimswebPlusAchievementTestPg1.aimsweb_plus_achievement_test_pg1_col1_a ||
          "0"
      ),
      aimsweb_plus_achievement_test_pg1_col1_b: String(
        aimswebPlusAchievementTestPg1.aimsweb_plus_achievement_test_pg1_col1_b ||
          "0"
      ),
      aimsweb_plus_achievement_test_pg1_col1_c: String(
        aimswebPlusAchievementTestPg1.aimsweb_plus_achievement_test_pg1_col1_c ||
          "0"
      ),
      aimsweb_plus_achievement_test_pg1_col1_d: String(
        aimswebPlusAchievementTestPg1.aimsweb_plus_achievement_test_pg1_col1_d ||
          "0"
      ),
      aimsweb_plus_achievement_test_pg1_col1_e: String(
        aimswebPlusAchievementTestPg1.aimsweb_plus_achievement_test_pg1_col1_e ||
          "0"
      ),
      aimsweb_plus_achievement_test_pg1_col2_a: String(
        aimswebPlusAchievementTestPg1.aimsweb_plus_achievement_test_pg1_col2_a ||
          "0"
      ),
      aimsweb_plus_achievement_test_pg1_col2_b: String(
        aimswebPlusAchievementTestPg1.aimsweb_plus_achievement_test_pg1_col2_b ||
          "0"
      ),
      aimsweb_plus_achievement_test_pg1_col2_c: String(
        aimswebPlusAchievementTestPg1.aimsweb_plus_achievement_test_pg1_col2_c ||
          "0"
      ),
      aimsweb_plus_achievement_test_pg1_col2_d: String(
        aimswebPlusAchievementTestPg1.aimsweb_plus_achievement_test_pg1_col2_d ||
          "0"
      ),
      aimsweb_plus_achievement_test_pg1_col2_e: String(
        aimswebPlusAchievementTestPg1.aimsweb_plus_achievement_test_pg1_col2_e ||
          "0"
      ),
    };

    DataManager.update("patients", editedPatient).then(() => props.getData());
  };

  //CRUD Function END

  const getData = () => {
    setAimswebPlusAchievementTestPg1(props.patientDetails);
    setItem("aimsweb_plus_achievement_test_pg1");
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
              <h4>Aimsweb Plus Achievement Test</h4>
            </div>
            <div className="m-1 d-flex flex-wrap justify-content-around text-white">
              <div className="d-flex flex-wrap">
                <div className="col-2"></div>
                <div className="col-8">
                  <p className="">
                    Aimsweb Plus is an achievement test which screens and
                    monitors the reading and math skills from PreK-12 education.
                    This instrument is nationally stardardized and has
                    demonstrated utility in identifying learning deficits,
                    at-risk, students, and individualized strengths and
                    weaknesses.
                  </p>
                  <div className="col-2"></div>
                </div>
              </div>
              <div>
                <Table striped>
                  <thead className="tableHeader text-center">
                    <tr className="tableBorder">
                      <th className="tdHeaderWidth" colSpan="4">
                        Reading
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
                          id="aimsweb_plus_achievement_test_pg1_col1_a"
                          name="aimsweb_plus_achievement_test_pg1_col1_a"
                          onChange={handleFieldChange}
                          value={
                            aimswebPlusAchievementTestPg1.aimsweb_plus_achievement_test_pg1_col1_a
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="aimsweb_plus_achievement_test_pg1_col2_a"
                          name="aimsweb_plus_achievement_test_pg1_col2_a"
                          onChange={handleFieldChange}
                          value={
                            aimswebPlusAchievementTestPg1.aimsweb_plus_achievement_test_pg1_col2_a
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="rowHeight">
                        VO
                      </th>
                      <td>Vocabulary</td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="aimsweb_plus_achievement_test_pg1_col1_b"
                          name="aimsweb_plus_achievement_test_pg1_col1_b"
                          onChange={handleFieldChange}
                          value={
                            aimswebPlusAchievementTestPg1.aimsweb_plus_achievement_test_pg1_col1_b
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="aimsweb_plus_achievement_test_pg1_col2_b"
                          name="aimsweb_plus_achievement_test_pg1_col2_b"
                          onChange={handleFieldChange}
                          value={
                            aimswebPlusAchievementTestPg1.aimsweb_plus_achievement_test_pg1_col2_b
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="rowHeight">
                        SFC
                      </th>
                      <td className="tdWidth">
                        <div>Silent Reading</div>
                        <div>Fluency</div>
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="aimsweb_plus_achievement_test_pg1_col1_c"
                          name="aimsweb_plus_achievement_test_pg1_col1_c"
                          onChange={handleFieldChange}
                          value={
                            aimswebPlusAchievementTestPg1.aimsweb_plus_achievement_test_pg1_col1_c
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="aimsweb_plus_achievement_test_pg1_col2_c"
                          name="aimsweb_plus_achievement_test_pg1_col2_c"
                          onChange={handleFieldChange}
                          value={
                            aimswebPlusAchievementTestPg1.aimsweb_plus_achievement_test_pg1_col2_c
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="rowHeight">
                        RC
                      </th>
                      <td className="tdWidth">
                        <div>Reading</div>
                        <div>Comprehension</div>
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="aimsweb_plus_achievement_test_pg1_col1_d"
                          name="aimsweb_plus_achievement_test_pg1_col1_d"
                          onChange={handleFieldChange}
                          value={
                            aimswebPlusAchievementTestPg1.aimsweb_plus_achievement_test_pg1_col1_d
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="aimsweb_plus_achievement_test_pg1_col2_d"
                          name="aimsweb_plus_achievement_test_pg1_col2_d"
                          onChange={handleFieldChange}
                          value={
                            aimswebPlusAchievementTestPg1.aimsweb_plus_achievement_test_pg1_col2_d
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="rowHeight">
                        ORF
                      </th>
                      <td className="tdWidth">
                        <div>Oral Reading</div>
                        <div>Fluency</div>
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="aimsweb_plus_achievement_test_pg1_col1_e"
                          name="aimsweb_plus_achievement_test_pg1_col1_e"
                          onChange={handleFieldChange}
                          value={
                            aimswebPlusAchievementTestPg1.aimsweb_plus_achievement_test_pg1_col1_e
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="aimsweb_plus_achievement_test_pg1_col2_e"
                          name="aimsweb_plus_achievement_test_pg1_col2_e"
                          onChange={handleFieldChange}
                          value={
                            aimswebPlusAchievementTestPg1.aimsweb_plus_achievement_test_pg1_col2_e
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
              patientNotes={aimswebPlusAchievementTestPg1}
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

export default AimswebPlusAchievementTestPg1;
