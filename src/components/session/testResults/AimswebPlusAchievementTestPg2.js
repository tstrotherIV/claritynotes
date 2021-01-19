import React from "react";
import { Table } from 'reactstrap';
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";

// pdf page 113

function AimswebPlusAchievementTestPg2(props) {
    const next = "/aimsweb_plus_achievement_test_pg_3"
    const back = "/aimsweb_plus_achievement_test_pg_1"
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
            <div className="col-6">
            <Table>
            <thead className="tableHeader text-center" >
                <tr className="tableBorder">
                <th className="tdHeaderWidth" colSpan="4">Math</th>
                </tr>
            </thead>
            <tbody className="">
                <tr>
                <th scope="row" className="tdWidth"></th>
                <td className="tdWidth"></td>
                <td className="tdWidth">Score</td>
                <td className="m-0 p-0 tdWidth">
                  <div className="m-0 p-0">National</div> 
                  <div className="m-0 p-0">Percentile</div>
                </td>
                </tr>
                <tr>
                <th scope="row" className="rowHeight">Risk</th>
                <td></td>
                <td>1</td>
                <td>2</td>
                </tr>
                <tr>
                <th scope="row" className="rowHeight">NSF</th>
                <td className="tdWidth">
                  <div>Number Sense</div> 
                  <div>Fluency</div>
                </td>
                <td>3</td>
                <td>4</td>
                </tr>
                <tr>
                <th scope="row" className="rowHeight">NCF-T</th>
                <td className="tdWidth m-0 p-0">
                  <div>Number</div> 
                  <div>Comparison</div>
                  <div>Fluency-Triads</div>
                </td>
                <td>5</td>
                <td>6</td>
                </tr>
                <tr>
                <th scope="row" className="rowHeight">MCF</th>  
                <td className="tdWidth m-0 p-0">
                <div>Mental</div> 
                  <div>Computation</div>
                  <div>Fluency</div>
                </td>
                <td>7</td>
                <td>8</td>
                </tr>
                <tr>
                <th scope="row" className="rowHeight">CA</th>  
                <td className="tdWidth">
                  <div>Concepts &</div> 
                  <div>Applications</div>
                </td>
                <td>9</td>
                <td>10</td>
                </tr>
            </tbody>
            </Table>
            </div> 
        </div>
        </div>
        </div>
        <div id="footer">
         <ButtonNavigation next={next} back={back} />
          <TermOfParentalRights />
        </div>
    </div>
    </>

    );
}

export default AimswebPlusAchievementTestPg2;