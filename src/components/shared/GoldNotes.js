import React from "react";
import DataManager from "../../data_module/DataManager";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


/*
 * Custom "star" icon for the toolbar using an Octicon
 * https://octicons.github.io
 */

/*
 * Event handler to be attached using Quill toolbar module (see line 73)
 * https://quilljs.com/docs/modules/toolbar/
 */
function insertStar() {
  const cursorPosition = this.quill.getSelection().index;
  this.quill.insertText(cursorPosition, "★");
  this.quill.setSelection(cursorPosition + 1);
}

/*
 * Custom toolbar component including insertStar button and dropdowns
 */
const CustomToolbar = () => (
  <div id="toolbar">
       <span className="ql-formats">
      <select className="ql-font"></select>
      <select className="ql-size"></select>
    </span>
    <span className="ql-formats">
      <button className="ql-bold"></button>
      <button className="ql-italic"></button>
      <button className="ql-underline"></button>
      <button className="ql-strike"></button>
    </span>
    <span className="ql-formats">
      <select className="ql-color"></select>
      <select className="ql-background"></select>
    </span>
    <span className="ql-formats">
      <button className="ql-header" value="1"></button>
      <button className="ql-header" value="2"></button>
      <button className="ql-blockquote" selected></button>
      <button className="ql-code-block" selected></button>
    </span>
    <span className="ql-formats">
      <button className="ql-list" value="ordered"></button>
      <button className="ql-list" value="bullet"></button>
      <button className="ql-indent" value="-1"></button>
      <button className="ql-indent" value="+1"></button>
    </span>
    <span className="ql-formats">
      <button className="ql-direction" value="rtl"></button>
      <select className="ql-align"></select>
    </span>
    <span className="ql-formats">
      <button className="ql-link"></button>
      <button className="ql-image"></button>
      <button className="ql-video"></button>
      
    </span>
    <span className="ql-formats">
      <button className="ql-clean"></button>
    </span>
  </div>
);

/* 
 * Editor component with custom toolbar and content containers
 */
class GoldNotes extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { editorHtml: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html) {
    const editedGeneralNotes = {
      id: this.props.patientNotes.id,
      t1a: html,
    };
    DataManager.update("patientNotes", editedGeneralNotes);
  }

  render() {
    return (
      <div className="text-editor">
        <CustomToolbar />
        <ReactQuill
          onChange={this.handleChange}
          modules={GoldNotes.modules}
          formats={GoldNotes.formats}
          theme={"snow"} // pass false to use minimal theme
          className="scroll-container"
          id="goldNote"
        />
      </div>
    );
  }
}

/* 
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
GoldNotes.modules = {
    toolbar: {
      syntax: true,
      container: "#toolbar",

      handlers: {
        insertStar: insertStar
      }
      
    }
  };

/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
GoldNotes.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color"
];

export default GoldNotes;
