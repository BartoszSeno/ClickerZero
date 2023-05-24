/* eslint-disable react-hooks/exhaustive-deps */
import "./assets/css/Normal/Cat/Cat.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainIndexVillage from "./Village/Village";
import Pond from "./Pond";
import Lvl from "./hook/Lvl";
import { useEffect, useState } from "react";
import DayTime from "./hook/dayTiem";
import HealthBar from "./hook/hpBar";
import TimeCycleBg from "./hook/TimeCycle";
import { ShieldAndDaggerImageAndNameAndCost } from "./data/equipment/subWeapon";
import { GlovesImageAndNameAndCost } from "./data/equipment/gloves";
import { ShoesImageAndNameAndCost } from "./data/equipment/Shoes";
import { MainWeaponImageAndNameAndCost } from "./data/equipment/mainWeapon";
import { ArmorImageAndNameAndCost } from "./data/equipment/armor";
import { HelmetImageAndNameAndCost } from "./data/equipment/helmet";
import { FishArray } from "./data/fish/fish";
import MainEq from "./Equipment";
import SellFish from "./hook/SellFish/Sell";
import { CatArray } from "./data/cat/cat";

function App() {
  //==================
  // FULL NUMBER WHICH SAVES THE COUNT NUMBER OF MAIN POINTS 'count'
  const [count, setCount] = useState<number>(() =>
    Number(localStorage.getItem("count") || 0)
  );
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
  }, []);
  // Declare state to save selected item index, initialized with 0
  const [
    selectedShieldAndDaggerItemIndex,
    setSelectedShieldAndDaggerItemIndex,
  ] = useState<number>(0);

  // its weapon or armor ?
  const [itsShieldAndDagger, setitsShieldAndDagger] = useState<boolean>(false);

  //==================
  // SAVES THE TRUE VALUE OF MAIN Gloves DEF
  const [UpgradedDefShieldAndDagger, setUpgradedDefShieldAndDagger] =
    useState<string>("");

  // SAVES THE TRUE VALUE OF MAIN Gloves DMG
  const [UpgradedDmgShieldAndDagger, setUpgradedDmgShieldAndDagger] =
    useState<string>("");

  //===========================GLOVES===============================

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
  }, []);
  // Declare state to save selected item index, initialized with 0
  const [selectedGlovesItemIndex, setSelectedGlovesItemIndex] =
    useState<number>(0);
  // its weapon or armor ?
  const [itsGloves, setitsGloves] = useState<boolean>(false);

  //==================
  // SAVES THE TRUE VALUE OF MAIN Gloves DEF
  const [UpgradedDefGloves, setUpgradedDefGloves] = useState<string>("");

  //=====================SHOES============================

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
  }, []);
  // Declare state to save selected item index, initialized with 0
  const [selectedShoesItemIndex, setSelectedShoesItemIndex] =
    useState<number>(0);
  // its weapon or armor ?
  const [itsShoes, setitsShoes] = useState<boolean>(false);
  //==================
  // SAVES THE TRUE VALUE OF MAIN Shoes DEF
  const [UpgradedDefShoes, setUpgradedDefShoes] = useState<string>("");

  //================================HELMET========================

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
  }, []);
  // Declare state to save selected item index, initialized with 0
  const [selectedHelmetItemIndex, setSelectedHelmetItemIndex] =
    useState<number>(0);
  // its weapon or armor ?
  const [itsHelmet, setitsHelmet] = useState<boolean>(false);
  //==================
  // SAVES THE TRUE VALUE OF MAIN Helmet DEF
  const [UpgradedDefHelmet, setUpgradedDefHelmet] = useState<string>("");

  //=======================ARMOR===========================

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
  }, []);

  // Declare state to save selected item index, initialized with 0
  const [selectedArmorItemIndex, setSelectedArmorItemIndex] =
    useState<number>(0);

  // its weapon or armor ?
  const [itsArmor, setitsArmor] = useState<boolean>(false);

  //==================
  // SAVES THE TRUE VALUE OF MAIN ARMOR DEF
  const [UpgradedDefArmor, setUpgradedDefArmor] = useState<string>("");

  //===========================MAIN WEAPON=====================

  // ARRAY OF THE ENTIRE MAIN WEAPON
  const [mainWeaponData, setMainWeaponData] = useState<any>(
    JSON.parse(
      localStorage.getItem("MainWeaponImageAndNameAndCost") ||
        JSON.stringify(MainWeaponImageAndNameAndCost)
    )
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
  }, []);

  // Declare state to save selected item index, initialized with 0
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);

  const [itsMainWeapon, setitsMainWeapon] = useState<boolean>(false);

  //===================INVENTORY============================
  const [FullInv, setFullInv] = useState<boolean>(false);

  //=========================ENCHANT ================================

  const [OpenAndCloseEqinEnchant, setOpenAndCloseEqinEnchant] =
    useState<boolean>(false);
  function OpenCloseEqinEnchant() {
    setOpenAndCloseEqinEnchant(!OpenAndCloseEqinEnchant);
  }

  //=========================CHARACTER======================
  const [UpgradeCharacters, setUpgradeCharacters] = useState<boolean>(false);

  const [UpgradeVillageAndClicks, setUpgradeVillageAndClicks] =
    useState<boolean>(false);
  //=========================DMG BOOST FOR CHARACTER UPGRADE=======================
  const [DmgBoost, setDmgBoost] = useState<number>(
    Number(localStorage.getItem("DmgBoost")) || 1
  );

  //=========================DEF BOOST FOR CHARACTER UPGRADE=======================
  const [DefBoosts, setDefBoosts] = useState<number>(
    Number(localStorage.getItem("DefBoosts")) || 1
  );
  //=================================================================================
  //==============================DEF AND DMG VALUE==================================
  //=================================================================================
  const [FullDefValue, setFullDefValue] = useState<any>();

  setTimeout(() => {
    // export data from statistic
    const FullDmgFromText = document.querySelector(
      ".statsFullDef"
    ) as HTMLElement;
    //if the data exists, convert it to a text
    const text = FullDmgFromText?.textContent;
    setFullDefValue(text);
  }, 10);
  //==============
  // full Dmg Stats
  const [FullDmgValue, setFullDmgValue] = useState<any>();

  setTimeout(() => {
    // export data from statistic
    const FullDmgFromText = document.querySelector(
      ".statsFullDmg"
    ) as HTMLElement;
    //if the data exists, convert it to a text
    const text = FullDmgFromText?.textContent;
    setFullDmgValue(text);
  }, 10);

  //=============================MAX VALUE DMG + DEF===============================
  // HERE NEW WARIABLES ARE ADDED WHICH ARE USED TO INCREASE POINTS PER CLICK
  const [FullCountPerClick, setFullCountPerClick] = useState<number>(
    (Number(FullDmgValue) || 0) + (Number(FullDefValue) || 0)
  );
  //=================================================================================
  //===================================Leveling======================================
  //=================================================================================

  const [clickCount, setClickCount] = useState(
    Number(localStorage.getItem("clickCount")) || 0
  );
  const [fillCount, setFillCount] = useState(
    Number(localStorage.getItem("fillCount")) || 0
  );
  const [maxClicks, setMaxClicks] = useState(
    Number(localStorage.getItem("maxClicks")) || 50
  );
  const [maxClicksCount, setMaxClicksCount] = useState(
    Number(localStorage.getItem("maxClicksCount")) || 1
  );
  const clickIncrease = FullCountPerClick;

  function handleButtonClick() {
    if (clickCount < maxClicks) {
      setClickCount(clickCount + clickIncrease);
      if (clickCount + clickIncrease >= maxClicks) {
        setFillCount(fillCount + 1);
        setClickCount(0);
        if (fillCount + 1 === maxClicksCount) {
          setMaxClicks(Number(maxClicks) * 1.8342);
          setMaxClicksCount(maxClicksCount + 1);
        }
      }
    }
  }

  useEffect(() => {
    localStorage.setItem("fillCount", fillCount.toString());
    localStorage.setItem("clickCount", clickCount.toString());
    localStorage.setItem("maxClicks", maxClicks.toString());
    localStorage.setItem("maxClicksCount", maxClicksCount.toString());
  }, [fillCount, clickCount, maxClicks, maxClicksCount]);
  //=================================================================================
  //================================TIME AND DAY=====================================
  //=================================================================================
  const [days, setDays] = useState(
    parseInt(localStorage.getItem("days") ?? "") || 0
  );
  const [hours, setHours] = useState(
    parseInt(localStorage.getItem("hours") ?? "") || 0
  );
  const [minutes, setMinutes] = useState(
    parseInt(localStorage.getItem("minutes") ?? "") || 0
  );
  //========================TURN ON / OFF BACKGROUND COLOR===========================

  const [turn, setTurn] = useState<boolean>(true);

  //=================================================================================
  //================================HP BAR===========================================
  //=================================================================================

  const maxHP = (100 + Number(FullDefValue)) * DefBoosts;
  const [currentHP, setCurrentHP] = useState(100); // Inicjalne wartości currentHP
  //=================================================================================
  const [FishData, setFishData] = useState<any>(
    JSON.parse(localStorage.getItem("FishArray") || JSON.stringify(FishArray))
  );

  //====
  const [fishId, setfishId] = useState<number>();
  const [ValueCatch, setValueCatch] = useState(1);

  //=================================================================================
  //=================================================================================

  const [SellFishByCat, setSellFishByCat] = useState<boolean>(false);

  function OpenSellShop() {
    setTimeout(() => {
      setSellFishByCat(true);
    }, 10);
  }

  //==
  const [numberCatP, setNumberCatP] = useState(
    Math.floor(Math.random() * CatArray.length) + 1
  );

  useEffect(() => {
    const catArrayLength = CatArray.length;

    const intervalId = setInterval(() => {
      // generate a random number between 1 and 10
      const newNumber = Math.floor(Math.random() * catArrayLength + 1);
      setNumberCatP(newNumber);
    }, 5 * 60 * 1000); // run every 5 minutes

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <BrowserRouter basename="/ClickerZero">
        <TimeCycleBg hours={hours} turn={turn} />
        <Routes>
          <Route
            path="/"
            element={
              <MainIndexVillage
                OpenSellShop={OpenSellShop}
                handleButtonClick={handleButtonClick}
                FullDmgValue={FullDmgValue}
                FullDefValue={FullDefValue}
                FullCountPerClick={FullCountPerClick}
                setFullCountPerClick={setFullCountPerClick}
                setDays={setDays}
                days={days}
                hours={hours}
                setHours={setHours}
                setMinutes={setMinutes}
                minutes={minutes}
                setTurn={setTurn}
                turn={turn}
                setCurrentHP={setCurrentHP}
                maxHP={maxHP}
                setDmgBoost={setDmgBoost}
                DmgBoost={DmgBoost}
                setDefBoosts={setDefBoosts}
                DefBoosts={DefBoosts}
                UpgradeCharacters={UpgradeCharacters}
                setUpgradeCharacters={setUpgradeCharacters}
                setUpgradeVillageAndClicks={setUpgradeVillageAndClicks}
                UpgradeVillageAndClicks={UpgradeVillageAndClicks}
                setMainWeaponData={setMainWeaponData}
                FullInv={FullInv}
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
                setSelectedArmorItemIndex={setSelectedArmorItemIndex}
                setitsMainWeapon={setitsMainWeapon}
                setitsArmor={setitsArmor}
                setSelectedHelmetItemIndex={setSelectedHelmetItemIndex}
                setitsHelmet={setitsHelmet}
                setSelectedShoesItemIndex={setSelectedShoesItemIndex}
                setitsShoes={setitsShoes}
                setSelectedGlovesItemIndex={setSelectedGlovesItemIndex}
                setitsGloves={setitsGloves}
                setSelectedShieldAndDaggerItemIndex={
                  setSelectedShieldAndDaggerItemIndex
                }
                setitsShieldAndDagger={setitsShieldAndDagger}
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
                setHelmetData={setHelmetData}
                setArmorData={setArmorData}
                setGlovesData={setGlovesData}
                setShoesData={setShoesData}
                setCount={setCount}
                count={count}
                setSellFishByCat={setSellFishByCat}
                numberCatP={numberCatP}
              />
            }
          ></Route>
          <Route
            path="/Pond"
            element={
              <Pond
                OpenSellShop={OpenSellShop}
                numberCatP={numberCatP}
                FishData={FishData}
                setFishData={setFishData}
                setCount={setCount}
                count={count}
                fishId={fishId}
                ValueCatch={ValueCatch}
                setValueCatch={setValueCatch}
              />
            }
          ></Route>
        </Routes>
        <SellFish
          SellFishByCat={SellFishByCat}
          FishData={FishData}
          setFishData={setFishData}
          setCount={setCount}
          count={count}
          fishId={fishId}
          ValueCatch={ValueCatch}
          setValueCatch={setValueCatch}
          setSellFishByCat={setSellFishByCat}
          numberCatP={numberCatP}
        />
        <MainEq
          SellFishByCat={SellFishByCat}
          setfishId={setfishId}
          mainWeaponData={mainWeaponData}
          UpgradedNamesMainWeapon={UpgradedNamesMainWeapon}
          selectedItem={selectedItem}
          ArmorData={ArmorData}
          UpgradedNamesArmor={UpgradedNamesArmor}
          selectedArmorItem={selectedArmorItem}
          HelmetData={HelmetData}
          UpgradedNamesHelmet={UpgradedNamesHelmet}
          selectedHelmetItem={selectedHelmetItem}
          ShoesData={ShoesData}
          UpgradedNamesShoes={UpgradedNamesShoes}
          selectedShoesItem={selectedShoesItem}
          GlovesData={GlovesData}
          UpgradedNamesGloves={UpgradedNamesGloves}
          selectedGlovesItem={selectedGlovesItem}
          ShieldAndDaggerData={ShieldAndDaggerData}
          UpgradedNamesShieldAndDagger={UpgradedNamesShieldAndDagger}
          selectedShieldAndDaggerItem={selectedShieldAndDaggerItem}
          setGlovesData={setGlovesData}
          setMainWeaponData={setMainWeaponData}
          setArmorData={setArmorData}
          setHelmetData={setHelmetData}
          setShoesData={setShoesData}
          setShieldAndDaggerData={setShieldAndDaggerData}
          setFullInv={setFullInv}
          FullInv={FullInv}
          OpenAndCloseEqinEnchant={OpenAndCloseEqinEnchant}
          setOpenAndCloseEqinEnchant={setOpenAndCloseEqinEnchant}
          setSelectedItemIndex={setSelectedItemIndex}
          setUpgradedDmgMainWeapon={setUpgradedDmgMainWeapon}
          setSelectedArmorItemIndex={setSelectedArmorItemIndex}
          setUpgradedDefArmor={setUpgradedDefArmor}
          setitsMainWeapon={setitsMainWeapon}
          setitsArmor={setitsArmor}
          setSelectedHelmetItemIndex={setSelectedHelmetItemIndex}
          setUpgradedDefHelmet={setUpgradedDefHelmet}
          setitsHelmet={setitsHelmet}
          setSelectedShoesItemIndex={setSelectedShoesItemIndex}
          setUpgradedDefShoes={setUpgradedDefShoes}
          setitsShoes={setitsShoes}
          setSelectedGlovesItemIndex={setSelectedGlovesItemIndex}
          setUpgradedDefGloves={setUpgradedDefGloves}
          setitsGloves={setitsGloves}
          setSelectedShieldAndDaggerItemIndex={
            setSelectedShieldAndDaggerItemIndex
          }
          setUpgradedDefShieldAndDagger={setUpgradedDefShieldAndDagger}
          setitsShieldAndDagger={setitsShieldAndDagger}
          setUpgradedDmgShieldAndDagger={setUpgradedDmgShieldAndDagger}
          setUpgradeCharacters={setUpgradeCharacters}
          setUpgradeVillageAndClicks={setUpgradeVillageAndClicks}
          FishData={FishData}
          setFishData={setFishData}
          setValueCatch={setValueCatch}
        />
        <Lvl
          clickCount={clickCount}
          maxClicks={maxClicks}
          fillCount={fillCount}
        />
        <DayTime
          setDays={setDays}
          days={days}
          hours={hours}
          setHours={setHours}
          setMinutes={setMinutes}
          minutes={minutes}
          setTurn={setTurn}
          turn={turn}
        />
        <HealthBar
          currentHP={currentHP}
          maxHP={maxHP}
          setCurrentHP={setCurrentHP}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
