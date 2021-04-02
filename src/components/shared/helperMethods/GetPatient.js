import DataManager from "../../../data_module/DataManager"

const getData = async () => {
  const check_for_patient = await sessionStorage.getItem("patient_id");
  const patientInfo = await DataManager.getPatient(check_for_patient);

  return patientInfo;
};

export default getData;
