import React from "react";
import { Table } from 'reactstrap';
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";

// pdf page 114

function AimswebPlusAchievementTestPg3(props) {
    const next = "/aimsweb_plus_achievement_test_pg_4"
    return (
        <>
        <div id="page-container">
          <div id="content-wrap">
          <Heading />
      <div className="ml-5 mr-5 mt-3">
        <div className="d-flex flex-wrap text-white align-items-baseline">
                <h3 className="mb-1 col-2">Test Results</h3>
                <h4 className="mb-3">Aimsweb Plus Achievement Test</h4>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
            <div className="col-8">
            <Table>
            <thead className="tableHeader text-center" >
                <tr className="tableBorder">
                <th className="tdHeaderWidth" colSpan="6">Legend</th>
                </tr>
            </thead>
            <tbody className="">
                <tr>
                <th scope="row" className="tdWidth"></th>
                <td className="tdWidth">1-10th</td>
                <td className="tdWidth">11-25th</td>
                <td className="tdWidth">26-74th</td>
                <td className="tdWidth">75-89th</td>
                <td className="tdWidth">90-99th</td>
                </tr>
                <tr>
                <th scope="row" className="rowHeight"></th>
                <td>Well Below Average</td>
                <td>Below Average</td>
                <td>Average</td>
                <td>Above Average</td>
                <td>Well Above Average</td>
                </tr>
                <tr>
                <th scope="row" className="rowHeight">Score Range</th>
                <td>229-405</td>
                <td>406-437</td>
                <td>438-511</td>
                <td>512-545</td>
                <td>546-595</td>
                </tr>
                <tr>
                <th scope="row" className="rowHeight">Percent Band</th>
                <td>1-10 Percentile</td>
                <td>11-25 Percentile</td>
                <td>26-74 Percentile</td>
                <td>75-89 Percentile</td>
                <td>90-99 Percentile</td>
                </tr>
            </tbody>
            </Table>
            </div> 
        </div>
        </div>
        </div>
        <div id="footer">
         <ButtonNavigation next={next}  />
          <TermOfParentalRights />
        </div>
    </div>
    </>

    );
}

export default AimswebPlusAchievementTestPg3;