import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const PlayerWasteFrame = styled.div`
  width: 100%;
  margin: 10px 0;
`;

export const SelectItemType = styled.select``;

export const ItemListFrame = styled.div`
  margin: 20px 20px;
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

export const WhiteLine = styled.div`
  border: 1px solid white;
  margin: 10px 0 20px 0;
`;

export const Title = styled.div`
  text-align: center;
  margin-top: 30px;
`;
