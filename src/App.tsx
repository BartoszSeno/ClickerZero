import "./App.css";
import Clicker from "./hook/ClickerCount";
import ClearLocalStorageButton from "./hook/RemoveLS";
import { useEffect, useState } from "react";
import Eq from "./Eq";
import UpdateLvlOne from "./Upgrade/UpgradeLvlOne";
import LeftNav from "./assets/LeftNav";
import Shop from "./Shop";
import { MainWeaponImageAndNameAndCost } from "./data/equipment/mainWeapon";
import { ArmorImageAndNameAndCost } from "./data/equipment/armor";
import Enchant from "./enchant";
import Information from "./Information";
import ButtonWithTierItemSorting from "./hook/ButtonForTierShow";
import FastAccesButton from "./hook/FastAcces";
import PerClickPoints from "./hook/PerClick";

function App() {
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
  });

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
  });

  //==============
  // HERE NEW WARIABLES ARE ADDED WHICH ARE USED TO INCREASE POINTS PER CLICK
  // full click from ( Upgrade lvl 1 & Main Weapon)
  const [FullCountPerClick, setFullCountPerClick] = useState<number>(
    UpgradeOne +
      (Number(MainWeaponFullDmgText) || 0) +
      (Number(FullArmorDefText) || 0)
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

  //==================
  // SELECT THE ACTIVE TAB
  const [activeTab, setActiveTab] = useState("shop");

  //=================
  // CLOSING AND OPEN THE LEFT CONTAINER
  const [OpenMenu, setOpenMenu] = useState<boolean>(true);

  function OpenMenuOrCloseMenu() {
    setTimeout(() => {
      const newValue = !OpenMenu;
      setOpenMenu(newValue);
      // save in localStorage that left menu is open or close
      localStorage.setItem("OpenMenu", JSON.stringify(newValue));
    }, 150);
  }

  // Retrieve the value of OpenMenu from local storage when the component mounts
  useEffect(() => {
    const valueFromLocalStorage = localStorage.getItem("OpenMenu");
    if (valueFromLocalStorage !== null) {
      setOpenMenu(JSON.parse(valueFromLocalStorage));
    }
  }, [OpenMenu]);

  //====================
  //BUTTON IMAGE CHANGE ON POSITION
  const [ImgClick, setImgClick] = useState(
    OpenMenu
      ? "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/Arrow/leftArrowButtonUnclicked.png"
      : "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/Arrow/rgihtArrowButtonUnclicked.png"
  );

  // change image for animation on click then back to origin
  const changeImage = () => {
    const originalSrc = ImgClick;
    const newSrc = OpenMenu
      ? "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/Arrow/leftArrowButtonClicked.png"
      : "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/Arrow/rgihtArrowButtonClicked.png";

    // Change the image source to the new image
    setImgClick(newSrc);

    // After 1 second, change the image source back to the original
    setTimeout(() => {
      setImgClick(originalSrc);
    }, 100);
  };

  // image change automatic
  useEffect(() => {
    setTimeout(() => {
      setImgClick(
        OpenMenu
          ? "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/Arrow/leftArrowButtonUnclicked.png"
          : "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/Arrow/rgihtArrowButtonUnclicked.png"
      );
    }, 300);
  }, [OpenMenu]);

  //================
  // INFORMATION MENU OPEN AND CLOSE
  const [infoOpenClose, setinfoOpenClose] = useState<boolean>(false);

  function HandleInfoOpenAndClose() {
    setinfoOpenClose(!infoOpenClose);
  }

  //==============
  // USESTATE THAT CHANGE HEIGHT OR SORT BY TIER
  // selects which tier has been selected
  const [SelectedOption, setSelectedOption] = useState<string>("");
  const [ActiveTier, setActiveTier] = useState<string>("");
  // changes the shelf height
  const [ShelfHeight, setShelfHeight] = useState<string>("4600");

  return (
    <>
      <main id="App-container">
        <div
          className="left-container"
          style={OpenMenu ? { marginLeft: "0px" } : { marginLeft: "-635px" }}
        >
          <button
            className="CloseAndOpenMenu"
            onClick={(e) => {
              OpenMenuOrCloseMenu();
              changeImage();
            }}
            style={{ backgroundImage: `url(${ImgClick})` }}
          ></button>
          <FastAccesButton
            OpenMenu={OpenMenu}
            setActiveTab={setActiveTab}
            OpenMenuOrCloseMenu={OpenMenuOrCloseMenu}
          />
          <LeftNav setActiveTab={setActiveTab} activeTab={activeTab} />
          <div>
            <div>
              {activeTab === "shop" && (
                <>
                  <ButtonWithTierItemSorting
                    setSelectedOption={setSelectedOption}
                    setActiveTier={setActiveTier}
                    setShelfHeight={setShelfHeight}
                    ActiveTier={ActiveTier}
                  />
                  <Shop
                    setMainWeaponData={setMainWeaponData}
                    mainWeaponData={mainWeaponData}
                    count={count}
                    setCount={setCount}
                    SelectedOption={SelectedOption}
                    ShelfHeight={ShelfHeight}
                    ArmorData={ArmorData}
                    setArmorData={setArmorData}
                  />
                </>
              )}
              {activeTab === "enchant" && (
                <Enchant
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
                />
              )}
            </div>
          </div>
        </div>
        <div className="App">
          <Clicker
            setCount={setCount}
            count={count}
            FullCountPerClick={FullCountPerClick}
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
          <PerClickPoints
            FullCountPerClick={FullCountPerClick}
            setFullCountPerClick={setFullCountPerClick}
            UpgradeOne={UpgradeOne}
            MainWeaponFullDmgText={MainWeaponFullDmgText}
            FullArmorDefText={FullArmorDefText}
          />
        </div>
        <div className="right-container">
          <Eq
            mainWeaponData={mainWeaponData}
            UpgradedNamesMainWeapon={UpgradedNamesMainWeapon}
            handleItemSelect={handleItemSelect}
            selectedItem={selectedItem}
            ArmorData={ArmorData}
            UpgradedNamesArmor={UpgradedNamesArmor}
            handleArmorItemSelect={handleArmorItemSelect}
            selectedArmorItem={selectedArmorItem}
          />
        </div>
        <button className="InfoOpen" onClick={HandleInfoOpenAndClose}>
          Info
        </button>
        <Information infoOpenClose={infoOpenClose} />
      </main>
    </>
  );
}

export default App;
