import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import DataManager from "../../../data_module/DataManager";
import convertID from "../../../helpers/formFieldIdConverter";
//pdf page 116

function ContinuousPerformanceTest3rdEd(props) {
  const [item, setItem] = useState("");
  const [
    patientContinuousPerformanceTest3rdEd,
    setPatientContinuousPerformanceTest3rdEd,
  ] = useState({
    continous_performance_test_3rd_ed_a: "",
    continous_performance_test_3rd_ed_b: false,
    continous_performance_test_3rd_ed_c: false,
    continous_performance_test_3rd_ed_d: false,
  });

  const next = "/computerized_performance_neurocognitive_assessment";

  const handleFieldChange = (e) => {
    const target = e.target;

    setPatientContinuousPerformanceTest3rdEd({
      ...patientContinuousPerformanceTest3rdEd,
      [e.target.name]:
        e.target.type === "number" ? parseInt(e.target.value) : target.type === "checkbox" ? target.checked : target.value,
    });
  };

  const convertIDfunc = (e) => {
    const fieldID = convertID.convertID(e);
    setItem(fieldID);
  };

  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      id: props.patientId,
      continous_performance_test_3rd_ed_a: patientContinuousPerformanceTest3rdEd.continous_performance_test_3rd_ed_a,
      continous_performance_test_3rd_ed_b: patientContinuousPerformanceTest3rdEd.continous_performance_test_3rd_ed_b,
      continous_performance_test_3rd_ed_c: patientContinuousPerformanceTest3rdEd.continous_performance_test_3rd_ed_c,
      continous_performance_test_3rd_ed_d: patientContinuousPerformanceTest3rdEd.continous_performance_test_3rd_ed_d,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = ["continous_performance_test_3rd_ed_a", "continous_performance_test_3rd_ed_b", "continous_performance_test_3rd_ed_c", "continous_performance_test_3rd_ed_d"];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

        setPatientContinuousPerformanceTest3rdEd(filtered);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <Heading />
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
                    id={item}
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
                <div className="mt-5 text-white">
                  <p>
                    [Patient Name, First] has a total of [X] atypical T-scores,
                    which falls is associated with a (very high [OR] moderate)
                    likelihood of having a disorder characterized by attention
                    deficits, such as ADHD. (Patient's name) profile of scores
                    and response pattern indicate he/she may have issues related
                    to:{" "}
                  </p>
                </div>
              </div>
              <div className="d-flex flex-wrap justify-content-center">
                <div className="">
                  <div className="text-white">
                    <input
                      className="m-2"
                      type="checkbox"
                      id={item}
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
                      id={item}
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
                      id={item}
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
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation
              next={next}
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
