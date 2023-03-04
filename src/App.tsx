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

function App() {
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

  //from saved localstorage
  const savedDmg = localStorage.getItem("selectedItemDmg");

  // for adding the total number per click
  const [FullCountPerClick, setFullCountPerClick] = useState(
    UpgradeOne + Number(savedDmg || 0)
  );

  useEffect(() => {
    setFullCountPerClick(UpgradeOne + Number(savedDmg || 0));
  }, [UpgradeOne, savedDmg]);

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
                <Shop
                  setMainWeaponData={setMainWeaponData}
                  mainWeaponDara={mainWeaponDara}
                  count={count}
                  setCount={setCount}
                  setHowMenyTimeBoughtWeapon={setHowMenyTimeBoughtWeapon}
                />
              )}
              {activeTab === "enchant" && (
                <Enchant
                  mainWeaponDara={mainWeaponDara}
                  setUpgradedNamesMainWeapon={setUpgradedNamesMainWeapon}
                  UpgradedNamesMainWeapon={UpgradedNamesMainWeapon}
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
          <div className="test count per click">
            Per Click: {FullCountPerClick.toFixed(0)}
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
          />
        </div>
      </main>
    </>
  );
}

export default App;
