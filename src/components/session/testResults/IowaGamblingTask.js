import React, { useState } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";

//pdf page 120

function IowaGamblingTask(props) {
    
  const [patientIowaGamblingTask, setPatientIowaGamblingTask] = useState({
    iowa_gambling_task_a: "",
    iowa_gambling_task_b: "",
    iowa_gambling_task_c: "",
  });

  const next = "/minnesota_multiphasic_personality_inventory_2";

  const handleFieldChange = (e) => {
    setPatientIowaGamblingTask({
      ...patientIowaGamblingTask,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <Heading />
          <div className="ml-5 mr-5 mt-3">
            <div className="d-flex flex-wrap text-white align-items-baseline">
              <h3 className=" mb-1 col-2">Test Results</h3>
              <h4>Iowa Gambling Task</h4>
            </div>
            <div className="d-flex flex-wrap">
              <div className="col-2 text-white"></div>
              <div className="col-8">
                <p className="text-white">
                  {" "}
                  The Iowa Gambling Task (IGT) is a sensitive test for the
                  detection fo decision-making impairments in several neurologic
                  and psychiatric populations. Disadvantageous decision-making
                  has been shown to characterize substance addiction. People
                  with substance dependence problems perform poorly on the IGT,
                  and their poor performance correlates with poor real-life
                  decision making. Additional research has shown that the use of
                  drugs escalates in the face of rising adverse consequences.
                  Decision making deficits as measured by the IGT are [Patient
                  Name, First]'s response on the IGT indicated
                  <select
                    className="m-1"
                    required
                    id="iowa_gambling_task_a"
                    name="iowa_gambling_task_a"
                    onChange={handleFieldChange}
                    value={patientIowaGamblingTask.iowa_gambling_task_a}
                  >
                    <option value="">please select</option>
                    <option value="impaired">Impaired {"<"} 40</option>
                    <option value="below_average">Below Average 40-44</option>
                    <option value="non-impaired">Non-impaired {">"} 45</option>
                  </select>
                </p>
              </div>
            </div>
            <div className="d-flex flex-wrap text-white">
              <div className="col-2"></div>
              <div className="text-right col-2">
                <div className="">
                  <Label>T-Score: </Label>
                  <input
                    className="m-3 col-4 inputHeight"
                    type="text"
                    id="iowa_gambling_task_b"
                    name="iowa_gambling_task_b"
                    onChange={handleFieldChange}
                    value={patientIowaGamblingTask.iowa_gambling_task_b}
                  />
                </div>
                <div className="text-white">
                  <Label>Percentile:</Label>
                  <input
                    className="m-3 col-4 inputHeight"
                    type="text"
                    id="iowa_gambling_task_c"
                    name="iowa_gambling_task_c"
                    onChange={handleFieldChange}
                    value={patientIowaGamblingTask.iowa_gambling_task_c}
                  />
                </div>
              </div>
              <div className="col-6 mt-2 ml-2">
                <p> NOTES:</p>
                <p>
                  The specifics of the IGT to substance abuse is increased when
                  no other cognitive disorder exists.
                </p>
                <p>
                  Poor IGT scores combined with relatively normal memory and
                  executive function test scores imply poor decision making.
                </p>
                <p>
                  The prefrontal cortex does not fully mature until an
                  individual is in his or her early twenties.
                </p>
              </div>
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation next={next} />
            <TermOfParentalRights />
          </div>
        </div>
      </div>
    </>
  );
}

export default IowaGamblingTask;
