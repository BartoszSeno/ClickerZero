import React, { useState, useEffect } from "react";
import "../assets/css/Normal/Equipment/equipment.css";
import Armor from "./Armor/armor";
import AweWeapon from "./AweWeapon/aweWeapon";
import MainWeapon from "./MainWeapon/mainWeapon";
import SubWeapon from "./SubWeapon/subWeapon";
import Helmet from "./Helmet/helmet";
import Shoes from "./Shoes/shoes";
import Gloves from "./Gloves/gloves";
import Statistic from "./statistic/statistic";

const Eq = ({
  mainWeaponDara,
  setMainWeaponData,
  HowMenyTimeBoughtWeapon,
}: {
  mainWeaponDara: any;
  setMainWeaponData: any;
  HowMenyTimeBoughtWeapon: any;
}) => {
  return (
    <>
      <section id="equipment">
        <span className="circle">
          <AweWeapon />
          <MainWeapon
            setMainWeaponData={setMainWeaponData}
            mainWeaponDara={mainWeaponDara}
            HowMenyTimeBoughtWeapon={HowMenyTimeBoughtWeapon}
          />
          <SubWeapon />
          <Armor />
          <Helmet />
          <Shoes />
          <Gloves />
        </span>
      </section>
      <section id="Statistic">
        <Statistic />
      </section>
    </>
  );
};

export default Eq;
