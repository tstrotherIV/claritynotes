import React, { useState, useEffect } from "react";
import EmptyFooterSpace from "../../shared/EmptyFooterSpace";
import ButtonNavigation from "../../shared/ButtonNavigation";
import "./additionalData.scss";

function PsychologicalEvaluationAdditionalData(props) {
  const [additionalData, setAdditionalData] = useState("");

  const next = "/interview_pg_1";
  const back = "/psychological_evaluation_consent";

//CRUD Function END

const getData = () => {
  setAdditionalData(props.patientDetails);
};

useEffect(() => {
  getData();
}, [props]);

  return (
    <>
      <div>
        <div className="centerContent">
          <div className="d-flex justify-content-center mt-5">
            <h2 className="text-white">Additional Data</h2>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <div className="centerText text-white">
              <p>Arrest Record</p>
              <p>Interview with Social Worker [name]</p>
              <p>DHR Social Worker</p>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <ButtonNavigation
          next={next}
          back={back}
          patient={props.patientId}
          patientNotes={additionalData}

        />
        <EmptyFooterSpace />
      </div>
    </>
  );
}

export default PsychologicalEvaluationAdditionalData;
