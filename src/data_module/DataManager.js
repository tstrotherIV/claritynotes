
const remoteURL =
  "https://cq73ylztmi.execute-api.us-west-2.amazonaws.com/staging";
// const remoteURL = "http://127.0.0.1:5000";

export default {
  // ALL  GET METHODS

  //Get the patient by ID
  async getPatient(patientId) {
    return fetch(`${remoteURL}/patients/${patientId}`).then((result) =>
      result.json()
    );
  },
  // Get the patient by ID
  async getAllPatients() {
    return fetch(`${remoteURL}/patients`).then((result) => result.json());
  },

  // //Get the User by ID
  async getUser(userId) {
    return fetch(`${remoteURL}/users/${userId}`).then((result) =>
      result.json()
    );
  },
  
  //User Login and post to DB sessions
  async loginUser (login_data) {
    return fetch(`${remoteURL}/sessions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login_data),
    }).then((postedData) => postedData.json());
  },

  async logoutUser (session_id) {
    return fetch(
      `${remoteURL}/sessions/${session_id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `${session_id}`
        },
      }).then((updatedData) => updatedData.json());
  },

  // Get Patient Response by Patient ID and questionID
  async getQuestionPatientNotes(patientId, questionId) {
    return fetch(
      `${remoteURL}/patients/${patientId}/patient_notes/${questionId}`
    ).then((result) => result.json());
  },

  //Get all Patient Children
  async getChildren(patientId) {
    return fetch(
      `${remoteURL}/patients/${patientId}/children`
    ).then((result) => result.json());
  },

  //Get all Patient Siblings
  async getSiblings(patientId) {
    return fetch(
      `${remoteURL}/patients/${patientId}/siblings`
    ).then((result) => result.json());
  },

  //Get all Patient Guardians
  async getGuardians(patientId) {
    return fetch(
      `${remoteURL}/patients/${patientId}/guardians`
    ).then((result) => result.json());
  },

  //Get all Patient Spouses
  async getSpouses(patientId) {
    return fetch(`${remoteURL}/patients/${patientId}/spouses`).then((result) =>
      result.json()
    );
  },

  // // ALL CREATE METHODS

  // // Method that will allow the creation of any element in the database
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
    const patient_id = sessionStorage.getItem("patient_id");
    return fetch(`${remoteURL}/${resource}/${patient_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedData),
    }).then((updatedData) => updatedData.json());
  },

  add_Item(resource, newData) {
    const patient_id = sessionStorage.getItem("patient_id");
    return fetch(`${remoteURL}/patients/${patient_id}/${resource}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    }).then((postedData) => postedData.json());
  },

  // Update Guardian
  update_Item(resource, item_id, editedData) {
    const patient_id = sessionStorage.getItem("patient_id");
    return fetch(
      `${remoteURL}/patients/${patient_id}/${resource}/${item_id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedData),
      }
    ).then((updatedData) => updatedData.json());
  },

  delete_Item(resource, guardian_id) {
    const patient_id = sessionStorage.getItem("patient_id");
    return fetch(
      `${remoteURL}/patients/${patient_id}/${resource}/${guardian_id}`, {
        method: "DELETE",
      }).then((updatedData) => updatedData.json());
  },

  // // ALL DELETE METHODS

  // delete(resource, id) {
  //   return fetch(`${remoteURL}/${resource}/${id}`, {
  //     method: "DELETE",
  //   }).then((deletedData) => deletedData.json());
  // },

  // //Create User
  // createNewUser(newUser) {
  //   return fetch(
  //     `https://pdp73mj2c8.execute-api.us-east-2.amazonaws.com/v1/claritynotes/users/`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newUser),
  //     }
  //   );
  // },

  // //Get User during Login
  // async getUser(username) {
  //   return fetch(`${remoteURL}/users?q=${username}`).then((result) =>
  //     result.json()
  //   );
  // },
};
