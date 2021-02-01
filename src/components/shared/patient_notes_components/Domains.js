import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
// import DataManager from "../../../data_module/DataManager";
import "./domains.css";
import classNames from "classnames";
import DataManager from "../../../data_module/DataManager";

// pdf page 110

function DomainsTable(props) {
  const [domainSelected, setDomainSelected] = useState({
    col3_b: false,
    col3_c: false,
    col3_d: false,
    col3_e: false,
    col3_f: false,
    col3_g: false,
    col3_h: false,
    col3_i: false,
    col3_j: false,
    col4_b: false,
    col4_c: false,
    col4_d: false,
    col4_e: false,
    col4_f: false,
    col4_g: false,
    col4_h: false,
    col4_i: false,
    col4_j: false,
    col5_b: false,
    col5_c: false,
    col5_d: false,
    col5_e: false,
    col5_f: false,
    col5_g: false,
    col5_h: false,
    col5_i: false,
    col5_j: false,
    col6_b: false,
    col6_c: false,
    col6_d: false,
    col6_e: false,
    col6_f: false,
    col6_g: false,
    col6_h: false,
    col6_i: false,
    col6_j: false,
    col7_b: false,
    col7_c: false,
    col7_d: false,
    col7_e: false,
    col7_f: false,
    col7_g: false,
    col7_h: false,
    col7_i: false,
    col7_j: false,
    col8_b: false,
    col8_c: false,
    col8_d: false,
    col8_e: false,
    col8_f: false,
    col8_g: false,
    col8_h: false,
    col8_i: false,
    col8_j: false,
    col9_b: false,
    col9_c: false,
    col9_d: false,
    col9_e: false,
    col9_f: false,
    col9_g: false,
    col9_h: false,
    col9_i: false,
    col9_j: false,
    col10_b: false,
    col10_c: false,
    col10_d: false,
    col10_e: false,
    col10_f: false,
    col10_g: false,
    col10_h: false,
    col10_i: false,
    col10_j: false,
    col11_b: false,
    col11_c: false,
    col11_d: false,
    col11_e: false,
    col11_f: false,
    col11_g: false,
    col11_h: false,
    col11_i: false,
    col11_j: false,
    col12_b: false,
    col12_c: false,
    col12_d: false,
    col12_e: false,
    col12_f: false,
    col12_g: false,
    col12_h: false,
    col12_i: false,
    col12_j: false,
    col13_b: false,
    col13_c: false,
    col13_d: false,
    col13_e: false,
    col13_f: false,
    col13_g: false,
    col13_h: false,
    col13_i: false,
    col13_j: false,
    col14_b: false,
    col14_c: false,
    col14_d: false,
    col14_e: false,
    col14_f: false,
    col14_g: false,
    col14_h: false,
    col14_i: false,
    col14_j: false,
    col15_b: false,
    col15_c: false,
    col15_d: false,
    col15_e: false,
    col15_f: false,
    col15_g: false,
    col15_h: false,
    col15_i: false,
    col15_j: false,
    col16_b: false,
    col16_c: false,
    col16_d: false,
    col16_e: false,
    col16_f: false,
    col16_g: false,
    col16_h: false,
    col16_i: false,
    col16_j: false,
    col17_b: false,
    col17_c: false,
    col17_d: false,
    col17_e: false,
    col17_f: false,
    col17_g: false,
    col17_h: false,
    col17_i: false,
    col17_j: false,
  });

  const handleOnClick = (e) => {
    const target = e.target.id;
    setDomainSelected({ ...domainSelected, [target]: !domainSelected[target] });
    const editedDomain = { [target]: !domainSelected[target] };
    DataManager.update_Item("patient_notes", props.patientNotes.id, editedDomain)
  };

  const getData = () => {
    const fieldID = props.item;
    DataManager.getQuestionPatientNotes(props.patientId, fieldID).then(
      (domainData) => {
        setDomainSelected(domainData[0]);
      }
    );
  };

  useEffect(() => {
    if (props.item) {
      getData();
    }
  }, [
    props.item
  ]);

  return (
    <>
      <div id="domainTableContainer">
        <Table bordered id="domainTable">
          <thead>
            <tr>
              <th colSpan={2} className="lightorange"></th>
              <th colSpan={4} className="lightgreen">
                Functional Domains
              </th>
              <th colSpan={4} className="lightblue">
                Structural Domains
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="lightorange">Scale</th>
              <th className="lightorange">Disorder</th>
              <th className="lightgreen">Emotional Expression</th>
              <th className="lightgreen">Interpersonal Conduct</th>
              <th className="lightgreen">Congnitive Style</th>
              <th className="lightgreen">Intra-psychic Dynamics</th>
              <th className="lightblue">Self-image</th>
              <th className="lightblue">Intra-psychic Architecture</th>
              <th className="lightblue">Intra-psychic Content</th>
              <th className="lightblue">Mood and Temperament</th>
            </tr>
            <tr>
              <th className="lightorange"></th>
              <th
                id="col3_b"
                className={classNames({
                  selected: domainSelected.col3_b,
                  lightorange: !domainSelected.col3_b,
                })}
                onClick={handleOnClick}
              >
                Schizoid
              </th>
              <th
                id="col3_c"
                className={classNames({
                  selected: domainSelected.col3_c,
                  lightgreen: !domainSelected.col3_c,
                })}
                onClick={handleOnClick}
              >
                Impassive
              </th>
              <th
                id="col3_d"
                className={classNames({
                  selected: domainSelected.col3_d,
                  lightgreen: !domainSelected.col3_d,
                })}
                onClick={handleOnClick}
              >
                Unengaged
              </th>
              <th
                id="col3_e"
                className={classNames({
                  selected: domainSelected.col3_e,
                  lightgreen: !domainSelected.col3_e,
                })}
                onClick={handleOnClick}
              >
                Impoverished
              </th>
              <th
                id="col3_f"
                className={classNames({
                  selected: domainSelected.col3_f,
                  lightgreen: !domainSelected.col3_f,
                })}
                onClick={handleOnClick}
              >
                Intellectualization
              </th>
              <th
                id="col3_g"
                className={classNames({
                  selected: domainSelected.col3_g,
                  lightblue: !domainSelected.col3_g,
                })}
                onClick={handleOnClick}
              >
                Complacent
              </th>
              <th
                id="col3_h"
                className={classNames({
                  selected: domainSelected.col3_h,
                  lightblue: !domainSelected.col3_h,
                })}
                onClick={handleOnClick}
              >
                Meager
              </th>
              <th
                id="col3_i"
                className={classNames({
                  selected: domainSelected.col3_i,
                  lightblue: !domainSelected.col3_i,
                })}
                onClick={handleOnClick}
              >
                Undifferentiated
              </th>
              <th
                id="col3_j"
                className={classNames({
                  selected: domainSelected.col3_j,
                  lightblue: !domainSelected.col3_j,
                })}
                onClick={handleOnClick}
              >
                Apethetc
              </th>
            </tr>

            <tr>
              <th className="lightorange">2A</th>
              <th
                id="col4_b"
                className={classNames({
                  selected: domainSelected.col4_b,
                  lightorange: !domainSelected.col4_b,
                })}
                onClick={handleOnClick}
              >
                Avoidant
              </th>
              <th
                id="col4_c"
                className={classNames({
                  selected: domainSelected.col4_c,
                  lightgreen: !domainSelected.col4_c,
                })}
                onClick={handleOnClick}
              >
                Fretful
              </th>
              <th
                id="col4_d"
                className={classNames({
                  selected: domainSelected.col4_d,
                  lightgreen: !domainSelected.col4_d,
                })}
                onClick={handleOnClick}
              >
                Aversive
              </th>
              <th
                id="col4_e"
                className={classNames({
                  selected: domainSelected.col4_e,
                  lightgreen: !domainSelected.col4_e,
                })}
                onClick={handleOnClick}
              >
                Distracted
              </th>
              <th
                id="col4_f"
                className={classNames({
                  selected: domainSelected.col4_f,
                  lightgreen: !domainSelected.col4_f,
                })}
                onClick={handleOnClick}
              >
                Fantasy
              </th>
              <th
                id="col4_g"
                className={classNames({
                  selected: domainSelected.col4_g,
                  lightblue: !domainSelected.col4_g,
                })}
                onClick={handleOnClick}
              >
                Alienated
              </th>
              <th
                id="col4_h"
                className={classNames({
                  selected: domainSelected.col4_h,
                  lightblue: !domainSelected.col4_h,
                })}
                onClick={handleOnClick}
              >
                Vexatious
              </th>
              <th
                id="col4_i"
                className={classNames({
                  selected: domainSelected.col4_i,
                  lightblue: !domainSelected.col4_i,
                })}
                onClick={handleOnClick}
              >
                Fragile
              </th>
              <th
                id="col4_j"
                className={classNames({
                  selected: domainSelected.col4_j,
                  lightblue: !domainSelected.col4_j,
                })}
                onClick={handleOnClick}
              >
                Anguished
              </th>
            </tr>
            <tr>
              <th className="lightorange">2B</th>
              <th
                id="col5_b"
                className={classNames({
                  selected: domainSelected.col5_b,
                  lightorange: !domainSelected.col5_b,
                })}
                onClick={handleOnClick}
              >
                Melancholic
              </th>
              <th
                id="col5_c"
                className={classNames({
                  selected: domainSelected.col5_c,
                  lightgreen: !domainSelected.col5_c,
                })}
                onClick={handleOnClick}
              >
                Disconsolate
              </th>
              <th
                id="col5_d"
                className={classNames({
                  selected: domainSelected.col5_d,
                  lightgreen: !domainSelected.col5_d,
                })}
                onClick={handleOnClick}
              >
                Defenseless
              </th>
              <th
                id="col5_e"
                className={classNames({
                  selected: domainSelected.col5_e,
                  lightgreen: !domainSelected.col5_e,
                })}
                onClick={handleOnClick}
              >
                Fatalistic
              </th>
              <th
                id="col5_f"
                className={classNames({
                  selected: domainSelected.col5_f,
                  lightgreen: !domainSelected.col5_f,
                })}
                onClick={handleOnClick}
              >
                Asceticism
              </th>
              <th
                id="col5_g"
                className={classNames({
                  selected: domainSelected.col5_g,
                  lightblue: !domainSelected.col5_g,
                })}
                onClick={handleOnClick}
              >
                Worthless
              </th>
              <th
                id="col5_h"
                className={classNames({
                  selected: domainSelected.col5_h,
                  lightblue: !domainSelected.col5_h,
                })}
                onClick={handleOnClick}
              >
                Forsaken
              </th>
              <th
                id="col5_i"
                className={classNames({
                  selected: domainSelected.col5_i,
                  lightblue: !domainSelected.col5_i,
                })}
                onClick={handleOnClick}
              >
                Depleted
              </th>
              <th
                id="col5_j"
                className={classNames({
                  selected: domainSelected.col5_j,
                  lightblue: !domainSelected.col5_j,
                })}
                onClick={handleOnClick}
              >
                Woeful
              </th>
            </tr>
            <tr>
              <th className="lightorange">3</th>
              <th
                id="col6_b"
                className={classNames({
                  selected: domainSelected.col6_b,
                  lightorange: !domainSelected.col6_b,
                })}
                onClick={handleOnClick}
              >
                Dependent
              </th>
              <th
                id="col6_c"
                className={classNames({
                  selected: domainSelected.col6_c,
                  lightgreen: !domainSelected.col6_c,
                })}
                onClick={handleOnClick}
              >
                Puelrile
              </th>
              <th
                id="col6_d"
                className={classNames({
                  selected: domainSelected.col6_d,
                  lightgreen: !domainSelected.col6_d,
                })}
                onClick={handleOnClick}
              >
                Submissive
              </th>
              <th
                id="col6_e"
                className={classNames({
                  selected: domainSelected.col6_e,
                  lightgreen: !domainSelected.col6_e,
                })}
                onClick={handleOnClick}
              >
                Naive
              </th>
              <th
                id="col6_f"
                className={classNames({
                  selected: domainSelected.col6_f,
                  lightgreen: !domainSelected.col6_f,
                })}
                onClick={handleOnClick}
              >
                Introjection
              </th>
              <th
                id="col6_g"
                className={classNames({
                  selected: domainSelected.col6_g,
                  lightblue: !domainSelected.col6_g,
                })}
                onClick={handleOnClick}
              >
                Inept
              </th>
              <th
                id="col6_h"
                className={classNames({
                  selected: domainSelected.col6_h,
                  lightblue: !domainSelected.col6_h,
                })}
                onClick={handleOnClick}
              >
                Immature
              </th>
              <th
                id="col6_i"
                className={classNames({
                  selected: domainSelected.col6_i,
                  lightblue: !domainSelected.col6_i,
                })}
                onClick={handleOnClick}
              >
                Inchoate
              </th>
              <th
                id="col6_j"
                className={classNames({
                  selected: domainSelected.col6_j,
                  lightblue: !domainSelected.col6_j,
                })}
                onClick={handleOnClick}
              >
                Pacific
              </th>
            </tr>
            <tr>
              <th className="lightorange">4A</th>
              <th
                id="col7_b"
                className={classNames({
                  selected: domainSelected.col7_b,
                  lightorange: !domainSelected.col7_b,
                })}
                onClick={handleOnClick}
              >
                Histrionic
              </th>
              <th
                id="col7_c"
                className={classNames({
                  selected: domainSelected.col7_c,
                  lightgreen: !domainSelected.col7_c,
                })}
                onClick={handleOnClick}
              >
                Dramatic
              </th>
              <th
                id="col7_d"
                className={classNames({
                  selected: domainSelected.col7_d,
                  lightgreen: !domainSelected.col7_d,
                })}
                onClick={handleOnClick}
              >
                Attention-Seeking
              </th>
              <th
                id="col7_e"
                className={classNames({
                  selected: domainSelected.col7_e,
                  lightgreen: !domainSelected.col7_e,
                })}
                onClick={handleOnClick}
              >
                Flighty
              </th>
              <th
                id="col7_f"
                className={classNames({
                  selected: domainSelected.col7_f,
                  lightgreen: !domainSelected.col7_f,
                })}
                onClick={handleOnClick}
              >
                Dissociation
              </th>
              <th
                id="col7_g"
                className={classNames({
                  selected: domainSelected.col7_g,
                  lightblue: !domainSelected.col7_g,
                })}
                onClick={handleOnClick}
              >
                Gregarious
              </th>
              <th
                id="col7_h"
                className={classNames({
                  selected: domainSelected.col7_h,
                  lightblue: !domainSelected.col7_h,
                })}
                onClick={handleOnClick}
              >
                Shallow
              </th>
              <th
                id="col7_i"
                className={classNames({
                  selected: domainSelected.col7_i,
                  lightblue: !domainSelected.col7_i,
                })}
                onClick={handleOnClick}
              >
                Disjointed
              </th>
              <th
                id="col7_j"
                className={classNames({
                  selected: domainSelected.col7_j,
                  lightblue: !domainSelected.col7_j,
                })}
                onClick={handleOnClick}
              >
                Fickle
              </th>
            </tr>
            <tr>
              <th className="lightorange">4B</th>
              <th
                id="col8_b"
                className={classNames({
                  selected: domainSelected.col8_b,
                  lightorange: !domainSelected.col8_b,
                })}
                onClick={handleOnClick}
              >
                Turbulent
              </th>
              <th
                id="col8_c"
                className={classNames({
                  selected: domainSelected.col8_c,
                  lightgreen: !domainSelected.col8_c,
                })}
                onClick={handleOnClick}
              >
                Impetuous
              </th>
              <th
                id="col8_d"
                className={classNames({
                  selected: domainSelected.col8_d,
                  lightgreen: !domainSelected.col8_d,
                })}
                onClick={handleOnClick}
              >
                High-Spirited
              </th>
              <th
                id="col8_e"
                className={classNames({
                  selected: domainSelected.col8_e,
                  lightgreen: !domainSelected.col8_e,
                })}
                onClick={handleOnClick}
              >
                Scattered
              </th>
              <th
                id="col8_f"
                className={classNames({
                  selected: domainSelected.col8_f,
                  lightgreen: !domainSelected.col8_f,
                })}
                onClick={handleOnClick}
              >
                Magnification
              </th>
              <th
                id="col8_g"
                className={classNames({
                  selected: domainSelected.col8_g,
                  lightblue: !domainSelected.col8_g,
                })}
                onClick={handleOnClick}
              >
                Exalted
              </th>
              <th
                id="col8_h"
                className={classNames({
                  selected: domainSelected.col8_h,
                  lightblue: !domainSelected.col8_h,
                })}
                onClick={handleOnClick}
              >
                Piecemeal
              </th>
              <th
                id="col8_i"
                className={classNames({
                  selected: domainSelected.col8_i,
                  lightblue: !domainSelected.col8_i,
                })}
                onClick={handleOnClick}
              >
                Unsteady
              </th>
              <th
                id="col8_j"
                className={classNames({
                  selected: domainSelected.col8_j,
                  lightblue: !domainSelected.col8_j,
                })}
                onClick={handleOnClick}
              >
                Mercurial
              </th>
            </tr>
            <tr>
              <th className="lightorange">5</th>
              <th
                id="col9_b"
                className={classNames({
                  selected: domainSelected.col9_b,
                  lightorange: !domainSelected.col9_b,
                })}
                onClick={handleOnClick}
              >
                Narcissistic
              </th>
              <th
                id="col9_c"
                className={classNames({
                  selected: domainSelected.col9_c,
                  lightgreen: !domainSelected.col9_c,
                })}
                onClick={handleOnClick}
              >
                Haughty
              </th>
              <th
                id="col9_d"
                className={classNames({
                  selected: domainSelected.col9_d,
                  lightgreen: !domainSelected.col9_d,
                })}
                onClick={handleOnClick}
              >
                Exploitive
              </th>
              <th
                id="col9_e"
                className={classNames({
                  selected: domainSelected.col9_e,
                  lightgreen: !domainSelected.col9_e,
                })}
                onClick={handleOnClick}
              >
                Expansive
              </th>
              <th
                id="col9_f"
                className={classNames({
                  selected: domainSelected.col9_f,
                  lightgreen: !domainSelected.col9_f,
                })}
                onClick={handleOnClick}
              >
                Rationalization
              </th>
              <th
                id="col9_g"
                className={classNames({
                  selected: domainSelected.col9_g,
                  lightblue: !domainSelected.col9_g,
                })}
                onClick={handleOnClick}
              >
                Admirable
              </th>
              <th
                id="col9_h"
                className={classNames({
                  selected: domainSelected.col9_h,
                  lightblue: !domainSelected.col9_h,
                })}
                onClick={handleOnClick}
              >
                Contrived
              </th>
              <th
                id="col9_i"
                className={classNames({
                  selected: domainSelected.col9_i,
                  lightblue: !domainSelected.col9_i,
                })}
                onClick={handleOnClick}
              >
                Spurious
              </th>
              <th
                id="col9_j"
                className={classNames({
                  selected: domainSelected.col9_j,
                  lightblue: !domainSelected.col9_j,
                })}
                onClick={handleOnClick}
              >
                Insouciant
              </th>
            </tr>
            <tr>
              <th className="lightorange">6A</th>
              <th
                id="col10_b"
                className={classNames({
                  selected: domainSelected.col10_b,
                  lightorange: !domainSelected.col10_b,
                })}
                onClick={handleOnClick}
              >
                Antisocial
              </th>
              <th
                id="col10_c"
                className={classNames({
                  selected: domainSelected.col10_c,
                  lightgreen: !domainSelected.col10_c,
                })}
                onClick={handleOnClick}
              >
                Impulsive
              </th>
              <th
                id="col10_d"
                className={classNames({
                  selected: domainSelected.col10_d,
                  lightgreen: !domainSelected.col10_d,
                })}
                onClick={handleOnClick}
              >
                Irresponsible
              </th>
              <th
                id="col10_e"
                className={classNames({
                  selected: domainSelected.col10_e,
                  lightgreen: !domainSelected.col10_e,
                })}
                onClick={handleOnClick}
              >
                Noncomforming
              </th>
              <th
                id="col10_f"
                className={classNames({
                  selected: domainSelected.col10_f,
                  lightgreen: !domainSelected.col10_f,
                })}
                onClick={handleOnClick}
              >
                Acting-Out
              </th>
              <th
                id="col10_g"
                className={classNames({
                  selected: domainSelected.col10_g,
                  lightblue: !domainSelected.col10_g,
                })}
                onClick={handleOnClick}
              >
                Autonomous
              </th>
              <th
                id="col10_h"
                className={classNames({
                  selected: domainSelected.col10_h,
                  lightblue: !domainSelected.col10_h,
                })}
                onClick={handleOnClick}
              >
                Debased
              </th>
              <th
                id="col10_i"
                className={classNames({
                  selected: domainSelected.col10_i,
                  lightblue: !domainSelected.col10_i,
                })}
                onClick={handleOnClick}
              >
                Unruly
              </th>
              <th
                id="col10_j"
                className={classNames({
                  selected: domainSelected.col10_j,
                  lightblue: !domainSelected.col10_j,
                })}
                onClick={handleOnClick}
              >
                Callous
              </th>
            </tr>
            <tr>
              <th className="lightorange">6B</th>
              <th
                id="col11_b"
                className={classNames({
                  selected: domainSelected.col11_b,
                  lightorange: !domainSelected.col11_b,
                })}
                onClick={handleOnClick}
              >
                Sadistic
              </th>
              <th
                id="col11_c"
                className={classNames({
                  selected: domainSelected.col11_c,
                  lightgreen: !domainSelected.col11_c,
                })}
                onClick={handleOnClick}
              >
                Precipitate
              </th>
              <th
                id="col11_d"
                className={classNames({
                  selected: domainSelected.col11_d,
                  lightgreen: !domainSelected.col11_d,
                })}
                onClick={handleOnClick}
              >
                Abrasive
              </th>
              <th
                id="col11_e"
                className={classNames({
                  selected: domainSelected.col11_e,
                  lightgreen: !domainSelected.col11_e,
                })}
                onClick={handleOnClick}
              >
                Dogmatic
              </th>
              <th
                id="col11_f"
                className={classNames({
                  selected: domainSelected.col11_f,
                  lightgreen: !domainSelected.col11_f,
                })}
                onClick={handleOnClick}
              >
                Isolation of Affect
              </th>
              <th
                id="col11_g"
                className={classNames({
                  selected: domainSelected.col11_g,
                  lightblue: !domainSelected.col11_g,
                })}
                onClick={handleOnClick}
              >
                Combative
              </th>
              <th
                id="col11_h"
                className={classNames({
                  selected: domainSelected.col11_h,
                  lightblue: !domainSelected.col11_h,
                })}
                onClick={handleOnClick}
              >
                Pernicious
              </th>
              <th
                id="col11_i"
                className={classNames({
                  selected: domainSelected.col11_i,
                  lightblue: !domainSelected.col11_i,
                })}
                onClick={handleOnClick}
              >
                Eruptive
              </th>
              <th
                id="col11_j"
                className={classNames({
                  selected: domainSelected.col11_j,
                  lightblue: !domainSelected.col11_j,
                })}
                onClick={handleOnClick}
              >
                Hostile
              </th>
            </tr>
            <tr>
              <th className="lightorange">7</th>
              <th
                id="col12_b"
                className={classNames({
                  selected: domainSelected.col12_b,
                  lightorange: !domainSelected.col12_b,
                })}
                onClick={handleOnClick}
              >
                Compulsive
              </th>
              <th
                id="col12_c"
                className={classNames({
                  selected: domainSelected.col12_c,
                  lightgreen: !domainSelected.col12_c,
                })}
                onClick={handleOnClick}
              >
                Disciplined
              </th>
              <th
                id="col12_d"
                className={classNames({
                  selected: domainSelected.col12_d,
                  lightgreen: !domainSelected.col12_d,
                })}
                onClick={handleOnClick}
              >
                Courteous
              </th>
              <th
                id="col12_e"
                className={classNames({
                  selected: domainSelected.col12_e,
                  lightgreen: !domainSelected.col12_e,
                })}
                onClick={handleOnClick}
              >
                Constricted
              </th>
              <th
                id="col12_f"
                className={classNames({
                  selected: domainSelected.col12_f,
                  lightgreen: !domainSelected.col12_f,
                })}
                onClick={handleOnClick}
              >
                Reaction Formation
              </th>
              <th
                id="col12_g"
                className={classNames({
                  selected: domainSelected.col12_g,
                  lightblue: !domainSelected.col12_g,
                })}
                onClick={handleOnClick}
              >
                Reliable
              </th>
              <th
                id="col12_h"
                className={classNames({
                  selected: domainSelected.col12_h,
                  lightblue: !domainSelected.col12_h,
                })}
                onClick={handleOnClick}
              >
                Concealed
              </th>
              <th
                id="col12_i"
                className={classNames({
                  selected: domainSelected.col12_i,
                  lightblue: !domainSelected.col12_i,
                })}
                onClick={handleOnClick}
              >
                Compartmentalized
              </th>
              <th
                id="col12_j"
                className={classNames({
                  selected: domainSelected.col12_j,
                  lightblue: !domainSelected.col12_j,
                })}
                onClick={handleOnClick}
              >
                Solemn
              </th>
            </tr>
            <tr>
              <th className="lightorange">8A</th>
              <th
                id="col13_b"
                className={classNames({
                  selected: domainSelected.col13_b,
                  lightorange: !domainSelected.col13_b,
                })}
                onClick={handleOnClick}
              >
                Negativistic
              </th>
              <th
                id="col13_c"
                className={classNames({
                  selected: domainSelected.col13_c,
                  lightgreen: !domainSelected.col13_c,
                })}
                onClick={handleOnClick}
              >
                Embittered
              </th>
              <th
                id="col13_d"
                className={classNames({
                  selected: domainSelected.col13_d,
                  lightgreen: !domainSelected.col13_d,
                })}
                onClick={handleOnClick}
              >
                Contrary
              </th>
              <th
                id="col13_e"
                className={classNames({
                  selected: domainSelected.col13_e,
                  lightgreen: !domainSelected.col13_e,
                })}
                onClick={handleOnClick}
              >
                Cynical
              </th>
              <th
                id="col13_f"
                className={classNames({
                  selected: domainSelected.col13_f,
                  lightgreen: !domainSelected.col13_f,
                })}
                onClick={handleOnClick}
              >
                Displacement
              </th>
              <th
                id="col13_g"
                className={classNames({
                  selected: domainSelected.col13_g,
                  lightblue: !domainSelected.col13_g,
                })}
                onClick={handleOnClick}
              >
                Discontented
              </th>
              <th
                id="col13_h"
                className={classNames({
                  selected: domainSelected.col13_h,
                  lightblue: !domainSelected.col13_h,
                })}
                onClick={handleOnClick}
              >
                Fluctuating
              </th>
              <th
                id="col13_i"
                className={classNames({
                  selected: domainSelected.col13_i,
                  lightblue: !domainSelected.col13_i,
                })}
                onClick={handleOnClick}
              >
                Divergent
              </th>
              <th
                id="col13_j"
                className={classNames({
                  selected: domainSelected.col13_j,
                  lightblue: !domainSelected.col13_j,
                })}
                onClick={handleOnClick}
              >
                Irritable
              </th>
            </tr>
            <tr>
              <th className="lightorange">8B</th>
              <th
                id="col14_b"
                className={classNames({
                  selected: domainSelected.col14_b,
                  lightorange: !domainSelected.col14_b,
                })}
                onClick={handleOnClick}
              >
                Masochistic
              </th>
              <th
                id="col14_c"
                className={classNames({
                  selected: domainSelected.col14_c,
                  lightgreen: !domainSelected.col14_c,
                })}
                onClick={handleOnClick}
              >
                Abstinent
              </th>
              <th
                id="col14_d"
                className={classNames({
                  selected: domainSelected.col14_d,
                  lightgreen: !domainSelected.col14_d,
                })}
                onClick={handleOnClick}
              >
                Acquisescent
              </th>
              <th
                id="col14_e"
                className={classNames({
                  selected: domainSelected.col14_e,
                  lightgreen: !domainSelected.col14_e,
                })}
                onClick={handleOnClick}
              >
                Diffident
              </th>
              <th
                id="col14_f"
                className={classNames({
                  selected: domainSelected.col14_f,
                  lightgreen: !domainSelected.col14_f,
                })}
                onClick={handleOnClick}
              >
                Exaggeration
              </th>
              <th
                id="col14_g"
                className={classNames({
                  selected: domainSelected.col14_g,
                  lightblue: !domainSelected.col14_g,
                })}
                onClick={handleOnClick}
              >
                Undeserving
              </th>
              <th
                id="col14_h"
                className={classNames({
                  selected: domainSelected.col14_h,
                  lightblue: !domainSelected.col14_h,
                })}
                onClick={handleOnClick}
              >
                Discredited
              </th>
              <th
                id="col14_i"
                className={classNames({
                  selected: domainSelected.col14_i,
                  lightblue: !domainSelected.col14_i,
                })}
                onClick={handleOnClick}
              >
                Inverted
              </th>
              <th
                id="col14_j"
                className={classNames({
                  selected: domainSelected.col14_j,
                  lightblue: !domainSelected.col14_j,
                })}
                onClick={handleOnClick}
              >
                Dysphoric
              </th>
            </tr>
            <tr>
              <th className="lightorange">S</th>
              <th
                id="col15_b"
                className={classNames({
                  selected: domainSelected.col15_b,
                  lightorange: !domainSelected.col15_b,
                })}
                onClick={handleOnClick}
              >
                Schizotypal
              </th>
              <th
                id="col15_c"
                className={classNames({
                  selected: domainSelected.col15_c,
                  lightgreen: !domainSelected.col15_c,
                })}
                onClick={handleOnClick}
              >
                Peculiar
              </th>
              <th
                id="col15_d"
                className={classNames({
                  selected: domainSelected.col15_d,
                  lightgreen: !domainSelected.col15_d,
                })}
                onClick={handleOnClick}
              >
                Secretive
              </th>
              <th
                id="col15_e"
                className={classNames({
                  selected: domainSelected.col15_e,
                  lightgreen: !domainSelected.col15_e,
                })}
                onClick={handleOnClick}
              >
                Circumstantial
              </th>
              <th
                id="col15_f"
                className={classNames({
                  selected: domainSelected.col15_f,
                  lightgreen: !domainSelected.col15_f,
                })}
                onClick={handleOnClick}
              >
                Undoing
              </th>
              <th
                id="col15_g"
                className={classNames({
                  selected: domainSelected.col15_g,
                  lightblue: !domainSelected.col15_g,
                })}
                onClick={handleOnClick}
              >
                Estranged
              </th>
              <th
                id="col15_h"
                className={classNames({
                  selected: domainSelected.col15_h,
                  lightblue: !domainSelected.col15_h,
                })}
                onClick={handleOnClick}
              >
                Chaotic
              </th>
              <th
                id="col15_i"
                className={classNames({
                  selected: domainSelected.col15_i,
                  lightblue: !domainSelected.col15_i,
                })}
                onClick={handleOnClick}
              >
                Fragmented
              </th>
              <th
                id="col15_j"
                className={classNames({
                  selected: domainSelected.col15_j,
                  lightblue: !domainSelected.col15_j,
                })}
                onClick={handleOnClick}
              >
                Distraught & Insentient
              </th>
            </tr>
            <tr>
              <th className="lightorange">C</th>
              <th
                id="col16_b"
                className={classNames({
                  selected: domainSelected.col16_b,
                  lightorange: !domainSelected.col16_b,
                })}
                onClick={handleOnClick}
              >
                Borderline
              </th>
              <th
                id="col16_c"
                className={classNames({
                  selected: domainSelected.col16_c,
                  lightgreen: !domainSelected.col16_c,
                })}
                onClick={handleOnClick}
              >
                Spasmodic
              </th>
              <th
                id="col16_d"
                className={classNames({
                  selected: domainSelected.col16_d,
                  lightgreen: !domainSelected.col16_d,
                })}
                onClick={handleOnClick}
              >
                Paradoxical
              </th>
              <th
                id="col16_e"
                className={classNames({
                  selected: domainSelected.col16_e,
                  lightgreen: !domainSelected.col16_e,
                })}
                onClick={handleOnClick}
              >
                Vacillating
              </th>
              <th
                id="col16_f"
                className={classNames({
                  selected: domainSelected.col16_f,
                  lightgreen: !domainSelected.col16_f,
                })}
                onClick={handleOnClick}
              >
                Regression
              </th>
              <th
                id="col16_g"
                className={classNames({
                  selected: domainSelected.col16_g,
                  lightblue: !domainSelected.col16_g,
                })}
                onClick={handleOnClick}
              >
                Uncertain
              </th>
              <th
                id="col16_h"
                className={classNames({
                  selected: domainSelected.col16_h,
                  lightblue: !domainSelected.col16_h,
                })}
                onClick={handleOnClick}
              >
                Incompatible
              </th>
              <th
                id="col16_i"
                className={classNames({
                  selected: domainSelected.col16_i,
                  lightblue: !domainSelected.col16_i,
                })}
                onClick={handleOnClick}
              >
                Split
              </th>
              <th
                id="col16_j"
                className={classNames({
                  selected: domainSelected.col16_j,
                  lightblue: !domainSelected.col16_j,
                })}
                onClick={handleOnClick}
              >
                Labile
              </th>
            </tr>
            <tr>
              <th className="lightorange">P</th>
              <th
                id="col17_b"
                className={classNames({
                  selected: domainSelected.col17_b,
                  lightorange: !domainSelected.col17_b,
                })}
                onClick={handleOnClick}
              >
                Paranoid
              </th>
              <th
                id="col17_c"
                className={classNames({
                  selected: domainSelected.col17_c,
                  lightgreen: !domainSelected.col17_c,
                })}
                onClick={handleOnClick}
              >
                Defensive
              </th>
              <th
                id="col17_d"
                className={classNames({
                  selected: domainSelected.col17_d,
                  lightgreen: !domainSelected.col17_d,
                })}
                onClick={handleOnClick}
              >
                Provocative
              </th>
              <th
                id="col17_e"
                className={classNames({
                  selected: domainSelected.col17_e,
                  lightgreen: !domainSelected.col17_e,
                })}
                onClick={handleOnClick}
              >
                Mistrustful
              </th>
              <th
                id="col17_f"
                className={classNames({
                  selected: domainSelected.col17_f,
                  lightgreen: !domainSelected.col17_f,
                })}
                onClick={handleOnClick}
              >
                Projection
              </th>
              <th
                id="col17_g"
                className={classNames({
                  selected: domainSelected.col17_g,
                  lightblue: !domainSelected.col17_g,
                })}
                onClick={handleOnClick}
              >
                Inviolable
              </th>
              <th
                id="col17_h"
                className={classNames({
                  selected: domainSelected.col17_h,
                  lightblue: !domainSelected.col17_h,
                })}
                onClick={handleOnClick}
              >
                Unalterable
              </th>
              <th
                id="col17_i"
                className={classNames({
                  selected: domainSelected.col17_i,
                  lightblue: !domainSelected.col17_i,
                })}
                onClick={handleOnClick}
              >
                Inelastic
              </th>
              <th
                id="col17_j"
                className={classNames({
                  selected: domainSelected.col17_j,
                  lightblue: !domainSelected.col17_j,
                })}
                onClick={handleOnClick}
              >
                Irascible
              </th>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default DomainsTable;
