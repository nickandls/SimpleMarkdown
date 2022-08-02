import React from "react";
import { marked } from "marked";
import Prism from "prismjs";
import Toolbar from "./Toolbar";

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, "javascript");
  }
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

export default function Editor(props) {
  var inputText = props.text;

  const pageTitle = "Preview";

  inputText = marked(inputText, { renderer: renderer });

  return (
    <div className="previewArea">
      <Toolbar title={pageTitle} />
      <div
        dangerouslySetInnerHTML={{
          __html: marked(inputText, { renderer: renderer })
        }}
        id="preview"
      />
    </div>
  );
}
