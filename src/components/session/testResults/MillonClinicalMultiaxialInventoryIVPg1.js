import React, { useState } from "react";
import { Input, Table } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";

// pdf page 117

function MillonClinicalMultiaxialInventoryIVPg1(props) {
  const [
    patientMillonClinicalMultiaxialInventoryIVPg1,
    setPatientMillonClinicalMultiaxialInventoryIVPg1,
  ] = useState({
    millon_clinical_multiaxial_inventory_iv_pg1_a: false,
    millon_clinical_multiaxial_inventory_iv_pg1_b: false,
    millon_clinical_multiaxial_inventory_iv_pg1_c: false,
    millon_clinical_multiaxial_inventory_iv_pg1_d: false,
    millon_clinical_multiaxial_inventory_iv_pg1_e: false,
    millon_clinical_multiaxial_inventory_iv_pg1_f: false,
    millon_clinical_multiaxial_inventory_iv_pg1_g: false,
    millon_clinical_multiaxial_inventory_iv_pg1_h: false,
    millon_clinical_multiaxial_inventory_iv_pg1_i: false,
    millon_clinical_multiaxial_inventory_iv_pg1_j: false,
    millon_clinical_multiaxial_inventory_iv_pg1_k: false,
    millon_clinical_multiaxial_inventory_iv_pg1_l: false,
    millon_clinical_multiaxial_inventory_iv_pg1_m: false,
    millon_clinical_multiaxial_inventory_iv_pg1_n: false,
    millon_clinical_multiaxial_inventory_iv_pg1_o: false,
    millon_clinical_multiaxial_inventory_iv_pg1_p: false,
    millon_clinical_multiaxial_inventory_iv_pg1_q: false,
    millon_clinical_multiaxial_inventory_iv_pg1_r: false,
    millon_clinical_multiaxial_inventory_iv_pg1_s: false,
    millon_clinical_multiaxial_inventory_iv_pg1_t: false,
    millon_clinical_multiaxial_inventory_iv_pg1_u: false,
    millon_clinical_multiaxial_inventory_iv_pg1_v: false,
    millon_clinical_multiaxial_inventory_iv_pg1_w: false,
    millon_clinical_multiaxial_inventory_iv_pg1_x: false,
    millon_clinical_multiaxial_inventory_iv_pg1_y: false,
    millon_clinical_multiaxial_inventory_iv_pg1_z: false,
    millon_clinical_multiaxial_inventory_iv_pg1_aa: false,
    millon_clinical_multiaxial_inventory_iv_pg1_bb: false,
    millon_clinical_multiaxial_inventory_iv_pg1_cc: false,
    millon_clinical_multiaxial_inventory_iv_pg1_dd: false,
    millon_clinical_multiaxial_inventory_iv_pg1_ee: false,
    millon_clinical_multiaxial_inventory_iv_pg1_ff: false,
  });

  const next = "/millon_clinical_multiaxial_inventory_iv_pg_2";

  const handleFieldChange = (e) => {
    setPatientMillonClinicalMultiaxialInventoryIVPg1({
      ...patientMillonClinicalMultiaxialInventoryIVPg1,
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
              <h3 className="mb-1 col-2">Test Results</h3>
              <h4 className="mb-3">
                Millon Clinical Multiaxial Inventory-IV (MCMI-IV){" "}
              </h4>
            </div>
            <div className="text-white d-flex flex-wrap justify-content-center">
              <div className="col-2">
                <p>
                  The Millon Clinical Multiaxial Inventory-IV (MCMI-IV) was
                  administered to assess [Patient Name, First] [Patient Name,
                  Last]'s general psychological functioning.
                </p>
              </div>
              <div className="ml-3">
                <Table className="pb-4">
                  <thead className="tableHeader text-center">
                    <tr>
                      <th></th>
                      <th></th>
                      <th className="millonWideWidth"></th>
                      <th className="m-0 customPadding millonWidth">Raw</th>
                      <th className="m-0 customPadding millonWidth">PR</th>
                      <th className="m-0 customPadding millonWidth">BR</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_a"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_a"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_a
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding millonWidth">
                        1
                      </th>
                      <td className="m-0 p-0">
                        <strong>Schizoid</strong>
                      </td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_b"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_b"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_b
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        1.1
                      </th>
                      <td className="m-0 p-0">Interpersonally Unengaged</td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_c"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_c"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_c
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        1.2
                      </th>
                      <td className="m-0 p-0">Meager Content</td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_d"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_d"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_d
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        1.3
                      </th>
                      <td className="m-0 p-0">Temperamentally Apathetic</td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_e"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_e"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_e
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        2A
                      </th>
                      <td className="m-0 p-0">
                        <strong>Avoidant</strong>
                      </td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_f"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_f"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_f
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        2A.1
                      </th>
                      <td className="m-0 p-0">Interpersonally Aversive</td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_g"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_g"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_g
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        2A.2
                      </th>
                      <td className="m-0 p-0">Alienated Self Image</td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_h"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_h"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_h
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        2A.3
                      </th>
                      <td className="m-0 p-0">Vexatious Content</td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_i"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_i"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_i
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        2B
                      </th>
                      <td className="m-0 p-0">
                        <strong>Melancholic</strong>
                      </td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_j"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_j"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_j
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        2B.1
                      </th>
                      <td className="m-0 p-0">Cognitively Fatalistic</td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_k"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_k"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_k
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        2B.2
                      </th>
                      <td className="m-0 p-0">Worthless Self Image</td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_l"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_l"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_l
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        2B.3
                      </th>
                      <td className="m-0 p-0">Temperamentally Woeful</td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_m"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_m"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_m
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        3
                      </th>
                      <td className="m-0 p-0">
                        <strong>Dependent</strong>
                      </td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_n"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_n"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_n
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        3.1
                      </th>
                      <td className="m-0 p-0">Expressively Puerile</td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_o"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_o"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_o
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        3.2
                      </th>
                      <td className="m-0 p-0">Interpersonally Submissive</td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_p"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_p"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_p
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        3.3
                      </th>
                      <td className="m-0 p-0">Inept Self Image</td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="ml-3">
                <Table>
                  <thead className="tableHeader text-center">
                    <tr>
                      <th></th>
                      <th></th>
                      <th className="millonWideWidth"></th>
                      <th className="m-0 customPadding millonWidth">Raw</th>
                      <th className="m-0 customPadding millonWidth">PR</th>
                      <th className="m-0 customPadding millonWidth">BR</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_q"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_q"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_q
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding millonWidth">
                        4A
                      </th>
                      <td className="m-0 p-0">
                        <strong>Histrionic</strong>
                      </td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                    <tr>
                    <th>
                      <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_r"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_r"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_r
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        4A.1
                      </th>
                      <td className="m-0 p-0">Expressively Dramatic</td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                    <tr>
                    <th>
                      <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_s"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_s"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_s
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        4A.2
                      </th>
                      <td className="m-0 p-0">Interpersonally Attn Seeking</td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                    <tr>
                    <th>
                      <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_t"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_t"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_t
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        4A.3
                      </th>
                      <td className="m-0 p-0">Temperamentally Fickle</td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                    <tr>
                    <th>
                      <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_u"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_u"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_u
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        4B
                      </th>
                      <td className="m-0 p-0">
                        <strong>Turbulent</strong>
                      </td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                    <tr>
                    <th>
                      <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_v"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_v"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_v
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        4B.1
                      </th>
                      <td className="m-0 p-0">Expressively Impetuous</td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                    <tr>
                    <th>
                      <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_w"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_w"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_w
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        4B.2
                      </th>
                      <td className="m-0 p-0">Interpersonally High Spirited</td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                    <tr>
                    <th>
                      <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_x"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_x"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_x
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        4B.3
                      </th>
                      <td className="m-0 p-0">Temperamentally Fickle</td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                    <tr>
                    <th>
                      <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_y"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_y"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_y
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        5
                      </th>
                      <td className="m-0 p-0">
                        <strong>Narcissistic</strong>
                      </td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                    <tr>
                    <th>
                      <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_z"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_z"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_z
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        5.1
                      </th>
                      <td className="m-0 p-0">Interpersonally Exploitive</td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                    <tr>
                    <th>
                      <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_aa"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_aa"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_aa
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        5.2
                      </th>
                      <td className="m-0 p-0">Cognitively Expansive</td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                    <tr>
                    <th>
                      <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_bb"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_bb"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_bb
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        5.3
                      </th>
                      <td className="m-0 p-0">Admirable Self Image</td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                    <tr>
                    <th>
                      <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_cc"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_cc"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_cc
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        6A
                      </th>
                      <td className="m-0 p-0">
                        <strong>Antisocial</strong>
                      </td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                    <tr>
                    <th>
                      <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_dd"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_dd"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_dd
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        3.1
                      </th>
                      <td className="m-0 p-0">Interpersonally Irresponsible</td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                    <tr>
                    <th>
                      <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_ee"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_ee"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_ee
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        3.2
                      </th>
                      <td className="m-0 p-0">Autonomous Self Image</td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                    <tr>
                    <th>
                      <input
                          className=""
                          type="checkbox"
                          id="millon_clinical_multiaxial_inventory_iv_pg1_ff"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_ff"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_ff
                          }
                          onChange={(e) => {
                            setPatientMillonClinicalMultiaxialInventoryIVPg1(
                              e.target.checked
                            );
                          }}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        3.3
                      </th>
                      <td className="m-0 p-0">Acting Out Dynamics</td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                      <td className="m-0 p-0"></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <ButtonNavigation next={next} />
          <TermOfParentalRights />
        </div>
      </div>
    </>
  );
}

export default MillonClinicalMultiaxialInventoryIVPg1;
