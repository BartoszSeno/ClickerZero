import { useState } from "react";

const ArmorShop = ({
  ASO,
  setWSO,
  setBSO,
  setASO,
  setMO,
}: {
  ASO: boolean;
  setWSO: any;
  setBSO: any;
  setASO: any;
  setMO: any;
}) => {
  const [ArmorShopIsOpen, setArmorShopIsOpen] = useState(true);

  function colseAll() {
    setWSO(false);
    setBSO(false);
    setASO(false);
    setMO(false);
  }
  return (
    <>
      <div
        className="MainArmorShop"
        style={{ display: ASO ? "flex" : "none" }}
        onClick={(e) => {
          e.stopPropagation();
          colseAll();
        }}
      >
        <div
          className="test"
          style={{ display: ArmorShopIsOpen ? "flex" : "none" }}
          onClick={(e) => {
            e.stopPropagation();
            setArmorShopIsOpen(true);
          }}
        >
          ArmorShop
        </div>
      </div>
    </>
  );
};

export default ArmorShop;
