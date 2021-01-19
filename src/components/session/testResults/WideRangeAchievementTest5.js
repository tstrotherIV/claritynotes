import React from "react";
import { Table } from 'reactstrap';
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";

// pdf page 112

function WideRangeAchievementTest5(props) {
    const next = "/aimsweb_plus_achievement_test_pg_1"
    const back = "/wechsler_adult_intelligence_scale_IV_pg_2"

    return (
        <>
        <div id="page-container">
          <div id="content-wrap">
          <Heading />
          <div className="ml-5 mr-5 mt-3">
            <div className="d-flex flex-wrap text-white align-items-baseline">
                <h3 className=" mb-1 col-2">Test Results</h3>
                <h4>Wide Range Achievement Test-5</h4>
            </div>
            <div className="m-5 d-flex flex-wrap justify-content-around">
           <div className="col-6">
            <Table>
            <thead className="tableHeader text-center" >
                <tr className="tableBorder">
                <th className="tdHeaderWidth"></th>
                <th className="tdWidth">Score</th>
                <th className="tdWidth">%</th>
                <th className="tdWidth">Grade Equivalent</th>
                </tr>
            </thead>
            <tbody className="text-center col-6">
                <tr>
                <th scope="row" className="rowHeight">Math Computation</th>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                </tr>
                <tr>
                <th scope="row" className="rowHeight">Spelling</th>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                </tr>
                <tr>
                <th scope="row" className="rowHeight">Word Reading</th>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                </tr>
                <tr>
                <th scope="row" className="rowHeight">Sentence Comprehension</th>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                </tr>
                <tr>
                <th scope="row" className="rowHeight">Reading Comprehension</th>  
                <td>13</td>
                <td>14</td>
                <td>15</td>
                </tr>
            </tbody>
            </Table>
            </div>  
            <div className="col-6 text-white">
            <h5>Results:</h5>
            <p className="text-white"> On the Wide Range Achievement Test-Revision 5 (WRAT-5). [Patient Name, First] [Patient Name, Last]'s math computation
            standard scores fell on a [Result Grade Level] grade level, spelling on a [Result Grade Level] grade level, and sentence comprehension on a [Result Grade Level] grade level.</p>
            </div>
            </div>
        </div>
        <div id="footer">
         <ButtonNavigation next={next} back={back} />
          <TermOfParentalRights />
        </div>
      </div>
    </div>
    </>

    );
}

export default WideRangeAchievementTest5;