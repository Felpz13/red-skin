import React, {useEffect} from "react";
import { PlayerFrame } from "./styles";
import { DivRight } from "./styles";
import PlayerWaste from "./PlayerWaste";

export default function PlayersList({ players }) {

  function removePlayer(player) {
    console.log(`remove: ${player.name}`)
    var array = [...players];
    var index = players.indexOf(player);
    if (index !== -1) {
      array.splice(index, 1);
    }    
  }

  const playersShow = players.map((player, index) => {
    return (
      <PlayerFrame key={index}>
        <DivRight onClick={()=>removePlayer(player)}>X</DivRight>
        nome:{player.name} | classe:{player.class}
        {/*<PlayerWaste playerId={index}/>*/}
      </PlayerFrame>
    );
  });

  return <div>{playersShow}</div>;
}
