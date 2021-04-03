import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import DataManager from "../../../data_module/DataManager";
//pdf page 116

function ContinuousPerformanceTest3rdEd(props) {
  const [
    patientContinuousPerformanceTest3rdEd,
    setPatientContinuousPerformanceTest3rdEd,
  ] = useState({
    continous_performance_test_3rd_ed_a: "",
    continous_performance_test_3rd_ed_b: false,
    continous_performance_test_3rd_ed_c: false,
    continous_performance_test_3rd_ed_d: false,
    continous_performance_test_3rd_ed_e: false,
    continous_performance_test_3rd_ed_f: false,
    continous_performance_test_3rd_ed_g: false,
    continous_performance_test_3rd_ed_h: false,
    continous_performance_test_3rd_ed_i: false,
  });

  const next = "/computerized_performance_neurocognitive_assessment";
  const back = "/aimsweb_plus_achievement_test_pg_4";

  const handleFieldChange = (e) => {
    const target = e.target;

    setPatientContinuousPerformanceTest3rdEd({
      ...patientContinuousPerformanceTest3rdEd,
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
      continous_performance_test_3rd_ed_a: String(
        patientContinuousPerformanceTest3rdEd.continous_performance_test_3rd_ed_a
      ),
      continous_performance_test_3rd_ed_b:
        patientContinuousPerformanceTest3rdEd.continous_performance_test_3rd_ed_b,
      continous_performance_test_3rd_ed_c:
        patientContinuousPerformanceTest3rdEd.continous_performance_test_3rd_ed_c,
      continous_performance_test_3rd_ed_d:
        patientContinuousPerformanceTest3rdEd.continous_performance_test_3rd_ed_d,
      continous_performance_test_3rd_ed_e:
        patientContinuousPerformanceTest3rdEd.continous_performance_test_3rd_ed_e,
      continous_performance_test_3rd_ed_f:
        patientContinuousPerformanceTest3rdEd.continous_performance_test_3rd_ed_f,
      continous_performance_test_3rd_ed_g:
        patientContinuousPerformanceTest3rdEd.continous_performance_test_3rd_ed_g,
      continous_performance_test_3rd_ed_h:
        patientContinuousPerformanceTest3rdEd.continous_performance_test_3rd_ed_h,
      continous_performance_test_3rd_ed_i:
        patientContinuousPerformanceTest3rdEd.continous_performance_test_3rd_ed_i,
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

      const allowed = [
        "continous_performance_test_3rd_ed_a",
        "continous_performance_test_3rd_ed_b",
        "continous_performance_test_3rd_ed_c",
        "continous_performance_test_3rd_ed_d",
        "continous_performance_test_3rd_ed_e",
        "continous_performance_test_3rd_ed_f",
        "continous_performance_test_3rd_ed_g",
        "continous_performance_test_3rd_ed_h",
        "continous_performance_test_3rd_ed_i",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientContinuousPerformanceTest3rdEd(props.patientDetails);
    });
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
           
          <div className="ml-5 mr-5 mt-3">
            <div className="d-flex flex-wrap text-white align-items-baseline">
              <h3 className=" mb-1 col-2">Test Results</h3>
              <h4>Continuous Performance Test 3rd Edition</h4>
            </div>
            <div className="m-5">
              <p className="text-white">
                {" "}
                The Continuous Performance Test 3rd Edition (CPT 3) is a
                task-oriented computerized assessment of attention-related
                problems in individuals aged eight years and older. By indexing
                the respondent's performance in areas of inattentiveness,
                implusivity, sustained attention, and vigilance the CPT 3 can be
                useful to the process of diagnosing
                Attention-Deficit/Hyperactive Disorder (ADHD) and other
                neurological conditions related to attention. The CPT 3 provides
                objective information about an individual's performance in
                attention tasks, complementing information obtained from
                behavior rating scales.
              </p>
              {/* Left section */}
              <div className="d-flex flex-wrap">
                <div className="col-3 text-white"></div>
                <div className="col-6 text-white">
                  <Label>
                    <h4>Enter CPT 3 Score:</h4>
                  </Label>
                  <input
                    className="fieldData m-3"
                    type="number"
                    id="continous_performance_test_3rd_ed_a"
                    name="continous_performance_test_3rd_ed_a"
                    onChange={handleFieldChange}
                    value={
                      patientContinuousPerformanceTest3rdEd.continous_performance_test_3rd_ed_a
                    }
                  />
                  <h4>Results:</h4>
                  [XXXX]
                  <div className="col-3 text-white"></div>
                </div>

                {/* Left section */}
                <div className="d-flex flex-wrap">
                  <div className="col-6 text-white">
                    <p>
                      {props.patientDetails.patient_first_name} has a total of [X] atypical
                      T-scores, which falls is associated with a (very high [OR]
                      moderate) likelihood of having a disorder characterized by
                      attention deficits, such as ADHD. (Patient's name) profile
                      of scores and response pattern indicate he/she may have
                      issues related to:{" "}
                    </p>

                    <div className="">
                      <div className="text-white">
                        <input
                          className="m-2"
                          type="checkbox"
                          id="continous_performance_test_3rd_ed_b"
                          name="continous_performance_test_3rd_ed_b"
                          checked={
                            patientContinuousPerformanceTest3rdEd.continous_performance_test_3rd_ed_b
                          }
                          onChange={handleFieldChange}
                        />
                        <Label>Inattentiveness</Label>
                      </div>
                      <div className="text-white">
                        <input
                          className="m-2"
                          type="checkbox"
                          id="continous_performance_test_3rd_ed_c"
                          name="continous_performance_test_3rd_ed_c"
                          checked={
                            patientContinuousPerformanceTest3rdEd.continous_performance_test_3rd_ed_c
                          }
                          onChange={handleFieldChange}
                        />
                        <Label for="">Sustained Attention</Label>
                      </div>
                      <div className="text-white">
                        <input
                          className="m-2"
                          type="checkbox"
                          id="continous_performance_test_3rd_ed_d"
                          name="continous_performance_test_3rd_ed_d"
                          checked={
                            patientContinuousPerformanceTest3rdEd.continous_performance_test_3rd_ed_d
                          }
                          onChange={handleFieldChange}
                        />
                        <Label for="">Vigilance</Label>
                      </div>
                    </div>
                  </div>
                  {/* Right section */}
                  <div className="col-6 text-white">
                    <div className="">
                      <div className="text-white d-flex flex-row">
                        <input
                          className="m-2"
                          type="checkbox"
                          id="continous_performance_test_3rd_ed_e"
                          name="continous_performance_test_3rd_ed_e"
                          checked={
                            patientContinuousPerformanceTest3rdEd.continous_performance_test_3rd_ed_e
                          }
                          onChange={handleFieldChange}
                        />
                        <p>
                          Patient does not meet ADHD criteria on this test.
                          Check this box to add the following paragraph to the
                          report: Although there is no pervasive pattern of
                          atypical scores, (Patient’s name)’s response pattern
                          indicates a possible issue with one or more specific
                          dimensions of attention: Overall, the results do not
                          suggest that (Patient’s Name) has a disorder
                          characterized by attention deficits such as ADHD.
                        </p>
                      </div>
                      <div>
                        <div className="text-white d-flex flex-row">
                          <input
                            className="m-2"
                            type="checkbox"
                            id="continous_performance_test_3rd_ed_f"
                            name="continous_performance_test_3rd_ed_f"
                            checked={
                              patientContinuousPerformanceTest3rdEd.continous_performance_test_3rd_ed_f
                            }
                            onChange={handleFieldChange}
                          />
                          <p>
                            Although there is no pervasive pattern of atypical
                            scores, (Patient’s name)’s response pattern
                            indicates a possible issue with one or more specific
                            dimensions of attention:
                            <div className="">
                              <div className="text-white">
                                <input
                                  className="m-2"
                                  type="checkbox"
                                  id="continous_performance_test_3rd_ed_g"
                                  name="continous_performance_test_3rd_ed_g"
                                  checked={
                                    patientContinuousPerformanceTest3rdEd.continous_performance_test_3rd_ed_g
                                  }
                                  onChange={handleFieldChange}
                                />
                                <Label>Inattentiveness</Label>
                              </div>
                              <div className="text-white">
                                <input
                                  className="m-2"
                                  type="checkbox"
                                  id="continous_performance_test_3rd_ed_h"
                                  name="continous_performance_test_3rd_ed_h"
                                  checked={
                                    patientContinuousPerformanceTest3rdEd.continous_performance_test_3rd_ed_h
                                  }
                                  onChange={handleFieldChange}
                                />
                                <Label for="">Sustained Attention</Label>
                              </div>
                              <div className="text-white">
                                <input
                                  className="m-2"
                                  type="checkbox"
                                  id="continous_performance_test_3rd_ed_i"
                                  name="continous_performance_test_3rd_ed_i"
                                  checked={
                                    patientContinuousPerformanceTest3rdEd.continous_performance_test_3rd_ed_i
                                  }
                                  onChange={handleFieldChange}
                                />
                                <Label for="">Vigilance</Label>
                              </div>
                            </div>
                          </p>
                        </div>
                      </div>
                      {/* <div className="">
                        <div className="text-white">
                          <input
                            className="m-2"
                            type="checkbox"
                            id="continous_performance_test_3rd_ed_g"
                            name="continous_performance_test_3rd_ed_g"
                            checked={
                              patientContinuousPerformanceTest3rdEd.continous_performance_test_3rd_ed_g
                            }
                            onChange={handleFieldChange}
                          />
                          <Label>Inattentiveness</Label>
                        </div>
                        <div className="text-white">
                          <input
                            className="m-2"
                            type="checkbox"
                            id="continous_performance_test_3rd_ed_h"
                            name="continous_performance_test_3rd_ed_h"
                            checked={
                              patientContinuousPerformanceTest3rdEd.continous_performance_test_3rd_ed_h
                            }
                            onChange={handleFieldChange}
                          />
                          <Label for="">Sustained Attention</Label>
                        </div>
                        <div className="text-white">
                          <input
                            className="m-2"
                            type="checkbox"
                            id="continous_performance_test_3rd_ed_i"
                            name="continous_performance_test_3rd_ed_i"
                            checked={
                              patientContinuousPerformanceTest3rdEd.continous_performance_test_3rd_ed_i
                            }
                            onChange={handleFieldChange}
                          />
                          <Label for="">Vigilance</Label>
                        </div>
                      </div> */}
                    </div>
                  </div>
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
              patientNotes={patientContinuousPerformanceTest3rdEd}
            />
            <TermOfParentalRights />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContinuousPerformanceTest3rdEd;
