import React, { useEffect } from "react";
import { PlayerFrame, PlayerHeader, PlayerBody, DivRight } from "./styles";
import PlayerWaste from "../PlayerWaste";

export default function PlayersList({
  players,
  removePlayer,
  setPlayerTotalWaste
}) {
  useEffect(() => {
    console.log(players);
  }, [players]);

  const playersShow = players.map((player, index) => {
    return (
      <PlayerFrame key={index}>
        <DivRight onClick={() => removePlayer(player)}>X</DivRight>
        <PlayerHeader>
          <div>
            <p>{player.name}</p>
          </div>
          <div>
            <p>{player.class}</p>
          </div>
          <div>
            <p>WASTE: {player.waste}</p>
          </div>
          <div>
            <p>LUCRO: {player.profit}</p>
          </div>
        </PlayerHeader>

        <PlayerWaste
          playerId={player.id}
          setPlayerTotalWaste={setPlayerTotalWaste}
        />
      </PlayerFrame>
    );
  });

  return <div>{playersShow}</div>;
}
