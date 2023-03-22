import { useState } from "react";
import MainWeaponShop from "../../Shop/Items/MainWeaponShop";

const WeaponShop = ({
  WSO,
  setWSO,
  setBSO,
  setASO,
  setMO,
  ShelfHeight,
  mainWeaponData,
  setMainWeaponData,
  count,
  setCount,
  SelectedOption,
}: {
  WSO: boolean;
  setWSO: any;
  setBSO: any;
  setASO: any;
  setMO: any;
  ShelfHeight: any;
  mainWeaponData: any;
  setMainWeaponData: any;
  count: any;
  setCount: any;
  SelectedOption: any;
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
          id="shop-container"
          style={{ display: ShopIsOpen ? "flex" : "none" }}
          onClick={(e) => {
            e.stopPropagation();
            setShopIsOpen(true);
          }}
        >
          <div className="shelf" style={{ height: ShelfHeight }}>
            <MainWeaponShop
              mainWeaponData={mainWeaponData}
              setMainWeaponData={setMainWeaponData}
              count={count}
              setCount={setCount}
              SelectedOption={SelectedOption}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WeaponShop;
