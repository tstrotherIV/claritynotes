import React, { useState, useEffect } from "react";
import EmptyFooterSpace from "../../shared/EmptyFooterSpace";
import ButtonNavigation from "../../shared/ButtonNavigation";
import "./additionalData.scss";
import { storage } from "../../../firebase";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
  Table,
} from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import DataManager from "../../../data_module/DataManager";

function PsychologicalEvaluationAdditionalData(props) {
  const [additionalData, setAdditionalData] = useState("");
  const [patientDocuments, setPatientDocuments] = useState([]);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [url, setURL] = useState("");

  const next = "/interview_pg_1";
  const back = "/psychological_evaluation_consent";

  //CRUD Function END

  const getData = () => {
    setAdditionalData(props.patientDetails);
    props.patientDetails.patient_docs
      ? setPatientDocuments(props.patientDetails.patient_docs)
      : setPatientDocuments([]);
  };

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function handleFileNameChange(e) {
    setFileName(e.target.value);
  }

  const handleUpload = async (e) => {
    e.preventDefault();

    const fileRef = `${additionalData.patient_last_name},${
      additionalData.patient_first_name
    }/${file.name}-${uuidv4()}`;

    await storage.ref(fileRef).put(file);

    await storage
      .ref(fileRef)
      .getDownloadURL()
      .then((item) => {
        setURL(item);
        const editedPatient = {
          patient_docs: [
            ...patientDocuments,
            {
              id: uuidv4(),
              document_original_name: file.name,
              file_name: fileName,
              file_url: item,
              date_added: new Date().toLocaleDateString(),
              identifier: fileRef,
            },
          ],
        };
        DataManager.update("patients", editedPatient).then(() => {
          props.getData();
          document.getElementById("file_path").value = "";
          document.getElementById("files_name").value = "";
        });
      });
  };

  const handleDelete = async (fileRef) => {
    let filteredArray = patientDocuments.filter(function (e) {
      return e.identifier != fileRef;
    });
    DataManager.update("patients", {
      patient_docs: filteredArray,
    }).then(() => {
      props.getData();
    });

    const item = storage.ref().child(`/${fileRef}`);

    item
      .delete()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, [props]);

  return (
    <>
      <Container>
        <div className="">
          <div className="d-flex justify-content-center mt-5">
            <h2 className="text-white">Additional Data</h2>
          </div>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Form onSubmit={handleUpload}>
                <FormGroup className="formCenter">
                  <Input
                    id="file_path"
                    type="file"
                    onChange={handleChange}
                    className="formItemCenter p-2 m-2"
                    required
                  />
                  <Input
                    id="files_name"
                    type="text"
                    className="formItemCenter p-2 m-2"
                    placeholder="Add File Name"
                    onChange={handleFileNameChange}
                    required
                  />
                  <Button disabled={!file || !fileName} className="p-2 m-2">
                    upload file
                  </Button>
                </FormGroup>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="m-5 d-flex flex-wrap justify-content-around">
                <Table dark>
                  <thead>
                    <tr>
                      <th>File Name</th>
                      <th>Date Added</th>
                      <th>View Document</th>
                      <th>Remove Document</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <tr> */}
                    {patientDocuments.map((doc) => (
                      <tr key={doc.id}>
                        <th className="additionalDataTableFields">
                          {doc.file_name}
                        </th>
                        <th className="additionalDataTableFields">
                          {doc.date_added}
                        </th>
                        <th className="additionalDataTableFields">
                          <a href={doc.file_url} target="_blank">
                            View File
                          </a>
                        </th>
                        <th>
                          <Button
                            color="danger"
                            onClick={() => {
                              handleDelete(doc.identifier);
                            }}
                          >
                            Delete File
                          </Button>
                        </th>
                      </tr>
                    ))}
                    {/* </tr> */}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div id="footer">
        <ButtonNavigation
          next={next}
          back={back}
          patient={props.patientId}
          patientNotes={additionalData}
        />
        <EmptyFooterSpace />
      </div>
    </>
  );
}

export default PsychologicalEvaluationAdditionalData;
