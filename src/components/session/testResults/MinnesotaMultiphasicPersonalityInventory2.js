import React, { useState } from "react";
import { Input, Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";

//pdf page 118

function MinnesotaMultiphasicPersonalityInventory2(props) {
  const [
    patientMinnesotaMultiphasicPersonalityInventory2,
    setPatientMinnesotaMultiphasicPersonalityInventory2,
  ] = useState({
    minnesota_multiphasic_personality_inventory_2_a: "",
    minnesota_multiphasic_personality_inventory_2_b: false,
  });

  const next = "/millon_clinical_multiaxial_inventory_iv_pg_1";

  const handleFieldChange = (e) => {
    setPatientMinnesotaMultiphasicPersonalityInventory2({
      ...patientMinnesotaMultiphasicPersonalityInventory2,
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
              <h4>Minnesota Multiphasic Personality Inventory-2 (MMPI-2)</h4>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
              <div className="col-2"></div>
              <div className="col-10 text-white">
                <p className="mt-5 col-10">
                  The Minnesota Multiphasic Personality Inventory-2 (MMPI-2) was
                  administered to assess [Patient Name, First] [Patient Name,
                  Last] general psychological functioning.
                </p>
                <div>
                  <Label className="mt-3 textTeal" for="">
                    ***Interpret Top 2-3 Highest Scores And Paste In/Personalize
                  </Label>
                </div>
                <div>
                  <Input
                    className="inputHeight m-2 col-6"
                    type="text"
                    id="minnesota_multiphasic_personality_inventory_2_a"
                    name="minnesota_multiphasic_personality_inventory_2_a"
                    onChange={handleFieldChange}
                    value={
                      patientMinnesotaMultiphasicPersonalityInventory2.minnesota_multiphasic_personality_inventory_2_a
                    }
                  />
                </div>
                <div className="mt-3">
                  <Input
                    className=""
                    type="checkbox"
                    id="minnesota_multiphasic_personality_inventory_2_b"
                    name="minnesota_multiphasic_personality_inventory_2_b"
                    checked={
                      patientMinnesotaMultiphasicPersonalityInventory2.minnesota_multiphasic_personality_inventory_2_b
                    }
                    onChange={(e) => {
                      setPatientMinnesotaMultiphasicPersonalityInventory2(
                        e.target.checked
                      );
                    }}
                  />
                  <Label for="" className="mt-3 ml-3">
                    <h5>L-Scale Was High</h5>
                  </Label>
                  <p className="col-10">
                    [Patient Name, First]'s L-Scale was elevated. Most often,
                    higher raw scores on L reflect the tendency to place oneself
                    in a favorable light. Consequently, the clinical scales will
                    be suppressed because the individual is tending to deny
                    basic human frailties and look good.
                  </p>
                </div>
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

export default MinnesotaMultiphasicPersonalityInventory2;
