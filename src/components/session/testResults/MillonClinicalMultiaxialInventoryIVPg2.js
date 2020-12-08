
import React from "react";
import { Table } from 'reactstrap';
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";

// pdf page 117

function MillonClinicalMultiaxialInventoryIVPg2(props) {
    const next = "/rorschach_performance_assessment_system"
    return (
        <>
        <div id="page-container">
          <div id="content-wrap">
          <Heading />
      <div className="ml-5 mr-5 mt-3">
        <div className="d-flex flex-wrap text-white align-items-baseline">
                <h3 className="mb-1 col-2">Test Results</h3>
                <h4 className="mb-3">Millon Clinical Multiaxial Inventory-IV (MCMI-IV) </h4>
        </div>
        <div className="text-white d-flex flex-wrap justify-content-center">
            <div className="col-2">
            <p>The Millon Clinical Multiaxial Inventory-IV (MCMI-IV) was administered to assess [Patient Name, First] [Patient Name, Last]'s
            general psychological functioning.
            </p>
            </div>
            <div className="ml-3">
            <Table>
            <thead className="tableHeader text-center" >
                <tr>
                <th></th>
                <th className="millonWideWidth"></th>
                <th className="m-0 customPadding millonWidth">Raw</th>
                <th className="m-0 customPadding millonWidth">PR</th>
                <th className="m-0 customPadding millonWidth">BR</th>
                </tr>
            </thead>
            <tbody className="">
                <tr>
                    <th scope="row" className="m-0 customPadding millonWidth">6B</th>
                    <td className="m-0 p-0"><strong>Sadistic</strong></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">6B.1</th>
                    <td className="m-0 p-0">Expressively Precipitate</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">6B.2</th>
                    <td className="m-0 p-0">Interpersonally Abrasive</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">6B.3</th>
                    <td className="m-0 p-0">Eruptive Architecture</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">7</th>
                    <td className="m-0 p-0"><strong>Complusive</strong></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">7.1</th>
                    <td className="m-0 p-0">Expressively Disciplined</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">7.2</th>
                    <td className="m-0 p-0">Cognitively Constricted</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">7.3</th>
                    <td className="m-0 p-0">Reliable Self Image</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">8A</th>
                    <td className="m-0 p-0"><strong>Negativistic</strong></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">8A.1</th>
                    <td className="m-0 p-0">Expressively Embittered</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">8A.2</th>
                    <td className="m-0 p-0">Discontented Self Image</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">8A.3</th>
                    <td className="m-0 p-0">Temperamentally Irrational</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">8B</th>
                    <td className="m-0 p-0"><strong>Masochistic</strong></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">8B.1</th>
                    <td className="m-0 p-0">Underserving Self Image</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">8B.2</th>
                    <td className="m-0 p-0">Inverted Architecture</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">8B.3</th>
                    <td className="m-0 p-0">Temperamentally Dysphoric</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>       
            </tbody>
            </Table>
            </div> 
            <div className="ml-3">
            <Table>
            <thead className="tableHeader text-center" >
                <tr>
                <th></th>
                <th className="millonWideWidth"></th>
                <th className="m-0 customPadding millonWidth">Raw</th>
                <th className="m-0 customPadding millonWidth">PR</th>
                <th className="m-0 customPadding millonWidth">BR</th>
                </tr>
            </thead>
            <tbody className="">
                <tr>
                    <th scope="row" className="m-0 customPadding millonWidth">S</th>
                    <td className="m-0 p-0"><strong>Schizotypal</strong></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">S.1</th>
                    <td className="m-0 p-0">Cognitively Circumstantial</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">S.2</th>
                    <td className="m-0 p-0">Estranged Self Image</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">S.3</th>
                    <td className="m-0 p-0">Chaotic Content</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">C</th>
                    <td className="m-0 p-0"><strong>Bordeline</strong></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">C.1</th>
                    <td className="m-0 p-0">Uncertain Self Image</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">C.2</th>
                    <td className="m-0 p-0">Split Architecture</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">C.3</th>
                    <td className="m-0 p-0">Temperamentally Labile</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">P</th>
                    <td className="m-0 p-0"><strong>Paranoid</strong></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">P.1</th>
                    <td className="m-0 p-0">Expressively</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">P.2</th>
                    <td className="m-0 p-0">Cognitively Mistrustful</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">P.3</th>
                    <td className="m-0 p-0">Projection Dynamics</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
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

export default MillonClinicalMultiaxialInventoryIVPg2;