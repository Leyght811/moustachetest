import React, { useEffect, useState } from "react";
import "../styles/header.css";
import "../styles/styles.css";
import DropdownNode from "./dropdownNode";

const Header = (props) => {
  const [cartContent, setCartContent] = useState([]);

  const [sortedContent, setSortedContent] = useState({})

  useEffect(() => {
    setCartContent(props.cart);
    sortBySize()
  }, [props.cart]);

  function sortBySize() {
    var sorted = {};
    for (var i = 0, max = props.cart.length; i < max; i++) {
      if (sorted[props.cart[i].itemSize] == undefined) {
        sorted[props.cart[i].itemSize] = [];
      }
      sorted[props.cart[i].itemSize].push(props.cart[i]);
    }
    setSortedContent(sorted)
    console.log(props.cart)
  }
  return (
    <div id="headerContainer">
      <div id="headerBody">
        <div className="headerSpace"></div>
        <div className="dropdown">
          <div id="headerCartButton" className="smallText fontColorLight">
            My Cart ({cartContent.length})
          </div>
          <div id="headerCartDropdown">
            {Object.keys(sortedContent).map(content => (<DropdownNode item={sortedContent[content]} />))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
