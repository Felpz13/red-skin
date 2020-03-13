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
    calculateProfitPerPlayer(players, totalProfit);
  }

  function newPlayer(playerName, playerClass) {
    setPlayers([...players, {id: generateId(), name: playerName, class: playerClass }]);
  }

  function setPlayerTotalWaste(id, totalWaste){
    let updatedPlayers = [...players]

    updatedPlayers.forEach(player=>{
        if(player.id == id){
          player.waste = totalWaste
        }
    })
    
    setPlayers(updatedPlayers)
  }

  function removePlayer(player) {   
   setPlayers ( players.filter(p => {
      return p.name !== player.name
    }))
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
      <CreatePlayer newPlayer={newPlayer} removePlayer={removePlayer}/>
      <PlayersList players={players} removePlayer={removePlayer} setPlayerTotalWaste={setPlayerTotalWaste}/>
    </Container>
  );
}
