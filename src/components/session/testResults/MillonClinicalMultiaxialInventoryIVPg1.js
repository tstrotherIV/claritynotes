
import React from "react";
import { Table } from 'reactstrap';
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";

// pdf page 117

function MillonClinicalMultiaxialInventoryIVPg1(props) {
    const next = "/millon_clinical_multiaxial_inventory_iv_pg_2"
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
                    <th scope="row" className="m-0 customPadding millonWidth">1</th>
                    <td className="m-0 p-0"><strong>Schizoid</strong></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">1.1</th>
                    <td className="m-0 p-0">Interpersonally Unengaged</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">1.2</th>
                    <td className="m-0 p-0">Meager Content</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">1.3</th>
                    <td className="m-0 p-0">Temperamentally Apathetic</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">2A</th>
                    <td className="m-0 p-0"><strong>Avoidant</strong></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">2A.1</th>
                    <td className="m-0 p-0">Interpersonally Aversive</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">2A.2</th>
                    <td className="m-0 p-0">Alienated Self Image</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">2A.3</th>
                    <td className="m-0 p-0">Vexatious Content</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">2B</th>
                    <td className="m-0 p-0"><strong>Melancholic</strong></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">2B.1</th>
                    <td className="m-0 p-0">Cognitively Fatalistic</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">2B.2</th>
                    <td className="m-0 p-0">Worthless Self Image</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">2B.3</th>
                    <td className="m-0 p-0">Temperamentally Woeful</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">3</th>
                    <td className="m-0 p-0"><strong>Dependent</strong></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">3.1</th>
                    <td className="m-0 p-0">Expressively Puerile</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">3.2</th>
                    <td className="m-0 p-0">Interpersonally Submissive</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">3.3</th>
                    <td className="m-0 p-0">Inept Self Image</td>
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
                    <th scope="row" className="m-0 customPadding millonWidth">4A</th>
                    <td className="m-0 p-0"><strong>Histrionic</strong></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">4A.1</th>
                    <td className="m-0 p-0">Expressively Dramatic</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">4A.2</th>
                    <td className="m-0 p-0">Interpersonally Attn Seeking</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">4A.3</th>
                    <td className="m-0 p-0">Temperamentally Fickle</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">4B</th>
                    <td className="m-0 p-0"><strong>Turbulent</strong></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">4B.1</th>
                    <td className="m-0 p-0">Expressively Impetuous</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">4B.2</th>
                    <td className="m-0 p-0">Interpersonally High Spirited</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">4B.3</th>
                    <td className="m-0 p-0">Temperamentally Fickle</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">5</th>
                    <td className="m-0 p-0"><strong>Narcissistic</strong></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">5.1</th>
                    <td className="m-0 p-0">Interpersonally Exploitive</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">5.2</th>
                    <td className="m-0 p-0">Cognitively Expansive</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">5.3</th>
                    <td className="m-0 p-0">Admirable Self Image</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">6A</th>
                    <td className="m-0 p-0"><strong>Antisocial</strong></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">3.1</th>
                    <td className="m-0 p-0">Interpersonally Irresponsible</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">3.2</th>
                    <td className="m-0 p-0">Autonomous Self Image</td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                    <td className="m-0 p-0"></td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">3.3</th>
                    <td className="m-0 p-0">Acting Out Dynamics</td>
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

export default MillonClinicalMultiaxialInventoryIVPg1;