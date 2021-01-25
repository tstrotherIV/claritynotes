import React, { useState } from "react";
import { Table } from "reactstrap";
// import DataManager from "../../../data_module/DataManager";
import "./domains.css";
import classNames from "classnames";

// pdf page 110

function DomainsTable(props) {
  const [domainSelected, setDomainSelected] = useState({
    col2_c: false,
    col2_d: false,
  });

  const handleOnClick = (e) => {
    const target = e.target.id;
    console.log(domainSelected[target]);
    setDomainSelected({ ...domainSelected, [target]: !domainSelected[target] });
  };

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
                id="col2_c"
                className={classNames({
                  selected: domainSelected.col2_c,
                  lightorange: !domainSelected.col2_c,
                })}
                onClick={handleOnClick}
              >
                Schizoid
              </th>
              <th
                id="col2_d"
                className={classNames({
                  selected: domainSelected.col2_d,
                  lightgreen: !domainSelected.col2_d,
                })}
                onClick={handleOnClick}
              >
                Impassive
              </th>
              <th
                id="col2_e"
                className={classNames({
                  selected: domainSelected.col2_e,
                  lightgreen: !domainSelected.col2_e,
                })}
                onClick={handleOnClick}
              >
                Unengaged
              </th>
              <th
                id="col2_f"
                className={classNames({
                  selected: domainSelected.col2_f,
                  lightgreen: !domainSelected.col2_f,
                })}
                onClick={handleOnClick}
              >
                Impoverished
              </th>
              <th
                id="col2_g"
                className={classNames({
                  selected: domainSelected.col2_g,
                  lightgreen: !domainSelected.col2_g,
                })}
                onClick={handleOnClick}
              >
                Intellectualization
              </th>
              <th
                id="col2_h"
                className={classNames({
                  selected: domainSelected.col2_h,
                  lightblue: !domainSelected.col2_h,
                })}
                onClick={handleOnClick}
              >
                Complacent
              </th>
              <th
                id="col2_i"
                className={classNames({
                  selected: domainSelected.col2_i,
                  lightblue: !domainSelected.col2_i,
                })}
                onClick={handleOnClick}
              >
                Meager
              </th>
              <th
                id="col2_j"
                className={classNames({
                  selected: domainSelected.col2_j,
                  lightblue: !domainSelected.col2_j,
                })}
                onClick={handleOnClick}
              >
                Undifferentiated
              </th>
              <th
                id="col2_k"
                className={classNames({
                  selected: domainSelected.col2_k,
                  lightblue: !domainSelected.col2_k,
                })}
                onClick={handleOnClick}
              >
                Apethetc
              </th>
            </tr>
            <tr>
              <th className="lightorange">1</th>
              <th className="lightorange">1</th>
              <th className="lightgreen">3</th>
              <th className="lightgreen">4</th>
              <th className="lightgreen">5</th>
              <th className="lightgreen">6</th>
              <th className="lightblue">7</th>
              <th className="lightblue">8</th>
              <th className="lightblue">9</th>
              <th className="lightblue">10</th>
            </tr>
            <tr>
              <th className="lightorange">1</th>
              <th className="lightorange">1</th>
              <th className="lightgreen">3</th>
              <th className="lightgreen">4</th>
              <th className="lightgreen">5</th>
              <th className="lightgreen">6</th>
              <th className="lightblue">7</th>
              <th className="lightblue">8</th>
              <th className="lightblue">9</th>
              <th className="lightblue">10</th>
            </tr>
            <tr>
              <th className="lightorange">1</th>
              <th className="lightorange">1</th>
              <th className="lightgreen">3</th>
              <th className="lightgreen">4</th>
              <th className="lightgreen">5</th>
              <th className="lightgreen">6</th>
              <th className="lightblue">7</th>
              <th className="lightblue">8</th>
              <th className="lightblue">9</th>
              <th className="lightblue">10</th>
            </tr>
            <tr>
              <th className="lightorange">1</th>
              <th className="lightorange">1</th>
              <th className="lightgreen">3</th>
              <th className="lightgreen">4</th>
              <th className="lightgreen">5</th>
              <th className="lightgreen">6</th>
              <th className="lightblue">7</th>
              <th className="lightblue">8</th>
              <th className="lightblue">9</th>
              <th className="lightblue">10</th>
            </tr>
            <tr>
              <th className="lightorange">1</th>
              <th className="lightorange">1</th>
              <th className="lightgreen">3</th>
              <th className="lightgreen">4</th>
              <th className="lightgreen">5</th>
              <th className="lightgreen">6</th>
              <th className="lightblue">7</th>
              <th className="lightblue">8</th>
              <th className="lightblue">9</th>
              <th className="lightblue">10</th>
            </tr>
            <tr>
              <th className="lightorange">1</th>
              <th className="lightorange">1</th>
              <th className="lightgreen">3</th>
              <th className="lightgreen">4</th>
              <th className="lightgreen">5</th>
              <th className="lightgreen">6</th>
              <th className="lightblue">7</th>
              <th className="lightblue">8</th>
              <th className="lightblue">9</th>
              <th className="lightblue">10</th>
            </tr>
            <tr>
              <th className="lightorange">1</th>
              <th className="lightorange">1</th>
              <th className="lightgreen">3</th>
              <th className="lightgreen">4</th>
              <th className="lightgreen">5</th>
              <th className="lightgreen">6</th>
              <th className="lightblue">7</th>
              <th className="lightblue">8</th>
              <th className="lightblue">9</th>
              <th className="lightblue">10</th>
            </tr>
            <tr>
              <th className="lightorange">1</th>
              <th className="lightorange">1</th>
              <th className="lightgreen">3</th>
              <th className="lightgreen">4</th>
              <th className="lightgreen">5</th>
              <th className="lightgreen">6</th>
              <th className="lightblue">7</th>
              <th className="lightblue">8</th>
              <th className="lightblue">9</th>
              <th className="lightblue">10</th>
            </tr>
            <tr>
              <th className="lightorange">1</th>
              <th className="lightorange">1</th>
              <th className="lightgreen">3</th>
              <th className="lightgreen">4</th>
              <th className="lightgreen">5</th>
              <th className="lightgreen">6</th>
              <th className="lightblue">7</th>
              <th className="lightblue">8</th>
              <th className="lightblue">9</th>
              <th className="lightblue">10</th>
            </tr>
            <tr>
              <th className="lightorange">1</th>
              <th className="lightorange">1</th>
              <th className="lightgreen">3</th>
              <th className="lightgreen">4</th>
              <th className="lightgreen">5</th>
              <th className="lightgreen">6</th>
              <th className="lightblue">7</th>
              <th className="lightblue">8</th>
              <th className="lightblue">9</th>
              <th className="lightblue">10</th>
            </tr>
            <tr>
              <th className="lightorange">1</th>
              <th className="lightorange">1</th>
              <th className="lightgreen">3</th>
              <th className="lightgreen">4</th>
              <th className="lightgreen">5</th>
              <th className="lightgreen">6</th>
              <th className="lightblue">7</th>
              <th className="lightblue">8</th>
              <th className="lightblue">9</th>
              <th className="lightblue">10</th>
            </tr>
            <tr>
              <th className="lightorange">1</th>
              <th className="lightorange">1</th>
              <th className="lightgreen">3</th>
              <th className="lightgreen">4</th>
              <th className="lightgreen">5</th>
              <th className="lightgreen">6</th>
              <th className="lightblue">7</th>
              <th className="lightblue">8</th>
              <th className="lightblue">9</th>
              <th className="lightblue">10</th>
            </tr>
            <tr>
              <th className="lightorange">1</th>
              <th className="lightorange">1</th>
              <th className="lightgreen">3</th>
              <th className="lightgreen">4</th>
              <th className="lightgreen">5</th>
              <th className="lightgreen">6</th>
              <th className="lightblue">7</th>
              <th className="lightblue">8</th>
              <th className="lightblue">9</th>
              <th className="lightblue">10</th>
            </tr>
            <tr>
              <th className="lightorange">1</th>
              <th className="lightorange">1</th>
              <th className="lightgreen">3</th>
              <th className="lightgreen">4</th>
              <th className="lightgreen">5</th>
              <th className="lightgreen">6</th>
              <th className="lightblue">7</th>
              <th className="lightblue">8</th>
              <th className="lightblue">9</th>
              <th className="lightblue">10</th>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default DomainsTable;
