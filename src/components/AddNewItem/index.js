import React, { useState } from "react";
import {
  DefaultDiv,
  Select,
  Option,
  Button,
  Input,
  FlexCenter
} from "../../styles/common";
import { SelectItemType, Container } from "./styles";
import { generateId } from "../../utils/playerHandle";
import { getItensList } from "../../utils/itensList";

export default function AddNewItem({
  setPlayerTotalWaste,
  addItemToPlayer,
  players
}) {
  const [itens] = useState(getItensList);
  const [selectedItemId, setSelectedItemId] = useState(itens[0].id);
  const [selectedPlayerId, setSelectedPlayerId] = useState(players[0].id);
  const [selectedQuantity, setSelectedQuantity] = useState("");

  function newPlayerItem(itemId) {
    setSelectedQuantity("");
    return {
      id: generateId(),
      name: itens[itemId].name,
      quantity: parseInt(selectedQuantity),
      total: selectedQuantity * itens[itemId].value
    };
  }

  return (
    <Container>
      <p>Nova Waste</p>
      <DefaultDiv>
        <div>
          <Select onChange={event => setSelectedPlayerId(event.target.value)}>
            {players.map(player => (
              <Option key={player.id} value={player.id}>
                {player.name}
              </Option>
            ))}
          </Select>
        </div>
        <div>
          <SelectItemType
            onChange={event => setSelectedItemId(event.target.value)}
          >
            {itens.map(item => (
              <Option key={item.id} value={item.id} img={item.ico}>
                {item.name}
              </Option>
            ))}
          </SelectItemType>
        </div>
        <div>
          <Input
            small
            value={selectedQuantity}
            onChange={event => setSelectedQuantity(event.target.value)}
            placeholder="Qntd"
          ></Input>
        </div>
        <FlexCenter>
          <Button
            onClick={() =>
              addItemToPlayer(
                newPlayerItem(selectedItemId, selectedQuantity),
                selectedPlayerId
              )
            }
          >
            ADD
          </Button>
        </FlexCenter>
      </DefaultDiv>
    </Container>
  );
}
