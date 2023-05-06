import { useState } from "react";
import HelmetShop from "../../Shop/Items/HelmetShop";
import ArmorShop from "../../Shop/Items/ArmorShop";
import GlovesShop from "../../Shop/Items/GlovesShop";
import ShoesShop from "../../Shop/Items/ShoesShop";

const ArmorShops = ({
  ASO,
  setWSO,
  setBSO,
  setASO,
  setMO,
  count,
  setCount,
  SelectedOption,
  FullInv,
  //helmet
  HelmetData,
  setHelmetData,
  //armor

  ArmorData,
  setArmorData,
  //gloves

  GlovesData,
  setGlovesData,
  //shoes

  ShoesData,
  setShoesData,
}: {
  ASO: boolean;
  setWSO: any;
  setBSO: any;
  setASO: any;
  setMO: any;

  count: any;
  setCount: any;
  SelectedOption: any;
  FullInv: any;
  //helmet
  HelmetData: any;
  setHelmetData: any;
  //armor

  ArmorData: any;
  setArmorData: any;
  //gloves

  GlovesData: any;
  setGlovesData: any;
  //shoes

  ShoesData: any;
  setShoesData: any;
}) => {
  const [ArmorShopIsOpen, setArmorShopIsOpen] = useState(true);

  function colseAll() {
    setWSO(false);
    setBSO(false);
    setASO(false);
    setMO(false);
  }

  const [AoSoH, setAoSoH] = useState<string>("");

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
          id="armor-shop-container"
          style={{ display: ArmorShopIsOpen ? "flex" : "none" }}
          onClick={(e) => {
            e.stopPropagation();
            setArmorShopIsOpen(true);
          }}
        >
          <div className="helmet-Conteiner">
            <HelmetShop
              HelmetData={HelmetData}
              setHelmetData={setHelmetData}
              count={count}
              setCount={setCount}
              SelectedOption={SelectedOption}
              FullInv={FullInv}
              setAoSoH={setAoSoH}
              AoSoH={AoSoH}
            />
          </div>
          <div className="armor-Conteiner">
            <ArmorShop
              ArmorData={ArmorData}
              setArmorData={setArmorData}
              count={count}
              setCount={setCount}
              SelectedOption={SelectedOption}
              FullInv={FullInv}
              setAoSoH={setAoSoH}
              AoSoH={AoSoH}
            />
          </div>
          {/*
          <div className="gloves-Conteiner">
            <GlovesShop
              GlovesData={GlovesData}
              setGlovesData={setGlovesData}
              count={count}
              setCount={setCount}
              SelectedOption={SelectedOption}
            />
          </div>
        */}
          <div className="shoes-Conteiner">
            <ShoesShop
              ShoesData={ShoesData}
              setShoesData={setShoesData}
              count={count}
              setCount={setCount}
              SelectedOption={SelectedOption}
              FullInv={FullInv}
              setAoSoH={setAoSoH}
              AoSoH={AoSoH}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ArmorShops;
