import DemageMainWeapon from "./gear/mainWeapon";
import DemageDagger from "./gear/dagger";
import { formatNumber } from "../../../hook/FormatNumber";

const Damage = ({
  mainWeaponData,
  selectedItem,
  ShieldAndDaggerData,
  selectedShieldAndDaggerItem,
}: {
  mainWeaponData: any;
  selectedItem: any;
  ShieldAndDaggerData: any;
  selectedShieldAndDaggerItem: any;
}) => {
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
      <DemageMainWeapon
        mainWeaponData={mainWeaponData}
        selectedItem={selectedItem}
      />
      <span className="statsDmgMainWeapon">{formatNumber(FullDmg)}</span>
      <DemageDagger
        ShieldAndDaggerData={ShieldAndDaggerData}
        selectedShieldAndDaggerItem={selectedShieldAndDaggerItem}
      />
    </>
  );
};

export default Damage;
