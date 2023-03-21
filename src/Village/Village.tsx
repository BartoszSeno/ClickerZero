import "../assets/css/Normal/Village/background.css";
import "../assets/css/Normal/Village/leftVillage.css";
import React, { useEffect, useRef, useState } from "react";
import MainApp from "../mainApp";
import WeaponShop from "./WeaponShop/WShop";
import BlackSmith from "./BlackSmitch/BlackSmitch";
import ArmorShop from "./ArmorShop/AShop";
import Motel from "./Motel/Motel";

const MainIndexVillage = () => {
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

  function OpenWeaponShop() {
    setWSO(!WSO);
  }

  return (
    <>
      <div
        id="mainBGScrollHorizontal"
        ref={mainBGScrollHorizontalRef}
        onScroll={(e) => console.log(e.currentTarget.scrollLeft)}
        onWheel={(e) => {
          e.preventDefault();
          handleScroll(e.deltaY);
        }}
      >
        <div className="GameMainWindow">
          <div className="MidleMenu">
            <MainApp />
          </div>
          <div className="rightVillage"></div>
          <div className="midVillage"></div>
          <div className="leftVillage">
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
              <ArmorShop
                ASO={ASO}
                setWSO={setWSO}
                setBSO={setBSO}
                setASO={setASO}
                setMO={setMO}
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
