const PutItemHere = ({
  savedImage,
  savedName,
  itsMainWeapon,
  savedArmorImage,
  savedArmorName,
  itsArmor,
  savedHelmetImage,
  savedHelmetName,
  itsHelmet,
  savedShoesImage,
  itsShoes,
  savedGlovesImage,
  itsGloves,
  savedShieldAndDaggerImage,
  itsShieldAndDagger,
  OpenCloseEqinEnchant,
}: {
  savedImage: any;
  savedName: any;
  itsMainWeapon: any;
  savedArmorImage: any;
  savedArmorName: any;
  itsArmor: any;
  savedHelmetImage: any;
  savedHelmetName: any;
  itsHelmet: any;
  savedShoesImage: any;
  itsShoes: any;
  savedGlovesImage: any;
  itsGloves: any;
  savedShieldAndDaggerImage: any;
  itsShieldAndDagger: any;
  OpenCloseEqinEnchant: any;
}) => {
  return (
    <>
      <div
        className="putItemThere"
        onClick={() => {
          OpenCloseEqinEnchant();
        }}
      >
        <img
          className="mainWeaponImg"
          src={
            itsMainWeapon
              ? savedImage
              : itsArmor
              ? savedArmorImage
              : itsHelmet
              ? savedHelmetImage
              : itsShoes
              ? savedShoesImage
              : itsGloves
              ? savedGlovesImage
              : itsShieldAndDagger
              ? savedShieldAndDaggerImage
              : "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/images/default.png"
          }
          alt={`${
            itsMainWeapon
              ? savedName
              : itsArmor
              ? savedArmorName
              : itsHelmet
              ? savedHelmetName
              : itsShoes
              ? savedShoesImage
              : itsGloves
              ? savedGlovesImage
              : itsShieldAndDagger
              ? savedShieldAndDaggerImage
              : "No name weapon"
          }`}
        />
      </div>
    </>
  );
};

export default PutItemHere;
