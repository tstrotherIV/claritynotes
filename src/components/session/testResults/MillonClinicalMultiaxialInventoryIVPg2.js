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
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// pdf page 117

function MillonClinicalMultiaxialInventoryIVPg2(props) {
  const [
    patientMillonClinicalMultiaxialInventoryIVPg2,
    setPatientMillonClinicalMultiaxialInventoryIVPg2,
  ] = useState({});
  const [notesbox, setnotesbox] = useState("");
  const [item, setItem] = useState("");

  const next = "/rorschach_performance_assessment_system";
  const back = "/millon_clinical_multiaxial_inventory_iv_pg_1";

  const handleFieldChange = (e) => {
    const target = e.target;

    setPatientMillonClinicalMultiaxialInventoryIVPg2({
      ...patientMillonClinicalMultiaxialInventoryIVPg2,
      [e.target.name]:
        e.target.type === "number"
          ? parseInt(e.target.value)
          : target.type === "checkbox"
          ? target.checked
          : target.value,
    });
  };

  // Handles the onChange for the React-Quill notes box
  const handleNoteBoxChange = (e) => {
    setnotesbox(e);
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

  const updatePatient = () => {
    const editedPatient = {
      millon_clinical_multiaxial_inventory_iv_pg2_a:
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_a,
      millon_clinical_multiaxial_inventory_iv_pg2_b:
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_b,
      millon_clinical_multiaxial_inventory_iv_pg2_c:
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_c,
      millon_clinical_multiaxial_inventory_iv_pg2_d:
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_d,
      millon_clinical_multiaxial_inventory_iv_pg2_e:
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_e,
      millon_clinical_multiaxial_inventory_iv_pg2_f:
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_f,
      millon_clinical_multiaxial_inventory_iv_pg2_g:
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_g,
      millon_clinical_multiaxial_inventory_iv_pg2_h:
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_h,
      millon_clinical_multiaxial_inventory_iv_pg2_i:
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_i,
      millon_clinical_multiaxial_inventory_iv_pg2_j:
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_j,
      millon_clinical_multiaxial_inventory_iv_pg2_k:
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_k,
      millon_clinical_multiaxial_inventory_iv_pg2_l:
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_l,
      millon_clinical_multiaxial_inventory_iv_pg2_m:
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_m,
      millon_clinical_multiaxial_inventory_iv_pg2_n:
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_n,
      millon_clinical_multiaxial_inventory_iv_pg2_o:
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_o,
      millon_clinical_multiaxial_inventory_iv_pg2_p:
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_p,
      millon_clinical_multiaxial_inventory_iv_pg2_q:
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_q,
      millon_clinical_multiaxial_inventory_iv_pg2_r:
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_r,
      millon_clinical_multiaxial_inventory_iv_pg2_s:
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_s,
      millon_clinical_multiaxial_inventory_iv_pg2_t:
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_t,
      millon_clinical_multiaxial_inventory_iv_pg2_u:
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_u,
      millon_clinical_multiaxial_inventory_iv_pg2_v:
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_v,
      millon_clinical_multiaxial_inventory_iv_pg2_w:
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_w,
      millon_clinical_multiaxial_inventory_iv_pg2_x:
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_x,
      millon_clinical_multiaxial_inventory_iv_pg2_y:
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_y,
      millon_clinical_multiaxial_inventory_iv_pg2_z:
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_z,
      millon_clinical_multiaxial_inventory_iv_pg2_aa:
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_aa,
      millon_clinical_multiaxial_inventory_iv_pg2_bb:
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_bb,
      millon_clinical_multiaxial_inventory_iv_pg2_Raw_a: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_a ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_Raw_b: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_b ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_Raw_c: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_c ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_Raw_d: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_d ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_Raw_e: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_e ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_Raw_f: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_f ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_Raw_g: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_g ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_Raw_h: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_h ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_Raw_i: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_i ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_Raw_j: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_j ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_Raw_k: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_k ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_Raw_l: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_l ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_Raw_m: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_m ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_Raw_n: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_n ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_Raw_o: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_o ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_Raw_p: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_p ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_Raw_q: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_q ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_Raw_r: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_r ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_Raw_s: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_s ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_Raw_t: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_t ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_Raw_u: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_u ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_Raw_v: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_v ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_Raw_w: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_w ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_Raw_x: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_x ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_Raw_y: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_y ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_Raw_z: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_z ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_Raw_aa: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_aa ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_Raw_bb: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_bb ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_PR_a: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_a ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_PR_b: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_b ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_PR_c: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_c ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_PR_d: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_d ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_PR_e: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_e ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_PR_f: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_f ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_PR_g: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_g ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_PR_h: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_h ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_PR_i: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_i ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_PR_j: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_j ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_PR_k: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_k ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_PR_l: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_l ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_PR_m: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_m ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_PR_n: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_n ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_PR_o: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_o ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_PR_p: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_p ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_PR_q: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_q ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_PR_r: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_r ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_PR_s: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_s ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_PR_t: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_t ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_PR_u: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_u ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_PR_v: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_v ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_PR_w: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_w ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_PR_x: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_x ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_PR_y: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_y ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_PR_z: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_z ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_PR_aa: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_aa ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_PR_bb: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_bb ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_BR_a: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_a ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_BR_b: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_b ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_BR_c: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_c ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_BR_d: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_d ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_BR_e: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_e ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_BR_f: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_f ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_BR_g: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_g ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_BR_h: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_h ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_BR_i: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_i ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_BR_j: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_j ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_BR_k: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_k ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_BR_l: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_l ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_BR_m: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_m ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_BR_n: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_n ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_BR_o: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_o ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_BR_p: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_p ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_BR_q: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_q ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_BR_r: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_r ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_BR_s: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_s ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_BR_t: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_t ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_BR_u: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_u ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_BR_v: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_v ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_BR_w: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_w ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_BR_x: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_x ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_BR_y: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_y ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_BR_z: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_z ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_BR_aa: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_aa ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg2_BR_bb: String(
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_bb ||
          "0"
      ),
      millon_clinical_multiaxial_inventory_iv_pg1_dropdown_a:
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg1_dropdown_a,
      millon_clinical_multiaxial_inventory_iv_pg1_dropdown_b:
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg1_dropdown_b,
      millon_clinical_multiaxial_inventory_iv_pg1_dropdown_c:
        patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg1_dropdown_c,
      millon_clinical_multiaxial_inventory_iv_pg2_notesbox: notesbox,
    };

    DataManager.update("patients", editedPatient).then(() => props.getData());
  };

  //CRUD Function END

  const getData = () => {
    setPatientMillonClinicalMultiaxialInventoryIVPg2(props.patientDetails);
    setnotesbox(
      props.patientDetails.millon_clinical_multiaxial_inventory_iv_pg2_notesbox
    );
    setItem("millon_clinical_multiaxial_inventory_iv_pg2_patientNotes");
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
            <div className="d-flex flex-wrap justify-content-center">
              <div className="col-3">
                <p className="text-white ">
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
                              patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg1_BR_gg
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
                              patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg1_BR_hh
                            }
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className="ml-3 mb-5">
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
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_a"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_a
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding millonWidth">
                        6B
                      </th>
                      <td className="m-0 p-0">
                        <strong>Sadistic</strong>
                      </td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_Raw_a"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_a
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_PR_a"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_a
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_BR_a"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_a
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_b"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_b
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        6B.1
                      </th>
                      <td className="m-0 p-0">Expressively Precipitate</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_Raw_b"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_b
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_PR_b"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_b
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_BR_b"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_b
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_c"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_c
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        6B.2
                      </th>
                      <td className="m-0 p-0">Interpersonally Abrasive</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_Raw_c"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_c
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_PR_c"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_c
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_BR_c"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_c
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_d"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_d
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        6B.3
                      </th>
                      <td className="m-0 p-0">Eruptive Architecture</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_Raw_d"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_d
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_PR_d"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_d
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_BR_d"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_d
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_e"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_e
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        7
                      </th>
                      <td className="m-0 p-0">
                        <strong>Complusive</strong>
                      </td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_Raw_e"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_e
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_PR_e"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_e
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_BR_e"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_e
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_f"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_f
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        7.1
                      </th>
                      <td className="m-0 p-0">Expressively Disciplined</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_Raw_f"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_f
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_PR_f"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_f
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_BR_f"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_f
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_g"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_g
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        7.2
                      </th>
                      <td className="m-0 p-0">Cognitively Constricted</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_Raw_g"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_g
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_PR_g"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_g
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_BR_g"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_g
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_h"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_h
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        7.3
                      </th>
                      <td className="m-0 p-0">Reliable Self Image</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_Raw_h"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_h
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_PR_h"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_h
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_BR_h"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_h
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_i"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_i
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        8A
                      </th>
                      <td className="m-0 p-0">
                        <strong>Negativistic</strong>
                      </td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_Raw_i"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_i
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_PR_i"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_i
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_BR_i"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_i
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_j"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_j
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        8A.1
                      </th>
                      <td className="m-0 p-0">Expressively Embittered</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_Raw_j"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_j
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_PR_j"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_j
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_BR_j"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_j
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_k"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_k
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        8A.2
                      </th>
                      <td className="m-0 p-0">Discontented Self Image</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_Raw_k"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_k
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_PR_k"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_k
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_BR_k"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_k
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_l"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_l
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        8A.3
                      </th>
                      <td className="m-0 p-0">Temperamentally Irrational</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_Raw_l"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_l
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_PR_l"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_l
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_BR_l"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_l
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_m"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_m
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        8B
                      </th>
                      <td className="m-0 p-0">
                        <strong>Masochistic</strong>
                      </td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_Raw_m"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_m
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_PR_m"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_m
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_BR_m"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_m
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_n"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_n
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        8B.1
                      </th>
                      <td className="m-0 p-0">Underserving Self Image</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_Raw_n"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_n
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_PR_n"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_n
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_BR_n"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_n
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_o"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_o
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        8B.2
                      </th>
                      <td className="m-0 p-0">Inverted Architecture</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_Raw_o"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_o
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_PR_o"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_o
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_BR_o"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_o
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_p"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_p
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        8B.3
                      </th>
                      <td className="m-0 p-0">Temperamentally Dysphoric</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_Raw_p"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_p
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_PR_p"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_p
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_BR_p"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_p
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
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_q"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_q
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding millonWidth">
                        S
                      </th>
                      <td className="m-0 p-0">
                        <strong>Schizotypal</strong>
                      </td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_Raw_q"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_q
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_PR_q"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_q
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_BR_q"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_q
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_r"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_r
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        S.1
                      </th>
                      <td className="m-0 p-0">Cognitively Circumstantial</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_Raw_r"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_r
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_PR_r"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_r
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_BR_r"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_r
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_s"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_s
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        S.2
                      </th>
                      <td className="m-0 p-0">Estranged Self Image</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_Raw_s"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_s
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_PR_s"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_s
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_BR_s"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_s
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_t"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_t
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        S.3
                      </th>
                      <td className="m-0 p-0">Chaotic Content</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_Raw_t"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_t
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_PR_t"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_t
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_BR_t"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_t
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_u"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_u
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        C
                      </th>
                      <td className="m-0 p-0">
                        <strong>Bordeline</strong>
                      </td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_Raw_u"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_u
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_PR_u"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_u
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_BR_u"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_u
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_v"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_v
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        C.1
                      </th>
                      <td className="m-0 p-0">Uncertain Self Image</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_Raw_v"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_v
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_PR_v"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_v
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_BR_v"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_v
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_w"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_w
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        C.2
                      </th>
                      <td className="m-0 p-0">Split Architecture</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_Raw_w"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_w
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_PR_w"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_w
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_BR_w"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_w
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_x"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_x
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        C.3
                      </th>
                      <td className="m-0 p-0">Temperamentally Labile</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_Raw_x"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_x
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_PR_x"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_x
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_BR_x"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_x
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_y"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_y
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        P
                      </th>
                      <td className="m-0 p-0">
                        <strong>Paranoid</strong>
                      </td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_Raw_y"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_y
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_PR_y"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_y
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_BR_y"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_y
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_z"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_z
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        P.1
                      </th>
                      <td className="m-0 p-0">Expressively</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_Raw_z"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_z
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_PR_z"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_z
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_BR_z"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_z
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_aa"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_aa
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        P.2
                      </th>
                      <td className="m-0 p-0">Cognitively Mistrustful</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_Raw_aa"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_aa
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_PR_aa"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_aa
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_BR_aa"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_aa
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_bb"
                          checked={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_bb
                          }
                          onChange={handleFieldChange}
                        />
                      </th>
                      <th scope="row" className="m-0 customPadding">
                        P.3
                      </th>
                      <td className="m-0 p-0">Projection Dynamics</td>
                      {/* <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_Raw_bb"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_Raw_bb
                          }
                        />
                      </td>
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_PR_bb"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_PR_bb
                          }
                        />
                      </td> */}
                      <td className="m-0 p-0">
                        <input
                          className="form-control"
                          min={0}
                          max={120}
                          type="number"
                          name="millon_clinical_multiaxial_inventory_iv_pg2_BR_bb"
                          onChange={handleFieldChange}
                          value={
                            patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg2_BR_bb
                          }
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <div>
                  <ReactQuill
                    className="my-3 bg-white"
                    theme="snow"
                    value={notesbox}
                    onChange={handleNoteBoxChange}
                  />
                </div>
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
                    patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg1_dropdown_a
                  }
                >
                  {patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg1_dropdown_a
                    ? patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg1_dropdown_a
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
                    patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg1_dropdown_b
                  }
                >
                  {patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg1_dropdown_b
                    ? patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg1_dropdown_b
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
                    patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg1_dropdown_c
                  }
                >
                  {patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg1_dropdown_c
                    ? patientMillonClinicalMultiaxialInventoryIVPg2.millon_clinical_multiaxial_inventory_iv_pg1_dropdown_c
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
            patientNotes={patientMillonClinicalMultiaxialInventoryIVPg2}
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

export default MillonClinicalMultiaxialInventoryIVPg2;
