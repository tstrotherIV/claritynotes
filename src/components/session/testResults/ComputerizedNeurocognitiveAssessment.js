import React from "react";
import { Table, Label } from 'reactstrap';
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";

// pdf page 115

function ComputerizedNeurocognitiveAssessment(props) {
    const next = "/paulhus_deception_scale"
    return (
        <>
        <div id="page-container">
          <div id="content-wrap">
          <Heading />
      <div className="ml-5 mr-5 mt-3">
        <div className="d-flex flex-wrap text-white align-items-baseline">
                <h3 className="mb-1 col-2">Test Results</h3>
                <h4 className="mb-3">Computerized Computerized Neurocognitive Assessment (CNS) </h4>
        </div>
        <div className="text-white d-flex flex-wrap">
            <div className="col-4">
                <input
                    className=""
                    type="checkbox"
                    id=""
                    />
                    <Label className="m-2" for=""></Label>[Patient Name, First] completed the Computerized Neurocognitive Assessment (CNS).
            <p className="m-2">This instrument is a clinical testing procedure used to evaluate the neurocognitive state. It can be successfully completed bu an average child with
                a fourth grade reading level. Validity indicators are used to indicate whether the patient gave poor effort or generated invalid results (feigning, malingering, etc).
            </p>
            <p className="m-2">
                *Type in results of areas with significant and moderate impairments.
            </p>
            </div>
            <div className="col-8">
            <Table>
            <thead className="tableHeader text-center" >
                <tr>
                <th className="m-0 customPadding domainScoreWidth">Domain Scores</th>
                <th className="m-0 customPadding tdWidth">Standard Score</th>
                <th className="m-0 customPadding tdWidth">Percentile</th>
                <th className="m-0 customPadding tdWidth">Functional Range</th>
                </tr>
            </thead>
            <tbody className="">
                <tr>
                    <th scope="row" className="m-0 customPadding">Neurocoginition Index (NCI)</th>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">Composite Memory</th>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">Verbal Memory</th>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">Visual Memory</th>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">Psychomotor Speed</th>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">Reaction Time*</th>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">Complex Attention*</th>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">Congitive Flexibility</th>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">Processing Speed</th>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">Executive Function</th>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">Social Acuity</th>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">Reasoning</th>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">Working Memory</th>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">Sustained Attention</th>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">Simple Attention</th>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th scope="row" className="m-0 customPadding">Motor Speed</th>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
                    <td className="m-0 p-0">
                        <select name="" id="" className="customSelect m-0 p-0" required>
                        <option value=""></option>
                        <option value="average">Average</option>
                        <option value="low_average">Low Average</option>
                        <option value="moderately_impaired">Moderately Impaired</option>
                        <option value="severely_impaired">Severely Impaired</option>
                        </select>
                    </td>
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

export default ComputerizedNeurocognitiveAssessment;