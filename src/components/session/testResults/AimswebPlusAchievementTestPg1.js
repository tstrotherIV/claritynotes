import React from "react";
import { Table } from 'reactstrap';
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";

// pdf page 112

function AimswebPlusAchievementTestPg1(props) {
    const next = "/aimsweb_plus_achievement_test_pg_2"
    const back = "/wide_range_achievement_test_5"

    return (
        <>
        <div id="page-container">
          <div id="content-wrap">
          <Heading />
          <div className="ml-5 mr-5 mt-3">
            <div className="d-flex flex-wrap text-white align-items-baseline">
                <h3 className=" mb-1 col-2">Test Results</h3>
                <h4>Aimsweb Plus Achievement Test</h4>
            </div>
            <div className="m-1 d-flex flex-wrap justify-content-around text-white">
            <div className="d-flex flex-wrap">
            <div className="col-2"></div>
              <div className="col-8">
                <p className="">Aimsweb Plus is an achievement test which screens and monitors the reading and math skills
                from PreK-12 education. This instrument is nationally stardardized and has demonstrated utility in identifying
                learning deficits, at-risk, students, and individualized strengths and weaknesses.</p>
                <div className="col-2"></div>
              </div>
            </div>
           <div>
           <Table>
            <thead className="tableHeader text-center" >
                <tr className="tableBorder">
                <th className="tdHeaderWidth" colSpan="4">Reading</th>
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
                <th scope="row" className="rowHeight">VO</th>
                <td>Vocabulary</td>
                <td>3</td>
                <td>4</td>
                </tr>
                <tr>
                <th scope="row" className="rowHeight">SFC</th>
                <td className="tdWidth">
                  <div>Silent Reading</div> 
                  <div>Fluency</div>
                </td>
                <td>5</td>
                <td>6</td>
                </tr>
                <tr>
                <th scope="row" className="rowHeight">RC</th>  
                <td className="tdWidth">
                  <div>Reading</div> 
                  <div>Comprehension</div>
                </td>
                <td>7</td>
                <td>8</td>
                </tr>
                <tr>
                <th scope="row" className="rowHeight">ORF</th>  
                <td className="tdWidth">
                  <div>Oral Reading</div> 
                  <div>Fluency</div>
                </td>
                <td>9</td>
                <td>10</td>
                </tr>
            </tbody>
            </Table>
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

export default AimswebPlusAchievementTestPg1;