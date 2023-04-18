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
  setUpgradedDmgShieldAndDagger,
  UpgradedDmgShieldAndDagger,

  OpenCloseEqinEnchant,

  //2
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
  savedImage,
  savedName,
  savedArmorImage,
  savedArmorName,
  savedHelmetImage,
  savedHelmetName,
  savedGlovesImage,
  savedShieldAndDaggerImage,
  upgradedValue,

  selectedItemIndex,
  savedShoesImage,
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
  setUpgradedDmgShieldAndDagger: any;
  UpgradedDmgShieldAndDagger: any;

  OpenCloseEqinEnchant: any;

  //2
  itsMainWeapon: any;
  selectedArmorItemIndex: any;
  itsArmor: any;
  itsHelmet: any;
  selectedHelmetItemIndex: any;
  itsShoes: any;
  selectedShoesItemIndex: any;
  itsGloves: any;
  selectedGlovesItemIndex: any;
  itsShieldAndDagger: any;
  selectedShieldAndDaggerItemIndex: any;
  savedImage: any;
  savedName: any;
  savedArmorImage: any;
  savedArmorName: any;
  savedHelmetImage: any;
  savedHelmetName: any;
  savedGlovesImage: any;
  savedShieldAndDaggerImage: any;
  upgradedValue: any;

  selectedItemIndex: any;
  savedShoesImage: any;
}) => {
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
            setUpgradedDmgShieldAndDagger={setUpgradedDmgShieldAndDagger}
            UpgradedDmgShieldAndDagger={UpgradedDmgShieldAndDagger}
          />
          <PutItemHere
            savedImage={savedImage}
            savedName={savedName}
            itsMainWeapon={itsMainWeapon}
            savedArmorImage={savedArmorImage}
            savedArmorName={savedArmorName}
            itsArmor={itsArmor}
            savedHelmetImage={savedHelmetImage}
            savedHelmetName={savedHelmetName}
            itsHelmet={itsHelmet}
            savedShoesImage={savedShoesImage}
            itsShoes={itsShoes}
            savedGlovesImage={savedGlovesImage}
            itsGloves={itsGloves}
            savedShieldAndDaggerImage={savedShieldAndDaggerImage}
            itsShieldAndDagger={itsShieldAndDagger}
            OpenCloseEqinEnchant={OpenCloseEqinEnchant}
          />
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
            setUpgradedDefShoes={setUpgradedDefShoes}
            itsShoes={itsShoes}
            UpgradedDefGloves={UpgradedDefGloves}
            selectedGlovesItemIndex={selectedGlovesItemIndex}
            savedGlovesImage={savedGlovesImage}
            setUpgradedDefGloves={setUpgradedDefGloves}
            itsGloves={itsGloves}
            UpgradedDefShieldAndDagger={UpgradedDefShieldAndDagger}
            selectedShieldAndDaggerItemIndex={selectedShieldAndDaggerItemIndex}
            savedShieldAndDaggerImage={savedShieldAndDaggerImage}
            setUpgradedDefShieldAndDagger={setUpgradedDefShieldAndDagger}
            itsShieldAndDagger={itsShieldAndDagger}
            setUpgradedDmgShieldAndDagger={setUpgradedDmgShieldAndDagger}
            UpgradedDmgShieldAndDagger={UpgradedDmgShieldAndDagger}
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

export const getSavedDmgShieldAndDagger = (
  itemSavedDmgShieldAndDaggerKey: string
) => {
  const savedDmgShieldAndDagger =
    localStorage.getItem(itemSavedDmgShieldAndDaggerKey) || null;
  return savedDmgShieldAndDagger;
};
