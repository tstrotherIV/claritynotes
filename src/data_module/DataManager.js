const remoteURL = "http://localhost:5002";

export default {
// ALL  GET METHODS

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


  //Get all Patient Children
  async getChildren(patientId) {
    return fetch(`${remoteURL}/children?patientId=${patientId}`).then((result) =>
      result.json()
    );
  },

  //Get all Patient Siblings
  async getSiblings(patientId) {
    return fetch(`${remoteURL}/siblings?patientId=${patientId}`).then((result) =>
      result.json()
    );
  },

  //Get all Patient Guardians
  async getGuardians(patientId) {
    return fetch(`${remoteURL}/guardians?patientId=${patientId}`).then((result) =>
      result.json()
    );
  },

// ALL CREATE METHODS

// Method that will allow the creation of any element in the database
post(resource, newData) {
  return fetch(`${remoteURL}/${resource}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  }).then((postedData) => postedData.json());
},



// ALL UPDATED MEHTODS

update(resource, editedData) {
  return fetch(`${remoteURL}/${resource}/${editedData.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedData),
  }).then((updatedData) => updatedData.json())
},



// ALL DELETE METHODS

delete(resource, id) {
  return fetch(`${remoteURL}/${resource}/${id}`, {
    method: "DELETE",
  }).then((deletedData) => deletedData.json());
},



}