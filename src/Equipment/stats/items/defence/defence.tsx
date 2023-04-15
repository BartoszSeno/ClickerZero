import React, { useState, useEffect } from "react";
import { formatNumber } from "../../../../hook/FormatNumber";
import DefenceArmor from "./items/Armor";
import DefenceHelmet from "./items/Helmet";
import DefenceShoes from "./items/Shoes";
import DefenceGloves from "./items/gloves";
import DefenceShieldAndDagger from "./items/shieldAndDagger";

function DefenceStatistic({
  ShieldAndDaggerData,
  selectedShieldAndDaggerItem,
  HelmetData,
  selectedHelmetItem,
  ArmorData,
  selectedArmorItem,
  GlovesData,
  selectedGlovesItem,
  ShoesData,
  selectedShoesItem,
}: {
  ShieldAndDaggerData: any;
  selectedShieldAndDaggerItem: any;
  HelmetData: any;
  selectedHelmetItem: any;
  ArmorData: any;
  selectedArmorItem: any;
  GlovesData: any;
  selectedGlovesItem: any;
  ShoesData: any;
  selectedShoesItem: any;
}) {
  const [fullValu, setFullValu] = useState(0); // Initialize fullValu state with initial value of 0

  useEffect(() => {
    // Run this effect whenever any of the dependent values change
    const textArmor = document.querySelector(
      ".statsDefDefHiden"
    ) as HTMLElement;
    const textHelmet = document.querySelector(
      ".statsHelmetDefHiden"
    ) as HTMLElement;
    const textShoes = document.querySelector(
      ".statsShoesDefHiden"
    ) as HTMLElement;
    const textGloves = document.querySelector(
      ".statsGlovesDefHiden"
    ) as HTMLElement;
    const textShieldAndDagger = document.querySelector(
      ".statsShieldAndDaggerDefHiden"
    ) as HTMLElement;

    const fullValue =
      Number(textArmor?.textContent || 0) +
      Number(textHelmet?.textContent || 0) +
      Number(textShoes?.textContent || 0) +
      Number(textGloves?.textContent || 0) +
      Number(textShieldAndDagger?.textContent || 0);

    setFullValu(fullValue); // Update the state with the computed full value
  }, [
    ShieldAndDaggerData,
    selectedShieldAndDaggerItem,
    HelmetData,
    selectedHelmetItem,
    ArmorData,
    selectedArmorItem,
    GlovesData,
    selectedGlovesItem,
    ShoesData,
    selectedShoesItem,
  ]);

  return (
    <>
      <span>Helmet Def</span>
      <DefenceHelmet
        HelmetData={HelmetData}
        selectedHelmetItem={selectedHelmetItem}
      />
      <span>Armor Def</span>
      <DefenceArmor
        ArmorData={ArmorData}
        selectedArmorItem={selectedArmorItem}
      />
      <span>Gloves Def</span>
      <DefenceGloves
        GlovesData={GlovesData}
        selectedGlovesItem={selectedGlovesItem}
      />
      <span>Shoes Def</span>
      <DefenceShoes
        ShoesData={ShoesData}
        selectedShoesItem={selectedShoesItem}
      />
      <span>Shield Def</span>
      <DefenceShieldAndDagger
        ShieldAndDaggerData={ShieldAndDaggerData}
        selectedShieldAndDaggerItem={selectedShieldAndDaggerItem}
      />
      <span className="fullStats">Full def</span>
      <span className="statsDefHelmet">{formatNumber(fullValu)}</span>
    </>
  );
}

export default DefenceStatistic;
