/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import "../assets/css/Normal/enchant/enchant.css";
import ButtonForEnchant from "./ButtonEnchant/button";
import EnchantSucces from "./EnchantSucces/EnchantSucces";
import PutItemHere from "./PutItemHere/PutItemHere";

const Enchant = ({
  mainWeaponData,
  setUpgradedNamesMainWeapon,
  UpgradedNamesMainWeapon,
  setUpgradedDmgMainWeapon,
  UpgradedDmgMainWeapon,
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
  setUpgradedNamesShieldAndDagger,
  setUpgradedDefShieldAndDagger,
  UpgradedDefShieldAndDagger,
}: {
  mainWeaponData: any;
  setUpgradedNamesMainWeapon: any;
  UpgradedNamesMainWeapon: any;
  setUpgradedDmgMainWeapon: any;
  UpgradedDmgMainWeapon: any;
  UpgradedDefArmor: any;
  setUpgradedDefArmor: any;
  ArmorData: any;
  setUpgradedNamesArmor: any;
  UpgradedNamesArmor: any;
  HelmetData: any;
  UpgradedNamesHelmet: any;
  setUpgradedNamesHelmet: any;
  setUpgradedDefHelmet: any;
  UpgradedDefHelmet: any;
  ShoesData: any;
  UpgradedNamesShoes: any;
  setUpgradedNamesShoes: any;
  setUpgradedDefShoes: any;
  UpgradedDefShoes: any;
  GlovesData: any;
  UpgradedNamesGloves: any;
  setUpgradedNamesGloves: any;
  setUpgradedDefGloves: any;
  UpgradedDefGloves: any;

  ShieldAndDaggerData: any;
  UpgradedNamesShieldAndDagger: any;
  setUpgradedNamesShieldAndDagger: any;
  setUpgradedDefShieldAndDagger: any;
  UpgradedDefShieldAndDagger: any;
}) => {
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
  // Declare state to save selected item index, initialized with 0
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);

  // Declare state to save saved item upgrade value, initialized with 0
  const [savedItemUpgrade] = useState<number>(0);

  // to check the enchantment level
  const savedUpgradedValue = localStorage.getItem("ArmorupgradedValue");
  const upgradedValue = savedUpgradedValue ? Number(savedUpgradedValue) : 0;
  // its weapon or armor ?
  const [itsMainWeapon, setitsMainWeapon] = useState<boolean>(false);

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

  // Declare state to save selected item index, initialized with 0
  const [selectedArmorItemIndex, setSelectedArmorItemIndex] =
    useState<number>(0);

  // Declare state to save saved item upgrade value, initialized with 0
  const [savedArmorItemUpgrade] = useState<number>(0);
  // its weapon or armor ?
  const [itsArmor, setitsArmor] = useState<boolean>(false);

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

  // Declare state to save selected item index, initialized with 0
  const [selectedHelmetItemIndex, setSelectedHelmetItemIndex] =
    useState<number>(0);
  // Declare state to save saved item upgrade value, initialized with 0
  const [savedHelmetItemUpgrade] = useState<number>(0);
  // its weapon or armor ?
  const [itsHelmet, setitsHelmet] = useState<boolean>(false);

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

  // Declare state to save selected item index, initialized with 0
  const [selectedShoesItemIndex, setSelectedShoesItemIndex] =
    useState<number>(0);
  // Declare state to save saved item upgrade value, initialized with 0
  const [savedShoesItemUpgrade] = useState<number>(0);
  // its weapon or armor ?
  const [itsShoes, setitsShoes] = useState<boolean>(false);

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

  // Declare state to save selected item index, initialized with 0
  const [
    selectedShieldAndDaggerItemIndex,
    setSelectedShieldAndDaggerItemIndex,
  ] = useState<number>(0);
  // Declare state to save saved item upgrade value, initialized with 0
  const [savedShieldAndDaggerItemUpgrade] = useState<number>(0);
  // its weapon or armor ?
  const [itsShieldAndDagger, setitsShieldAndDagger] = useState<boolean>(false);

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

  // Declare state to save selected item index, initialized with 0
  const [selectedGlovesItemIndex, setSelectedGlovesItemIndex] =
    useState<number>(0);
  // Declare state to save saved item upgrade value, initialized with 0
  const [savedGlovesItemUpgrade] = useState<number>(0);
  // its weapon or armor ?
  const [itsGloves, setitsGloves] = useState<boolean>(false);

  //=================================================================================
  // Remove saved item image and name from local storage on component mount
  useEffect(() => {
    localStorage.removeItem("selectedItemImgForEnchant");
    localStorage.removeItem("selectedItemNameForEnchant");
    localStorage.removeItem("selectedArmorItemImgForEnchant");
    localStorage.removeItem("selectedArmorItemNameForEnchant");
    localStorage.removeItem("selectedHelmetItemImgForEnchant");
    localStorage.removeItem("selectedHelmetItemNameForEnchant");
    localStorage.removeItem("selectedShoesItemImgForEnchant");
    localStorage.removeItem("selectedShoesItemNameForEnchant");
    localStorage.removeItem("selectedGlovesItemImgForEnchant");
    localStorage.removeItem("selectedGlovesItemNameForEnchant");
    localStorage.removeItem("selectedShieldAndDaggerItemImgForEnchant");
    localStorage.removeItem("selectedShieldAndDaggerItemNameForEnchant");
  }, []);

  return (
    <>
      <div id="enchant-container">
        <div className="encahnt-box">
          <ButtonForEnchant
            selectedItemIndex={selectedItemIndex}
            itsMainWeapon={itsMainWeapon}
            mainWeaponData={mainWeaponData}
            UpgradedNamesMainWeapon={UpgradedNamesMainWeapon}
            setUpgradedNamesMainWeapon={setUpgradedNamesMainWeapon}
            setUpgradedDmgMainWeapon={setUpgradedDmgMainWeapon}
            selectedArmorItemIndex={selectedArmorItemIndex}
            itsArmor={itsArmor}
            ArmorData={ArmorData}
            UpgradedNamesArmor={UpgradedNamesArmor}
            setUpgradedNamesArmor={setUpgradedNamesArmor}
            setUpgradedDefArmor={setUpgradedDefArmor}
            itsHelmet={itsHelmet}
            selectedHelmetItemIndex={selectedHelmetItemIndex}
            HelmetData={HelmetData}
            UpgradedNamesHelmet={UpgradedNamesHelmet}
            setUpgradedNamesHelmet={setUpgradedNamesHelmet}
            setUpgradedDefHelmet={setUpgradedDefHelmet}
            itsShoes={itsShoes}
            selectedShoesItemIndex={selectedShoesItemIndex}
            ShoesData={ShoesData}
            UpgradedNamesShoes={UpgradedNamesShoes}
            setUpgradedNamesShoes={setUpgradedNamesShoes}
            setUpgradedDefShoes={setUpgradedDefShoes}
            itsGloves={itsGloves}
            selectedGlovesItemIndex={selectedGlovesItemIndex}
            GlovesData={GlovesData}
            UpgradedNamesGloves={UpgradedNamesGloves}
            setUpgradedNamesGloves={setUpgradedNamesGloves}
            setUpgradedDefGloves={setUpgradedDefGloves}
            itsShieldAndDagger={itsShieldAndDagger}
            selectedShieldAndDaggerItemIndex={selectedShieldAndDaggerItemIndex}
            ShieldAndDaggerData={ShieldAndDaggerData}
            UpgradedNamesShieldAndDagger={UpgradedNamesShieldAndDagger}
            setUpgradedNamesShieldAndDagger={setUpgradedNamesShieldAndDagger}
            setUpgradedDefShieldAndDagger={setUpgradedDefShieldAndDagger}
          />
          <PutItemHere
            mainWeaponData={mainWeaponData}
            savedItemUpgrade={savedItemUpgrade}
            UpgradedNamesMainWeapon={UpgradedNamesMainWeapon}
            setSelectedItemIndex={setSelectedItemIndex}
            setUpgradedDmgMainWeapon={setUpgradedDmgMainWeapon}
            savedImage={savedImage}
            savedName={savedName}
            ArmorData={ArmorData}
            itsMainWeapon={itsMainWeapon}
            setitsMainWeapon={setitsMainWeapon}
            savedArmorItemUpgrade={savedArmorItemUpgrade}
            UpgradedNamesArmor={UpgradedNamesArmor}
            savedArmorImage={savedArmorImage}
            savedArmorName={savedArmorName}
            setSelectedArmorItemIndex={setSelectedArmorItemIndex}
            setUpgradedDefArmor={setUpgradedDefArmor}
            setitsArmor={setitsArmor}
            itsArmor={itsArmor}
            HelmetData={HelmetData}
            savedHelmetItemUpgrade={savedHelmetItemUpgrade}
            UpgradedNamesHelmet={UpgradedNamesHelmet}
            savedHelmetImage={savedHelmetImage}
            savedHelmetName={savedHelmetName}
            setSelectedHelmetItemIndex={setSelectedHelmetItemIndex}
            setUpgradedDefHelmet={setUpgradedDefHelmet}
            itsHelmet={itsHelmet}
            setitsHelmet={setitsHelmet}
            ShoesData={ShoesData}
            savedShoesItemUpgrade={savedShoesItemUpgrade}
            UpgradedNamesShoes={UpgradedNamesShoes}
            savedShoesImage={savedShoesImage}
            savedShoesName={savedShoesName}
            setSelectedShoesItemIndex={setSelectedShoesItemIndex}
            setUpgradedDefShoes={setUpgradedDefShoes}
            itsShoes={itsShoes}
            setitsShoes={setitsShoes}
            GlovesData={GlovesData}
            savedGlovesItemUpgrade={savedGlovesItemUpgrade}
            UpgradedNamesGloves={UpgradedNamesGloves}
            savedGlovesImage={savedGlovesImage}
            savedGlovesName={savedGlovesName}
            setSelectedGlovesItemIndex={setSelectedGlovesItemIndex}
            setUpgradedDefGloves={setUpgradedDefGloves}
            itsGloves={itsGloves}
            setitsGloves={setitsGloves}
            ShieldAndDaggerData={ShieldAndDaggerData}
            savedShieldAndDaggerItemUpgrade={savedShieldAndDaggerItemUpgrade}
            UpgradedNamesShieldAndDagger={UpgradedNamesShieldAndDagger}
            savedShieldAndDaggerImage={savedShieldAndDaggerImage}
            savedShieldAndDaggerName={savedShieldAndDaggerName}
            setSelectedShieldAndDaggerItemIndex={
              setSelectedShieldAndDaggerItemIndex
            }
            setUpgradedDefShieldAndDagger={setUpgradedDefShieldAndDagger}
            itsShieldAndDagger={itsShieldAndDagger}
            setitsShieldAndDagger={setitsShieldAndDagger}
          />
          <div className="EnchantProgress"></div>
          <EnchantSucces
            upgradedValue={upgradedValue}
            selectedItemIndex={selectedItemIndex}
            savedImage={savedImage}
            savedName={savedName}
            UpgradedDmgMainWeapon={UpgradedDmgMainWeapon}
            setUpgradedDmgMainWeapon={setUpgradedDmgMainWeapon}
            itsMainWeapon={itsMainWeapon}
            UpgradedDefArmor={UpgradedDefArmor}
            selectedArmorItemIndex={selectedArmorItemIndex}
            savedArmorImage={savedArmorImage}
            savedArmorName={savedArmorName}
            setUpgradedDefArmor={setUpgradedDefArmor}
            itsArmor={itsArmor}
            UpgradedDefHelmet={UpgradedDefHelmet}
            selectedHelmetItemIndex={selectedHelmetItemIndex}
            savedHelmetImage={savedHelmetImage}
            savedHelmetName={savedHelmetName}
            setUpgradedDefHelmet={setUpgradedDefHelmet}
            itsHelmet={itsHelmet}
            UpgradedDefShoes={UpgradedDefShoes}
            selectedShoesItemIndex={selectedShoesItemIndex}
            savedShoesImage={savedShoesImage}
            savedShoesName={savedShoesName}
            setUpgradedDefShoes={setUpgradedDefShoes}
            itsShoes={itsShoes}
            UpgradedDefGloves={UpgradedDefGloves}
            selectedGlovesItemIndex={selectedGlovesItemIndex}
            savedGlovesImage={savedGlovesImage}
            savedGlovesName={savedGlovesName}
            setUpgradedDefGloves={setUpgradedDefGloves}
            itsGloves={itsGloves}
            UpgradedDefShieldAndDagger={UpgradedDefShieldAndDagger}
            selectedShieldAndDaggerItemIndex={selectedShieldAndDaggerItemIndex}
            savedShieldAndDaggerImage={savedShieldAndDaggerImage}
            savedShieldAndDaggerName={savedShieldAndDaggerName}
            setUpgradedDefShieldAndDagger={setUpgradedDefShieldAndDagger}
            itsShieldAndDagger={itsShieldAndDagger}
          />
        </div>
      </div>
    </>
  );
};

export default Enchant;

export const getSavedDmgMain = (itemSavedDmgMainKey: string) => {
  const savedDmgMain = localStorage.getItem(itemSavedDmgMainKey) || null;
  return savedDmgMain;
};

export const getSavedDefArmor = (itemSavedDefArmorKey: string) => {
  const savedDefArmor = localStorage.getItem(itemSavedDefArmorKey) || null;
  return savedDefArmor;
};

export const getSavedDefHelmet = (itemSavedDefHelmetKey: string) => {
  const savedDefHelmet = localStorage.getItem(itemSavedDefHelmetKey) || null;
  return savedDefHelmet;
};

export const getSavedDefShoes = (itemSavedDefShoesKey: string) => {
  const savedDefShoes = localStorage.getItem(itemSavedDefShoesKey) || null;
  return savedDefShoes;
};

export const getSavedDefGloves = (itemSavedDefGlovesKey: string) => {
  const savedDefGloves = localStorage.getItem(itemSavedDefGlovesKey) || null;
  return savedDefGloves;
};

export const getSavedDefShieldAndDagger = (
  itemSavedDefShieldAndDaggerKey: string
) => {
  const savedDefShieldAndDagger =
    localStorage.getItem(itemSavedDefShieldAndDaggerKey) || null;
  return savedDefShieldAndDagger;
};
