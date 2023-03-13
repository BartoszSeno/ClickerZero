/* eslint-disable no-lone-blocks */
import { formatNumber } from "../../../hook/FormatNumber";
import DefenceArmor from "./gear/Armor";
import DefenceHelmet from "./gear/Helmet";
import DefenceShoes from "./gear/Shoes";
import DefenceGloves from "./gear/gloves";
import DefenceShieldAndDagger from "./gear/shieldAndDagger";

const Defence = ({
  ArmorData,
  selectedArmorItem,
  HelmetData,
  selectedHelmetItem,
  ShoesData,
  selectedShoesItem,
  GlovesData,
  selectedGlovesItem,
  ShieldAndDaggerData,
  selectedShieldAndDaggerItem,
}: {
  ArmorData: any;
  selectedArmorItem: any;
  HelmetData: any;
  selectedHelmetItem: any;
  ShoesData: any;
  selectedShoesItem: any;
  GlovesData: any;
  selectedGlovesItem: any;
  ShieldAndDaggerData: any;
  selectedShieldAndDaggerItem: any;
}) => {
  // export data from statistic
  const FullArmorDefFromText = document.querySelector(
    ".statsDefDefHiden"
  ) as HTMLElement;
  //if the data exists, convert it to a text
  const textArmor = FullArmorDefFromText?.textContent;
  // export data from statistic
  const FullHelmetDefFromText = document.querySelector(
    ".statsHelmetDefHiden"
  ) as HTMLElement;
  //if the data exists, convert it to a text
  const textHelmet = FullHelmetDefFromText?.textContent;
  // export data from statistic
  const FullShoesDefFromText = document.querySelector(
    ".statsShoesDefHiden"
  ) as HTMLElement;
  //if the data exists, convert it to a text
  const textShoes = FullShoesDefFromText?.textContent;
  // export data from statistic
  const FullGlovesDefFromText = document.querySelector(
    ".statsGlovesDefHiden"
  ) as HTMLElement;
  //if the data exists, convert it to a text
  const textGloves = FullGlovesDefFromText?.textContent;
  // export data from statistic
  const FullShieldAndDaggerDefFromText = document.querySelector(
    ".statsShieldAndDaggerDefHiden"
  ) as HTMLElement;
  //if the data exists, convert it to a text
  const textShieldAndDagger = FullShieldAndDaggerDefFromText?.textContent;

  const FullValu =
    Number(textArmor || 0) +
    Number(textHelmet || 0) +
    Number(textShoes || 0) +
    Number(textGloves || 0) +
    Number(textShieldAndDagger || 0);

  return (
    <>
      <DefenceArmor
        ArmorData={ArmorData}
        selectedArmorItem={selectedArmorItem}
      />
      <span className="statsDefHelmet">{formatNumber(FullValu)}</span>
      <DefenceHelmet
        HelmetData={HelmetData}
        selectedHelmetItem={selectedHelmetItem}
      />
      <DefenceShoes
        ShoesData={ShoesData}
        selectedShoesItem={selectedShoesItem}
      />
      <DefenceGloves
        GlovesData={GlovesData}
        selectedGlovesItem={selectedGlovesItem}
      />
      <DefenceShieldAndDagger
        ShieldAndDaggerData={ShieldAndDaggerData}
        selectedShieldAndDaggerItem={selectedShieldAndDaggerItem}
      />
    </>
  );
};

export default Defence;
