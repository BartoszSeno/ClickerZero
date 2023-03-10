function FastAccesButton({
  OpenMenu,
  setActiveTab,
  OpenMenuOrCloseMenu,
}: {
  OpenMenu: boolean;
  setActiveTab: any;
  OpenMenuOrCloseMenu: any;
}) {
  return (
    <>
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
    </>
  );
}

export default FastAccesButton;
