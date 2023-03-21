import { useState } from "react";

const WeaponShop = ({
  WSO,
  setWSO,
  setBSO,
  setASO,
  setMO,
}: {
  WSO: boolean;
  setWSO: any;
  setBSO: any;
  setASO: any;
  setMO: any;
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
          className="test"
          style={{ display: ShopIsOpen ? "flex" : "none" }}
          onClick={(e) => {
            e.stopPropagation();
            setShopIsOpen(true);
          }}
        >
          WeaponShop
        </div>
      </div>
    </>
  );
};

export default WeaponShop;
