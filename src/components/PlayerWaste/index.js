import React, { useState, useEffect } from "react";
import {
  PlayerWasteFrame,
  SelectItemType,
  ItemListFrame,
  Container,
  Item
} from "./styles";
import { Option, Button, Input, FlexCenter } from "../../styles/common";
import { generateId } from "../../utils/playerHandle";
import { getItensList } from "../../utils/itensList";

export default function PlayerWaste({ playerId, setPlayerTotalWaste }) {
  const [itens, setItens] = useState(getItensList);
  const [totalWaste, setTotalWaste] = useState(0);
  const [selectedItens, setSelectedItens] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(0);

  function addValueToTotal(id, quantity) {
    const itemValue = itens.filter(item => {
      return item.id == id;
    });

    const finalItem = itemValue[0];
    let partialValue = finalItem.value * quantity;
    addinSelectedItemList(finalItem, partialValue);

    updatePlayerTotalWaste(totalWaste + partialValue);
  }

  function addinSelectedItemList(item, value) {
    setSelectedItens([
      ...selectedItens,
      {
        id: generateId(),
        name: item.name,
        quantity: item.quantity,
        total: value
      }
    ]);
  }

  function removeFromSelectedItemList(item) {
    const newSelectedItens = selectedItens.filter(i => {
      return i.id !== item.id;
    });
    setSelectedItens(newSelectedItens);

    updatePlayerTotalWaste(totalWaste - item.total);
  }

  function updatePlayerTotalWaste(newTotal) {
    setTotalWaste(newTotal);
    setPlayerTotalWaste(playerId, newTotal);
  }

  return (
    <PlayerWasteFrame>
      <Container>
        <div>
          <SelectItemType
            value={selectedItemId}
            onChange={event => setSelectedItemId(event.target.value)}
          >
            {itens.map(item => (
              <Option key={item.id} value={item.id}>
                {item.name}
              </Option>
            ))}
          </SelectItemType>
        </div>
        <div>
          <Input
            value={selectedQuantity}
            onChange={event => setSelectedQuantity(event.target.value)}
          ></Input>
        </div>
        <FlexCenter>
          <Button
            onClick={() => addValueToTotal(selectedItemId, selectedQuantity)}
          >
            ADD
          </Button>
        </FlexCenter>
      </Container>

      <ItemListFrame>
        {selectedItens.map(item => (
          <Item key={item.id}>
            <FlexCenter>
              <span onClick={() => removeFromSelectedItemList(item)}>X</span>
            </FlexCenter>
            <div>{item.name}</div>
            <div>{item.total}</div>
          </Item>
        ))}
      </ItemListFrame>
    </PlayerWasteFrame>
  );
}
