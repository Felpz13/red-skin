import React, { useState } from "react";
import {
  DefaultDiv,
  Select,
  Option,
  Button,
  Input,
  FlexCenter,
} from "../../styles/common";
import { Container } from "./styles";
import { generateId } from "../../utils/playerHandle";
import { getItensList } from "../../utils/itensList";
import CurrencyFormat from "react-currency-format";

export default function AddNewItem({
  setPlayerTotalWaste,
  addItemToPlayer,
  players,
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
      total: selectedQuantity * itens[itemId].value,
    };
  }

  return (
    <Container>
      <p>Nova Waste</p>
      <DefaultDiv>
        <div>
          <Select
            onChange={(event) => setSelectedPlayerId(event.target.value)}
            fullDiv
          >
            {players.map((player) => (
              <Option key={player.id} value={player.id}>
                {player.name}
              </Option>
            ))}
          </Select>
        </div>
        <div>
          <Select
            onChange={(event) => setSelectedItemId(event.target.value)}
            fullDiv
          >
            {itens.map((item) => (
              <Option key={item.id} value={item.id} img={item.ico}>
                {item.name}
              </Option>
            ))}
          </Select>
        </div>
        <div>
          <Input
            placeholder="Qntd"
            value={selectedQuantity}
            onChange={(event) => setSelectedQuantity(event.target.value)}
          />
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
