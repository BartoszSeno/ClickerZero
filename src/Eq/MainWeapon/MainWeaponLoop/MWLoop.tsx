function MainWeaponLoop({
  mainWeaponData,
  UpgradedNamesMainWeapon,
  handleItemSelect,
  GetIdPerClick,
}: {
  mainWeaponData: any;
  UpgradedNamesMainWeapon: any;
  handleItemSelect: any;
  GetIdPerClick: any;
}) {
  return (
    <>
      {mainWeaponData.map((data: any, index: any) => {
        const upgradedName = UpgradedNamesMainWeapon[index];
        return (
          <div key={`${data.id}_${index}`}>
            {Array.from({ length: data.count }, (_, i) => {
              return (
                <div
                  className={`option ${index} `}
                  id={`${index}${i}`}
                  key={`${data.id}_${index}_${i}`}
                  onClick={(e) => {
                    handleItemSelect(index);
                    GetIdPerClick(index);
                  }}
                >
                  <img
                    className="OptionWeaponImg"
                    src={data.image}
                    alt={`${data.name} weapon`}
                  />
                  <span className={`itemName ${data.tier}C`}>
                    {upgradedName ? upgradedName : data.name}
                  </span>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

export default MainWeaponLoop;
