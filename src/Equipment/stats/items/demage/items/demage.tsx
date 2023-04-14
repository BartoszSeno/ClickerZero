/* eslint-disable array-callback-return */

import { formatNumber } from "../../../../../hook/FormatNumber";
import DemageDagger from "./dagger";
import DemageMainWeapon from "../weapon";

function DmgStatistic({
  mainWeaponData,
  selectedItem,
  ShieldAndDaggerData,
  selectedShieldAndDaggerItem,
}: {
  mainWeaponData: any;
  selectedItem: any;
  ShieldAndDaggerData: any;
  selectedShieldAndDaggerItem: any;
}) {
  // export data from statistic
  const FullMainWeaponDmgFromText = document.querySelector(
    ".statsDmgMainWeaponHiden"
  ) as HTMLElement;
  //if the data exists, convert it to a text
  const textMainWeapon = FullMainWeaponDmgFromText?.textContent;

  const FullDaggerDmgFromText = document.querySelector(
    ".statsDmgDaggerHiden"
  ) as HTMLElement;
  //if the data exists, convert it to a text
  const textDagger = FullDaggerDmgFromText?.textContent;

  const FullDmg = Number(textMainWeapon || 0) + Number(textDagger || 0);

  return (
    <>
      <span>Weapon Dmg</span>
      <DemageMainWeapon
        mainWeaponData={mainWeaponData}
        selectedItem={selectedItem}
      />
      <span>Dagger Dmg</span>
      <DemageDagger
        ShieldAndDaggerData={ShieldAndDaggerData}
        selectedShieldAndDaggerItem={selectedShieldAndDaggerItem}
      />
      <span className="fullStats">Full dmg</span>
      <span className="statsDefHelmet">{formatNumber(FullDmg)}</span>
    </>
  );
}

export default DmgStatistic;
