import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

export default function Toolbar(props) {
  return (
    <div className="toolbar">
      <FontAwesomeIcon icon={faFire} className="icon" />
      <h2 className="title">{props.title}</h2>
    </div>
  );
}
