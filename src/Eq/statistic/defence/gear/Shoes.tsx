/* eslint-disable no-lone-blocks */
import { getSavedDefShoes } from "../../../../enchant";

const DefenceShoes = ({
  ShoesData,
  selectedShoesItem,
}: {
  ShoesData: any;
  selectedShoesItem: any;
}) => {
  return (
    <>
      {ShoesData.map((data: any, index: any) => {
        if (index === selectedShoesItem) {
          const itemSavedDefMainKey = `selectedItemDefForEnchant_${data.name}`;
          const savedDefMain = getSavedDefShoes(itemSavedDefMainKey);
          const selectedShoesItemData = ShoesData.find(
            (data: any) => data.id === Number(selectedShoesItem)
          );

          return (
            <div key={`${data.id}_${index}`}>
              {selectedShoesItemData && (
                <div>
                  <span className="statsShoesDefHiden">
                    {savedDefMain ? savedDefMain : data.defLvl0}
                  </span>
                </div>
              )}
            </div>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

export default DefenceShoes;
