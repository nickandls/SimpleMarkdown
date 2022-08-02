import "/public/styles.css";
import React from "react";
import Editor from "./Editor";
import PreviewEditor from "./PreviewEditor";
import placeholder from "./Placeholder";

export default function App() {
  const [inputText, setInputText] = React.useState(placeholder);

  function handleChange(event) {
    var text = event.target.value;
    setInputText(text);
  }
  return (
    <div>
      <Editor text={inputText} onChange={handleChange} />
      <div style={{ paddingTop: 2 + "%" }}></div>
      <PreviewEditor text={inputText} />
    </div>
  );
}
