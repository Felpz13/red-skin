import React, { useState } from "react";
import { Container, DivRight, DivControls, Title } from "./styles";
import { Input } from "../../styles/common";
import CreatePlayer from "../CreatePlayer";
import PlayersList from "../PlayersList";
import { generateId, calculateProfitPerPlayer } from "../../utils/playerHandle";
import AddNewItem from "../AddNewItem";

export default function Hunt() {
  const [totalProfit, setTotalProfit] = useState("");
  const [players, setPlayers] = useState([]);

  function updateValues(profitValue) {
    setTotalProfit(profitValue);
    setPlayers(calculateProfitPerPlayer(players, profitValue));
  }

  function newPlayer(playerName, playerClass) {
    setPlayers([
      ...players,
      {
        id: generateId(),
        name: playerName,
        class: playerClass,
        itens: [],
        waste: 0,
        profit: 0
      }
    ]);
  }

  function setPlayerWaste(itens) {
    let total = 0;
    itens.forEach(item => {
      total += item.total;
    });
    return total;
  }

  function addItemToPlayer(item, playerId) {
    let playersNexState = [...players];

    playersNexState.forEach(p => {
      if (p.id == playerId) {
        p.itens = [...p.itens, item];
        p.waste = setPlayerWaste(p.itens);
      }
    });
    setPlayers(calculateProfitPerPlayer(playersNexState, totalProfit));
  }

  function removeItemFromPlayer(item, player) {
    const newItens = player.itens.filter(i => {
      return i.id !== item.id;
    });

    let playersNexState = [...players];
    playersNexState.forEach(p => {
      if (p.id == player.id) {
        p.itens = newItens;
        p.waste = setPlayerWaste(p.itens);
      }
    });

    setPlayers(calculateProfitPerPlayer(playersNexState, totalProfit));
  }

  function removePlayer(player) {
    const newPlayers = players.filter(p => {
      return p.id !== player.id;
    });
    setPlayers(calculateProfitPerPlayer(newPlayers, totalProfit));
  }

  return (
    <Container>
      <Title>HUNT PROFIT</Title>
      <DivRight>
        <span>TOTAL VENDIDO: </span>
        <Input
          type="text"
          placeholder="Insira o Bruto da Hunt!"
          value={totalProfit}
          onChange={event => updateValues(event.target.value)}
        />
      </DivRight>
      <DivControls>
        <CreatePlayer newPlayer={newPlayer} removePlayer={removePlayer} />
        {players.length > 0 && (
          <AddNewItem players={players} addItemToPlayer={addItemToPlayer} />
        )}
      </DivControls>

      <PlayersList
        players={players}
        removePlayer={removePlayer}
        removeItemFromPlayer={removeItemFromPlayer}
      />
    </Container>
  );
}
