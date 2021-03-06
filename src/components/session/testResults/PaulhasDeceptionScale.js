import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

//pdf page 118

function PaulasDeceptionScale(props) {
  const [item, setItem] = useState("");
  const [patientPaulasDeceptionScale, setPatientPaulasDeceptionScale] =
    useState({});

  const next = "/substance_abuse_subtle_screening_inventory_4";
  const back = "/computerized_performance_neurocognitive_assessment";

  const handleFieldChange = (e) => {
    const target = e.target;

    setPatientPaulasDeceptionScale({
      ...patientPaulasDeceptionScale,
      [e.target.name]:
        e.target.type === "number"
          ? parseInt(e.target.value)
          : target.type === "checkbox"
          ? target.checked
          : target.value,
    });
  };

  const handleCheckBoxChange = async (e) => {
    const target = e.target;
    const value = target.checked;
    const name = target.name;

    const editedPatient = {
      id: props.patientId,
      [name]: value,
    };

    setPatientPaulasDeceptionScale({
      ...patientPaulasDeceptionScale,
      paulhus_deception_scale_a: value,
    });
    DataManager.update("patients", editedPatient).then(() => props.getData());
  };

  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      paulhus_deception_scale_a:
        patientPaulasDeceptionScale.paulhus_deception_scale_a,
      paulhus_deception_scale_b: String(
        patientPaulasDeceptionScale.paulhus_deception_scale_b || "0"
      ),
      paulhus_deception_scale_c: String(
        patientPaulasDeceptionScale.paulhus_deception_scale_c || "0"
      ),
      paulhus_deception_scale_d:
        patientPaulasDeceptionScale.paulhus_deception_scale_d,
    };

    DataManager.update("patients", editedPatient).then(() => props.getData());
  };

  //CRUD Function END

  const getData = () => {
    setPatientPaulasDeceptionScale(props.patientDetails);
    setItem("paulhus_deception_scale_patientNotes");
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
              <h4>Paulhus Deception Scale</h4>
            </div>
            <div className="m-5 text-white">
              <input
                type="checkbox"
                id={item}
                name="paulhus_deception_scale_a"
                checked={patientPaulasDeceptionScale.paulhus_deception_scale_a}
                onChange={handleCheckBoxChange}
              />
              <Label for="" className="m-3">
                {props.patientDetails.patient_first_name} completed a Paulhus
                Deception Scales (PDS)
              </Label>
              <p className="text-white">
                {props.patientDetails.patient_first_name} completed a Paulhus
                Deception Scales (PDS). The PDS is designed to assess socially
                desirable responding. Social desirability bias is the tendency
                to answer questions in a manner that will be viewed favorably by
                others. It can take the form of over-reporting pro-social
                behavior or under-reporting inappropriate behavior. The PDS
                measures two distinct forms of social desirability:
                self-deception and impression man- agement. According to
                theories of deception styles, “self-deception” represents an un-
                conscious process to deny psychologically threatening thoughts
                and feelings, and “im- pression management” represents conscious
                distortion toward self-enhancement.
              </p>
              <div className="m-4 text-center">
                Paste in paragraph that says "IM___, SDE___" and type the actual
                score after IM and SDE.
              </div>
              <div className="d-flex flex-wrap">
                <div className="col-2 text-white"></div>
                <div className="text-white text-right col-2">
                  <div className="">
                    <Label>IM Score:</Label>
                    <input
                      className="m-3 col-4 inputHeight"
                      type="number"
                      id={item}
                      name="paulhus_deception_scale_b"
                      onChange={handleFieldChange}
                      value={
                        patientPaulasDeceptionScale.paulhus_deception_scale_b
                      }
                    />
                  </div>
                  <div className="text-white">
                    <Label>SDE Score:</Label>
                    <input
                      className="m-3 col-4 inputHeight"
                      type="number"
                      id={item}
                      name="paulhus_deception_scale_c"
                      onChange={handleFieldChange}
                      value={
                        patientPaulasDeceptionScale.paulhus_deception_scale_c
                      }
                    />
                  </div>
                </div>
                <div className="col-1 d-flex flex-wrap text-center align-content-center">
                  <div className="text-white">
                    <Label for=""> IM and SDE Paragraph:</Label>
                  </div>
                </div>
                <TextareaAutosize
                  className="col-4 pauhasInput"
                  type="text"
                  id="paulhus_deception_scale_d"
                  name="paulhus_deception_scale_d"
                  onChange={handleFieldChange}
                  value={patientPaulasDeceptionScale.paulhus_deception_scale_d}
                />

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
              patientNotes={patientPaulasDeceptionScale}
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

export default PaulasDeceptionScale;
