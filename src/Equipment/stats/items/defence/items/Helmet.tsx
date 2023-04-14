/* eslint-disable no-lone-blocks */

import { getSavedDefHelmet } from "../../../../../enchant";

const DefenceHelmet = ({
  HelmetData,
  selectedHelmetItem,
}: {
  HelmetData: any;
  selectedHelmetItem: any;
}) => {
  return (
    <>
      {HelmetData.map((data: any, index: any) => {
        if (index + 1000 === selectedHelmetItem) {
          const itemSavedDefMainKey = `selectedItemDefForEnchant_${data.name}`;
          const savedDefMain = getSavedDefHelmet(itemSavedDefMainKey);
          const selectedHelmetItemData = HelmetData.find(
            (data: any) => data.id === Number(selectedHelmetItem)
          );

          return (
            <div key={`${data.id}_${index}`}>
              {selectedHelmetItemData && (
                <div>
                  <span className="statsHelmetDefHiden">
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

export default DefenceHelmet;
