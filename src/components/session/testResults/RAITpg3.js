import React, { useState, useEffect } from "react";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import DataManager from "../../../data_module/DataManager";
// pdf page 109

function RAITpg3(props) {
  const [patientRAITpg3, setPatientRAITpg3] = useState({});

  const next = "/rait_pg_4";
  const back = "/rait_pg_2";

  const handleFieldChange = (e) => {
    setPatientRAITpg3({
      ...patientRAITpg3,
      [e.target.name]:
        e.target.type === "number" ? parseInt(e.target.value) : e.target.value,
    });
  };
  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      rait_pg3_a: String(patientRAITpg3.rait_pg3_a || "0"),
    };

    DataManager.update("patients", editedPatient).then(() => props.getData());
  };

  //CRUD Function END

  const getData = () => {
    setPatientRAITpg3(props.patientDetails);
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
            <div className="m-5 d-flex flex-wrap justify-content-around">
              <p className="text-white">
                {" "}
                The RAIT is composed of seven subtests that assess crystallized
                intelligence, fluid intelligence, and quantitative aptitude or
                intelligence. It is designed to provide continuity of
                measurement across a wide age span. The RAIT requires minimal
                reading skills and almost no motor coordination and visual-motor
                skill, reducing the complications that can occur when
                manipulated objects (e.g. blocks) are used to assess
                intelligence.{" "}
              </p>
              {/* Left section */}
              <div className="d-flex flex-wrap">
                <div className="col-3 text-white"></div>
                <div className="col-6 text-white">
                  <h4>Quantitative Intelligence Index (QII)</h4>
                  <p>
                    {" "}
                    Assesses both crystallized and fluid aspects of quantitative
                    reasoning using two subtests: Quantitative Knowledge and
                    Quantitative Reasoning.
                  </p>
                  <label>
                    <h4>Enter QII Score:</h4>
                  </label>
                  <input
                    className="fieldData m-3"
                    type="number"
                    name="rait_pg3_a"
                    onChange={handleFieldChange}
                    value={patientRAITpg3.rait_pg3_a}
                  />
                  <h4>Results:</h4>
                  <p>
                    {props.patientDetails.patient_first_name} earned a TBII of
                    [TBII Score], which falls in the [Score Result Descriptor
                    Correlation] range of intelligence. On the RAIT, this level
                    of performance falls within the range of scores designated
                    as [Score Result Placement Descriptor] and exceeds te
                    performance of [Score Result Percentage] of individuals at{" "}
                    {props.patientDetails.patient_first_name}
                    [Patient Name, Last]'s age.
                  </p>
                </div>
                <div className="col-3 text-white"></div>
              </div>
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation
              next={next}
              back={back}
              updatePatient={updatePatient}
              patient={props.patientId}
              patientNotes={patientRAITpg3}
            />
            <TermOfParentalRights />
          </div>
        </div>
      </div>
    </>
  );
}

export default RAITpg3;
