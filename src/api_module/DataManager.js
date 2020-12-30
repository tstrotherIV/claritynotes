const remoteURL = "http://localhost:5002";

export default {
  //Get the patient by ID
  async getPatient(patientId) {
    return fetch(`${remoteURL}/patients/${patientId}`).then((result) =>
      result.json()
    );
  },


  // Get Patient Response by Patient ID and questionID
  async getQuestionPatientNotes(patientId, questionId) {
    return fetch(`${remoteURL}/patientNotes?patientId=${patientId}&questionId=${questionId}`).then((result) =>
      result.json()
    );
  },
}