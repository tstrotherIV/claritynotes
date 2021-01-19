import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
import convertID from "../../../helpers/formFieldIdConverter";

// pdf page 117

function RorschPerformanceAssessmentSystem(props) {
  const [item, setItem] = useState("");
  const [
    patientRorschPerformanceAssessmentSystem,
    setPatientRorschPerformanceAssessmentSystem,
  ] = useState({
    rorschach_performance_assessment_system_pg1_a: "",
  });

  const next = "/thematic_apperceptions_test";
  const back = "/millon_clinical_multiaxial_inventory_iv_pg_2";

  const handleFieldChange = (e) => {
    const target = e.target;

    setPatientRorschPerformanceAssessmentSystem({
      ...patientRorschPerformanceAssessmentSystem,
      [e.target.name]:
        e.target.type === "number"
          ? parseInt(e.target.value)
          : target.type === "checkbox"
          ? target.checked
          : target.value,
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
      rorschach_performance_assessment_system_pg1_a:
      patientRorschPerformanceAssessmentSystem.rorschach_performance_assessment_system_pg1_a,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = [
        "rorschach_performance_assessment_system_pg1_a",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

        setPatientRorschPerformanceAssessmentSystem(filtered);
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
              <h3 className="mb-1 col-2">Test Results</h3>
              <h4 className="mb-3">
                Rorschach Performance Assessment System (R-PAS)
              </h4>
            </div>
            <div className="text-white d-flex flex-wrap justify-content-center">
              <div className="mt-5 col-8">
                <p>
                  The Rorschach tests requires respondents to examine a set of
                  ten inkblots, and to answer the question in a manner to
                  provide both a visual attribution to the stimulus, as well as,
                  a verbal explanation or elaboration. Based on this, the task
                  provides a standardized sample of how problem-solving
                  behavioral task that allows wide latitude for ideographically
                  unique repsonses in whihc the enacted behaviors are an
                  expression of one's personality features and processing style.
                </p>
              </div>
              <div className="m-5 d-flex flex-wrap">
                <div className="">
                  <Label className="align-top mr-2 mt-2">
                    Past Paragraph here:{" "}
                  </Label>
                  <TextareaAutosize
                    className="fieldData pauhasInput"
                    type="text"
                    id={item}
                    name="rorschach_performance_assessment_system_pg1_a"
                    onChange={handleFieldChange}
                    value={
                        patientRorschPerformanceAssessmentSystem.rorschach_performance_assessment_system_pg1_a
                    }
                  />
                </div>
              </div>

              <div className="ml-3"></div>
            </div>
          </div>
        </div>
        <div id="footer">
          <ButtonNavigation
            next={next}
            back={back}
            updatePatient={updatePatient}
            patient={props.patientId}
            patientNotes={patientRorschPerformanceAssessmentSystem}
          />
          <TermOfParentalRights />
        </div>
      </div>
    </>
  );
}

export default RorschPerformanceAssessmentSystem;
