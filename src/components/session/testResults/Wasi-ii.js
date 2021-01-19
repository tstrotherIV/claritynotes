import React from "react";
import { Table } from 'reactstrap';
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";

// pdf page 104

function WasiII(props) {
    const next = "/wechsler_adult_intelligence_scale_IV"
    const back = "/procedures_administered_pg_1"

    return (
        <>
        <div id="page-container">
          <div id="content-wrap">
          <Heading />
          <div className="ml-5 mr-5 mt-3">
            <div className="d-flex flex-wrap text-white align-items-baseline">
                <h3 className=" mb-1 col-2">Test Results</h3>
                <h4>Wechsler Abbreviated Scale of Intelligence-Second Edition (WASI-II)</h4>
            </div>
            <div className="m-5 d-flex flex-wrap justify-content-around">
                <p className="col-4 text-white"> On the Wechsler Abbreviated Scale of Intelligence-Second Edition (WASI-II).
                [Patient Name, First] achieved a Full Scale IQ Score of [Score Result] which falls in the [Score Result Descriptor Correlation] range of intelligence.</p>
           <div className="">
            <Table>
            <thead className="tableHeader text-center" >
                <tr className="tableBorder">
                <th className="tdHeaderWidth">Composite</th>
                <th className="thWidth"></th>
                <th className="tdWidth">Score</th>
                <th className="tdWidth">Range</th>
                </tr>
            </thead>
            <tbody className="text-center">
                <tr>
                <th scope="row" className="rowHeight">Verbal Comprehension</th>
                <td>VCI</td>
                <td>1</td>
                <td>2</td>
                </tr>
                <tr>
                <th scope="row" className="rowHeight">Perceptual Reasoning</th>
                <td>PRI</td>
                <td>3</td>
                <td>4</td>
                </tr>
                <tr>
                <th scope="row" className="rowHeight">IQ-2</th>
                <td>IQ-2</td>
                <td>5</td>
                <td>6</td>
                </tr>
                <tr>
                <th scope="row" className="rowHeight">Full Scale IQ</th>
                <td>FSIQ</td>
                <td>7</td>
                <td>8</td>
                </tr>
            </tbody>
            </Table>
            </div>
            </div>
        </div>
        <div id="footer">
         <ButtonNavigation next={next} back={back}  />
          <TermOfParentalRights />
        </div>
      </div>
    </div>
    </>

    );
}

export default WasiII;