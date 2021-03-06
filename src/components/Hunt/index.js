import React, { useState } from "react";
import DezorinhaImg from "../../images/dezorinhaslogo.png";
import DonateImg from "../../images/donate.png";
import {
  Container,
  DivRight,
  DivControls,
  Title,
  HeaderImages
} from "./styles";
import { Input } from "../../styles/common";
import CurrencyFormat from "react-currency-format";
import CreatePlayer from "../CreatePlayer";
import PlayersList from "../PlayersList";
import { generateId, calculateProfitPerPlayer } from "../../utils/playerHandle";
import { toCurrency } from "../../utils/currencyHandler";
import AddNewItem from "../AddNewItem";
import PicPay from "../PicPay";

export default function Hunt() {
  const [totalProfit, setTotalProfit] = useState("");
  const [players, setPlayers] = useState([]);
  const [donate, setDonate] = useState(false);

  function updateValues(profitValue) {
    if (profitValue != null && !isNaN(profitValue)) {
      setTotalProfit(profitValue);
      setPlayers(calculateProfitPerPlayer(players, profitValue));
      console.log(players);
    }
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
    return toCurrency(total);
  }

  function addItemToPlayer(item, playerId) {
    if (item.quantity != null && !isNaN(item.quantity)) {
      let playersNextState = [...players];

      playersNextState.forEach(p => {
        if (p.id == playerId) {
          p.itens = [...p.itens, item];
          p.waste = setPlayerWaste(p.itens);
        }
      });
      setPlayers(calculateProfitPerPlayer(playersNextState, totalProfit));
    }
  }

  function removeItemFromPlayer(item, player) {
    const newItens = player.itens.filter(i => {
      return i.id !== item.id;
    });

    let playersNextState = [...players];
    playersNextState.forEach(p => {
      if (p.id == player.id) {
        p.itens = newItens;
        p.waste = setPlayerWaste(p.itens);
      }
    });

    setPlayers(calculateProfitPerPlayer(playersNextState, totalProfit));
  }

  function removePlayer(player) {
    const newPlayers = players.filter(p => {
      return p.id !== player.id;
    });
    setPlayers(calculateProfitPerPlayer(newPlayers, totalProfit));
  }

  function turnOffDonate() {
    setDonate(false);
  }

  return (
    <Container>
      <HeaderImages>
        <img src={DezorinhaImg} alt="dezorinha logo" height="100"></img>
        <img
          src={DonateImg}
          alt="donate button"
          height="120"
          onClick={() => setDonate(true)}
        ></img>
      </HeaderImages>

      <Title>HUNT PROFIT</Title>
      <DivRight>
        <span>TOTAL VENDIDO: </span>
        <CurrencyFormat
          type="text"
          placeholder="Insira o Bruto da Hunt!"
          value={totalProfit}
          onValueChange={values => {
            updateValues(values.floatValue);
          }}
          customInput={Input}
          thousandSeparator={"."}
          decimalSeparator={","}
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
      <PicPay visible={donate} turnOffDonate={turnOffDonate}></PicPay>
    </Container>
  );
}
