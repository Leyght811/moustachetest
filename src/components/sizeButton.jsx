import React from "react";
import "../styles/shopPage.css";
import "../styles/styles.css";

const SizeButton = (props) => {
  return (
    <div style={props.active ? {borderColor: "#222222", borderWidth : "3px"} : {}} className="sizeButtonContainer" onClick={props.onClick}>
      <div className="sizeButtonText smallText fontColorLight">{props.text}</div>
    </div>
  );
};

export default SizeButton;
