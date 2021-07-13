import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import ButtonNavigation from "../../shared/ButtonNavigation";
import DataManager from "../../../data_module/DataManager";
import TermOfParentalRights from "../../shared/TermOfParentalRights";

// pdf page 104

function WasiII(props) {
  const next = "/wechsler_adult_intelligence_scale_IV";
  const back = "/procedures_administered_pg_1";

  const [wasiii, setWasiii] = useState({});
  const [item, setItem] = useState("");


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

  const updatePatient = () => {
    const editedPatient = {
      wasiii_pg1_col1_a: String(wasiii.wasiii_pg1_col1_a || "0"),
      wasiii_pg1_col1_b: String(wasiii.wasiii_pg1_col1_b || "0"),
      wasiii_pg1_col1_c: String(wasiii.wasiii_pg1_col1_c || "0"),
      wasiii_pg1_col1_d: String(wasiii.wasiii_pg1_col1_d || "0"),
      wasiii_pg1_col2_a: String(wasiii.wasiii_pg1_col2_a || "0"),
      wasiii_pg1_col2_b: String(wasiii.wasiii_pg1_col2_b || "0"),
      wasiii_pg1_col2_c: String(wasiii.wasiii_pg1_col2_c || "0"),
      wasiii_pg1_col2_d: String(wasiii.wasiii_pg1_col2_d || "0"),
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setWasiii(props.patientDetails);
    setItem("wasiii_pg1_patientNotes")
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
              <h4>
                Wechsler Abbreviated Scale of Intelligence-Second Edition
                (WASI-II)
              </h4>
            </div>
            <div className="m-5 d-flex flex-wrap justify-content-around">
              <p className="col-4 text-white">
                {" "}
                On the Wechsler Abbreviated Scale of Intelligence-Second Edition
                (WASI-II). {props.patientDetails.patient_first_name} achieved a
                Full Scale IQ Score of [Score Result] which falls in the [Score
                Result Descriptor Correlation] range of intelligence.
              </p>
              <div className="">
                <Table striped>
                  <thead className="tableHeader text-center">
                    <tr className="tableBorder">
                      <th className="tdHeaderWidth">Composite</th>
                      <th className="thWidth"></th>
                      <th className="tdWidth">IQ</th>
                      <th className="">Range</th>
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
                          min={36}
                          max={160}
                          id="wasiii_pg1_col1_a"
                          name="wasiii_pg1_col1_a"
                          onChange={handleFieldChange}
                          value={wasiii.wasiii_pg1_col1_a}
                        />
                      </td>
                      <td className="m-0 p-0">
                        <p className="m-4">
                          {UpdateRange(wasiii.wasiii_pg1_col1_a)}
                        </p>
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
                          min={36}
                          max={160}
                          id="wasiii_pg1_col1_b"
                          name="wasiii_pg1_col1_b"
                          onChange={handleFieldChange}
                          value={wasiii.wasiii_pg1_col1_b}
                        />
                      </td>
                      <td className="m-0 p-0">
                        <p className="m-4">
                          {UpdateRange(wasiii.wasiii_pg1_col1_b)}
                        </p>
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
                          min={36}
                          max={160}
                          id="wasiii_pg1_col1_c"
                          name="wasiii_pg1_col1_c"
                          onChange={handleFieldChange}
                          value={wasiii.wasiii_pg1_col1_c}
                        />
                      </td>
                      <td className="m-0 p-0">
                        <p className="m-4">
                          {UpdateRange(wasiii.wasiii_pg1_col1_c)}
                        </p>
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
                          min={36}
                          max={160}
                          id="wasiii_pg1_col1_d"
                          name="wasiii_pg1_col1_d"
                          onChange={handleFieldChange}
                          value={wasiii.wasiii_pg1_col1_d}
                        />
                      </td>
                      <td className="m-0 p-0">
                        <p className="m-4">
                          {UpdateRange(wasiii.wasiii_pg1_col1_d)}
                        </p>
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

export default WasiII;
