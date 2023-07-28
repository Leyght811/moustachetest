import React, { useEffect, useState } from "react";
import "../styles/styles.css";
import Header from "../components/header";
import ShopPage from "./shopPage";

const Layout = () => {
  const [cart, setCart] = useState([]);
  const [itemData, setItemData] = useState({});

  // When function is called inside ShopPage it adds the selected data to cart where it can be used by Header
  function addToCart(item) {
    setCart([...cart, item]);
  }

  // Gets item data from external sourse and sets it to the i"temData" state variable
  useEffect(() => {
    fetch(
      "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product"
    )
      .then((response) => response.json())
      .then((json) => setItemData(json));
  }, []);

  return (
    <div>
      <Header cart={cart} />
      <ShopPage
        itemName={itemData.title || ""}
        itemPrice={itemData.price || 0}
        itemText={itemData.description || ""}
        itemSizes={itemData.sizeOptions || []}
        addFunction={addToCart}
      />
    </div>
  );
};

export default Layout;
