import React, { useEffect, useState } from "react";
import "../styles/shopPage.css";
import "../styles/styles.css";
import image from "../imgs/classic-tee.jpg";
import SizeButton from "../components/sizeButton";

const ShopPage = (props) => {
  const [item, setItem] = useState({
    itemName: props.itemName,
    itemPrice: props.itemPrice,
    itemText: props.itemText,
    itemSize: null,
  });

  useEffect(() => {
    setItem({
      itemName: props.itemName,
      itemPrice: props.itemPrice,
      itemText: props.itemText,
      itemSize: null,
    })
  }, [props])

  function setSize(size) {
    setItem({ ...item, itemSize: size });
  }

  function addItem() {
    if (item.itemSize) {
      props.addFunction(item);
    } else {
      window.alert("Please select a size");
    }
  }

  return (
    <div id="pageContainer">
      <div id="shopImage">
        <img className="itemImage" src={image} alt="" />
      </div>
      <div id="shopInfo">
        <div id="itemName" className="infoSection fontColorDark">
          {props.itemName}
        </div>
        <div id="itemPrice" className="infoSection fontColorDark">
          ${props.itemPrice}
        </div>
        <div
          id="itemDescription"
          className="smallText infoSection fontColorLight"
        >
          {props.itemText}
        </div>
        <div id="itemSizeTitle" className=" fontColorLight">
          SIZE <span className="asterisk">*</span>
        </div>
        <div id="itemSize">
          {props.itemSizes.map((size) => (
            <SizeButton
              active={item.itemSize == size.label}
              onClick={() => setSize(size.label)}
              text={size.label}
            />
          ))}
        </div>
        <div id="itemPurchaseButton" onClick={(event) => addItem()}>
          <div id="itemPurchaseButtonText" className=" fontColorDark ">
            <b>ADD TO CART</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
