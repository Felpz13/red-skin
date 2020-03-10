import React, {useState, useEffect} from "react";
import {PlayerWasteFrame, SelectItemType} from "./styles";
import { Option } from "../../../styles/common";

// import { Container } from './styles';

export default function PlayerWaste() {
  const [itens, setItens] = useState("[]");

  useEffect(() => {
    initItensList();
  });

  function initItensList(){
    setItens([...itens, 
      { name: "poção de vida", value: 200 },
      { name: "poção de mana", value: 130}
    ]);
  }

  return (
    <PlayerWasteFrame>
      <SelectItemType>
        
      </SelectItemType>
    </PlayerWasteFrame>
  );
}
