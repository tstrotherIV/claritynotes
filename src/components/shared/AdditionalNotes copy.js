import React, { useState, useEffect } from "react";
import DataManager from "../../data_module/DataManager";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function AdditionalNotesV2(props) {
  const [value, setValue] = useState("");

  const handleChange = async (e) => {
    setValue(e);
    props.handleAdditionalNotesChange(e);
    DataManager.update_Item("patient_notes", props.patientNotes.id, {
      t1a: e,
    });
  };

  const getData = () => {
    const { t1a } = props.patientNotes;
    setValue(t1a);
  };

  useEffect(() => {
    if (props.question) {
      getData();
    }
  }, [props.question]);

  return <ReactQuill theme="snow" value={value} onChange={handleChange} />;
}

export default AdditionalNotesV2;
