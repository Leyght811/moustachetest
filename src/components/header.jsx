import React, { useEffect, useState } from "react";
import "../styles/header.css";
import "../styles/styles.css";
import DropdownNode from "./dropdownNode";

const Header = (props) => {
  const [cartContent, setCartContent] = useState([]);

  const [sortedContent, setSortedContent] = useState({})

  // Whenever the component gets new cart data through the props that data is set into the state and the sortBySize function is run
  useEffect(() => {
    setCartContent(props.cart);
    sortBySize()
  }, [props.cart]);

  // Sorts the cart by size and stores the sorted data in the "sorted" state variable
  function sortBySize() {
    var sorted = {};
    for (var i = 0, max = props.cart.length; i < max; i++) {
      if (sorted[props.cart[i].itemSize] == undefined) {
        sorted[props.cart[i].itemSize] = [];
      }
      sorted[props.cart[i].itemSize].push(props.cart[i]);
    }
    setSortedContent(sorted)
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
            {/* Converts the sorted content into an array and then uses the "map" function to go through the sorted content and render a DropdownNode in the menu for each different item size */}
            {Object.keys(sortedContent).map(content => (<DropdownNode key={content} item={sortedContent[content]} />))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
