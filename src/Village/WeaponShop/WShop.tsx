import { useState } from "react";
import MainWeaponShop from "../../Shop/Items/MainWeaponShop";
import RedAndPurpleMainWeaponShop from "../../Shop/Items/RedAndPurpleWeapon";

const WeaponShop = ({
  WSO,
  setWSO,
  setBSO,
  setASO,
  setMO,
  mainWeaponData,
  setMainWeaponData,
  count,
  setCount,
  SelectedOption,
  FullInv,
}: {
  WSO: boolean;
  setWSO: any;
  setBSO: any;
  setASO: any;
  setMO: any;
  mainWeaponData: any;
  setMainWeaponData: any;
  count: any;
  setCount: any;
  SelectedOption: any;
  FullInv: any;
}) => {
  const [ShopIsOpen, setShopIsOpen] = useState(true);

  function colseAll() {
    setWSO(false);
    setBSO(false);
    setASO(false);
    setMO(false);
  }

  return (
    <>
      <div
        className="MainWeaponShop"
        style={{ display: WSO ? "flex" : "none" }}
        onClick={(e) => {
          e.stopPropagation();
          colseAll();
        }}
      >
        <div
          id="weapon-shop-container"
          style={{ display: ShopIsOpen ? "flex" : "none" }}
          onClick={(e) => {
            e.stopPropagation();
            setShopIsOpen(true);
          }}
        >
          <span className="WeaponWall">
            <MainWeaponShop
              mainWeaponData={mainWeaponData}
              setMainWeaponData={setMainWeaponData}
              count={count}
              setCount={setCount}
              SelectedOption={SelectedOption}
              FullInv={FullInv}
            />
          </span>
          <span className="RedAndPurple">
            <RedAndPurpleMainWeaponShop
              mainWeaponData={mainWeaponData}
              setMainWeaponData={setMainWeaponData}
              count={count}
              setCount={setCount}
              SelectedOption={SelectedOption}
              FullInv={FullInv}
            />
          </span>
        </div>
        <div className="test">
          <p>Do zrobienia:</p>
          <p>pokazać przedmiot na prawo od sklepu po jego statystki</p>
          <p>pokazac róznice dmg z aktualnej broni</p>
        </div>
      </div>
    </>
  );
};

export default WeaponShop;
