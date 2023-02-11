import React from "react";

const ClearLocalStorageButton = () => {
  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };

  return <button onClick={handleClick}>Clear Local Storage</button>;
};

export default ClearLocalStorageButton;
