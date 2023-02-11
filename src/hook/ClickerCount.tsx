import React, { useState, useEffect } from "react";
import "../assets/css/Normal/ClickerMain/clicker.css";

const Clicker = () => {
  const [count, setCount] = useState(() =>
    Number(localStorage.getItem("count") || 0)
  );

  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  return (
    <div>
      <p>{count} Spirit's</p>
      <button onClick={() => setCount(count + 1)} id="Click"></button>
    </div>
  );
};

export default Clicker;
