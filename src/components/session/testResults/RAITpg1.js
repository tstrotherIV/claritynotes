import React, { useState, useEffect } from "react";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import DataManager from "../../../data_module/DataManager";
// pdf page 107

function RAITpg1(props) {
  const [item, setItem] = useState("");
  const [patientRAITpg1, setPatientRAITpg1] = useState({
    rait_pg1_a: "",
    rait_pg1_b: "",
  });

  const next = "/rait_pg_2";
  const back = "/shipley_intelligence_assessment_2";

  const handleFieldChange = (e) => {
    setPatientRAITpg1({
      ...patientRAITpg1,
      [e.target.name]:
        e.target.type === "number" ? parseInt(e.target.value) : e.target.value,
    });
  };



  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      rait_pg1_a: String(patientRAITpg1.rait_pg1_a),
      rait_pg1_b: String(patientRAITpg1.rait_pg1_b),
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    const check_for_patient = sessionStorage.getItem("patient_id");

    DataManager.getPatient(check_for_patient).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = ["rait_pg1_a", "rait_pg1_b"];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientRAITpg1(filtered);
    });
  };

  useEffect(() => {
    getData();
  }, []);

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
                <div className="col-6 text-white">
                  <h4>Total Battery Intelligence Index (TBII)</h4>
                  <p>
                    Provides a summary of general intelligence, or g, derived
                    from the administration of all seven RAIT subtests.
                  </p>
                  <label>
                    <h4>Enter TBII Score:</h4>
                  </label>
                  <input
                    className="fieldData m-3"
                    type="number"
                    id={item}
                    name="rait_pg1_a"
                    onChange={handleFieldChange}
                    value={patientRAITpg1.rait_pg1_a}
                  />
                  <h4>Results:</h4>
                  <p>
                    {props.patientName.patient_first_name} earned a TBII of [TBII Score], which
                    falls in the [Score Result Descriptor Correlation] range of
                    intelligence. On the RAIT, this level of performance falls
                    within the range of scores designated as [Score Result
                    Placement Descriptor] and exceeds te performance of [Score
                    Result Percentage] of individuals at {props.patientName.patient_first_name}
                    [Patient Name, Last]'s age.
                  </p>
                </div>
                {/* Right section */}
                <div className="col-6 text-white">
                  <h4>Total Intelligence Index (TII)</h4>
                  <p className="text-white">
                    Provides a summary of general intelligence, or g, derived
                    from the administration of all seven RAIT subtests.
                  </p>
                  <label>
                    <h4>Enter TII Score:</h4>
                  </label>
                  <input
                    className="fieldData m-3"
                    type="number"
                    id={item}
                    name="rait_pg1_b"
                    onChange={handleFieldChange}
                    value={patientRAITpg1.rait_pg1_b}
                  />
                  <h4>Results:</h4>
                  <p>
                    {props.patientName.patient_first_name} earned a TII of [TII Score], which
                    falls in the [Score Result Descriptor Correlation] range of
                    intelligence. On the RAIT, this level of performance falls
                    within the range of scores designated as [Score Result
                    Placement Descriptor] and exceeds the performance of [Score
                    Result Percentage] of individuals at {props.patientName.patient_first_name}
                    [Patient Name, Last]'s age.
                  </p>
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
              patientNotes={patientRAITpg1}
            />
            <TermOfParentalRights />
          </div>
        </div>
      </div>
    </>
  );
}

export default RAITpg1;
