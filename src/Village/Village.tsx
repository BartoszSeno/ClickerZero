import "../assets/css/Normal/Village/background.css";
import "../assets/css/Normal/Village/midVillage.css";
import "../assets/css/Normal/Village/rightVillage.css";
import "../assets/css/Normal/shop/shop.css";
import CharacterSelection from "../Character";
import React, { useEffect, useRef, useState } from "react";
import WeaponShop from "./WeaponShop/WShop";
import BlackSmith from "./BlackSmitch/BlackSmitch";
import ArmorShops from "./ArmorShop/AShop";
import Motel from "./Motel/Motel";
import ClearLocalStorageButton from "../hook/RemoveLS";
import Clicker from "../hook/ClickerCount";
import UpgradeVillageAndClick from "../Upgrade/UpVillageAndClick";
import CharacterMain from "../Character/CharacterMain";
import { Link } from "react-router-dom";
import Cat from "../hook/CAT";

const MainIndexVillage = ({
  handleButtonClick,
  FullDmgValue,
  FullDefValue,
  FullCountPerClick,
  setFullCountPerClick,
  setDays,
  days,
  hours,
  setHours,
  setMinutes,
  minutes,
  setTurn,
  turn,
  setCurrentHP,
  maxHP,
  setDmgBoost,
  DmgBoost,
  setDefBoosts,
  DefBoosts,
  UpgradeCharacters,
  setUpgradeCharacters,
  setUpgradeVillageAndClicks,
  UpgradeVillageAndClicks,
  setMainWeaponData,
  FullInv,
  UpgradedDmgMainWeapon,
  setUpgradedDmgMainWeapon,
  mainWeaponData,
  setUpgradedNamesMainWeapon,
  UpgradedNamesMainWeapon,
  UpgradedDefArmor,
  setUpgradedDefArmor,
  ArmorData,
  setUpgradedNamesArmor,
  UpgradedNamesArmor,
  HelmetData,
  UpgradedNamesHelmet,
  setUpgradedNamesHelmet,
  setUpgradedDefHelmet,
  UpgradedDefHelmet,
  ShoesData,
  UpgradedNamesShoes,
  setUpgradedNamesShoes,
  setUpgradedDefShoes,
  UpgradedDefShoes,
  GlovesData,
  UpgradedNamesGloves,
  setUpgradedNamesGloves,
  setUpgradedDefGloves,
  UpgradedDefGloves,
  ShieldAndDaggerData,
  UpgradedNamesShieldAndDagger,
  setUpgradedDefShieldAndDagger,
  UpgradedDefShieldAndDagger,
  setUpgradedNamesShieldAndDagger,
  setUpgradedDmgShieldAndDagger,
  UpgradedDmgShieldAndDagger,
  setOpenAndCloseEqinEnchant,
  OpenAndCloseEqinEnchant,
  OpenCloseEqinEnchant,
  setSelectedItemIndex,
  setSelectedArmorItemIndex,
  setitsMainWeapon,
  setitsArmor,
  setSelectedHelmetItemIndex,
  setitsHelmet,
  setSelectedShoesItemIndex,
  setitsShoes,
  setSelectedGlovesItemIndex,
  setitsGloves,
  setSelectedShieldAndDaggerItemIndex,
  setitsShieldAndDagger,
  selectedItemIndex,
  itsMainWeapon,
  selectedArmorItemIndex,
  itsArmor,
  itsHelmet,
  selectedHelmetItemIndex,
  itsShoes,
  selectedShoesItemIndex,
  itsGloves,
  selectedGlovesItemIndex,
  itsShieldAndDagger,
  selectedShieldAndDaggerItemIndex,
  setHelmetData,
  setArmorData,
  setGlovesData,
  setShoesData,
  setCount,
  count,
  OpenSellShop,
  setSellFishByCat,
  numberCatP,
}: {
  handleButtonClick: any;
  FullDmgValue: number;
  FullDefValue: number;
  FullCountPerClick: number;
  setFullCountPerClick: any;
  setDays: any;
  days: number;
  hours: number;
  setHours: any;
  setMinutes: any;
  minutes: number;
  setTurn: any;
  turn: boolean;
  setCurrentHP: any;
  maxHP: number;
  setDmgBoost: any;
  DmgBoost: number;
  setDefBoosts: any;
  DefBoosts: number;
  UpgradeCharacters: boolean;
  setUpgradeCharacters: any;
  setUpgradeVillageAndClicks: any;
  UpgradeVillageAndClicks: boolean;
  mainWeaponData: any;
  setMainWeaponData: any;
  FullInv: boolean;
  UpgradedDmgMainWeapon: string;
  setUpgradedDmgMainWeapon: any;
  setUpgradedNamesMainWeapon: any;
  UpgradedNamesMainWeapon: any;
  UpgradedDefArmor: string;
  setUpgradedDefArmor: any;
  ArmorData: any;
  setUpgradedNamesArmor: any;
  UpgradedNamesArmor: any;
  HelmetData: any;
  UpgradedNamesHelmet: any;
  setUpgradedNamesHelmet: any;
  setUpgradedDefHelmet: any;
  UpgradedDefHelmet: string;
  ShoesData: any;
  UpgradedNamesShoes: any;
  setUpgradedNamesShoes: any;
  setUpgradedDefShoes: any;
  UpgradedDefShoes: string;
  GlovesData: any;
  UpgradedNamesGloves: any;
  setUpgradedNamesGloves: any;
  setUpgradedDefGloves: any;
  UpgradedDefGloves: string;
  ShieldAndDaggerData: any;
  UpgradedNamesShieldAndDagger: any;
  setUpgradedDefShieldAndDagger: any;
  UpgradedDefShieldAndDagger: string;
  setUpgradedNamesShieldAndDagger: any;
  setUpgradedDmgShieldAndDagger: any;
  UpgradedDmgShieldAndDagger: string;
  setOpenAndCloseEqinEnchant: any;
  OpenAndCloseEqinEnchant: boolean;
  OpenCloseEqinEnchant: any;
  setSelectedItemIndex: any;
  setSelectedArmorItemIndex: any;
  setitsMainWeapon: any;
  setitsArmor: any;
  setSelectedHelmetItemIndex: any;
  setitsHelmet: any;
  setSelectedShoesItemIndex: any;
  setitsShoes: any;
  setSelectedGlovesItemIndex: any;
  setitsGloves: any;
  setSelectedShieldAndDaggerItemIndex: any;
  setitsShieldAndDagger: any;
  selectedItemIndex: number;
  itsMainWeapon: boolean;
  selectedArmorItemIndex: number;
  itsArmor: boolean;
  itsHelmet: boolean;
  selectedHelmetItemIndex: number;
  itsShoes: boolean;
  selectedShoesItemIndex: number;
  itsGloves: boolean;
  selectedGlovesItemIndex: number;
  itsShieldAndDagger: boolean;
  selectedShieldAndDaggerItemIndex: number;
  setHelmetData: any;
  setArmorData: any;
  setGlovesData: any;
  setShoesData: any;
  setCount: any;
  count: number;
  OpenSellShop: any;
  setSellFishByCat: any;
  numberCatP: number;
}) => {
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
  const [, setSelectedGlovesItem] = useState(null);

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

  //====================================================================================================

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

  //====================================================================================================

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

  //====================================================================================================

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

  //===================
  //the amount you get after leveling up the first upgrades
  const [UpgradeOne, setUpgradeOne] = useState<number>(() =>
    Number(localStorage.getItem("UpgradeOneCount") || 0)
  );

  //===========

  // listing the levels from the first upgrade
  const [lvlOne, setLvlOne] = useState(() =>
    Number(localStorage.getItem("upgradeOneLvl") || 0)
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

  // USESTATE THAT CHANGE HEIGHT OR SORT BY TIER
  // selects which tier has been selected
  const [SelectedOption] = useState<string>("");
  // changes the shelf height

  const mainBGScrollHorizontalRef = useRef<HTMLDivElement>(null);

  const handleScroll = (scrollOffset: number) => {
    if (mainBGScrollHorizontalRef.current) {
      mainBGScrollHorizontalRef.current.scrollLeft += scrollOffset;
      setSellFishByCat(false);
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

  //======================================================================
  //========================= FOR ENCHANT ================================
  //======================================================================

  //MAIN WEAPON
  /// load image form localstorage
  const savedImage = localStorage.getItem("selectedItemImgForEnchant");
  const savedName = localStorage.getItem("selectedItemNameForEnchant");
  // Declare state to save selected damage value, initialized with null
  const [, setSavedDmgMains] = useState<number | null>(null);

  // Load selected damage value from local storage when component mounts
  useEffect(() => {
    const savedDmgMainFromLocalStorage = localStorage.getItem(
      "selectedItemDmgForEnchant"
    );
    if (savedDmgMainFromLocalStorage) {
      setSavedDmgMains(Number(savedDmgMainFromLocalStorage));
    }
  }, []);

  // Declare state to save saved item upgrade value, initialized with 0
  const [savedItemUpgrade] = useState<number>(0);

  // its weapon or armor ?

  const savedUpgradedValue = localStorage.getItem("upgradedValue");
  const upgradedValue = savedUpgradedValue ? Number(savedUpgradedValue) : 0;

  // to check the enchantment level
  //armor
  const savedArmorUpgradedValue = localStorage.getItem("ArmorUpgradedValue");
  const ArmorupgradedValue = savedArmorUpgradedValue
    ? Number(savedArmorUpgradedValue)
    : 0;
  //helmet
  const savedHelmetUpgradedValue = localStorage.getItem("HelmetUpgradedValue");
  const HelmetupgradedValue = savedHelmetUpgradedValue
    ? Number(savedHelmetUpgradedValue)
    : 0;
  //Shoes
  const savedShoesUpgradedValue = localStorage.getItem("ShoesUpgradedValue");
  const ShoesupgradedValue = savedShoesUpgradedValue
    ? Number(savedShoesUpgradedValue)
    : 0;
  //gloves
  const savedGlovesUpgradedValue = localStorage.getItem("GlovesUpgradedValue");
  const GlovesupgradedValue = savedGlovesUpgradedValue
    ? Number(savedGlovesUpgradedValue)
    : 0;
  //gloves
  const savedShieldAndDaggerUpgradedValue = localStorage.getItem(
    "ShieldAndDaggerUpgradedValue"
  );
  const ShieldAndDaggerupgradedValue = savedShieldAndDaggerUpgradedValue
    ? Number(savedShieldAndDaggerUpgradedValue)
    : 0;
  //=================================================================================
  //ARMOR
  /// load image form localstorage
  const savedArmorImage = localStorage.getItem(
    "selectedArmorItemImgForEnchant"
  );
  const savedArmorName = localStorage.getItem(
    "selectedArmorItemNameForEnchant"
  );

  // Declare state to save selected damage value, initialized with null
  const [, setSavedDefArmor] = useState<number | null>(null);

  // Load selected damage value from local storage when component mounts
  useEffect(() => {
    const savedDefArmorFromLocalStorage = localStorage.getItem(
      "selectedItemDefForEnchant"
    );
    if (savedDefArmorFromLocalStorage) {
      setSavedDefArmor(Number(savedDefArmorFromLocalStorage));
    }
  }, []);

  // Declare state to save saved item upgrade value, initialized with 0
  const [savedArmorItemUpgrade] = useState<number>(0);

  //=================================================================================
  //HELMET
  /// load image form localstorage
  const savedHelmetImage = localStorage.getItem(
    "selectedHelmetItemImgForEnchant"
  );
  const savedHelmetName = localStorage.getItem(
    "selectedHelmetItemNameForEnchant"
  );

  // Declare state to save selected damage value, initialized with null
  const [, setSavedDefHelmet] = useState<number | null>(null);

  // Load selected damage value from local storage when component mounts
  useEffect(() => {
    const savedDefHelmetFromLocalStorage = localStorage.getItem(
      "selectedItemDefForEnchant"
    );
    if (savedDefHelmetFromLocalStorage) {
      setSavedDefHelmet(Number(savedDefHelmetFromLocalStorage));
    }
  }, []);

  // Declare state to save saved item upgrade value, initialized with 0
  const [savedHelmetItemUpgrade] = useState<number>(0);

  //=================================================================================
  //SHOES
  /// load image form localstorage
  const savedShoesImage = localStorage.getItem(
    "selectedShoesItemImgForEnchant"
  );
  const savedShoesName = localStorage.getItem(
    "selectedShoesItemNameForEnchant"
  );

  // Declare state to save selected damage value, initialized with null
  const [, setSavedDefShoes] = useState<number | null>(null);

  // Load selected damage value from local storage when component mounts
  useEffect(() => {
    const savedDefShoesFromLocalStorage = localStorage.getItem(
      "selectedItemDefForEnchant"
    );
    if (savedDefShoesFromLocalStorage) {
      setSavedDefShoes(Number(savedDefShoesFromLocalStorage));
    }
  }, []);

  // Declare state to save saved item upgrade value, initialized with 0
  const [savedShoesItemUpgrade] = useState<number>(0);

  //=================================================================================
  //ShieldAndDagger
  /// load image form localstorage
  const savedShieldAndDaggerImage = localStorage.getItem(
    "selectedShieldAndDaggerItemImgForEnchant"
  );
  const savedShieldAndDaggerName = localStorage.getItem(
    "selectedShieldAndDaggerItemNameForEnchant"
  );
  // Declare state to save selected damage value, initialized with null
  const [, setSavedDefShieldAndDagger] = useState<number | null>(null);

  // Load selected damage value from local storage when component mounts
  useEffect(() => {
    const savedDefShieldAndDaggerFromLocalStorage = localStorage.getItem(
      "selectedItemDefForEnchant"
    );
    if (savedDefShieldAndDaggerFromLocalStorage) {
      setSavedDefShieldAndDagger(
        Number(savedDefShieldAndDaggerFromLocalStorage)
      );
    }
  }, []);
  // Declare state to save selected damage value, initialized with null
  const [, setSavedDmgShieldAndDagger] = useState<number | null>(null);

  // Load selected damage value from local storage when component mounts
  useEffect(() => {
    const savedDmgShieldAndDaggerFromLocalStorage = localStorage.getItem(
      "selectedItemDmgForEnchant"
    );
    if (savedDmgShieldAndDaggerFromLocalStorage) {
      setSavedDmgShieldAndDagger(
        Number(savedDmgShieldAndDaggerFromLocalStorage)
      );
    }
  }, []);

  // Declare state to save saved item upgrade value, initialized with 0
  const [savedShieldAndDaggerItemUpgrade] = useState<number>(0);

  //=================================================================================
  //Gloves
  /// load image form localstorage
  const savedGlovesImage = localStorage.getItem(
    "selectedGlovesItemImgForEnchant"
  );
  const savedGlovesName = localStorage.getItem(
    "selectedGlovesItemNameForEnchant"
  );

  // Declare state to save selected damage value, initialized with null
  const [, setSavedDefGloves] = useState<number | null>(null);

  // Load selected damage value from local storage when component mounts
  useEffect(() => {
    const savedDefGlovesFromLocalStorage = localStorage.getItem(
      "selectedItemDefForEnchant"
    );
    if (savedDefGlovesFromLocalStorage) {
      setSavedDefGloves(Number(savedDefGlovesFromLocalStorage));
    }
  }, []);

  // Declare state to save saved item upgrade value, initialized with 0
  const [savedGlovesItemUpgrade] = useState<number>(0);

  const [savePontsForUpgrade, setsavePontsForUpgrade] = useState<number>(
    Number(localStorage.getItem("savePontsForUpgrade")) || 0
  );

  //==========================SLEEP===================================
  const [sleep, setSleep] = useState(
    localStorage.getItem("sleep") === "true" ? true : false
  );

  const [sleepTimeout, setSleepTimeout] = useState(
    localStorage.getItem("sleepTimeout") || null
  );

  const SleepCdr = 20; // value in minutes

  const SleepHandleClick = () => {
    setSleep(true);
    const timeoutExpiresAt = Date.now() + SleepCdr * 60000;
    setSleepTimeout(String(timeoutExpiresAt));
    setDays((prevDays: number) => prevDays + 1);
    setHours(6);
    setMinutes(0);
    setCurrentHP(maxHP);
  };

  return (
    <>
      <div
        id="mainBGScrollHorizontal"
        ref={mainBGScrollHorizontalRef}
        onWheel={(e) => {
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
            <ClearLocalStorageButton />
            <CharacterMain
              UpgradeCharacters={UpgradeCharacters}
              setUpgradeCharacters={setUpgradeCharacters}
              setUpgradeVillageAndClicks={setUpgradeVillageAndClicks}
              savePontsForUpgrade={savePontsForUpgrade}
              setsavePontsForUpgrade={setsavePontsForUpgrade}
              setDmgBoost={setDmgBoost}
              DmgBoost={DmgBoost}
              setDefBoosts={setDefBoosts}
              DefBoosts={DefBoosts}
            />
            <CharacterSelection />
            <UpgradeVillageAndClick
              setUpgradeVillageAndClicks={setUpgradeVillageAndClicks}
              UpgradeVillageAndClicks={UpgradeVillageAndClicks}
            />

            <Clicker
              setCount={setCount}
              count={count}
              FullCountPerClick={FullCountPerClick}
              handleButtonClick={handleButtonClick}
              setFullCountPerClick={setFullCountPerClick}
              UpgradeOne={UpgradeOne}
              FullDmgValue={FullDmgValue}
              FullDefValue={FullDefValue}
              setUpgradeVillageAndClicks={setUpgradeVillageAndClicks}
              UpgradeVillageAndClicks={UpgradeVillageAndClicks}
              setUpgradeCharacters={setUpgradeCharacters}
              DmgBoost={DmgBoost}
            />
            {/*
            
            <UpdateLvlOne
              setCount={setCount}
              count={count}
              lvlOne={lvlOne}
              setLvlOne={setLvlOne}
              UpgradeOne={UpgradeOne}
              setUpgradeOne={setUpgradeOne}
            />
            */}
            <Link to="/Pond" className="PondTrawel"></Link>
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
              <div className="BST">BLACKSMITH</div>
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
                setOpenAndCloseEqinEnchant={setOpenAndCloseEqinEnchant}
                OpenAndCloseEqinEnchant={OpenAndCloseEqinEnchant}
                OpenCloseEqinEnchant={OpenCloseEqinEnchant}
                setSelectedItemIndex={setSelectedItemIndex}
                savedArmorItemUpgrade={savedArmorItemUpgrade}
                setSelectedArmorItemIndex={setSelectedArmorItemIndex}
                setitsMainWeapon={setitsMainWeapon}
                setitsArmor={setitsArmor}
                savedHelmetItemUpgrade={savedHelmetItemUpgrade}
                setSelectedHelmetItemIndex={setSelectedHelmetItemIndex}
                setitsHelmet={setitsHelmet}
                savedShoesItemUpgrade={savedShoesItemUpgrade}
                setSelectedShoesItemIndex={setSelectedShoesItemIndex}
                setitsShoes={setitsShoes}
                savedGlovesItemUpgrade={savedGlovesItemUpgrade}
                setSelectedGlovesItemIndex={setSelectedGlovesItemIndex}
                setitsGloves={setitsGloves}
                savedShieldAndDaggerItemUpgrade={
                  savedShieldAndDaggerItemUpgrade
                }
                setSelectedShieldAndDaggerItemIndex={
                  setSelectedShieldAndDaggerItemIndex
                }
                setitsShieldAndDagger={setitsShieldAndDagger}
                savedItemUpgrade={savedItemUpgrade}
                selectedItemIndex={selectedItemIndex}
                itsMainWeapon={itsMainWeapon}
                selectedArmorItemIndex={selectedArmorItemIndex}
                itsArmor={itsArmor}
                itsHelmet={itsHelmet}
                selectedHelmetItemIndex={selectedHelmetItemIndex}
                itsShoes={itsShoes}
                selectedShoesItemIndex={selectedShoesItemIndex}
                itsGloves={itsGloves}
                selectedGlovesItemIndex={selectedGlovesItemIndex}
                itsShieldAndDagger={itsShieldAndDagger}
                selectedShieldAndDaggerItemIndex={
                  selectedShieldAndDaggerItemIndex
                }
                savedImage={savedImage}
                savedName={savedName}
                savedArmorImage={savedArmorImage}
                savedArmorName={savedArmorName}
                savedHelmetImage={savedHelmetImage}
                savedHelmetName={savedHelmetName}
                savedGlovesImage={savedGlovesImage}
                savedGlovesName={savedGlovesName}
                savedShoesImage={savedShoesImage}
                savedShoesName={savedShoesName}
                savedShieldAndDaggerImage={savedShieldAndDaggerImage}
                savedShieldAndDaggerName={savedShieldAndDaggerName}
                upgradedValue={upgradedValue}
                ArmorupgradedValue={ArmorupgradedValue}
                HelmetupgradedValue={HelmetupgradedValue}
                ShoesupgradedValue={ShoesupgradedValue}
                GlovesupgradedValue={GlovesupgradedValue}
                ShieldAndDaggerupgradedValue={ShieldAndDaggerupgradedValue}
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
                numberCatP={numberCatP}
                OpenSellShop={OpenSellShop}
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
              <div className="MT">M O T E L</div>
              <Motel
                MO={MO}
                setWSO={setWSO}
                setBSO={setBSO}
                setASO={setASO}
                setMO={setMO}
                setSleep={setSleep}
                sleep={sleep}
                SleepHandleClick={SleepHandleClick}
                setSleepTimeout={setSleepTimeout}
                sleepTimeout={sleepTimeout}
              />
            </div>
            {numberCatP === 1 && (
              <div className="Cat-p1" onClick={OpenSellShop}>
                <Cat />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainIndexVillage;
