import "../assets/css/Normal/Village/background.css";
import React, { useRef } from "react";

const MainIndexVillage = () => {
  const mainBGScrollHorizontalRef = useRef<any>(null);

  const handleScroll = (scrollOffset: number) => {
    if (mainBGScrollHorizontalRef.current) {
      mainBGScrollHorizontalRef.current.scrollLeft += scrollOffset;
    }
  };

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
        <div className="bg">
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>
    </>
  );
};

export default MainIndexVillage;
