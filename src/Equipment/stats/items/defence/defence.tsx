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
      <span className="statsDefHelmet">{formatNumber(FullValu)}</span>
    </>
  );
}

export default DefenceStatistic;
