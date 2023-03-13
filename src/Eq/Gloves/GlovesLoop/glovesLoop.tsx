function GlovesLoop({
  GlovesData,
  UpgradedNamesGloves,
  handleGlovesItemSelect,
  GetIdPerClick,
}: {
  GlovesData: any;
  UpgradedNamesGloves: any;
  handleGlovesItemSelect: any;
  GetIdPerClick: any;
}) {
  return (
    <>
      {GlovesData.map((data: any, index: any) => {
        const upgradedName = UpgradedNamesGloves[index];
        return (
          <div key={`${data.id}_${index}`}>
            {Array.from({ length: data.count }, (_, i) => {
              return (
                <div
                  className={`option ${index} `}
                  id={`${index}${i}`}
                  key={`${data.id}_${index}_${i}`}
                  onClick={(e) => {
                    handleGlovesItemSelect(index);
                    GetIdPerClick(index);
                  }}
                >
                  <img
                    className="OptionEquipmentImg"
                    src={data.image}
                    alt={`${data.name} Gloves`}
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

export default GlovesLoop;
