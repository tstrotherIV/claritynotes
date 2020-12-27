import React, {useState} from "react";
import { Table, Label } from 'reactstrap';
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import NumericInput from 'react-numeric-input';

// pdf page 117


function ComputerizedNeurocognitiveAssessment(props) {

    const [patientComputerizedNeurocognitiveAssessment, setPatientComputerizedNeurocognitiveAssessment] = useState({
        computerized_performance_neurocognitive_assessment_a: false,
        computerized_performance_neurocognitive_assessment_col1_a: "",
        computerized_performance_neurocognitive_assessment_col1_b: "",
        computerized_performance_neurocognitive_assessment_col1_c: "",
        computerized_performance_neurocognitive_assessment_col1_d: "",
        computerized_performance_neurocognitive_assessment_col1_e: "",
        computerized_performance_neurocognitive_assessment_col1_f: "",
        computerized_performance_neurocognitive_assessment_col1_g: "",
        computerized_performance_neurocognitive_assessment_col1_h: "",
        computerized_performance_neurocognitive_assessment_col1_i: "",
        computerized_performance_neurocognitive_assessment_col1_j: "",
        computerized_performance_neurocognitive_assessment_col1_k: "",
        computerized_performance_neurocognitive_assessment_col1_l: "",
        computerized_performance_neurocognitive_assessment_col1_m: "",
        computerized_performance_neurocognitive_assessment_col1_n: "",
        computerized_performance_neurocognitive_assessment_col1_o: "",
        computerized_performance_neurocognitive_assessment_col1_p: "",
        computerized_performance_neurocognitive_assessment_col2_a: "",
        computerized_performance_neurocognitive_assessment_col2_b: "",
        computerized_performance_neurocognitive_assessment_col2_c: "",
        computerized_performance_neurocognitive_assessment_col2_d: "",
        computerized_performance_neurocognitive_assessment_col2_e: "",
        computerized_performance_neurocognitive_assessment_col2_f: "",
        computerized_performance_neurocognitive_assessment_col2_g: "",
        computerized_performance_neurocognitive_assessment_col2_h: "",
        computerized_performance_neurocognitive_assessment_col2_i: "",
        computerized_performance_neurocognitive_assessment_col2_j: "",
        computerized_performance_neurocognitive_assessment_col2_k: "",
        computerized_performance_neurocognitive_assessment_col2_l: "",
        computerized_performance_neurocognitive_assessment_col2_m: "",
        computerized_performance_neurocognitive_assessment_col2_n: "",
        computerized_performance_neurocognitive_assessment_col2_o: "",
        computerized_performance_neurocognitive_assessment_col2_p: "",
        computerized_performance_neurocognitive_assessment_col3_a: "",
        computerized_performance_neurocognitive_assessment_col3_b: "",
        computerized_performance_neurocognitive_assessment_col3_c: "",
        computerized_performance_neurocognitive_assessment_col3_d: "",
        computerized_performance_neurocognitive_assessment_col3_e: "",
        computerized_performance_neurocognitive_assessment_col3_f: "",
        computerized_performance_neurocognitive_assessment_col3_g: "",
        computerized_performance_neurocognitive_assessment_col3_h: "",
        computerized_performance_neurocognitive_assessment_col3_i: "",
        computerized_performance_neurocognitive_assessment_col3_j: "",
        computerized_performance_neurocognitive_assessment_col3_k: "",
        computerized_performance_neurocognitive_assessment_col3_l: "",
        computerized_performance_neurocognitive_assessment_col3_m: "",
        computerized_performance_neurocognitive_assessment_col3_n: "",
        computerized_performance_neurocognitive_assessment_col3_o: "",
        computerized_performance_neurocognitive_assessment_col3_p: "",

      })

    const next = "/paulhus_deception_scale"

    const handleFieldChange = (e) => {
        setPatientComputerizedNeurocognitiveAssessment({ ...patientComputerizedNeurocognitiveAssessment, [e.target.name]: e.target.value});
      }

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
                    id="computerized_performance_neurocognitive_assessment_a"
                    name="computerized_performance_neurocognitive_assessment_a"
                    checked={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_a}
                    onChange={(e)=> {setPatientComputerizedNeurocognitiveAssessment(e.target.checked)}}
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
            <Table className="mb-4">
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
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10} 
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col1_a"
                        name="computerized_performance_neurocognitive_assessment_col1_a"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_a}     
                        />
                    </td>
                    <td className="m-0 p-0">
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10} 
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col2_a"
                        name="computerized_performance_neurocognitive_assessment_col2_a"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_a}    
                        />
                    </td>
                    <td className="m-0 p-0">
                        <select className="customSelect m-0 p-0" required
                        id="computerized_performance_neurocognitive_assessment_col3_a"
                        name="computerized_performance_neurocognitive_assessment_col3_a"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_a}   >
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
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10} 
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col1_b"
                        name="computerized_performance_neurocognitive_assessment_col1_b"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_b}    
                        />
                        
                    </td>
                    <td className="m-0 p-0">
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10}
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col2_b"
                        name="computerized_performance_neurocognitive_assessment_col2_b"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_b}
                        />
                    </td>
                    <td className="m-0 p-0">
                        <select className="customSelect m-0 p-0" required
                        id="computerized_performance_neurocognitive_assessment_col3_b"
                        name="computerized_performance_neurocognitive_assessment_col3_b"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_b}>
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
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10}  
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col1_c"
                        name="computerized_performance_neurocognitive_assessment_col1_c"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_c}
                        />
                    </td>
                    <td className="m-0 p-0">
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10}
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col2_c"
                        name="computerized_performance_neurocognitive_assessment_col2_c"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_c}
                        />
                    </td>
                    <td className="m-0 p-0">
                        <select className="customSelect m-0 p-0" required
                        id="computerized_performance_neurocognitive_assessment_col3_c"
                        name="computerized_performance_neurocognitive_assessment_col3_c"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_c}
                        >
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
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10} 
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col1_d"
                        name="computerized_performance_neurocognitive_assessment_col1_d"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_d}
                        />
                    </td>
                    <td className="m-0 p-0">
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10}
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col2_d"
                        name="computerized_performance_neurocognitive_assessment_col2_d"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_d}
                        
                        />
                    </td>
                    <td className="m-0 p-0">
                        <select className="customSelect m-0 p-0" required
                        id="computerized_performance_neurocognitive_assessment_col3_d"
                        name="computerized_performance_neurocognitive_assessment_col3_d"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_d}
                        >
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
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10} 
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col1_e"
                        name="computerized_performance_neurocognitive_assessment_col1_e"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_e}
                        />
                    </td>
                    <td className="m-0 p-0">
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10} 
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col2_e"
                        name="computerized_performance_neurocognitive_assessment_col2_e"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_e}
                        />
                    </td>
                    <td className="m-0 p-0">
                        <select className="customSelect m-0 p-0" required
                        id="computerized_performance_neurocognitive_assessment_col3_e"
                        name="computerized_performance_neurocognitive_assessment_col3_e"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_e}
                        >
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
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10} 
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col1_f"
                        name="computerized_performance_neurocognitive_assessment_col1_f"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_f}
                        />
                    </td>
                    <td className="m-0 p-0">
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10} 
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col2_f"
                        name="computerized_performance_neurocognitive_assessment_col2_f"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_f}
                        />
                    </td>
                    <td className="m-0 p-0">
                        <select className="customSelect m-0 p-0" required
                        id="computerized_performance_neurocognitive_assessment_col3_f"
                        name="computerized_performance_neurocognitive_assessment_col3_f"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_f}
                        >
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
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10} 
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col1_g"
                        name="computerized_performance_neurocognitive_assessment_col1_g"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_g}
                        />
                    </td>
                    <td className="m-0 p-0">
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10} 
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col2_g"
                        name="computerized_performance_neurocognitive_assessment_col2_g"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_g}
                        />
                    </td>
                    <td className="m-0 p-0">
                        <select className="customSelect m-0 p-0" required
                        id="computerized_performance_neurocognitive_assessment_col3_g"
                        name="computerized_performance_neurocognitive_assessment_col3_g"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_g}
                        >
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
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10} 
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col1_h"
                        name="computerized_performance_neurocognitive_assessment_col1_h"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_h}
                        />
                    </td>
                    <td className="m-0 p-0">
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10} 
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col2_h"
                        name="computerized_performance_neurocognitive_assessment_col2_h"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_h}
                        />
                    </td>
                    <td className="m-0 p-0">
                        <select className="customSelect m-0 p-0" required
                        id="computerized_performance_neurocognitive_assessment_col3_h"
                        name="computerized_performance_neurocognitive_assessment_col3_h"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_h}>
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
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10}
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col1_i"
                        name="computerized_performance_neurocognitive_assessment_col1_i"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_i}
                        />
                    </td>
                    <td className="m-0 p-0">
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10}
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col2_i"
                        name="computerized_performance_neurocognitive_assessment_col2_i"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_i}
                        />
                    </td>
                    <td className="m-0 p-0">
                        <select className="customSelect m-0 p-0" required
                        id="computerized_performance_neurocognitive_assessment_col3_i"
                        name="computerized_performance_neurocognitive_assessment_col3_i"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_i}
                        >
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
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10} 
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col1_j"
                        name="computerized_performance_neurocognitive_assessment_col1_j"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_j}
                        />
                    </td>
                    <td className="m-0 p-0">
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10}
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col2_j"
                        name="computerized_performance_neurocognitive_assessment_col2_j"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_j}
                        />
                    </td>
                    <td className="m-0 p-0">
                        <select className="customSelect m-0 p-0" required
                        id="computerized_performance_neurocognitive_assessment_col3_j"
                        name="computerized_performance_neurocognitive_assessment_col3_j"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_j}
                        >
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
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10}
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col1_k"
                        name="computerized_performance_neurocognitive_assessment_col1_k"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_k}
                        />
                    </td>
                    <td className="m-0 p-0">
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10} 
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col2_k"
                        name="computerized_performance_neurocognitive_assessment_col2_k"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_k}
                        />
                    </td>
                    <td className="m-0 p-0">
                        <select className="customSelect m-0 p-0" required
                        id="computerized_performance_neurocognitive_assessment_col3_k"
                        name="computerized_performance_neurocognitive_assessment_col3_k"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_k}
                        >
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
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10} 
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col1_l"
                        name="computerized_performance_neurocognitive_assessment_col1_l"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_l}
                        />
                    </td>
                    <td className="m-0 p-0">
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10}
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col2_l"
                        name="computerized_performance_neurocognitive_assessment_col2_l"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_l}
                        />
                    </td>
                    <td className="m-0 p-0">
                        <select className="customSelect m-0 p-0" required
                        id="computerized_performance_neurocognitive_assessment_col3_l"
                        name="computerized_performance_neurocognitive_assessment_col3_l"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_l}
                        >
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
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10} 
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col1_m"
                        name="computerized_performance_neurocognitive_assessment_col1_m"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_m}
                        />
                    </td>
                    <td className="m-0 p-0">
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10} 
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col2_m"
                        name="computerized_performance_neurocognitive_assessment_col2_m"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_m}
                        />
                    </td>
                    <td className="m-0 p-0">
                        <select className="customSelect m-0 p-0" required
                        id="computerized_performance_neurocognitive_assessment_col3_m"
                        name="computerized_performance_neurocognitive_assessment_col3_m"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_m}
                        >
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
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10} 
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col1_n"
                        name="computerized_performance_neurocognitive_assessment_col1_n"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_n}
                        />
                    </td>
                    <td className="m-0 p-0">
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10} 
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col2_n"
                        name="computerized_performance_neurocognitive_assessment_col2_n"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_n}
                        />
                    </td>
                    <td className="m-0 p-0">
                        <select className="customSelect m-0 p-0" required
                        id="computerized_performance_neurocognitive_assessment_col3_n"
                        name="computerized_performance_neurocognitive_assessment_col3_n"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_n}
                        >
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
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10} 
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col1_o"
                        name="computerized_performance_neurocognitive_assessment_col1_o"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_o}
                        />
                    </td>
                    <td className="m-0 p-0">
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10} 
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col2_o"
                        name="computerized_performance_neurocognitive_assessment_col2_o"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_o}
                        />
                    </td>
                    <td className="m-0 p-0">
                        <select className="customSelect m-0 p-0" required
                        id="computerized_performance_neurocognitive_assessment_col3_o"
                        name="computerized_performance_neurocognitive_assessment_col3_o"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_o}
                        >
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
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10} 
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col1_p"
                        name="computerized_performance_neurocognitive_assessment_col1_p"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col1_p}
                        />
                    </td>
                    <td className="m-0 p-0">
                        <NumericInput className="form-control" 
                        min={0} 
                        max={10}
                        style={false}
                        id="computerized_performance_neurocognitive_assessment_col2_p"
                        name="computerized_performance_neurocognitive_assessment_col2_p"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col2_p}
                        />
                    </td>
                    <td className="m-0 p-0">
                        <select className="customSelect m-0 p-0" required
                        id="computerized_performance_neurocognitive_assessment_col3_p"
                        name="computerized_performance_neurocognitive_assessment_col3_p"
                        onChange={handleFieldChange}
                        value={patientComputerizedNeurocognitiveAssessment.computerized_performance_neurocognitive_assessment_col3_p}
                        >
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