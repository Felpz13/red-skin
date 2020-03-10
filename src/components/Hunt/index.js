import React, { useState, useEffect } from "react";
import { Container, DivRight } from "./styles";
import { Input } from "../../styles/common";
import CreatePlayer from "../CreatePlayer";
import PlayersList from "../PlayersList";

export default function Hunt() {
  const [totalProfit, setTotalProfit] = useState(null);
  const [totalWaste, setTotalWaste] = useState(0);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers(players);
    console.log(players);
  }, [players]);

  function updateValues(profitValue) {
    setTotalProfit(profitValue);
  }

  function newPlayer(playerName, playerClass) {
    setPlayers([...players, { name: playerName, class: playerClass }]);
  }

  

  return (
    <Container>
      <DivRight>
        <Input
          type="text"
          placeholder="Insira o Lucro da Hunt!"
          value={totalProfit}
          onChange={event => updateValues(event.target.value)}
        />
      </DivRight>
      <CreatePlayer newPlayer={newPlayer} />
      <PlayersList players={players} />
    </Container>
  );
}
