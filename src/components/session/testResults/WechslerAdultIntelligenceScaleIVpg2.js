import React from "react";
import { Table } from 'reactstrap';
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";

// pdf page 110

function WechslerAdultIntelligenceScaleIVpg2(props) {
    const next = "/wide_range_achievement_test_5"

    return (
        <>
        <div id="page-container">
          <div id="content-wrap">
          <Heading />
          <div className="ml-5 mr-5 mt-3">
            <div className="d-flex flex-wrap text-white align-items-baseline">
                <h3 className="mb-1 col-2">Test Results</h3>
                <h4>Wechsler Adult Intelligence Scale-IV</h4>
            </div>
            <div className="m-5 d-flex flex-wrap justify-content-around">
           <div className="">
            <Table>
            <thead className="tableHeader text-center" >
                <tr className="tableBorder">
                <th className="tdHeaderWidth"></th>
                <th className="tdWidth">Crystallized Intelligence Index (CII)</th>
                <th className="tdWidth">Fluid Intelligence Index (FII)</th>
                <th className="tdWidth">Total Intelligence Index (TII)</th>
                <th className="tdWidth">Quantitative Intelligence Index (QII)</th>
                <th className="tdWidth">Total Battery Intelligence Index (TBII)</th>
                </tr>
            </thead>
            <tbody className="text-center">
                <tr>
                <th scope="row" className="rowHeight">Indexed Standard Score</th>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                </tr>
                <tr>
                <th scope="row" className="rowHeight">Confidence Interval 95%</th>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                </tr>
                <tr>
                <th scope="row" className="rowHeight">Percentile Rank</th>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
                <td>15</td>
                </tr>
            </tbody>
            </Table>
            </div>
            </div>
        </div>
        <div id="footer">
         <ButtonNavigation next={next}  />
          <TermOfParentalRights />
        </div>
      </div>
    </div>
    </>

    );
}

export default WechslerAdultIntelligenceScaleIVpg2;