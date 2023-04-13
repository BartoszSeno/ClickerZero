import "../assets/css/Normal/Village/background.css";
import "../assets/css/Normal/Village/midVillage.css";
import "../assets/css/Normal/Village/rightVillage.css";
import "../assets/css/Normal/shop/shop.css";
import MainEq from "../Equipment";

import React, { useEffect, useRef, useState } from "react";
import WeaponShop from "./WeaponShop/WShop";
import BlackSmith from "./BlackSmitch/BlackSmitch";
import ArmorShops from "./ArmorShop/AShop";
import Motel from "./Motel/Motel";
import { MainWeaponImageAndNameAndCost } from "../data/equipment/mainWeapon";
import { ArmorImageAndNameAndCost } from "../data/equipment/armor";
import { HelmetImageAndNameAndCost } from "../data/equipment/helmet";
import { ShoesImageAndNameAndCost } from "../data/equipment/Shoes";
import { GlovesImageAndNameAndCost } from "../data/equipment/gloves";
import { ShieldAndDaggerImageAndNameAndCost } from "../data/equipment/subWeapon";
import ClearLocalStorageButton from "../hook/RemoveLS";
import Eq from "../Eq";
import Clicker from "../hook/ClickerCount";
import Information from "../Information";
import PerClickPoints from "../hook/PerClick";
import UpdateLvlOne from "../Upgrade/UpgradeLvlOne";

const MainIndexVillage = () => {
  // ARRAY OF THE ENTIRE ShieldAndDagger
  const [ShieldAndDaggerData, setShieldAndDaggerData] = useState<any>(
    JSON.parse(
      localStorage.getItem("ShieldAndDaggerImageAndNameAndCost") ||
        JSON.stringify(ShieldAndDaggerImageAndNameAndCost)
    )
  );
  //==================
  // GET UPGRADED ShieldAndDagger NAME FROM ENCHANT FUNCTION
  const [UpgradedNamesShieldAndDagger, setUpgradedNamesShieldAndDagger] =
    useState<any>(Array(ShieldAndDaggerData.length).fill(""));

  // function in which we get data what object has a upgraded name (from enchant)
  function UpgradedShieldAndDaggerNamesOnMount() {
    const upgradedShieldAndDaggerNames = ShieldAndDaggerData.map(
      (data: any) => {
        const itemUpgradeShieldAndDaggerName = `${data.name}`;
        const savedItemShieldAndDaggerUpgrade = localStorage.getItem(
          itemUpgradeShieldAndDaggerName
        );
        const upgradedShieldAndDaggerName = savedItemShieldAndDaggerUpgrade
          ? `+${Number(savedItemShieldAndDaggerUpgrade)} ${data.name}`
          : data.name;
        return upgradedShieldAndDaggerName;
      }
    );
    setUpgradedNamesShieldAndDagger(upgradedShieldAndDaggerNames);
  }
  //refresh names on load
  useEffect(() => {
    UpgradedShieldAndDaggerNamesOnMount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //==================

  //FUNCTION TO AUTOMATICALY REFRESH ShieldAndDagger STATS
  // !! useState important for show the value points per click !!
  const [selectedShieldAndDaggerItem, setSelectedShieldAndDaggerItem] =
    useState(null);

  // geting the id on click
  const handleShieldAndDaggerItemSelect = (ShieldAndDaggerIndex: any) => {
    setSelectedShieldAndDaggerItem(ShieldAndDaggerIndex);
  };

  //we get the id of the currently selected item (eq selected) which is saved in localstorage for update statistic DMG
  const savedShieldAndDaggerId = localStorage.getItem(
    "selectedShieldAndDaggerItemIdEquip"
  );

  //we add fake id to the selected item to make it refresh automatically
  useEffect(() => {
    handleShieldAndDaggerItemSelect(Number(savedShieldAndDaggerId));
  });

  //==================
  // SAVES THE TRUE VALUE OF MAIN Gloves DEF
  const [UpgradedDefShieldAndDagger, setUpgradedDefShieldAndDagger] =
    useState<string>("");

  // SAVES THE TRUE VALUE OF MAIN Gloves DMG
  const [UpgradedDmgShieldAndDagger, setUpgradedDmgShieldAndDagger] =
    useState<string>("");

  //==================
  // ARRAY OF THE ENTIRE Gloves
  const [GlovesData, setGlovesData] = useState<any>(
    JSON.parse(
      localStorage.getItem("GlovesImageAndNameAndCost") ||
        JSON.stringify(GlovesImageAndNameAndCost)
    )
  );
  //==================
  // GET UPGRADED Gloves NAME FROM ENCHANT FUNCTION
  const [UpgradedNamesGloves, setUpgradedNamesGloves] = useState<any>(
    Array(GlovesData.length).fill("")
  );

  // function in which we get data what object has a upgraded name (from enchant)
  function UpgradedGlovesNamesOnMount() {
    const upgradedGlovesNames = GlovesData.map((data: any) => {
      const itemUpgradeGlovesName = `${data.name}`;
      const savedItemGlovesUpgrade = localStorage.getItem(
        itemUpgradeGlovesName
      );
      const upgradedGlovesName = savedItemGlovesUpgrade
        ? `+${Number(savedItemGlovesUpgrade)} ${data.name}`
        : data.name;
      return upgradedGlovesName;
    });
    setUpgradedNamesGloves(upgradedGlovesNames);
  }
  //refresh names on load
  useEffect(() => {
    UpgradedGlovesNamesOnMount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //==================

  //FUNCTION TO AUTOMATICALY REFRESH Gloves STATS
  // !! useState important for show the value points per click !!
  const [selectedGlovesItem, setSelectedGlovesItem] = useState(null);

  // geting the id on click
  const handleGlovesItemSelect = (GlovesIndex: any) => {
    setSelectedGlovesItem(GlovesIndex);
  };

  //we get the id of the currently selected item (eq selected) which is saved in localstorage for update statistic DMG
  const savedGlovesId = localStorage.getItem("selectedGlovesItemIdEquip");

  //we add fake id to the selected item to make it refresh automatically
  useEffect(() => {
    handleGlovesItemSelect(Number(savedGlovesId));
  });

  //==================
  // SAVES THE TRUE VALUE OF MAIN Gloves DEF
  const [UpgradedDefGloves, setUpgradedDefGloves] = useState<string>("");

  //====================================================================================================
  // ARRAY OF THE ENTIRE Shoes
  const [ShoesData, setShoesData] = useState<any>(
    JSON.parse(
      localStorage.getItem("ShoesImageAndNameAndCost") ||
        JSON.stringify(ShoesImageAndNameAndCost)
    )
  );
  //==================
  // GET UPGRADED Shoes NAME FROM ENCHANT FUNCTION
  const [UpgradedNamesShoes, setUpgradedNamesShoes] = useState<any>(
    Array(ShoesData.length).fill("")
  );

  // function in which we get data what object has a upgraded name (from enchant)
  function UpgradedShoesNamesOnMount() {
    const upgradedShoesNames = ShoesData.map((data: any) => {
      const itemUpgradeShoesName = `${data.name}`;
      const savedItemShoesUpgrade = localStorage.getItem(itemUpgradeShoesName);
      const upgradedShoesName = savedItemShoesUpgrade
        ? `+${Number(savedItemShoesUpgrade)} ${data.name}`
        : data.name;
      return upgradedShoesName;
    });
    setUpgradedNamesShoes(upgradedShoesNames);
  }
  //refresh names on load
  useEffect(() => {
    UpgradedShoesNamesOnMount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //==================

  //FUNCTION TO AUTOMATICALY REFRESH Shoes STATS
  // !! useState important for show the value points per click !!
  const [selectedShoesItem, setSelectedShoesItem] = useState(null);

  // geting the id on click
  const handleShoesItemSelect = (ShoesIndex: any) => {
    setSelectedShoesItem(ShoesIndex);
  };

  //we get the id of the currently selected item (eq selected) which is saved in localstorage for update statistic DMG
  const savedShoesId = localStorage.getItem("selectedShoesItemIdEquip");

  //we add fake id to the selected item to make it refresh automatically
  useEffect(() => {
    handleShoesItemSelect(Number(savedShoesId));
  });

  //==================
  // SAVES THE TRUE VALUE OF MAIN Shoes DEF
  const [UpgradedDefShoes, setUpgradedDefShoes] = useState<string>("");

  //====================================================================================================

  // ARRAY OF THE ENTIRE Helmet
  const [HelmetData, setHelmetData] = useState<any>(
    JSON.parse(
      localStorage.getItem("HelmetImageAndNameAndCost") ||
        JSON.stringify(HelmetImageAndNameAndCost)
    )
  );
  //==================
  // GET UPGRADED Helmet NAME FROM ENCHANT FUNCTION
  const [UpgradedNamesHelmet, setUpgradedNamesHelmet] = useState<any>(
    Array(HelmetData.length).fill("")
  );

  // function in which we get data what object has a upgraded name (from enchant)
  function UpgradedHelmetNamesOnMount() {
    const upgradedHelmetNames = HelmetData.map((data: any) => {
      const itemUpgradeHelmetName = `${data.name}`;
      const savedItemHelmetUpgrade = localStorage.getItem(
        itemUpgradeHelmetName
      );
      const upgradedHelmetName = savedItemHelmetUpgrade
        ? `+${Number(savedItemHelmetUpgrade)} ${data.name}`
        : data.name;
      return upgradedHelmetName;
    });
    setUpgradedNamesHelmet(upgradedHelmetNames);
  }
  //refresh names on load
  useEffect(() => {
    UpgradedHelmetNamesOnMount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //==================

  //FUNCTION TO AUTOMATICALY REFRESH Helmet STATS
  // !! useState important for show the value points per click !!
  const [selectedHelmetItem, setSelectedHelmetItem] = useState(null);

  // geting the id on click
  const handleHelmetItemSelect = (HelmetIndex: any) => {
    setSelectedHelmetItem(HelmetIndex);
  };

  //we get the id of the currently selected item (eq selected) which is saved in localstorage for update statistic DMG
  const savedHelmetId = localStorage.getItem("selectedHelmetItemIdEquip");

  //we add fake id to the selected item to make it refresh automatically
  useEffect(() => {
    handleHelmetItemSelect(Number(savedHelmetId));
  });

  //==================
  // SAVES THE TRUE VALUE OF MAIN Helmet DEF
  const [UpgradedDefHelmet, setUpgradedDefHelmet] = useState<string>("");

  //====================================================================================================
  // ARRAY OF THE ENTIRE ARMOR
  const [ArmorData, setArmorData] = useState<any>(
    JSON.parse(
      localStorage.getItem("ArmorImageAndNameAndCost") ||
        JSON.stringify(ArmorImageAndNameAndCost)
    )
  );
  //==================
  // GET UPGRADED ARMOR NAME FROM ENCHANT FUNCTION
  const [UpgradedNamesArmor, setUpgradedNamesArmor] = useState<any>(
    Array(ArmorData.length).fill("")
  );

  // function in which we get data what object has a upgraded name (from enchant)
  function UpgradedArmorNamesOnMount() {
    const upgradedArmorNames = ArmorData.map((data: any) => {
      const itemUpgradeArmorName = `${data.name}`;
      const savedItemArmorUpgrade = localStorage.getItem(itemUpgradeArmorName);
      const upgradedArmorName = savedItemArmorUpgrade
        ? `+${Number(savedItemArmorUpgrade)} ${data.name}`
        : data.name;
      return upgradedArmorName;
    });
    setUpgradedNamesArmor(upgradedArmorNames);
  }
  //refresh names on load
  useEffect(() => {
    UpgradedArmorNamesOnMount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //==================

  //FUNCTION TO AUTOMATICALY REFRESH ARMOR STATS
  // !! useState important for show the value points per click !!
  const [selectedArmorItem, setSelectedArmorItem] = useState(null);

  // geting the id on click
  const handleArmorItemSelect = (armorIndex: any) => {
    setSelectedArmorItem(armorIndex);
  };

  //we get the id of the currently selected item (eq selected) which is saved in localstorage for update statistic DMG
  const savedArmorId = localStorage.getItem("selectedArmorItemIdEquip");

  //we add fake id to the selected item to make it refresh automatically
  useEffect(() => {
    handleArmorItemSelect(Number(savedArmorId));
  });

  //==================
  // SAVES THE TRUE VALUE OF MAIN ARMOR DEF
  const [UpgradedDefArmor, setUpgradedDefArmor] = useState<string>("");

  //==================
  // ARRAY OF THE ENTIRE MAIN WEAPON
  const [mainWeaponData, setMainWeaponData] = useState<any>(
    JSON.parse(
      localStorage.getItem("MainWeaponImageAndNameAndCost") ||
        JSON.stringify(MainWeaponImageAndNameAndCost)
    )
  );

  //==================
  // FULL NUMBER WHICH SAVES THE COUNT NUMBER OF MAIN POINTS 'count'
  const [count, setCount] = useState<number>(() =>
    Number(localStorage.getItem("count") || 0)
  );

  //===================
  //the amount you get after leveling up the first upgrades
  const [UpgradeOne, setUpgradeOne] = useState<number>(() =>
    Number(localStorage.getItem("UpgradeOneCount") || 0)
  );

  //===================
  // VARIABLE THAT SAVES THE VALUE OF THE MAIN ARMOR DEF
  const [FullArmorDefText, setFullArmorDefText] = useState<any>();

  useEffect(() => {
    // export data from statistic
    const FullArmorDefFromText = document.querySelector(
      ".statsDefDefHiden"
    ) as HTMLElement;
    //if the data exists, convert it to a text
    const textArmor = FullArmorDefFromText?.textContent;
    setFullArmorDefText(textArmor);
  }, []);

  //==============
  // VARIABLE THAT SAVES THE VALUE OF THE MAIN ShieldAndDagger DEF
  const [FullShieldAndDaggerDefText, setFullShieldAndDaggerDefText] =
    useState<any>();

  useEffect(() => {
    // export data from statistic
    const FullShieldAndDaggerDefFromText = document.querySelector(
      ".statsShieldAndDaggerDefHiden"
    ) as HTMLElement;
    //if the data exists, convert it to a text
    const textShieldAndDagger = FullShieldAndDaggerDefFromText?.textContent;
    setFullShieldAndDaggerDefText(textShieldAndDagger);
  }, []);

  //==============
  // VARIABLE THAT SAVES THE VALUE OF THE MAIN Gloves DEF
  const [FullGlovesDefText, setFullGlovesDefText] = useState<any>();

  useEffect(() => {
    // export data from statistic
    const FullGlovesDefFromText = document.querySelector(
      ".statsGlovesDefHiden"
    ) as HTMLElement;
    //if the data exists, convert it to a text
    const textGloves = FullGlovesDefFromText?.textContent;
    setFullGlovesDefText(textGloves);
  }, []);

  //==============
  // VARIABLE THAT SAVES THE VALUE OF THE MAIN Shoes DEF
  const [FullShoesDefText, setFullShoesDefText] = useState<any>();

  useEffect(() => {
    // export data from statistic
    const FullShoesDefFromText = document.querySelector(
      ".statsShoesDefHiden"
    ) as HTMLElement;
    //if the data exists, convert it to a text
    const textShoes = FullShoesDefFromText?.textContent;
    setFullShoesDefText(textShoes);
  }, []);

  //==============
  // VARIABLE THAT SAVES THE VALUE OF THE MAIN Helmet DEF
  const [FullHelmetDefText, setFullHelmetDefText] = useState<any>();

  useEffect(() => {
    // export data from statistic
    const FullHelmetDefFromText = document.querySelector(
      ".statsHelmetDefHiden"
    ) as HTMLElement;
    //if the data exists, convert it to a text
    const textHelmet = FullHelmetDefFromText?.textContent;
    setFullHelmetDefText(textHelmet);
  }, []);

  //==============
  // VARIABLE THAT SAVES THE VALUE OF THE MAIN DMG
  const [MainWeaponFullDmgText, setMainWeaponFullDmgText] = useState<any>();

  useEffect(() => {
    // export data from statistic
    const mainWeaponFullDmgFromText = document.querySelector(
      ".statsDmgMainWeaponHiden"
    ) as HTMLElement;
    //if the data exists, convert it to a text
    const text = mainWeaponFullDmgFromText?.textContent;
    setMainWeaponFullDmgText(text);
  }, []);

  //==============
  // HERE NEW WARIABLES ARE ADDED WHICH ARE USED TO INCREASE POINTS PER CLICK
  // full click from ( Upgrade lvl 1 & Main Weapon)
  const [FullCountPerClick, setFullCountPerClick] = useState<number>(
    UpgradeOne +
      (Number(MainWeaponFullDmgText) || 0) +
      (Number(FullArmorDefText) || 0) +
      (Number(FullHelmetDefText) || 0) +
      (Number(FullShoesDefText) || 0) +
      (Number(FullGlovesDefText) || 0) +
      (Number(FullShieldAndDaggerDefText) || 0)
  );

  // listing the levels from the first upgrade
  const [lvlOne, setLvlOne] = useState(() =>
    Number(localStorage.getItem("upgradeOneLvl") || 0)
  );
  //==================
  // SAVES THE TRUE VALUE OF MAIN WEAPON DMG
  const [UpgradedDmgMainWeapon, setUpgradedDmgMainWeapon] =
    useState<string>("");

  //==================
  // GET UPGRADED NAME FROM ENCHANT FUNCTION
  const [UpgradedNamesMainWeapon, setUpgradedNamesMainWeapon] = useState<any>(
    Array(mainWeaponData.length).fill("")
  );

  // function in which we get data what object has a upgraded name (from enchant)
  function UpgradedNamesOnMount() {
    const upgradedNames = mainWeaponData.map((data: any) => {
      const itemUpgradeName = `${data.name}`;
      const savedItemUpgrade = localStorage.getItem(itemUpgradeName);
      const upgradedName = savedItemUpgrade
        ? `+${Number(savedItemUpgrade)} ${data.name}`
        : data.name;
      return upgradedName;
    });
    setUpgradedNamesMainWeapon(upgradedNames);
  }
  //refresh names on load
  useEffect(() => {
    UpgradedNamesOnMount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //===============
  //FUNCTION TO AUTOMATICALY REFRESH MAIN WEAPON STATS
  // !! useState important for show the value points per click !!
  const [selectedItem, setSelectedItem] = useState(null);

  // geting the id on click
  const handleItemSelect = (index: any) => {
    setSelectedItem(index);
  };

  //we get the id of the currently selected item (eq selected) which is saved in localstorage for update statistic DMG
  const savedId = localStorage.getItem("selectedItemIdEquip");

  //we add fake id to the selected item to make it refresh automatically
  useEffect(() => {
    handleItemSelect(Number(savedId));
  });

  //==============
  // USESTATE THAT CHANGE HEIGHT OR SORT BY TIER
  // selects which tier has been selected
  const [SelectedOption] = useState<string>("");
  // changes the shelf height

  const mainBGScrollHorizontalRef = useRef<HTMLDivElement>(null);

  const handleScroll = (scrollOffset: number) => {
    if (mainBGScrollHorizontalRef.current) {
      mainBGScrollHorizontalRef.current.scrollLeft += scrollOffset;
    }
  };

  useEffect(() => {
    if (mainBGScrollHorizontalRef.current) {
      const { current } = mainBGScrollHorizontalRef;
      current.scrollLeft = current.offsetWidth / 0.632;
    }
  }, []);

  const [WSO, setWSO] = useState<boolean>(false);
  const [BSO, setBSO] = useState<boolean>(false);
  const [ASO, setASO] = useState<boolean>(false);
  const [MO, setMO] = useState<boolean>(false);

  const [FullInv, setFullInv] = useState<boolean>(false);

  console.log(FullInv);

  return (
    <>
      <div
        id="mainBGScrollHorizontal"
        ref={mainBGScrollHorizontalRef}
        onWheel={(e) => {
          //e.preventDefault();
          handleScroll(e.deltaY);
        }}
      >
        <div className="GameMainWindow">
          <div className="leftVillage">
            {/*
            <button className="InfoOpen" onClick={HandleInfoOpenAndClose}>
              Info
            </button>
            <Information infoOpenClose={infoOpenClose} />
            */}
          </div>
          <div className="midVillage">
            <MainEq
              mainWeaponData={mainWeaponData}
              UpgradedNamesMainWeapon={UpgradedNamesMainWeapon}
              handleItemSelect={handleItemSelect}
              selectedItem={selectedItem}
              ArmorData={ArmorData}
              UpgradedNamesArmor={UpgradedNamesArmor}
              handleArmorItemSelect={handleArmorItemSelect}
              selectedArmorItem={selectedArmorItem}
              HelmetData={HelmetData}
              UpgradedNamesHelmet={UpgradedNamesHelmet}
              handleHelmetItemSelect={handleHelmetItemSelect}
              selectedHelmetItem={selectedHelmetItem}
              ShoesData={ShoesData}
              UpgradedNamesShoes={UpgradedNamesShoes}
              handleShoesItemSelect={handleShoesItemSelect}
              selectedShoesItem={selectedShoesItem}
              GlovesData={GlovesData}
              UpgradedNamesGloves={UpgradedNamesGloves}
              handleGlovesItemSelect={handleGlovesItemSelect}
              selectedGlovesItem={selectedGlovesItem}
              ShieldAndDaggerData={ShieldAndDaggerData}
              UpgradedNamesShieldAndDagger={UpgradedNamesShieldAndDagger}
              handleShieldAndDaggerItemSelect={handleShieldAndDaggerItemSelect}
              selectedShieldAndDaggerItem={selectedShieldAndDaggerItem}
              setGlovesData={setGlovesData}
              setMainWeaponData={setMainWeaponData}
              setArmorData={setArmorData}
              setHelmetData={setHelmetData}
              setShoesData={setShoesData}
              setShieldAndDaggerData={setShieldAndDaggerData}
              setFullInv={setFullInv}
              FullInv={FullInv}
            />
            <Clicker
              setCount={setCount}
              count={count}
              FullCountPerClick={FullCountPerClick}
            />
            <PerClickPoints
              FullCountPerClick={FullCountPerClick}
              setFullCountPerClick={setFullCountPerClick}
              UpgradeOne={UpgradeOne}
              MainWeaponFullDmgText={MainWeaponFullDmgText}
              FullArmorDefText={FullArmorDefText}
              FullHelmetDefText={FullHelmetDefText}
              FullShoesDefText={FullShoesDefText}
              FullGlovesDefText={FullGlovesDefText}
              FullShieldAndDaggerDefText={FullShieldAndDaggerDefText}
            />
            <ClearLocalStorageButton />
            <UpdateLvlOne
              setCount={setCount}
              count={count}
              lvlOne={lvlOne}
              setLvlOne={setLvlOne}
              UpgradeOne={UpgradeOne}
              setUpgradeOne={setUpgradeOne}
            />
          </div>
          <div className="rightVillage">
            <div
              className="WeaponShop"
              onClick={(e) => {
                setWSO(true);
                setBSO(false);
                setASO(false);
                setMO(false);
              }}
            >
              <WeaponShop
                WSO={WSO}
                setWSO={setWSO}
                setBSO={setBSO}
                setASO={setASO}
                setMO={setMO}
                mainWeaponData={mainWeaponData}
                setMainWeaponData={setMainWeaponData}
                count={count}
                setCount={setCount}
                SelectedOption={SelectedOption}
                FullInv={FullInv}
              />
            </div>

            <div
              className="BlackSmith"
              onClick={(e) => {
                setWSO(false);
                setBSO(true);
                setASO(false);
                setMO(false);
              }}
            >
              <BlackSmith
                BSO={BSO}
                setWSO={setWSO}
                setBSO={setBSO}
                setASO={setASO}
                setMO={setMO}
                UpgradedDmgMainWeapon={UpgradedDmgMainWeapon}
                setUpgradedDmgMainWeapon={setUpgradedDmgMainWeapon}
                mainWeaponData={mainWeaponData}
                setUpgradedNamesMainWeapon={setUpgradedNamesMainWeapon}
                UpgradedNamesMainWeapon={UpgradedNamesMainWeapon}
                UpgradedDefArmor={UpgradedDefArmor}
                setUpgradedDefArmor={setUpgradedDefArmor}
                ArmorData={ArmorData}
                setUpgradedNamesArmor={setUpgradedNamesArmor}
                UpgradedNamesArmor={UpgradedNamesArmor}
                HelmetData={HelmetData}
                UpgradedNamesHelmet={UpgradedNamesHelmet}
                setUpgradedNamesHelmet={setUpgradedNamesHelmet}
                setUpgradedDefHelmet={setUpgradedDefHelmet}
                UpgradedDefHelmet={UpgradedDefHelmet}
                ShoesData={ShoesData}
                UpgradedNamesShoes={UpgradedNamesShoes}
                setUpgradedNamesShoes={setUpgradedNamesShoes}
                setUpgradedDefShoes={setUpgradedDefShoes}
                UpgradedDefShoes={UpgradedDefShoes}
                GlovesData={GlovesData}
                UpgradedNamesGloves={UpgradedNamesGloves}
                setUpgradedNamesGloves={setUpgradedNamesGloves}
                setUpgradedDefGloves={setUpgradedDefGloves}
                UpgradedDefGloves={UpgradedDefGloves}
                ShieldAndDaggerData={ShieldAndDaggerData}
                UpgradedNamesShieldAndDagger={UpgradedNamesShieldAndDagger}
                setUpgradedDefShieldAndDagger={setUpgradedDefShieldAndDagger}
                UpgradedDefShieldAndDagger={UpgradedDefShieldAndDagger}
                setUpgradedNamesShieldAndDagger={
                  setUpgradedNamesShieldAndDagger
                }
                setUpgradedDmgShieldAndDagger={setUpgradedDmgShieldAndDagger}
                UpgradedDmgShieldAndDagger={UpgradedDmgShieldAndDagger}
              />
            </div>
            <div
              className="ArmorShop"
              onClick={(e) => {
                setWSO(false);
                setBSO(false);
                setASO(true);
                setMO(false);
              }}
            >
              <ArmorShops
                ASO={ASO}
                setWSO={setWSO}
                setBSO={setBSO}
                setASO={setASO}
                setMO={setMO}
                count={count}
                setCount={setCount}
                SelectedOption={SelectedOption}
                //helmet
                HelmetData={HelmetData}
                setHelmetData={setHelmetData}
                //armor

                ArmorData={ArmorData}
                setArmorData={setArmorData}
                //gloves

                GlovesData={GlovesData}
                setGlovesData={setGlovesData}
                //shoes
                ShoesData={ShoesData}
                setShoesData={setShoesData}
                FullInv={FullInv}
              />
            </div>
            <div
              className="Motel"
              onClick={(e) => {
                setWSO(false);
                setBSO(false);
                setASO(false);
                setMO(true);
              }}
            >
              <Motel
                MO={MO}
                setWSO={setWSO}
                setBSO={setBSO}
                setASO={setASO}
                setMO={setMO}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainIndexVillage;
