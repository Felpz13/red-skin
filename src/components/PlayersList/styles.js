import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.5fr);
`;

export const PlayerFrame = styled.div`
  min-height: 50px;
  border: 1px solid #ffffff;
  border-radius: 5px;
  padding: 5px;
  background-color: #300e00;
`;

export const DivColumn = styled.div`
  padding: 5px;
  margin 20px 0;
`;

export const DivRight = styled.div`
  text-align: right;
`;

export const PlayerHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

export const PlayerName = styled.div`
  display: flex;
  justify-content: start;
`;

export const FlexItensCenter = styled.div`
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  cursor: pointer;
`;
