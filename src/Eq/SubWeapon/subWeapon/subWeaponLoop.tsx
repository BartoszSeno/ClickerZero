function ShieldAndDaggerLoop({
  ShieldAndDaggerData,
  UpgradedNamesShieldAndDagger,
  handleShieldAndDaggerItemSelect,
  GetIdPerClick,
}: {
  ShieldAndDaggerData: any;
  UpgradedNamesShieldAndDagger: any;
  handleShieldAndDaggerItemSelect: any;
  GetIdPerClick: any;
}) {
  return (
    <>
      {ShieldAndDaggerData.map((data: any, index: any) => {
        const upgradedName = UpgradedNamesShieldAndDagger[index];
        return (
          <div key={`${data.id}_${index}`}>
            {Array.from({ length: data.count }, (_, i) => {
              return (
                <div
                  className={`option ${index} `}
                  id={`${index}${i}`}
                  key={`${data.id}_${index}_${i}`}
                  onClick={(e) => {
                    handleShieldAndDaggerItemSelect(index);
                    GetIdPerClick(index);
                  }}
                >
                  <img
                    className="OptionEquipmentImg"
                    src={data.image}
                    alt={`${data.name} ShieldAndDagger`}
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

export default ShieldAndDaggerLoop;
