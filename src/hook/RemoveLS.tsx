import React from "react";

const ClearLocalStorageButton = () => {
  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <button
      style={{ position: "absolute", marginLeft: "-135px", marginTop: "550px" }}
      onClick={handleClick}
    >
      Clear Local Storage
    </button>
  );
};

export default ClearLocalStorageButton;
