import React from 'react';

const PatientHeadingInfo = () => {
    return (
    <> 
      <div className="ml-2 mr-2 mb-2 flexPatientInfo">
        <p className="col-sm-10 col-md-4 textWhite patientP">
          {props.patientName.patient_first_name} [Patient Name, Last]
        </p>
        <p className="col-sm-10 col-md-2 textWhite patientP">DOB: [Patient DOB]</p>
        <p className="col-sm-10 col-md-3 textWhite patientP" >Patient ID: [Patient ID]</p>
        <p className="col-sm-10 col-md-3 textWhite patientP">Existing Patient: [Case #]</p>
      </div>
    </>
    )
}

export default PatientHeadingInfo;