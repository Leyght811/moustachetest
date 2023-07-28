import React, { useEffect, useState } from "react";
import "../styles/header.css";
import "../styles/styles.css";
import image from "../imgs/classic-tee.jpg";

const DropdownNode = (props) => {
//   console.log(props.item);
  return (
    <div className="dropdownNode">
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
