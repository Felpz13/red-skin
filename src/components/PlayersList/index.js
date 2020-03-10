import React from "react";
import { PlayerFrame } from "./styles";
import { DivRight } from "./styles";
import PlayerWaste from "./PlayerWaste";

export default function PlayersList({ players, removePlayer }) {
  const playersShow = players.map((player, index) => {
    return (
      <PlayerFrame key={index}>
        {/*<DivRight onClick={removePlayer(player)}>X</DivRight>*/}
        nome:{player.name} | classe:{player.class}
        {/*<PlayerWaste playerId={index}/>*/}
      </PlayerFrame>
    );
  });

  return <div>{playersShow}</div>;
}
