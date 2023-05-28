import { useEffect, useState } from "react";
import { AllyCard } from "../../../data/Card/Ally";

function TableAlly({ selectedItemId }: { selectedItemId: any }) {
  const [selectedItems, setSelectedItems] = useState<(number | null)[]>([
    null,
    null,
    null,
    null,
  ]);

  const handlePlaceClick = (placeIndex: number) => {
    if (selectedItemId !== null) {
      const updatedSelectedItems = [...selectedItems];
      updatedSelectedItems[placeIndex] = selectedItemId - 1;
      setSelectedItems(updatedSelectedItems);
    }
  };

  return (
    <div className="AllyBoard">
      {selectedItems.map((itemId, index) => (
        <div
          className="AllyCardOnBoard"
          key={index}
          onClick={() => handlePlaceClick(index)}
        >
          Miejsce {index + 1}:{" "}
          {itemId !== null ? (
            <div className="CardConteiner" key={itemId}>
              <div
                className="CardChar"
                style={{
                  backgroundImage: `url(${AllyCard[itemId].img})`,
                  backgroundPositionY:
                    AllyCard[itemId].id === 1
                      ? "-30px"
                      : AllyCard[itemId].id === 2
                      ? "65px"
                      : AllyCard[itemId].id === 3
                      ? "47px"
                      : AllyCard[itemId].id === 4
                      ? "80px"
                      : AllyCard[itemId].id === 5
                      ? "55px"
                      : AllyCard[itemId].id === 6
                      ? "30px"
                      : AllyCard[itemId].id === 7
                      ? "65px"
                      : AllyCard[itemId].id === 8
                      ? "70px"
                      : AllyCard[itemId].id === 9
                      ? "67px"
                      : AllyCard[itemId].id === 10
                      ? "0px"
                      : AllyCard[itemId].id === 11
                      ? "15px"
                      : AllyCard[itemId].id === 12
                      ? "40px"
                      : AllyCard[itemId].id === 13
                      ? "65px"
                      : AllyCard[itemId].id === 14
                      ? "90px"
                      : AllyCard[itemId].id === 15
                      ? "70px"
                      : AllyCard[itemId].id === 16
                      ? "25px"
                      : AllyCard[itemId].id === 17
                      ? "50px"
                      : AllyCard[itemId].id === 18
                      ? "65px"
                      : AllyCard[itemId].id === 19
                      ? "50px"
                      : AllyCard[itemId].id === 20
                      ? "65px"
                      : AllyCard[itemId].id === 21
                      ? "32px"
                      : AllyCard[itemId].id === 22
                      ? "50px"
                      : "",
                  backgroundSize:
                    AllyCard[itemId].id === 1
                      ? "300px"
                      : AllyCard[itemId].id === 2
                      ? "120px"
                      : AllyCard[itemId].id === 3
                      ? "200px"
                      : AllyCard[itemId].id === 5
                      ? "160px"
                      : AllyCard[itemId].id === 6
                      ? "150px"
                      : AllyCard[itemId].id === 8
                      ? "200px"
                      : AllyCard[itemId].id === 10
                      ? "200px"
                      : AllyCard[itemId].id === 11
                      ? "250px"
                      : AllyCard[itemId].id === 12
                      ? "200px"
                      : AllyCard[itemId].id === 14
                      ? "100px"
                      : AllyCard[itemId].id === 15
                      ? "150px"
                      : AllyCard[itemId].id === 16
                      ? "200px"
                      : AllyCard[itemId].id === 17
                      ? "160px"
                      : AllyCard[itemId].id === 18
                      ? "160px"
                      : AllyCard[itemId].id === 19
                      ? "150px"
                      : AllyCard[itemId].id === 20
                      ? "180px"
                      : AllyCard[itemId].id === 21
                      ? "230px"
                      : "",
                  backgroundPositionX:
                    AllyCard[itemId].id === 1
                      ? "-25px"
                      : AllyCard[itemId].id === 4
                      ? "-25px"
                      : AllyCard[itemId].id === 15
                      ? "10px"
                      : AllyCard[itemId].id === 16
                      ? "30px"
                      : AllyCard[itemId].id === 20
                      ? "5px"
                      : AllyCard[itemId].id === 21
                      ? "-10px"
                      : "",
                }}
              ></div>
              <div className="CardName">{AllyCard[itemId].Name}</div>
              <div className="CardStats">
                <div className="AtackPoints">{AllyCard[itemId].Atack}</div>
                <div className="HpPoints">{AllyCard[itemId].Hp}</div>
              </div>
            </div>
          ) : (
            "Puste"
          )}
        </div>
      ))}
    </div>
  );
}

export default TableAlly;
