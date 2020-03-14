import React, { useState, useEffect } from "react";
import { Container, DivRight } from "./styles";
import { Input } from "../../styles/common";
import CreatePlayer from "../CreatePlayer";
import PlayersList from "../PlayersList";
import { generateId, calculateProfitPerPlayer } from "../../utils/playerHandle";

export default function Hunt() {
  const [totalProfit, setTotalProfit] = useState(0);
  const [players, setPlayers] = useState([]);

  function updateValues(profitValue) {
    setTotalProfit(profitValue);
    setPlayers(calculateProfitPerPlayer(players, profitValue));
  }

  function newPlayer(playerName, playerClass) {
    setPlayers([
      ...players,
      { id: generateId(), name: playerName, class: playerClass }
    ]);
  }

  function setPlayerTotalWaste(id, totalWaste) {
    let updatedPlayers = [...players];

    updatedPlayers.forEach(player => {
      if (player.id == id) {
        player.waste = totalWaste;
      }
    });

    setPlayers(calculateProfitPerPlayer(updatedPlayers, totalProfit));
  }

  function removePlayer(player) {
    const newPlayers = players.filter(p => {
      return p.id !== player.id;
    });
    setPlayers(calculateProfitPerPlayer(newPlayers, totalProfit));
  }

  return (
    <Container>
      <DivRight>
        <span>LUCRO TOTAL: </span>
        <Input
          type="text"
          placeholder="Insira o Lucro da Hunt!"
          value={totalProfit}
          onChange={event => updateValues(event.target.value)}
        />
      </DivRight>
      <CreatePlayer newPlayer={newPlayer} removePlayer={removePlayer} />
      <PlayersList
        players={players}
        removePlayer={removePlayer}
        setPlayerTotalWaste={setPlayerTotalWaste}
      />
    </Container>
  );
}
