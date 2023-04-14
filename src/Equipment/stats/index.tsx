/* eslint-disable array-callback-return */
import DemageMainWeapon from "./items/demage/weapon";
import DemageDagger from "./items/demage/items/dagger";
import DefenceHelmet from "./items/defence/items/Helmet";
import DefenceArmor from "./items/defence/items/Armor";
import DefenceGloves from "./items/defence/items/gloves";
import DefenceShoes from "./items/defence/items/Shoes";
import DefenceShieldAndDagger from "./items/defence/items/shieldAndDagger";
import { formatNumber } from "../../hook/FormatNumber";
import DmgStatistic from "./items/demage/items/demage";
import DefenceStatistic from "./items/defence/defence";

function Statistic({
  mainWeaponData,
  selectedItem,
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
  mainWeaponData: any;
  selectedItem: any;
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

  //=================================

  return (
    <>
      <div id="statisticContainer">
        <DmgStatistic
          mainWeaponData={mainWeaponData}
          selectedItem={selectedItem}
          ShieldAndDaggerData={ShieldAndDaggerData}
          selectedShieldAndDaggerItem={selectedShieldAndDaggerItem}
        />
        <DefenceStatistic
          HelmetData={HelmetData}
          selectedHelmetItem={selectedHelmetItem}
          ArmorData={ArmorData}
          selectedArmorItem={selectedArmorItem}
          GlovesData={GlovesData}
          selectedGlovesItem={selectedGlovesItem}
          ShoesData={ShoesData}
          selectedShoesItem={selectedShoesItem}
          ShieldAndDaggerData={ShieldAndDaggerData}
          selectedShieldAndDaggerItem={selectedShieldAndDaggerItem}
        />
      </div>
    </>
  );
}

export default Statistic;
