import React, { useEffect, useState } from "react";
import "../styles/shopPage.css";
import "../styles/styles.css";
import image from "../imgs/classic-tee.jpg";
import SizeButton from "../components/sizeButton";

const ShopPage = (props) => {
  // State variable which stores the item data
  const [item, setItem] = useState({
    itemName: props.itemName,
    itemPrice: props.itemPrice,
    itemText: props.itemText,
    itemSize: null,
  });

  // Whenever the component gets new item data through the props that data is set into the "item" state variable
  useEffect(() => {
    setItem({
      itemName: props.itemName,
      itemPrice: props.itemPrice,
      itemText: props.itemText,
      itemSize: null,
    });
  }, [props]);

  // Function run when a size is selected, sets the "item" state variable to the same as it was except with the size replace with the currently selected size
  function setSize(size) {
    setItem({ ...item, itemSize: size });
  }

  // If an item size is selected run the function passed through props to add the item to the state variables in the parent component
  // Else pop up an alert telling the user to pick a size
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
          SIZE <span className="asterisk">*</span>{" "}
          <span className="fontColorDark">{item.itemSize}</span>
        </div>
        <div id="itemSize">
          {/* Goes through all item sizes in the data passed through props and renders a button for each */}
          {props.itemSizes.map((size) => (
            <SizeButton
              key={size.label}
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
