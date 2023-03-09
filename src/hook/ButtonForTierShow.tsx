const ButtonWithTierItemSorting = ({
  setSelectedOption,
  setActiveTier,
  setShelfHeight,
  ActiveTier,
}: {
  setSelectedOption: any;
  setActiveTier: any;
  setShelfHeight: any;
  ActiveTier: string;
}) => {
  return (
    <>
      <div className="ShowTier">
        <div className="conteineeTier">
          <button
            onClick={() => {
              setSelectedOption("");
              setActiveTier("");
              setShelfHeight("4600");
            }}
            className={`all ${ActiveTier === "" ? "activeTier" : ""}`}
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
            className={`RedButton ${ActiveTier === "red" ? "activeTier" : ""}`}
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
    </>
  );
};

export default ButtonWithTierItemSorting;
