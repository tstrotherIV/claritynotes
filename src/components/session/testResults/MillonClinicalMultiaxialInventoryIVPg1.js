import React, { useState, useEffect } from "react";
import {
  Table,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import DataManager from "../../../data_module/DataManager";

// pdf page 117

function MillonClinicalMultiaxialInventoryIVPg1(props) {
  const [
    patientMillonClinicalMultiaxialInventoryIVPg1,
    setPatientMillonClinicalMultiaxialInventoryIVPg1,
  ] = useState({});
  const [item, setItem] = useState("");

  const next = "/millon_clinical_multiaxial_inventory_iv_pg_2";
  const back = "/minnesota_multiphasic_personality_inventory_2";

  const handleFieldChange = (e) => {
    const target = e.target;

    setPatientMillonClinicalMultiaxialInventoryIVPg1({
      ...patientMillonClinicalMultiaxialInventoryIVPg1,
      [e.target.name]:
        e.target.type === "number"
          ? parseInt(e.target.value)
          : target.type === "checkbox"
          ? target.checked
          : target.value,
    });
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const toggle2 = () => setDropdownOpen2((prevState) => !prevState);
  const toggle3 = () => setDropdownOpen3((prevState) => !prevState);

  const dropdownChoices = [
    "(1) Schizoid",
    "(2A) Avoidant",
    "(2B) Melancholic",
    "(2) Dependent",
    "(4a) Histrionic",
    "(4B) Turbulent",
    "(5) Narcissistic",
    "(6A) Antisocial",
    "(6B) Sadistic",
    "(7) Complusive",
    "(8A) Negativistic",
    "(8B) Masochistic",
    "(S) Schizotypal",
    "(C) Bordeline",
    "(P) Paranoid",
  ];

  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      millon_clinical_multiaxial_inventory_iv_pg1_a:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_a,
      millon_clinical_multiaxial_inventory_iv_pg1_b:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_b,
      millon_clinical_multiaxial_inventory_iv_pg1_c:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_c,
      millon_clinical_multiaxial_inventory_iv_pg1_d:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_d,
      millon_clinical_multiaxial_inventory_iv_pg1_e:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_e,
      millon_clinical_multiaxial_inventory_iv_pg1_f:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_f,
      millon_clinical_multiaxial_inventory_iv_pg1_g:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_g,
      millon_clinical_multiaxial_inventory_iv_pg1_h:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_h,
      millon_clinical_multiaxial_inventory_iv_pg1_i:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_i,
      millon_clinical_multiaxial_inventory_iv_pg1_j:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_j,
      millon_clinical_multiaxial_inventory_iv_pg1_k:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_k,
      millon_clinical_multiaxial_inventory_iv_pg1_l:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_l,
      millon_clinical_multiaxial_inventory_iv_pg1_m:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_m,
      millon_clinical_multiaxial_inventory_iv_pg1_n:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_n,
      millon_clinical_multiaxial_inventory_iv_pg1_o:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_o,
      millon_clinical_multiaxial_inventory_iv_pg1_p:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_p,
      millon_clinical_multiaxial_inventory_iv_pg1_q:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_q,
      millon_clinical_multiaxial_inventory_iv_pg1_r:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_r,
      millon_clinical_multiaxial_inventory_iv_pg1_s:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_s,
      millon_clinical_multiaxial_inventory_iv_pg1_t:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_t,
      millon_clinical_multiaxial_inventory_iv_pg1_u:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_u,
      millon_clinical_multiaxial_inventory_iv_pg1_v:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_v,
      millon_clinical_multiaxial_inventory_iv_pg1_w:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_w,
      millon_clinical_multiaxial_inventory_iv_pg1_x:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_x,
      millon_clinical_multiaxial_inventory_iv_pg1_y:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_y,
      millon_clinical_multiaxial_inventory_iv_pg1_z:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_z,
      millon_clinical_multiaxial_inventory_iv_pg1_aa:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_aa,
      millon_clinical_multiaxial_inventory_iv_pg1_bb:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_bb,
      millon_clinical_multiaxial_inventory_iv_pg1_cc:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_cc,
      millon_clinical_multiaxial_inventory_iv_pg1_dd:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_dd,
      millon_clinical_multiaxial_inventory_iv_pg1_ee:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_ee,
      millon_clinical_multiaxial_inventory_iv_pg1_ff:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_ff,
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_a: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_a ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_b: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_b ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_c: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_c ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_d: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_d ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_e: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_e ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_f: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_f ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_g: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_g ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_h: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_h ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_i: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_i ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_j: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_j ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_k: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_k ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_l: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_l ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_m: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_m ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_n: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_n ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_o: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_o ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_p: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_p ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_q: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_q ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_r: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_r ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_s: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_s ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_t: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_t ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_u: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_u ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_v: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_v ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_w: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_w ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_x: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_x ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_y: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_y ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_z: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_z ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_aa: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_aa ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_bb: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_bb ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_cc: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_cc ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_dd: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_dd ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_ee: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_ee ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_Raw_ff: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_ff ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_a: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_a ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_b: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_b ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_c: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_c ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_d: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_d ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_e: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_e ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_f: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_f ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_g: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_g ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_h: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_h ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_i: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_i ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_j: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_j ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_k: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_k ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_l: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_l ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_m: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_m ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_n: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_n ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_o: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_o ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_p: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_p ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_q: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_q ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_r: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_r ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_s: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_s ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_t: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_t ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_u: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_u ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_v: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_v ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_w: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_w ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_x: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_x ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_y: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_y ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_z: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_z ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_aa: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_aa ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_bb: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_bb ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_cc: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_cc ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_dd: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_dd ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_ee: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_ee ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_PR_ff: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_ff ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_a: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_a ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_b: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_b ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_c: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_c ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_d: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_d ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_e: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_e ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_f: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_f ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_g: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_g ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_h: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_h ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_i: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_i ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_j: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_j ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_k: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_k ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_l: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_l ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_m: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_m ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_n: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_n ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_o: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_o ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_p: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_p ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_q: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_q ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_r: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_r ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_s: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_s ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_t: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_t ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_u: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_u ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_v: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_v ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_w: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_w ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_x: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_x ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_y: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_y ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_z: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_z ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_aa: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_aa ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_bb: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_bb ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_cc: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_cc ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_dd: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_dd ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_ee: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_ee ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_ff: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_ff ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_gg: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_gg ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_BR_hh: String(
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_hh ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_dropdown_a:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_dropdown_a,
      millon_clinical_multiaxial_inventory_iv_pg1_dropdown_b:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_dropdown_b,
      millon_clinical_multiaxial_inventory_iv_pg1_dropdown_c:
        patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_dropdown_c,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientMillonClinicalMultiaxialInventoryIVPg1(props.patientDetails);
    setItem("millon_clinical_multiaxial_inventory_iv_pg1_patientNotes");
  };

  useEffect(() => {
    getData();
  }, [props]);

  return (
    <>
      <div id="page-container" className="p-5">
        <div id="content-wrap">
          <div className="ml-5 mr-5 mt-3">
            <div className="d-flex flex-wrap text-white align-items-baseline">
              <h3 className="mb-1 col-2">Test Results</h3>
              <h4 className="mb-3">
                Millon Clinical Multiaxial Inventory-IV (MCMI-IV){" "}
              </h4>
            </div>
            <div className="text-white d-flex flex-wrap justify-content-center">
              <div className="col-3">
                <p>
                  The Millon Clinical Multiaxial Inventory-IV (MCMI-IV) was
                  administered to assess{" "}
                  {props.patientDetails.patient_first_name} [Patient Name,
                  Last]'s general psychological functioning.
                </p>
                <div>
                  <Table striped className="pb-4">
                    <thead className="tableHeader text-center">
                      <tr>
                        <th>DISCLOSURE</th>
                        <th>DESIRABILITY</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input
                            className="form-control"
                            min={0}
                            max={120}
                            type="number"
                            name="millon_clinical_multiaxial_inventory_iv_pg1_BR_gg"
                            onChange={handleFieldChange}
                            value={
                              patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_gg
                            }
                          />
                        </td>
                        <td>
                          <input
                            className="form-control"
                            min={0}
                            max={120}
                            type="number"
                            name="millon_clinical_multiaxial_inventory_iv_pg1_BR_hh"
                            onChange={handleFieldChange}
                            value={
                              patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_hh
                            }
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className="ml-3 mb-5">
                <Table striped className="pb-4">
                  <thead className="tableHeader text-center">
                    <tr>
                      <th></th>
                      <th></th>
                      <th className="millonWideWidth"></th>
                      {/* <th className="m-0 customPadding millonWidth">Raw</th>
                      <th className="m-0 customPadding millonWidth">PR</th> */}
                      <th className="m-0 customPadding millonWidth">BR</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_a"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_a
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding millonWidth">
                        1
                      </th>
                      <td className="m-0 p-0">
                        <strong>Schizoid</strong>
                      </td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_a"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_a
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_a"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_a
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_a"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_a
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_b"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_b
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        1.1
                      </th>
                      <td className="m-0 p-0">Interpersonally Unengaged</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_b"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_b
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_b"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_b
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_b"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_b
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_c"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_c
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        1.2
                      </th>
                      <td className="m-0 p-0">Meager Content</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_c"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_c
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_c"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_c
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_c"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_c
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_d"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_d
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        1.3
                      </th>
                      <td className="m-0 p-0">Temperamentally Apathetic</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_d"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_d
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_d"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_d
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_d"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_d
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_e"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_e
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        2A
                      </th>
                      <td className="m-0 p-0">
                        <strong>Avoidant</strong>
                      </td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_e"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_e
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_e"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_e
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_e"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_e
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_f"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_f
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        2A.1
                      </th>
                      <td className="m-0 p-0">Interpersonally Aversive</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_f"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_f
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_f"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_f
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_f"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_f
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_g"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_g
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        2A.2
                      </th>
                      <td className="m-0 p-0">Alienated Self Image</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_g"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_g
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_g"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_g
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_g"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_g
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_h"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_h
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        2A.3
                      </th>
                      <td className="m-0 p-0">Vexatious Content</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_h"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_h
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_h"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_h
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_h"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_h
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_i"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_i
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        2B
                      </th>
                      <td className="m-0 p-0">
                        <strong>Melancholic</strong>
                      </td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_i"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_i
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_i"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_i
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_i"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_i
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_j"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_j
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        2B.1
                      </th>
                      <td className="m-0 p-0">Cognitively Fatalistic</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_j"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_j
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_j"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_j
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_j"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_j
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_k"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_k
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        2B.2
                      </th>
                      <td className="m-0 p-0">Worthless Self Image</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_k"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_k
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_k"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_k
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_k"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_k
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_l"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_l
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        2B.3
                      </th>
                      <td className="m-0 p-0">Temperamentally Woeful</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_l"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_l
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_l"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_l
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_l"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_l
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_m"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_m
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        3
                      </th>
                      <td className="m-0 p-0">
                        <strong>Dependent</strong>
                      </td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_m"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_m
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_m"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_m
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_m"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_m
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_n"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_n
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        3.1
                      </th>
                      <td className="m-0 p-0">Expressively Puerile</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_n"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_n
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_n"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_n
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_n"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_n
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_o"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_o
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        3.2
                      </th>
                      <td className="m-0 p-0">Interpersonally Submissive</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_o"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_o
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_o"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_o
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_o"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_o
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_p"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_p
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        3.3
                      </th>
                      <td className="m-0 p-0">Inept Self Image</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_p"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_p
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_p"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_p
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_p"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_p
                          }
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="ml-3">
                <Table striped>
                  <thead className="tableHeader text-center">
                    <tr>
                      <th></th>
                      <th></th>
                      <th className="millonWideWidth"></th>
                      {/* <th className="m-0 customPadding millonWidth">Raw</th>
                      <th className="m-0 customPadding millonWidth">PR</th> */}
                      <th className="m-0 customPadding millonWidth">BR</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_q"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_q
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding millonWidth">
                        4A
                      </th>
                      <td className="m-0 p-0">
                        <strong>Histrionic</strong>
                      </td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_q"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_q
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_q"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_q
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_q"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_q
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_r"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_r
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        4A.1
                      </th>
                      <td className="m-0 p-0">Expressively Dramatic</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_r"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_r
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_r"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_r
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_r"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_r
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_s"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_s
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        4A.2
                      </th>
                      <td className="m-0 p-0">Interpersonally Attn Seeking</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_s"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_s
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_s"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_s
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_s"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_s
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_t"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_t
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        4A.3
                      </th>
                      <td className="m-0 p-0">Temperamentally Fickle</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_t"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_t
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_t"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_t
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_t"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_t
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_u"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_u
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        4B
                      </th>
                      <td className="m-0 p-0">
                        <strong>Turbulent</strong>
                      </td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_u"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_u
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_u"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_u
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_u"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_u
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_v"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_v
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        4B.1
                      </th>
                      <td className="m-0 p-0">Expressively Impetuous</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_v"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_v
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_v"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_v
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_v"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_v
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_w"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_w
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        4B.2
                      </th>
                      <td className="m-0 p-0">Interpersonally High Spirited</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_w"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_w
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_w"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_w
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_w"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_w
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_x"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_x
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        4B.3
                      </th>
                      <td className="m-0 p-0">Temperamentally Fickle</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_x"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_x
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_x"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_x
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_x"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_x
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_y"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_y
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        5
                      </th>
                      <td className="m-0 p-0">
                        <strong>Narcissistic</strong>
                      </td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_y"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_y
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_y"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_y
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_y"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_y
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_z"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_z
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        5.1
                      </th>
                      <td className="m-0 p-0">Interpersonally Exploitive</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_z"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_z
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_z"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_z
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_z"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_z
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_aa"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_aa
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        5.2
                      </th>
                      <td className="m-0 p-0">Cognitively Expansive</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_aa"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_aa
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_aa"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_aa
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_aa"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_aa
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_bb"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_bb
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        5.3
                      </th>
                      <td className="m-0 p-0">Admirable Self Image</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_bb"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_bb
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_bb"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_bb
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_bb"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_bb
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_cc"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_cc
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        6A
                      </th>
                      <td className="m-0 p-0">
                        <strong>Antisocial</strong>
                      </td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_cc"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_cc
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_cc"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_cc
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_cc"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_cc
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_dd"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_dd
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        3.1
                      </th>
                      <td className="m-0 p-0">Interpersonally Irresponsible</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_dd"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_dd
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_dd"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_dd
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_dd"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_dd
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_ee"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_ee
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        3.2
                      </th>
                      <td className="m-0 p-0">Autonomous Self Image</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_ee"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_ee
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_ee"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_ee
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_ee"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_ee
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          className=""
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_ff"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_ff
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        3.3
                      </th>
                      <td className="m-0 p-0">Acting Out Dynamics</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_Raw_ff"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_Raw_ff
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_PR_ff"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_PR_ff
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg1_BR_ff"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_BR_ff
                          }
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            <div className="d-flex row justify-content-around">
              <Dropdown
                className="d-flex textWhite flex-wrap col-3"
                isOpen={dropdownOpen}
                toggle={toggle}
              >
                <DropdownToggle
                  color="light"
                  className="text-center"
                  caret
                  value={
                    patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_dropdown_a
                  }
                >
                  {patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_dropdown_a
                    ? patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_dropdown_a
                    : "Make a Selection"}
                </DropdownToggle>
                <DropdownMenu className="">
                  {dropdownChoices.sort().map((option) => (
                    <DropdownItem
                      onClick={handleFieldChange}
                      name="millon_clinical_multiaxial_inventory_iv_pg1_dropdown_a"
                      value={option}
                    >
                      {option}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
              <Dropdown
                className="d-flex textWhite flex-wrap col-3"
                isOpen={dropdownOpen2}
                toggle={toggle2}
              >
                <DropdownToggle
                  color="light"
                  className="text-center"
                  caret
                  value={
                    patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_dropdown_b
                  }
                >
                  {patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_dropdown_b
                    ? patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_dropdown_b
                    : "Make a Selection"}
                </DropdownToggle>
                <DropdownMenu className="">
                  {dropdownChoices.sort().map((option) => (
                    <DropdownItem
                      onClick={handleFieldChange}
                      name="millon_clinical_multiaxial_inventory_iv_pg1_dropdown_b"
                      value={option}
                    >
                      {option}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
              <Dropdown
                className="d-flex textWhite flex-wrap col-3"
                isOpen={dropdownOpen3}
                toggle={toggle3}
              >
                <DropdownToggle
                  color="light"
                  className="text-center"
                  caret
                  value={
                    patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_dropdown_c
                  }
                >
                  {patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_dropdown_c
                    ? patientMillonClinicalMultiaxialInventoryIVPg1.millon_clinical_multiaxial_inventory_iv_pg1_dropdown_c
                    : "Make a Selection"}
                </DropdownToggle>
                <DropdownMenu className="">
                  {dropdownChoices.sort().map((option) => (
                    <DropdownItem
                      onClick={handleFieldChange}
                      name="millon_clinical_multiaxial_inventory_iv_pg1_dropdown_c"
                      value={option}
                    >
                      {option}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div id="footer">
          <ButtonNavigation
            next={next}
            back={back}
            updatePatient={updatePatient}
            patient={props.patientId}
            patientNotes={patientMillonClinicalMultiaxialInventoryIVPg1}
          />
          <TermOfParentalRights
            questionId={item}
            patientId={props.patientId}
            item={item}
          />
        </div>
      </div>
    </>
  );
}

export default MillonClinicalMultiaxialInventoryIVPg1;
