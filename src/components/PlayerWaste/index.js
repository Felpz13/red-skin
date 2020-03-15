import React, { useState } from "react";
import {
  PlayerWasteFrame,
  ItemListFrame,
  Item,
  WhiteLine,
  Title
} from "./styles";
import { FlexCenter } from "../../styles/common";
import icon_x from "../../images/icon_x.jpg";

export default function PlayerWaste({ player, removeItemFromPlayer }) {
  return (
    <PlayerWasteFrame>
      <Title>
        <p>ITENS CONSUMIDOS</p>
        <WhiteLine />
      </Title>
      <ItemListFrame>
        {player.itens.map(item => (
          <Item key={item.id}>
            <FlexCenter>
              <img
                src={icon_x}
                alt="remove item"
                height="14"
                onClick={() => removeItemFromPlayer(item, player)}
              />
            </FlexCenter>
            <div>
              {item.quantity}un. {item.name}
            </div>
          </Item>
        ))}
      </ItemListFrame>
    </PlayerWasteFrame>
  );
}
