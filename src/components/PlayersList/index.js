import React, {useEffect} from "react";
import { PlayerFrame } from "./styles";
import { DivRight } from "./styles";
import PlayerWaste from "../PlayerWaste";

export default function PlayersList({ players, removePlayer, setPlayerTotalWaste }) {

  useEffect(()=>{
    console.log(players)
  },[players])

  const playersShow = players.map((player, index) => {
    return (
      <PlayerFrame key={index}>
        <DivRight onClick={()=>removePlayer(player)}>X</DivRight>
        nome:{player.name} | classe:{player.class} | gasto: {player.waste} | lucro: {player.profit}
        <PlayerWaste playerId={player.id} setPlayerTotalWaste={setPlayerTotalWaste}/>
      </PlayerFrame>
    );
  });

  return <div>{playersShow}</div>;
}
