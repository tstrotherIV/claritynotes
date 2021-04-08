import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import ButtonNavigation from "../../shared/ButtonNavigation";
import DataManager from "../../../data_module/DataManager";

// pdf page 110

function RAITPg4(props) {
  const [rait4, setRait4] = useState({});

  const next = "/wide_range_achievement_test_5";
  const back = "/rait_pg_3";

  const handleFieldChange = (e) => {
    const target = e.target;
    setRait4({
      ...rait4,
      [target.name]: parseInt(target.value),
    });
  };

  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      rait_pg4_col1_a: String(rait4.rait_pg4_col1_a || "0"),
      rait_pg4_col1_b: String(rait4.rait_pg4_col1_b || "0"),
      rait_pg4_col1_c: String(rait4.rait_pg4_col1_c || "0"),
      rait_pg4_col2_a: String(rait4.rait_pg4_col2_a || "0"),
      rait_pg4_col2_b: String(rait4.rait_pg4_col2_b || "0"),
      rait_pg4_col2_c: String(rait4.rait_pg4_col2_c || "0"),
      rait_pg4_col3_a: String(rait4.rait_pg4_col3_a || "0"),
      rait_pg4_col3_b: String(rait4.rait_pg4_col3_b || "0"),
      rait_pg4_col3_c: String(rait4.rait_pg4_col3_c || "0"),
      rait_pg4_col4_a: String(rait4.rait_pg4_col4_a || "0"),
      rait_pg4_col4_b: String(rait4.rait_pg4_col4_b || "0"),
      rait_pg4_col4_c: String(rait4.rait_pg4_col4_c || "0"),
      rait_pg4_col5_a: String(rait4.rait_pg4_col5_a || "0"),
      rait_pg4_col5_b: String(rait4.rait_pg4_col5_b || "0"),
      rait_pg4_col5_c: String(rait4.rait_pg4_col5_c || "0"),
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setRait4(props.patientDetails);
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
              <h4>Reynolds Adaptable Intelligence Test (RAIT)</h4>
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
                          name="rait_pg4_col1_a"
                          onChange={handleFieldChange}
                          value={rait4.rait_pg4_col1_a}
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="rait_pg4_col2_a"
                          name="rait_pg4_col2_a"
                          onChange={handleFieldChange}
                          value={rait4.rait_pg4_col2_a}
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="rait_pg4_col3_a"
                          name="rait_pg4_col3_a"
                          onChange={handleFieldChange}
                          value={rait4.rait_pg4_col3_a}
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="rait_pg4_col4_a"
                          name="rait_pg4_col4_a"
                          onChange={handleFieldChange}
                          value={rait4.rait_pg4_col4_a}
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="rait_pg4_col5_a"
                          name="rait_pg4_col5_a"
                          onChange={handleFieldChange}
                          value={rait4.rait_pg4_col5_a}
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
                          id="rait_pg4_col1_b"
                          name="rait_pg4_col1_b"
                          onChange={handleFieldChange}
                          value={rait4.rait_pg4_col1_b}
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={100}
                          type="number"
                          id="rait_pg4_col2_b"
                          name="rait_pg4_col2_b"
                          onChange={handleFieldChange}
                          value={rait4.rait_pg4_col2_b}
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={100}
                          type="number"
                          id="rait_pg4_col3_b"
                          name="rait_pg4_col3_b"
                          onChange={handleFieldChange}
                          value={rait4.rait_pg4_col3_b}
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={100}
                          type="number"
                          id="rait_pg4_col4_b"
                          name="rait_pg4_col4_b"
                          onChange={handleFieldChange}
                          value={rait4.rait_pg4_col4_b}
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={100}
                          type="number"
                          id="rait_pg4_col5_b"
                          name="rait_pg4_col5_b"
                          onChange={handleFieldChange}
                          value={rait4.rait_pg4_col5_b}
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
                          id="rait_pg4_col1_c"
                          name="rait_pg4_col1_c"
                          onChange={handleFieldChange}
                          value={rait4.rait_pg4_col1_c}
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="rait_pg4_col2_c"
                          name="rait_pg4_col2_c"
                          onChange={handleFieldChange}
                          value={rait4.rait_pg4_col2_c}
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="rait_pg4_col3_c"
                          name="rait_pg4_col3_c"
                          onChange={handleFieldChange}
                          value={rait4.rait_pg4_col3_c}
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="rait_pg4_col4_c"
                          name="rait_pg4_col4_c"
                          onChange={handleFieldChange}
                          value={rait4.rait_pg4_col4_c}
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          type="number"
                          min={0}
                          max={10}
                          id="rait_pg4_col5_c"
                          name="rait_pg4_col5_c"
                          onChange={handleFieldChange}
                          value={rait4.rait_pg4_col5_c}
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
              patientNotes={rait4}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default RAITPg4;
