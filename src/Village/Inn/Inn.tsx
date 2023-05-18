import { useState } from "react";
import "../../assets/css/Normal/Village/leftVillage.css";

function InnC({ OpenInn, setOpenInn }: { OpenInn: boolean; setOpenInn: any }) {
  const [InIsOpen, setInIsOpen] = useState<boolean>(true);

  function CloseInn() {
    setOpenInn(false);
  }

  return (
    <>
      <div
        id="MainInn"
        style={{ display: OpenInn ? "flex" : "none" }}
        onClick={(e) => {
          e.stopPropagation();
          CloseInn();
        }}
      >
        <div
          className="InnG"
          style={{ display: InIsOpen ? "flex" : "none" }}
          onClick={(e) => {
            e.stopPropagation();
            setInIsOpen(true);
          }}
        >
          <></>
        </div>
      </div>
    </>
  );
}

export default InnC;
