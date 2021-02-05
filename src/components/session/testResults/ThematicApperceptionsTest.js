import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
import convertID from "../../../helpers/formFieldIdConverter";

// pdf page 118

function ThematicApperceptionsTest(props) {
  const [item, setItem] = useState("");
  const [
    patientThematicApperceptionsTest,
    setPatientThematicApperceptionsTest,
  ] = useState({
    thematic_apperceptions_test_pg1_a: "",
  });

  const next = "/";
  const back = "/rorschach_performance_assessment_system";

  const handleFieldChange = (e) => {
    const target = e.target;

    setPatientThematicApperceptionsTest({
      ...patientThematicApperceptionsTest,
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
      thematic_apperceptions_test_pg1_a:
        patientThematicApperceptionsTest.thematic_apperceptions_test_pg1_a,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = ["thematic_apperceptions_test_pg1_a"];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientThematicApperceptionsTest(filtered);
    });
  };

  useEffect(() => {
    getData();
  }, );

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <Heading />
          <div className="ml-5 mr-5 mt-3">
            <div className="d-flex flex-wrap text-white align-items-baseline">
              <h3 className="mb-1 col-2">Test Results</h3>
              <h4 className="mb-3">Thematic Apperceptions Test</h4>
            </div>
            <div className="text-white d-flex flex-wrap justify-content-center">
              <div className="mt-5 col-8">
                <p>
                  The Thematic Appreceptions Test (TAT) is a projective
                  psychological test. Proponents of the technique assert that
                  subjects' responses, in the narratives they make up about
                  ambiguous pictures of people, reveal their underlying motives,
                  concerns, and the way they see the social world.
                </p>
              </div>
              <div className="m-5 d-flex flex-wrap">
                <div className="">
                  <Label className="align-top mr-2 mt-2">
                    Paste Paragraph here:{" "}
                  </Label>
                  <TextareaAutosize
                    className="fieldData pauhasInput"
                    type="text"
                    id={item}
                    name="thematic_apperceptions_test_pg1_a"
                    onChange={handleFieldChange}
                    value={
                      patientThematicApperceptionsTest.thematic_apperceptions_test_pg1_a
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
            patientNotes={patientThematicApperceptionsTest}
          />
          <TermOfParentalRights />
        </div>
      </div>
    </>
  );
}

export default ThematicApperceptionsTest;
