import styled from "styled-components";
import imgBackground from "../../images/bloodstone_background.jpg";

export const Container = styled.div`
  margin: 0 12%;
  height: 100vh;
  color: #ffffff;
  padding 60px 25px;
  background-image: linear-gradient(to bottom, rgba(255,255,255,0) 20%,
  rgb(0, 0, 0)), url(${imgBackground});

  @media  screen and (max-width: 1366px) {
    margin: 0;
  }
`;

export const DivRight = styled.div`
  text-align: right;
  margin-bottom: 40px;
`;

export const Title = styled.div`
  text-align: center;
  color: #e2e2e2;
  font-size: 2rem;
  margin: 0 0 60px 0;
`;

export const DivControls = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const HeaderImages = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
