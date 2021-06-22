import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import DataManager from "../../../data_module/DataManager";
//pdf page 116

function ContinuousPerformanceTest3rdEd(props) {
  const [
    patientContinuousPerformanceTest3rdEd,
    setPatientContinuousPerformanceTest3rdEd,
  ] = useState({});

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
        patientContinuousPerformanceTest3rdEd.continous_performance_test_3rd_ed_a ||
          "0"
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

    DataManager.update("patients", editedPatient).then(() => props.getData());
  };

  //CRUD Function END

  const getData = () => {
    setPatientContinuousPerformanceTest3rdEd(props.patientDetails);
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
              <h4>Continuous Performance Test 3rd Edition</h4>
            </div>
            <div className="m-5">
              <div className="d-flex flex-wrap">
                {/* Left section */}
                <div className="d-flex flex-wrap">
                  <div className="col-6 text-white">
                    <p>
                      {props.patientDetails.patient_first_name} profile of
                      scores and response pattern indicate he/she may have
                      issues related to:
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
