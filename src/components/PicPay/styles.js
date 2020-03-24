import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(26, 26, 26, 0.6);
  top: 0;
  left: 0;
  position: absolute;
  display: ${props => (props.visible ? "block" : "none")};
`;

export const PickPayFrame = styled.div`
  min-width: 280px;
  min-height: 400px;
  border-radius: 25px;
  border: 10px solid #808080;

  position: absolute;
  top: 50%;
  margin-top: -200px;
  left: 50%;
  margin-left: -140px;

  display: block;
  justify-content: center;
  background-color: rgba(5, 211, 149, 1);
`;

export const DivTextCenter = styled.div`
  text-align: center;
  background-color: #05d395;
  padding: 5px;
  margin-top: -15px;
`;
