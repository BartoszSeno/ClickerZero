import "./App.css";
import Clicker from "./hook/ClickerCount";
import ClearLocalStorageButton from "./hook/RemoveLS";
import { useEffect, useState } from "react";
import Eq from "./Eq";
import UpdateLvlOne from "./Upgrade/UpgradeLvlOne";
import LeftNav from "./assets/LeftNav";
import Shop from "./Shop";
import { MainWeaponImageAndNameAndCost } from "./data/equipment/mainWeapon";
import Enchant from "./enchant";
import { formatNumber } from "./hook/ClickerCount";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [MainWeaponFullDmgText, setMainWeaponFullDmgText] = useState<any>();

  useEffect(() => {
    const mainWeaponFullDmgFromText = document.querySelector(
      ".statsDmgMainWeaponHiden"
    ) as HTMLElement;
    const text = mainWeaponFullDmgFromText?.textContent;
    setMainWeaponFullDmgText(text);
  });

  //main count
  const [count, setCount] = useState(() =>
    Number(localStorage.getItem("count") || 0)
  );

  // writing out what lvl has the first upgrade
  const [lvlOne, setLvlOne] = useState(() =>
    Number(localStorage.getItem("upgradeOneLvl") || 0)
  );
  //the amount you get after leveling up the first upgrades
  const [UpgradeOne, setUpgradeOne] = useState(() =>
    Number(localStorage.getItem("UpgradeOneCount") || 0)
  );

  // for adding the total number per click
  const [FullCountPerClick, setFullCountPerClick] = useState(
    UpgradeOne + (Number(MainWeaponFullDmgText) || 0)
  );

  useEffect(() => {
    setFullCountPerClick(UpgradeOne + (Number(MainWeaponFullDmgText) || 0));
  }, [UpgradeOne, MainWeaponFullDmgText]);

  //Shop
  const [mainWeaponDara, setMainWeaponData] = useState(
    JSON.parse(
      localStorage.getItem("MainWeaponImageAndNameAndCost") ||
        JSON.stringify(MainWeaponImageAndNameAndCost)
    )
  );

  //count weapon time

  const [HowMenyTimeBoughtWeapon, setHowMenyTimeBoughtWeapon] = useState(0);

  //dmg from main weapon
  const [savedDMG, setsavedDMG] = useState<any>();

  //open nav tab in one window
  const [activeTab, setActiveTab] = useState("shop");

  // GET NAME WITH ENCHANT FROM ENCHANT FUNCTION
  const [UpgradedNamesMainWeapon, setUpgradedNamesMainWeapon] = useState(
    Array(mainWeaponDara.length).fill("")
  );

  const [UpgradedDmgMainWeapon, setUpgradedDmgMainWeapon] = useState("");

  const leftContainer = document.querySelector(
    ".left-container"
  ) as HTMLElement;

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    leftContainer.style.backgroundPosition = `center ${scrollPosition}px`;
  });

  // For open Left Menu
  const [OpenMenu, setOpenMenu] = useState<boolean>(true);

  function OpenMenuOrCloseMenu() {
    setTimeout(() => {
      const newValue = !OpenMenu;
      setOpenMenu(newValue);
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

  useEffect(() => {
    setTimeout(() => {
      setImgClick(
        OpenMenu
          ? "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/Arrow/leftArrowButtonUnclicked.png"
          : "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/Arrow/rgihtArrowButtonUnclicked.png"
      );
    }, 300);
  }, [OpenMenu]);

  // image change script

  const [ImgClick, setImgClick] = useState(
    OpenMenu
      ? "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/Arrow/leftArrowButtonUnclicked.png"
      : "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/Arrow/rgihtArrowButtonUnclicked.png"
  );

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

  //SHOW TIER ON CLICK
  const [SelectedOption, setSelectedOption] = useState("");

  const [ActiveTier, setActiveTier] = useState("");

  const [ShelfHeight, setShelfHeight] = useState("4600");

  //refresh name of upgrade?

  function UpgradedNamesOnMount() {
    const upgradedNames = mainWeaponDara.map((data: any) => {
      const itemUpgradeName = `${data.name}`;
      const savedItemUpgrade = localStorage.getItem(itemUpgradeName);
      const upgradedName = savedItemUpgrade
        ? `+${Number(savedItemUpgrade)} ${data.name}`
        : data.name;
      return upgradedName;
    });
    setUpgradedNamesMainWeapon(upgradedNames);
  }

  useEffect(() => {
    UpgradedNamesOnMount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // funkcja do autmoatycznego odświeżania statystyk broni

  const handleItemSelect = (index: any) => {
    setSelectedItem(index);
  };
  const savedId = localStorage.getItem("selectedItemIdEquip");

  useEffect(() => {
    handleItemSelect(Number(savedId));
  });

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
          <div
            className={`FastAccesToMenu ${
              OpenMenu ? "closesidemenu" : "opensidemenu"
            }`}
            style={OpenMenu ? { display: "none" } : { display: "flex" }}
          >
            <button
              className="FAShop"
              onClick={() => {
                setActiveTab("shop");
                OpenMenuOrCloseMenu();
              }}
            ></button>
            <button
              className="FAUpgrade"
              onClick={() => {
                setActiveTab("enchant");
                OpenMenuOrCloseMenu();
              }}
            ></button>
          </div>
          <LeftNav setActiveTab={setActiveTab} activeTab={activeTab} />
          <div>
            <div>
              {activeTab === "shop" && (
                <>
                  <div className="ShowTier">
                    <div className="conteineeTier">
                      <button
                        onClick={() => {
                          setSelectedOption("");
                          setActiveTier("");
                          setShelfHeight("4600");
                        }}
                        className={`all ${
                          ActiveTier === "" ? "activeTier" : ""
                        }`}
                      ></button>
                      <button
                        onClick={() => {
                          setSelectedOption("green");
                          setActiveTier("green");
                          setShelfHeight("1200");
                        }}
                        className={`GreenButton ${
                          ActiveTier === "green" ? "activeTier" : ""
                        }`}
                      ></button>
                      <button
                        onClick={() => {
                          setSelectedOption("blue");
                          setActiveTier("blue");
                          setShelfHeight("1000");
                        }}
                        className={`BlueButton ${
                          ActiveTier === "blue" ? "activeTier" : ""
                        }`}
                      ></button>
                      <button
                        onClick={() => {
                          setSelectedOption("yellow");
                          setActiveTier("yellow");
                          setShelfHeight("800");
                        }}
                        className={`YellowButton ${
                          ActiveTier === "yellow" ? "activeTier" : ""
                        }`}
                      ></button>
                      <button
                        onClick={() => {
                          setSelectedOption("red");
                          setActiveTier("red");
                          setShelfHeight("800");
                        }}
                        className={`RedButton ${
                          ActiveTier === "red" ? "activeTier" : ""
                        }`}
                      ></button>
                      <button
                        onClick={() => {
                          setSelectedOption("purple");
                          setActiveTier("purple");
                          setShelfHeight("1000");
                        }}
                        className={`PurpleButton ${
                          ActiveTier === "purple" ? "activeTier" : ""
                        }`}
                      ></button>
                    </div>
                  </div>
                  <Shop
                    setMainWeaponData={setMainWeaponData}
                    mainWeaponDara={mainWeaponDara}
                    count={count}
                    setCount={setCount}
                    setHowMenyTimeBoughtWeapon={setHowMenyTimeBoughtWeapon}
                    SelectedOption={SelectedOption}
                    ShelfHeight={ShelfHeight}
                  />
                </>
              )}
              {activeTab === "enchant" && (
                <Enchant
                  UpgradedDmgMainWeapon={UpgradedDmgMainWeapon}
                  setUpgradedDmgMainWeapon={setUpgradedDmgMainWeapon}
                  mainWeaponDara={mainWeaponDara}
                  setUpgradedNamesMainWeapon={setUpgradedNamesMainWeapon}
                  UpgradedNamesMainWeapon={UpgradedNamesMainWeapon}
                  UpgradedNamesOnMount={UpgradedNamesOnMount}
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
          <div className="MainWeaponFullDmgText count per click">
            Per Click: {formatNumber(FullCountPerClick.toFixed(0))}
          </div>
        </div>
        <div className="right-container">
          <Eq
            setMainWeaponData={setMainWeaponData}
            mainWeaponDara={mainWeaponDara}
            HowMenyTimeBoughtWeapon={HowMenyTimeBoughtWeapon}
            setsavedDMG={setsavedDMG}
            savedDMG={savedDMG}
            UpgradedNamesMainWeapon={UpgradedNamesMainWeapon}
            UpgradedDmgMainWeapon={UpgradedDmgMainWeapon}
            UpgradedNamesOnMount={UpgradedNamesOnMount}
            handleItemSelect={handleItemSelect}
            selectedItem={selectedItem}
          />
        </div>
      </main>
    </>
  );
}

export default App;
