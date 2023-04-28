import "../assets/css/Normal/Village/background.css";
import "../assets/css/Normal/Village/midVillage.css";
import "../assets/css/Normal/Village/rightVillage.css";
import "../assets/css/Normal/shop/shop.css";
import MainEq from "../Equipment";
import CharacterSelection from "../Character";

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
import Clicker from "../hook/ClickerCount";
import UpdateLvlOne from "../Upgrade/UpgradeLvlOne";
import Lvl from "../hook/Lvl";
import UpgradeVillageAndClick from "../Upgrade/UpVillageAndClick";
import CharacterMain from "../Character/CharacterMain";
import HpBarMain from "../hook/hpBar";

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
  // full Def Stats
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

  //==============
  // HERE NEW WARIABLES ARE ADDED WHICH ARE USED TO INCREASE POINTS PER CLICK
  // full click from ( Upgrade lvl 1 & Main Weapon)
  const [FullCountPerClick, setFullCountPerClick] = useState<number>(
    UpgradeOne + (Number(FullDmgValue) || 0) + (Number(FullDefValue) || 0)
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

  //======================================================================
  //========================= FOR ENCHANT ================================
  //======================================================================

  const [OpenAndCloseEqinEnchant, setOpenAndCloseEqinEnchant] =
    useState<boolean>(false);
  function OpenCloseEqinEnchant() {
    setOpenAndCloseEqinEnchant(!OpenAndCloseEqinEnchant);
  }

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

  // its weapon or armor ?
  const [itsMainWeapon, setitsMainWeapon] = useState<boolean>(false);

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
  //=========================================================================
  //=================================================================================
  const [savePontsForUpgrade, setsavePontsForUpgrade] = useState<number>(
    Number(localStorage.getItem("savePontsForUpgrade")) || 0
  );

  const [UpgradeCharacters, setUpgradeCharacters] = useState<boolean>(false);

  const [UpgradeVillageAndClicks, setUpgradeVillageAndClicks] =
    useState<boolean>(false);

  const [DmgBoost, setDmgBoost] = useState<number>(
    Number(localStorage.getItem("DmgBoost")) || 1
  );
  const [DefBoosts, setDefBoosts] = useState<number>(
    Number(localStorage.getItem("DefBoosts")) || 1
  );

  return (
    <>
      <div
        id="mainBGScrollHorizontal"
        ref={mainBGScrollHorizontalRef}
        onWheel={(e) => {
          e.preventDefault();
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

            <Lvl
              clickCount={clickCount}
              maxClicks={maxClicks}
              fillCount={fillCount}
            />
            <HpBarMain FullDefValue={FullDefValue} />
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
            <MainEq
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
