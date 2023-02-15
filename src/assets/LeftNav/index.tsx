import React, { useState, useEffect } from "react";
import "../css/Normal/LeftNav/leftNav.css";
import ShopNav from "./shop/shop";
import EnchantNav from "./Enchant/enchant";

const LeftNav = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: any;
  setActiveTab: any;
}) => {
  return (
    <>
      <ul id="left-nav">
        <li
          onClick={() => setActiveTab("shop")}
          id="nav-element"
          className={activeTab === "shop" ? "active" : ""}
        >
          <ShopNav />
        </li>
        <li
          onClick={() => setActiveTab("enchant")}
          id="nav-element"
          className={activeTab === "enchant" ? "active" : ""}
        >
          <EnchantNav />
        </li>
      </ul>
    </>
  );
};

export default LeftNav;
