import React from "react";
import "../styles/shopPage.css";
import "../styles/styles.css";

const SizeButton = (props) => {
  return (
    // If "active" prop is passed to the button it shows different styles
    <div style={props.active ? {borderColor: "#222222", borderWidth : "3px"} : {}} className="sizeButtonContainer" onClick={props.onClick}>
      <div className="sizeButtonText smallText fontColorLight">{props.text}</div>
    </div>
  );
};

export default SizeButton;
