import "../assets/css/Normal/Village/background.css";
import React, { useEffect, useRef } from "react";

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
        <div className="bg"></div>
      </div>
    </>
  );
};

export default MainIndexVillage;
