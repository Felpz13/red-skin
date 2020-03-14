import React, { useState } from "react";
import { Container, Div3Col, Select, Option } from "./styles";
import { Input, Button } from "../../styles/common";

export default function CreatePlayer({ newPlayer }) {
  const [playerName, setPlayerName] = useState("");
  const [playerClass, setPlayerClass] = useState("");

  function addPlayer() {
    if (playerName !== "" && playerClass !== "") {
      newPlayer(playerName, playerClass);
      setPlayerName("");
      setPlayerClass("");
    }
  }

  return (
    <Container>
      <Div3Col>
        <Input
          value={playerName}
          placeholder="Insira o nome"
          onChange={event => setPlayerName(event.target.value)}
        />
        <Select
          onChange={event => setPlayerClass(event.target.value)}
          value={playerClass}
        >
          <Option value="" disabled>
            Selecione
          </Option>
          <Option value="Cavaleiro">Cavaleiro</Option>
          <Option value="Bárbaro">Bárbaro</Option>
          <Option value="Arqueiro">Arqueiro</Option>
          <Option value="Mago">Mago</Option>
          <Option value="Druida">Druida</Option>
        </Select>
        <Button onClick={addPlayer}>Adicionar Jogador</Button>
      </Div3Col>
    </Container>
  );
}
