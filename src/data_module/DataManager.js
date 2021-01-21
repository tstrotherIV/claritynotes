// const remoteURL = "http://localhost:5002";
const remoteURL =
  "https://pdp73mj2c8.execute-api.us-east-2.amazonaws.com/v1/claritynotes";

export default {
  // ALL  GET METHODS

  //Get the patient by ID
  async getPatient(patientId) {
    return fetch(`${remoteURL}/patients?PK=${patientId}`).then((result) =>
      result.json()
    );
  },
  //Get the patient by ID
  async getAllPatients() {
    return fetch(`${remoteURL}/patients`).then((result) => result.json());
  },

  //Get the User by ID
  async getUser(userId) {
    return fetch(`${remoteURL}/users/${userId}`).then((result) =>
      result.json()
    );
  },

  // Get Patient Response by Patient ID and questionID
  async getQuestionPatientNotes(patientId, questionId) {
    return fetch(
      `${remoteURL}/patientNotes?patientId=${patientId}&questionId=${questionId}`
    ).then((result) => result.json());
  },

  //Get all Patient Children
  async getChildren(patientId) {
    return fetch(
      `${remoteURL}/children?patientId=${patientId}`
    ).then((result) => result.json());
  },

  //Get all Patient Siblings
  async getSiblings(patientId) {
    return fetch(
      `${remoteURL}/siblings?patientId=${patientId}`
    ).then((result) => result.json());
  },

  //Get all Patient Guardians
  async getGuardians(patientId) {
    return fetch(
      `${remoteURL}/guardians?patientId=${patientId}`
    ).then((result) => result.json());
  },

  //Get all Patient Spouses
  async getSpouses(patientId) {
    return fetch(`${remoteURL}/spouses?patientId=${patientId}`).then((result) =>
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

  async createPatient(resource, newPatientData) {
    return fetch(`${remoteURL}/${resource}`, {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPatientData),
    });
  },

  // ALL UPDATED MEHTODS

  update(resource, editedData) {
    return fetch(`${remoteURL}/${resource}?PK=${editedData.PK}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedData),
    }).then((updatedData) => updatedData.json());
  },

  // ALL DELETE METHODS

  delete(resource, id) {
    return fetch(`${remoteURL}/${resource}/${id}`, {
      method: "DELETE",
    }).then((deletedData) => deletedData.json());
  },

  //Create User
  async createNewUser(newUser) {
    return fetch(`${remoteURL}/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then((data) => data.json());
  },

  //Get User during Login
  async getUser(username) {
    return fetch(`${remoteURL}/users?q=${username}`).then((result) =>
      result.json()
    );
  },
};
