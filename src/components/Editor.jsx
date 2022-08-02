import React from "react";
import Toolbar from "./Toolbar";

export default function Editor(props) {
  var inputText = props.text;
  const pageTitle = "Editor";
  return (
    <div>
      <div className="editorArea">
        <Toolbar title={pageTitle} />
        <textarea
          id="editor"
          value={inputText}
          onChange={props.handleChange}
          type="text"
        ></textarea>
      </div>
    </div>
  );
}
