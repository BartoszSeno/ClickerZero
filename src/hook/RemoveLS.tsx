import React from "react";

const ClearLocalStorageButton = () => {
  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <button
      style={{ position: "absolute", margin: "0px 0x -500px 0px" }}
      onClick={handleClick}
    >
      Clear Local Storage
    </button>
  );
};

export default ClearLocalStorageButton;
