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
      <div className="allItemsConteiner">
        {mainWeaponData.map((data: any, index: any) => {
          const upgradedName = UpgradedNamesMainWeapon[index];
          return (
            <div key={`${data.id}_${index}`} id="loopItems">
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
                      className="OptionEquipmentImg"
                      src={data.image}
                      alt={`${data.name} weapon`}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MainWeaponLoop;
