import React, { useEffect, useState } from "react";
import "../styles/styles.css";
import Header from "../components/header";
import ShopPage from "./shopPage";

const Layout = () => {
  const [cart, setCart] = useState([]);
  const [itemData, setItemData] = useState({});

  function addToCart(item) {
    setCart([...cart, item]);
  }

  useEffect(() => {
    fetch(
      "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product"
    )
      .then((response) => response.json())
      .then((json) => setItemData(json));
  }, []);

  console.log(itemData);
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
