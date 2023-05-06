/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { MainWeaponImageAndNameAndCost } from "../../data/equipment/mainWeapon";
import { ArmorImageAndNameAndCost } from "../../data/equipment/armor";
import { ShoesImageAndNameAndCost } from "../../data/equipment/Shoes";
import { HelmetImageAndNameAndCost } from "../../data/equipment/helmet";
import { GlovesImageAndNameAndCost } from "../../data/equipment/gloves";
import { ShieldAndDaggerImageAndNameAndCost } from "../../data/equipment/subWeapon";

const ButtonForEnchant = ({
  selectedItemIndex,
  itsMainWeapon,
  mainWeaponData,
  UpgradedNamesMainWeapon,
  setUpgradedNamesMainWeapon,
  setUpgradedDmgMainWeapon,
  //armor
  selectedArmorItemIndex,
  itsArmor,
  ArmorData,
  UpgradedNamesArmor,
  setUpgradedNamesArmor,
  setUpgradedDefArmor,
  //helmet
  itsHelmet,
  selectedHelmetItemIndex,
  HelmetData,
  UpgradedNamesHelmet,
  setUpgradedNamesHelmet,
  setUpgradedDefHelmet,
  //shoes
  itsShoes,
  selectedShoesItemIndex,
  ShoesData,
  UpgradedNamesShoes,
  setUpgradedNamesShoes,
  setUpgradedDefShoes,
  //Gloves
  itsGloves,
  selectedGlovesItemIndex,
  GlovesData,
  UpgradedNamesGloves,
  setUpgradedNamesGloves,
  setUpgradedDefGloves,
  //ShieldAndDagger
  itsShieldAndDagger,
  selectedShieldAndDaggerItemIndex,
  ShieldAndDaggerData,
  UpgradedNamesShieldAndDagger,
  setUpgradedNamesShieldAndDagger,
  setUpgradedDefShieldAndDagger,
  setUpgradedDmgShieldAndDagger,
  UpgradedDmgShieldAndDagger,
}: {
  selectedItemIndex: number;
  itsMainWeapon: boolean;
  mainWeaponData: any;
  UpgradedNamesMainWeapon: any;
  setUpgradedNamesMainWeapon: any;
  setUpgradedDmgMainWeapon: any;
  //armor
  selectedArmorItemIndex: number;
  itsArmor: boolean;
  ArmorData: any;
  UpgradedNamesArmor: any;
  setUpgradedNamesArmor: any;
  setUpgradedDefArmor: any;
  //helmet
  itsHelmet: boolean;
  selectedHelmetItemIndex: number;
  HelmetData: any;
  UpgradedNamesHelmet: any;
  setUpgradedNamesHelmet: any;
  setUpgradedDefHelmet: any;
  //shoes
  itsShoes: boolean;
  selectedShoesItemIndex: number;
  ShoesData: any;
  UpgradedNamesShoes: any;
  setUpgradedNamesShoes: any;
  setUpgradedDefShoes: any;
  //Gloves
  itsGloves: boolean;
  selectedGlovesItemIndex: number;
  GlovesData: any;
  UpgradedNamesGloves: any;
  setUpgradedNamesGloves: any;
  setUpgradedDefGloves: any;
  //ShieldAndDagger
  itsShieldAndDagger: boolean;
  selectedShieldAndDaggerItemIndex: number;
  ShieldAndDaggerData: any;
  UpgradedNamesShieldAndDagger: any;
  setUpgradedNamesShieldAndDagger: any;
  setUpgradedDefShieldAndDagger: any;
  setUpgradedDmgShieldAndDagger: any;
  UpgradedDmgShieldAndDagger: any;
}) => {
  //==============
  // MAIN FUNCTION FOR UPGRADE ITEMS
  function EnchantPerClick(index: any) {
    // Retrieve the item data at the given index from an array
    const item = MainWeaponImageAndNameAndCost[index];

    // Create a variable to store the upgraded name of the item, which is the original name with a "+" prefix.
    const itemUpgradeName = `${item.name}`;

    // Retrieve the current saved upgraded level of the item from the browser's local storage, and convert it to a number.
    const savedItemUpgrade = localStorage.getItem(itemUpgradeName);
    const savedItemUpgradeNumber = Number(savedItemUpgrade);

    // Determine the new upgraded level, which is the saved upgraded level + 1, but capped at 15.
    const upgradedValue =
      savedItemUpgradeNumber < 15 ? savedItemUpgradeNumber + 1 : 15;

    // Store the new upgraded level in the browser's local storage.
    localStorage.setItem("upgradedValue", upgradedValue.toString());
    localStorage.setItem(itemUpgradeName, upgradedValue.toString());

    // Create a variable to store the selected item from "mainWeaponData".
    const selectedItem = mainWeaponData[index];

    // Create a new item name with the upgraded level prefix.
    const itemName = `+${upgradedValue} ${item.name}`;

    // Store the new item name and the original item name in the browser's local storage.
    localStorage.setItem(
      "UpgradedName",
      JSON.stringify({
        [itemName]: selectedItem.name,
        selectedItemNameForEnchant: itemName,
      })
    );

    // Create a copy of the "UpgradedNamesMainWeapon" array, and update the item name at the given index with the new upgraded name.
    const upgradedNames = [...UpgradedNamesMainWeapon];
    upgradedNames[index] = itemName;
    setUpgradedNamesMainWeapon(upgradedNames);

    // Create a unique key for the saved damage value of the item.
    const itemSavedDmgMainKey = `selectedItemDmgForEnchant_${item.name}`;

    // Retrieve the current number of clicks for the item from the browser's local storage, and convert it to a number.
    const savedClicks = localStorage.getItem(`savedClicks_${item.name}`);
    const numClicks = savedClicks ? Number(savedClicks) : 0;

    // If the number of clicks is less than 15, double the saved damage value of the item and store it in the browser's local storage.
    if (numClicks < 15) {
      let newSavedDmgMain = Number(
        localStorage.getItem(itemSavedDmgMainKey) || item.dmgLvl0
      );
      // Check the tier of the item and multiply the saved damage accordingly
      if (item.tier === "green") {
        newSavedDmgMain *= 1.2;
      } else if (item.tier === "blue") {
        newSavedDmgMain *= 1.7;
      } else if (item.tier === "yellow") {
        newSavedDmgMain *= 2.7;
      } else if (item.tier === "red") {
        newSavedDmgMain *= 3.4;
      } else if (item.tier === "purple") {
        newSavedDmgMain *= 5;
      }
      localStorage.setItem(itemSavedDmgMainKey, newSavedDmgMain.toString());
      localStorage.setItem(
        `savedClicks_${item.name}`,
        (numClicks + 1).toString()
      );
    }

    // Retrieve the current saved damage value of the item from the browser's local storage, or use the default level 0 damage value if not present.
    const savedDmgMain =
      localStorage.getItem(itemSavedDmgMainKey) || item.dmgLvl0;

    // Update the upgraded damage value of the item in the state with the new saved damage value.
    setUpgradedDmgMainWeapon(savedDmgMain);
  }

  function EnchantPerClickForArmor(armorIndex: any) {
    const armor = ArmorImageAndNameAndCost[armorIndex];

    const ArmorItemUpgradeName = `${armor.name}`;

    const savedArmorItemUpgrade = localStorage.getItem(ArmorItemUpgradeName);
    const savedArmorItemUpgradeNumber = Number(savedArmorItemUpgrade);

    const ArmorupgradedValue =
      savedArmorItemUpgradeNumber < 15 ? savedArmorItemUpgradeNumber + 1 : 15;

    localStorage.setItem("ArmorupgradedValue", ArmorupgradedValue.toString());
    localStorage.setItem(ArmorItemUpgradeName, ArmorupgradedValue.toString());

    const selectedArmorItem = ArmorData[armorIndex];

    const ArmorItemName = `+${ArmorupgradedValue} ${armor.name}`;

    localStorage.setItem(
      "UpgradedArmorName",
      JSON.stringify({
        [ArmorItemName]: selectedArmorItem.name,
        selectedArmorItemNameForEnchant: ArmorItemName,
      })
    );

    const upgradedArmorNames = [...UpgradedNamesArmor];
    upgradedArmorNames[armorIndex] = ArmorItemName;
    setUpgradedNamesArmor(upgradedArmorNames);

    const itemSavedDefArmorKey = `selectedItemDefForEnchant_${armor.name}`;

    const savedArmorClicks = localStorage.getItem(
      `savedArmorClicks_${armor.name}`
    );
    const numArmorClicks = savedArmorClicks ? Number(savedArmorClicks) : 0;

    if (numArmorClicks < 15) {
      let newSavedDefArmor = Number(
        localStorage.getItem(itemSavedDefArmorKey) || armor.defLvl0
      );
      newSavedDefArmor *= 2;
      localStorage.setItem(itemSavedDefArmorKey, newSavedDefArmor.toString());
      localStorage.setItem(
        `savedArmorClicks_${armor.name}`,
        (numArmorClicks + 1).toString()
      );
    }

    const savedDefArmor =
      localStorage.getItem(itemSavedDefArmorKey) || armor.defLvl0;

    setUpgradedDefArmor(savedDefArmor);
  }

  //helmet
  function EnchantPerClickForHelmet(HelmetIndex: any) {
    const helmet = HelmetImageAndNameAndCost[HelmetIndex];

    const HelmetItemUpgradeName = `${helmet.name}`;

    const savedHelmetItemUpgrade = localStorage.getItem(HelmetItemUpgradeName);
    const savedHelmetItemUpgradeNumber = Number(savedHelmetItemUpgrade);

    const HelmetupgradedValue =
      savedHelmetItemUpgradeNumber < 15 ? savedHelmetItemUpgradeNumber + 1 : 15;

    localStorage.setItem("HelmetupgradedValue", HelmetupgradedValue.toString());
    localStorage.setItem(HelmetItemUpgradeName, HelmetupgradedValue.toString());

    const selectedHelmetItem = HelmetData[HelmetIndex];

    const HelmetItemName = `+${HelmetupgradedValue} ${helmet.name}`;

    localStorage.setItem(
      "UpgradedHelmetName",
      JSON.stringify({
        [HelmetItemName]: selectedHelmetItem.name,
        selectedHelmetItemNameForEnchant: HelmetItemName,
      })
    );

    const upgradedHelmetNames = [...UpgradedNamesHelmet];
    upgradedHelmetNames[HelmetIndex] = HelmetItemName;
    setUpgradedNamesHelmet(upgradedHelmetNames);

    const itemSavedDefHelmetKey = `selectedItemDefForEnchant_${helmet.name}`;

    const savedHelmetClicks = localStorage.getItem(
      `savedHelmetClicks_${helmet.name}`
    );
    const numHelmetClicks = savedHelmetClicks ? Number(savedHelmetClicks) : 0;

    if (numHelmetClicks < 15) {
      let newSavedDefHelmet = Number(
        localStorage.getItem(itemSavedDefHelmetKey) || helmet.defLvl0
      );
      newSavedDefHelmet *= 2;
      localStorage.setItem(itemSavedDefHelmetKey, newSavedDefHelmet.toString());
      localStorage.setItem(
        `savedHelmetClicks_${helmet.name}`,
        (numHelmetClicks + 1).toString()
      );
    }

    const savedDefHelmet =
      localStorage.getItem(itemSavedDefHelmetKey) || helmet.defLvl0;

    setUpgradedDefHelmet(savedDefHelmet);
  }
  //Shoes
  function EnchantPerClickForShoes(ShoesIndex: any) {
    const Shoes = ShoesImageAndNameAndCost[ShoesIndex];

    const ShoesItemUpgradeName = `${Shoes.name}`;

    const savedShoesItemUpgrade = localStorage.getItem(ShoesItemUpgradeName);
    const savedShoesItemUpgradeNumber = Number(savedShoesItemUpgrade);

    const ShoesupgradedValue =
      savedShoesItemUpgradeNumber < 15 ? savedShoesItemUpgradeNumber + 1 : 15;

    localStorage.setItem("ShoesupgradedValue", ShoesupgradedValue.toString());
    localStorage.setItem(ShoesItemUpgradeName, ShoesupgradedValue.toString());

    const selectedShoesItem = ShoesData[ShoesIndex];

    const ShoesItemName = `+${ShoesupgradedValue} ${Shoes.name}`;

    localStorage.setItem(
      "UpgradedShoesName",
      JSON.stringify({
        [ShoesItemName]: selectedShoesItem.name,
        selectedShoesItemNameForEnchant: ShoesItemName,
      })
    );

    const upgradedShoesNames = [...UpgradedNamesShoes];
    upgradedShoesNames[ShoesIndex] = ShoesItemName;
    setUpgradedNamesShoes(upgradedShoesNames);

    const itemSavedDefShoesKey = `selectedItemDefForEnchant_${Shoes.name}`;

    const savedShoesClicks = localStorage.getItem(
      `savedShoesClicks_${Shoes.name}`
    );
    const numShoesClicks = savedShoesClicks ? Number(savedShoesClicks) : 0;

    if (numShoesClicks < 15) {
      let newSavedDefShoes = Number(
        localStorage.getItem(itemSavedDefShoesKey) || Shoes.defLvl0
      );
      newSavedDefShoes *= 2;
      localStorage.setItem(itemSavedDefShoesKey, newSavedDefShoes.toString());
      localStorage.setItem(
        `savedShoesClicks_${Shoes.name}`,
        (numShoesClicks + 1).toString()
      );
    }

    const savedDefShoes =
      localStorage.getItem(itemSavedDefShoesKey) || Shoes.defLvl0;

    setUpgradedDefShoes(savedDefShoes);
  }

  //Gloves
  function EnchantPerClickForGloves(GlovesIndex: any) {
    const Gloves = GlovesImageAndNameAndCost[GlovesIndex];

    const GlovesItemUpgradeName = `${Gloves.name}`;

    const savedGlovesItemUpgrade = localStorage.getItem(GlovesItemUpgradeName);
    const savedGlovesItemUpgradeNumber = Number(savedGlovesItemUpgrade);

    const GlovesupgradedValue =
      savedGlovesItemUpgradeNumber < 15 ? savedGlovesItemUpgradeNumber + 1 : 15;

    localStorage.setItem("GlovesupgradedValue", GlovesupgradedValue.toString());
    localStorage.setItem(GlovesItemUpgradeName, GlovesupgradedValue.toString());

    const selectedGlovesItem = GlovesData[GlovesIndex];

    const GlovesItemName = `+${GlovesupgradedValue} ${Gloves.name}`;

    localStorage.setItem(
      "UpgradedGlovesName",
      JSON.stringify({
        [GlovesItemName]: selectedGlovesItem.name,
        selectedGlovesItemNameForEnchant: GlovesItemName,
      })
    );

    const upgradedGlovesNames = [...UpgradedNamesGloves];
    upgradedGlovesNames[GlovesIndex] = GlovesItemName;
    setUpgradedNamesGloves(upgradedGlovesNames);

    const itemSavedDefGlovesKey = `selectedItemDefForEnchant_${Gloves.name}`;

    const savedGlovesClicks = localStorage.getItem(
      `savedGlovesClicks_${Gloves.name}`
    );
    const numGlovesClicks = savedGlovesClicks ? Number(savedGlovesClicks) : 0;

    if (numGlovesClicks < 15) {
      let newSavedDefGloves = Number(
        localStorage.getItem(itemSavedDefGlovesKey) || Gloves.defLvl0
      );
      newSavedDefGloves *= 2;
      localStorage.setItem(itemSavedDefGlovesKey, newSavedDefGloves.toString());
      localStorage.setItem(
        `savedGlovesClicks_${Gloves.name}`,
        (numGlovesClicks + 1).toString()
      );
    }

    const savedDefGloves =
      localStorage.getItem(itemSavedDefGlovesKey) || Gloves.defLvl0;

    setUpgradedDefGloves(savedDefGloves);
  }

  //ShieldAndDagger
  function EnchantPerClickForShieldAndDagger(ShieldAndDaggerIndex: any) {
    const ShieldAndDagger =
      ShieldAndDaggerImageAndNameAndCost[ShieldAndDaggerIndex];

    const ShieldAndDaggerItemUpgradeName = `${ShieldAndDagger.name}`;

    const savedShieldAndDaggerItemUpgrade = localStorage.getItem(
      ShieldAndDaggerItemUpgradeName
    );
    const savedShieldAndDaggerItemUpgradeNumber = Number(
      savedShieldAndDaggerItemUpgrade
    );

    const ShieldAndDaggerupgradedValue =
      savedShieldAndDaggerItemUpgradeNumber < 15
        ? savedShieldAndDaggerItemUpgradeNumber + 1
        : 15;

    localStorage.setItem(
      "ShieldAndDaggerupgradedValue",
      ShieldAndDaggerupgradedValue.toString()
    );
    localStorage.setItem(
      ShieldAndDaggerItemUpgradeName,
      ShieldAndDaggerupgradedValue.toString()
    );

    const selectedShieldAndDaggerItem =
      ShieldAndDaggerData[ShieldAndDaggerIndex];

    const ShieldAndDaggerItemName = `+${ShieldAndDaggerupgradedValue} ${ShieldAndDagger.name}`;

    localStorage.setItem(
      "UpgradedShieldAndDaggerName",
      JSON.stringify({
        [ShieldAndDaggerItemName]: selectedShieldAndDaggerItem.name,
        selectedShieldAndDaggerItemNameForEnchant: ShieldAndDaggerItemName,
      })
    );

    const upgradedShieldAndDaggerNames = [...UpgradedNamesShieldAndDagger];
    upgradedShieldAndDaggerNames[ShieldAndDaggerIndex] =
      ShieldAndDaggerItemName;
    setUpgradedNamesShieldAndDagger(upgradedShieldAndDaggerNames);
    //def
    const itemSavedDefShieldAndDaggerKey = `selectedItemDefForEnchant_${ShieldAndDagger.name}`;

    const savedShieldAndDaggerClicks = localStorage.getItem(
      `savedShieldAndDaggerClicks_${ShieldAndDagger.name}`
    );
    const numShieldAndDaggerClicks = savedShieldAndDaggerClicks
      ? Number(savedShieldAndDaggerClicks)
      : 0;

    if (numShieldAndDaggerClicks < 15) {
      let newSavedDefShieldAndDagger = Number(
        localStorage.getItem(itemSavedDefShieldAndDaggerKey) ||
          ShieldAndDagger.defLvl0
      );
      newSavedDefShieldAndDagger *= 2;
      localStorage.setItem(
        itemSavedDefShieldAndDaggerKey,
        newSavedDefShieldAndDagger.toString()
      );
      localStorage.setItem(
        `savedShieldAndDaggerClicks_${ShieldAndDagger.name}`,
        (numShieldAndDaggerClicks + 1).toString()
      );
    }

    const savedDefShieldAndDagger =
      localStorage.getItem(itemSavedDefShieldAndDaggerKey) ||
      ShieldAndDagger.defLvl0;

    setUpgradedDefShieldAndDagger(savedDefShieldAndDagger);
    //dmg
    const itemSavedDmgShieldAndDaggerKey = `selectedItemDmgForEnchant_${ShieldAndDagger.name}`;

    const savedShieldAndDaggerClicksDMG = localStorage.getItem(
      `savedShieldAndDaggerClicksDMG_${ShieldAndDagger.name}`
    );
    const numShieldAndDaggerClicksDMG = savedShieldAndDaggerClicksDMG
      ? Number(savedShieldAndDaggerClicksDMG)
      : 0;

    if (numShieldAndDaggerClicksDMG < 15) {
      let newSavedDmgShieldAndDagger = Number(
        localStorage.getItem(itemSavedDmgShieldAndDaggerKey) ||
          ShieldAndDagger.dmgLvl0
      );
      newSavedDmgShieldAndDagger *= 2;
      localStorage.setItem(
        itemSavedDmgShieldAndDaggerKey,
        newSavedDmgShieldAndDagger.toString()
      );
      localStorage.setItem(
        `savedShieldAndDaggerClicksDMG_${ShieldAndDagger.name}`,
        (numShieldAndDaggerClicksDMG + 1).toString()
      );
    }

    const savedDmgShieldAndDagger =
      localStorage.getItem(itemSavedDmgShieldAndDaggerKey) ||
      ShieldAndDagger.dmgLvl0;

    setUpgradedDmgShieldAndDagger(savedDmgShieldAndDagger);
  }
  return (
    <>
      <button
        className="enchantButton"
        onClick={() => {
          if (itsMainWeapon === true) {
            EnchantPerClick(selectedItemIndex);
          } else if (itsArmor === true) {
            EnchantPerClickForArmor(selectedArmorItemIndex);
          } else if (itsHelmet === true) {
            EnchantPerClickForHelmet(selectedHelmetItemIndex);
          } else if (itsShoes === true) {
            EnchantPerClickForShoes(selectedShoesItemIndex);
          } else if (itsGloves === true) {
            EnchantPerClickForGloves(selectedGlovesItemIndex);
          } else if (itsShieldAndDagger === true) {
            EnchantPerClickForShieldAndDagger(selectedShieldAndDaggerItemIndex);
          }
        }}
      >
        Enchant
      </button>
    </>
  );
};

export default ButtonForEnchant;
