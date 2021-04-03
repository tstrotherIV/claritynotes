import React, { useState, useEffect } from "react";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import DataManager from "../../../data_module/DataManager";
import convertID from "../../../helpers/formFieldIdConverter";
// pdf page 108

function RAITpg2(props) {
  const [item, setItem] = useState("");
  const [patientRAITpg2, setPatientRAITpg2] = useState({
    rait_pg2_a: "",
    rait_pg2_b: "",
  });

  const next = "/rait_pg_3";
  const back = "/rait_pg_1";

  const handleFieldChange = (e) => {
    setPatientRAITpg2({
      ...patientRAITpg2,
      [e.target.name]:
        e.target.type === "number" ? parseInt(e.target.value) : e.target.value,
    });
  };

  const convertIDfunc = (e) => {
    const fieldID = convertID.convertID(e);
    setItem(fieldID);
  };

  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      rait_pg2_a: String(patientRAITpg2.rait_pg2_a),
      rait_pg2_b: String(patientRAITpg2.rait_pg2_b),
    };

    DataManager.update("patients", editedPatient).then(() => {props.getData()});
  };

  //CRUD Function END

  const getData = () => {
    const check_for_patient = sessionStorage.getItem("patient_id");

    DataManager.getPatient(check_for_patient).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = ["rait_pg2_a", "rait_pg2_b"];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientRAITpg2(props.patientDetails);
    });
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
            <div className="m-5 d-flex flex-wrap justify-content-around align-content-center">
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
                  <h4>Crystallized Intelligence Index (CII)</h4>
                  <p></p>
                  <label>
                    {" "}
                    <h4>Enter CII Score:</h4>
                  </label>
                  <input
                    className="fieldData m-3"
                    type="number"
                    id={item}
                    name="rait_pg2_a"
                    onChange={handleFieldChange}
                    value={patientRAITpg2.rait_pg2_a}
                  />
                  <h4>Results:</h4>
                  <p>
                    {props.patientDetails.patient_first_name} earned a CII of [CII Score], which
                    falls in the [Score Result Descriptor Correlation] range of
                    intelligence. On the RAIT, this level of performance falls
                    within the range of scores designated as [Score Result
                    Placement Descriptor] and exceeds te performance of [Score
                    Result Percentage] of individuals at {props.patientDetails.patient_first_name}
                    [Patient Name, Last]'s age.
                  </p>
                </div>
                {/* Right section */}
                <div className="col-6 text-white">
                  <h4>Fluid Intelligence Index(FII)</h4>
                  <p className="text-white">
                    Provides a summary index of fluid intelligence (i.e. problem
                    solving in the absence of requisite factual knowledge)
                    assessed through nonverbal reasoning tasks and tends to
                    invoke deductive rather than inductive reasoning.
                  </p>
                  <label>
                    <h4>Enter FII Score:</h4>
                  </label>
                  <input
                    className="fieldData m-3"
                    type="number"
                    id={item}
                    name="rait_pg2_b"
                    onChange={handleFieldChange}
                    value={patientRAITpg2.rait_pg2_b}
                  />
                  <h4>Results:</h4>
                  <p>
                    {props.patientDetails.patient_first_name} earned a FII of [FII Score], which
                    falls in the [Score Result Descriptor Correlation] range of
                    intelligence. On the RAIT, this level of performance falls
                    within the range of scores designated as [Score Result
                    Placement Descriptor] and exceeds the performance of [Score
                    Result Percentage] of individuals at {props.patientDetails.patient_first_name}
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
              patientNotes={patientRAITpg2}
            />
            <TermOfParentalRights />
          </div>
        </div>
      </div>
    </>
  );
}

export default RAITpg2;
