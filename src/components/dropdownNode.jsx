import React, { useEffect, useState } from "react";
import "../styles/header.css";
import "../styles/styles.css";
import image from "../imgs/classic-tee.jpg";

// This is what appears when you hover over the "cart" button
const DropdownNode = (props) => {
  return (
    <div key={props.key} className="dropdownNode fontColorDark">
      <div className="dNodeImage">
        <img className="dropDownImage" src={image} alt="" />
      </div>
      <div className="dNodeInfo">
        <div className="dNodeTitle">{props.item[0].itemName}</div>
        <div className="dNodeItems">
          <div className="dNodeAmount">{props.item.length}x</div>
          <div className="dNodePrice">${props.item[0].itemPrice}</div>
        </div>
        <div className="dNodeSize smallText">Size: {props.item[0].itemSize}</div>
      </div>
    </div>
  );
};

export default DropdownNode;
