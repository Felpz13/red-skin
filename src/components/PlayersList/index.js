import React from "react";
import {
  Container,
  PlayerFrame,
  PlayerHeader,
  PlayerName,
  Img,
  DivColumn,
  DivRight,
  FlexItensCenter
} from "./styles";
import icon_close from "../../images/icon_close.png";
import icon_archer from "../../images/icon_arqueiro.png";
import icon_knight from "../../images/icon_cavaleiro.png";
import icon_mage from "../../images/icon_mago.png";
import icon_barbarian from "../../images/icon_barbaro.png";
import icon_druid from "../../images/icon_xama.png";
import PlayerWaste from "../PlayerWaste";

export default function PlayersList({
  players,
  removePlayer,
  removeItemFromPlayer
}) {
  function getClassImg(playerClass) {
    switch (playerClass) {
      case "Cavaleiro":
        return icon_knight;
      case "Bárbaro":
        return icon_barbarian;
      case "Arqueiro":
        return icon_archer;
      case "Mago":
        return icon_mage;
      case "Druida":
        return icon_druid;
      default:
        return null;
    }
  }

  const playersShow = players.map((player, index) => {
    return (
      <DivColumn key={index}>
        <PlayerFrame>
          <DivRight>
            <Img
              onClick={() => removePlayer(player)}
              src={icon_close}
              height="12"
              alt="exclude player"
            ></Img>
          </DivRight>
          <PlayerHeader>
            <PlayerName>
              <img
                height="35"
                src={getClassImg(player.class)}
                alt="classImage"
              />
              <FlexItensCenter>
                <p>{player.name}</p>
              </FlexItensCenter>
            </PlayerName>

            <div>
              <p>LUCRO: {player.profit}</p>
            </div>
          </PlayerHeader>

          <PlayerWaste
            player={player}
            removeItemFromPlayer={removeItemFromPlayer}
          />
          <DivRight>
            <p>WASTE: {player.waste}</p>
          </DivRight>
        </PlayerFrame>
      </DivColumn>
    );
  });

  return <Container>{playersShow}</Container>;
}
