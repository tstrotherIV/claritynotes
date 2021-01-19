import React from "react";
import { Table } from 'reactstrap';
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";

// pdf page 106

function ShipleyIntelligenceAssessment2(props) {
    const next = "/rait_pg_1"
    const back = "/wechsler_adult_intelligence_scale_IV"

    return (
        <>
        <div id="page-container">
          <div id="content-wrap">
          <Heading />
          <div className="ml-5 mr-5 mt-3">
            <div className="d-flex flex-wrap text-white align-items-baseline">
                <h3 className=" mb-1 col-2">Test Results</h3>
                <h4>Shipley Intelligence Assessment 2</h4>
            </div>
            <div className="m-5 d-flex flex-wrap justify-content-around">
                <p className="col-4 text-white"> Shipley Intelligence Assessment 2, [Patient Name, First]
                achieved a Full Scale IQ of [Score Result] which falls into the [Score Result Descriptor Correlation] 
                range of intelligence. </p>
           <div className="">
            <Table>
            <thead className="tableHeader text-center" >
                <tr className="tableBorder">
                <th className="tdHeaderWidth">Composite</th>
                <th className="tdWidth">Score</th>
                <th className="tdWidth">Range</th>
                </tr>
            </thead>
            <tbody className="text-center">
                <tr>
                <th scope="row" className="rowHeight">Vocabulary</th>
                <td>1</td>
                <td>2</td>
                </tr>
                <tr>
                <th scope="row" className="rowHeight">Abstraction</th>
                <td>3</td>
                <td>4</td>
                </tr>
                <tr>
                <th scope="row" className="rowHeight">Block Design</th>
                <td>5</td>
                <td>6</td>
                </tr>
                <tr>
                <th scope="row" className="rowHeight p-0">
                    <div>Composite A</div>
                    <div>(Vocabulary + Abstraction)</div>
                    </th>
                <td>7</td>
                <td>8</td>
                </tr>
                <tr>
                <th scope="row" className="rowHeight p-0">
                    <div>Composite B</div>
                    <div>(Vocabulary + Block Design)</div>
                    </th>
                <td>9</td>
                <td>10</td>
                </tr>
                <tr>
                <th scope="row" className="rowHeight">Full Scale IQ</th>
                <td>11</td>
                <td>12</td>
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

export default ShipleyIntelligenceAssessment2;