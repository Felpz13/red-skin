import React from "react";
import PicPayImg from "../../images/picpay.jpg";
import { Container, PickPayFrame, DivTextCenter } from "./styles";

// import { Container } from './styles';

export default function PicPay({ visible, turnOffDonate }) {
  return (
    <Container visible={visible} onClick={() => turnOffDonate()}>
      <PickPayFrame>
        <img src={PicPayImg} height="400" alt="picpay claro27"></img>
        <DivTextCenter>
          <p>In game: Claro (Onix2)</p>
        </DivTextCenter>
      </PickPayFrame>
    </Container>
  );
}
