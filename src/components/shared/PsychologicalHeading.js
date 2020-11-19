import React from 'react';

const PsychologicalHeading = () => {
    return (
    <> 
    <div class="jumbotron jumbotron-fluid mb-0">
      <div className="container"> 
        <h1 className="d-flex justify-content-center p-2 jumboResp">
          Psychological Evaluation
        </h1>
      </div>
      </div>
      <section className="ml-2 mr-2 mb-2 flexPatientInfo">
        <p className="col-sm-10 col-md-4 textWhite patientP">
          [Patient Name, First] [Patient Name, Last]
        </p>
        <p className="col-sm-10 col-md-2 textWhite patientP">DOB: [Patient DOB]</p>
        <p className="col-sm-10 col-md-3 textWhite patientP" >Patient ID: [Patient ID]</p>
        <p className="col-sm-10 col-md-3 textWhite patientP">Existing Patient: [Case #]</p>
      </section>
    </>
    )
}

export default PsychologicalHeading;