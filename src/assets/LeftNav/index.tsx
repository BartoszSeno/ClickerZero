import React, { useState, useEffect } from "react";
import "../css/Normal/LeftNav/leftNav.css";
import ShopNav from "./shop/shop";

const LeftNav = () => {
  return (
    <>
      <nav id="left-nav">
        <div className="nav-element">
          <ShopNav />
        </div>
        <div className="nav-element">Enchant</div>
        <div className="nav-element">Boss</div>
        <div className="nav-element">Upgrade</div>
      </nav>
    </>
  );
};

export default LeftNav;
