import React, {useState} from "react";
import {PlayerWasteFrame, SelectItemType, ItemListFrame, Container} from "./styles";
import { Option, Button, Input } from "../../styles/common";
import { generateId } from "../../utils/playerHandle";

export default function PlayerWaste({playerId,setPlayerTotalWaste}) {
  const [itens, setItens] = useState([
    { id: 0, name: "poção de vida", value: 200},
    { id: 1, name: "poção de mana", value: 130}]);

  const [totalWaste, setTotalWaste] = useState(0)
  const [selectedItens, setSelectedItens] = useState([])
  const [selectedItemId, setSelectedItemId] = useState(0)
  const [selectedQuantity, setSelectedQuantity] = useState(0)

  function addValueToTotal(id, quantity){
    const itemValue = itens.filter(item => {
      return item.id == id
    })

    const finalItem = itemValue[0];
    let partialValue = finalItem.value * quantity
    addinSelectedItemList(finalItem, partialValue)
    let total = totalWaste + partialValue
    setTotalWaste(total)

    setPlayerTotalWaste(playerId, total)
  }

  function addinSelectedItemList(item, value){
    setSelectedItens([...selectedItens, { id: generateId(), name: item.name, quantity: item.quantity, total : value }])
  }

  return (
    <PlayerWasteFrame>
      <Container>
        <SelectItemType value={selectedItemId} onChange={event=>setSelectedItemId(event.target.value)}>
          {itens.map(item=>(
            <Option key={item.id} value={item.id} >{item.name}</Option>
          ))}
        </SelectItemType>
        <Input value={selectedQuantity} onChange={event =>setSelectedQuantity(event.target.value)}></Input>
        <Button onClick={()=>addValueToTotal(selectedItemId, selectedQuantity)}>ADD</Button>
      </Container>
      
      <ItemListFrame>
          {selectedItens.map(item=>(
            <div key={item.id}>{item.name} - {item.total}</div>
          ))}
      </ItemListFrame>
    </PlayerWasteFrame>
  );
}
