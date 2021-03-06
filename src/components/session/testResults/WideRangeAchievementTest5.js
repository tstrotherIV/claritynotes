import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import ButtonNavigation from "../../shared/ButtonNavigation";
import DataManager from "../../../data_module/DataManager";
import TermOfParentalRights from "../../shared/TermOfParentalRights";

// pdf page 112

function WideRangeAchievementTest5(props) {
  const next = "/aimsweb_plus_achievement_test_pg_1";
  const back = "/rait_pg_2";

  const [wideRangeAchievementTest5, setWideRangeAchievementTest5] = useState(
    {}
  );
  const [item, setItem] = useState("");

  const handleFieldChange = (e) => {
    const target = e.target;

    setWideRangeAchievementTest5({
      ...wideRangeAchievementTest5,
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
      wide_range_achievement_test_5_pg1_col1_a: String(
        wideRangeAchievementTest5.wide_range_achievement_test_5_pg1_col1_a ||
          "0"
      ),
      wide_range_achievement_test_5_pg1_col1_b: String(
        wideRangeAchievementTest5.wide_range_achievement_test_5_pg1_col1_b ||
          "0"
      ),
      wide_range_achievement_test_5_pg1_col1_c: String(
        wideRangeAchievementTest5.wide_range_achievement_test_5_pg1_col1_c ||
          "0"
      ),
      wide_range_achievement_test_5_pg1_col1_d: String(
        wideRangeAchievementTest5.wide_range_achievement_test_5_pg1_col1_d ||
          "0"
      ),
      wide_range_achievement_test_5_pg1_col1_e: String(
        wideRangeAchievementTest5.wide_range_achievement_test_5_pg1_col1_e ||
          "0"
      ),
      wide_range_achievement_test_5_pg1_col2_a: String(
        wideRangeAchievementTest5.wide_range_achievement_test_5_pg1_col2_a ||
          "0"
      ),
      wide_range_achievement_test_5_pg1_col2_b: String(
        wideRangeAchievementTest5.wide_range_achievement_test_5_pg1_col2_b ||
          "0"
      ),
      wide_range_achievement_test_5_pg1_col2_c: String(
        wideRangeAchievementTest5.wide_range_achievement_test_5_pg1_col2_c ||
          "0"
      ),
      wide_range_achievement_test_5_pg1_col2_d: String(
        wideRangeAchievementTest5.wide_range_achievement_test_5_pg1_col2_d ||
          "0"
      ),
      wide_range_achievement_test_5_pg1_col2_e: String(
        wideRangeAchievementTest5.wide_range_achievement_test_5_pg1_col2_e ||
          "0"
      ),
      wide_range_achievement_test_5_pg1_col3_a: String(
        wideRangeAchievementTest5.wide_range_achievement_test_5_pg1_col3_a ||
          "0"
      ),
      wide_range_achievement_test_5_pg1_col3_b: String(
        wideRangeAchievementTest5.wide_range_achievement_test_5_pg1_col3_b ||
          "0"
      ),
      wide_range_achievement_test_5_pg1_col3_c: String(
        wideRangeAchievementTest5.wide_range_achievement_test_5_pg1_col3_c ||
          "0"
      ),
      wide_range_achievement_test_5_pg1_col3_d: String(
        wideRangeAchievementTest5.wide_range_achievement_test_5_pg1_col3_d ||
          "0"
      ),
      wide_range_achievement_test_5_pg1_col3_e: String(
        wideRangeAchievementTest5.wide_range_achievement_test_5_pg1_col3_e ||
          "0"
      ),
    };

    DataManager.update("patients", editedPatient).then(() => props.getData());
  };

  //CRUD Function END

  const getData = () => {
    setWideRangeAchievementTest5(props.patientDetails);
    setItem("wide_range_achievement_test_5_pg1_patientNotes");
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
              <h4>Wide Range Achievement Test-5</h4>
            </div>
            <div className="m-5 d-flex flex-wrap justify-content-around">
              <div className="col-6">
                <Table striped>
                  <thead className="tableHeader text-center">
                    <tr className="tableBorder">
                      <th className="tdHeaderWidth"></th>
                      <th className="tdWidth">IQ</th>
                      <th className="tdWidth">Better Than Percentile</th>
                      <th className="tdWidth">Grade Equivalent</th>
                    </tr>
                  </thead>
                  <tbody className="text-center col-6">
                    <tr>
                      <th scope="row" className="rowHeight">
                        Math Computation
                      </th>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="wide_range_achievement_test_5_pg1_col1_a"
                          name="wide_range_achievement_test_5_pg1_col1_a"
                          onChange={handleFieldChange}
                          value={
                            wideRangeAchievementTest5.wide_range_achievement_test_5_pg1_col1_a
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="wide_range_achievement_test_5_pg1_col2_a"
                          name="wide_range_achievement_test_5_pg1_col2_a"
                          onChange={handleFieldChange}
                          value={
                            wideRangeAchievementTest5.wide_range_achievement_test_5_pg1_col2_a
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="wide_range_achievement_test_5_pg1_col3_a"
                          name="wide_range_achievement_test_5_pg1_col3_a"
                          onChange={handleFieldChange}
                          value={
                            wideRangeAchievementTest5.wide_range_achievement_test_5_pg1_col3_a
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="rowHeight">
                        Spelling
                      </th>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="wide_range_achievement_test_5_pg1_col1_b"
                          name="wide_range_achievement_test_5_pg1_col1_b"
                          onChange={handleFieldChange}
                          value={
                            wideRangeAchievementTest5.wide_range_achievement_test_5_pg1_col1_b
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="wide_range_achievement_test_5_pg1_col2_b"
                          name="wide_range_achievement_test_5_pg1_col2_b"
                          onChange={handleFieldChange}
                          value={
                            wideRangeAchievementTest5.wide_range_achievement_test_5_pg1_col2_b
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="wide_range_achievement_test_5_pg1_col3_b"
                          name="wide_range_achievement_test_5_pg1_col3_b"
                          onChange={handleFieldChange}
                          value={
                            wideRangeAchievementTest5.wide_range_achievement_test_5_pg1_col3_b
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="rowHeight">
                        Word Reading
                      </th>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="wide_range_achievement_test_5_pg1_col1_c"
                          name="wide_range_achievement_test_5_pg1_col1_c"
                          onChange={handleFieldChange}
                          value={
                            wideRangeAchievementTest5.wide_range_achievement_test_5_pg1_col1_c
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="wide_range_achievement_test_5_pg1_col2_c"
                          name="wide_range_achievement_test_5_pg1_col2_c"
                          onChange={handleFieldChange}
                          value={
                            wideRangeAchievementTest5.wide_range_achievement_test_5_pg1_col2_c
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="wide_range_achievement_test_5_pg1_col3_c"
                          name="wide_range_achievement_test_5_pg1_col3_c"
                          onChange={handleFieldChange}
                          value={
                            wideRangeAchievementTest5.wide_range_achievement_test_5_pg1_col3_c
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="rowHeight">
                        Sentence Comprehension
                      </th>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="wide_range_achievement_test_5_pg1_col1_d"
                          name="wide_range_achievement_test_5_pg1_col1_d"
                          onChange={handleFieldChange}
                          value={
                            wideRangeAchievementTest5.wide_range_achievement_test_5_pg1_col1_d
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="wide_range_achievement_test_5_pg1_col2_d"
                          name="wide_range_achievement_test_5_pg1_col2_d"
                          onChange={handleFieldChange}
                          value={
                            wideRangeAchievementTest5.wide_range_achievement_test_5_pg1_col2_d
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="wide_range_achievement_test_5_pg1_col3_d"
                          name="wide_range_achievement_test_5_pg1_col3_d"
                          onChange={handleFieldChange}
                          value={
                            wideRangeAchievementTest5.wide_range_achievement_test_5_pg1_col3_d
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="rowHeight">
                        Reading Comprehension
                      </th>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="wide_range_achievement_test_5_pg1_col1_e"
                          name="wide_range_achievement_test_5_pg1_col1_e"
                          onChange={handleFieldChange}
                          value={
                            wideRangeAchievementTest5.wide_range_achievement_test_5_pg1_col1_e
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="wide_range_achievement_test_5_pg1_col2_e"
                          name="wide_range_achievement_test_5_pg1_col2_e"
                          onChange={handleFieldChange}
                          value={
                            wideRangeAchievementTest5.wide_range_achievement_test_5_pg1_col2_e
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="wide_range_achievement_test_5_pg1_col3_e"
                          name="wide_range_achievement_test_5_pg1_col3_e"
                          onChange={handleFieldChange}
                          value={
                            wideRangeAchievementTest5.wide_range_achievement_test_5_pg1_col3_e
                          }
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="col-6 text-white">
                <h5>Results:</h5>
                <p className="text-white">
                  {" "}
                  On the Wide Range Achievement Test-Revision 5 (WRAT-5).
                  {props.patientDetails.patient_first_name} [Patient Name,
                  Last]'s math computation standard scores fell on a [Result
                  Grade Level] grade level, spelling on a [Result Grade Level]
                  grade level, and sentence comprehension on a [Result Grade
                  Level] grade level.
                </p>
              </div>
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation
              next={next}
              back={back}
              updatePatient={updatePatient}
              patient={props.patientId}
              patientNotes={wideRangeAchievementTest5}
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

export default WideRangeAchievementTest5;
