function ArmorLoop({
  ArmorData,
  UpgradedNamesArmor,
  handleArmorItemSelect,
  GetIdPerClick,
}: {
  ArmorData: any;
  UpgradedNamesArmor: any;
  handleArmorItemSelect: any;
  GetIdPerClick: any;
}) {
  return (
    <>
      {ArmorData.map((data: any, index: any) => {
        const upgradedName = UpgradedNamesArmor[index];
        return (
          <div key={`${data.id}_${index}`}>
            {Array.from({ length: data.count }, (_, i) => {
              return (
                <div
                  className={`option ${index} `}
                  id={`${index}${i}`}
                  key={`${data.id}_${index}_${i}`}
                  onClick={(e) => {
                    handleArmorItemSelect(index);
                    GetIdPerClick(index);
                  }}
                >
                  <img
                    className="OptionEquipmentImg"
                    src={data.image}
                    alt={`${data.name} armor`}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

export default ArmorLoop;
