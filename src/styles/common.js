import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid black;
  border-radius: 6px;
  -webkit-box-shadow: 39px 36px 6px -21px rgba(0, 0, 0, 0.49);
  -moz-box-shadow: 39px 36px 6px -21px rgba(0, 0, 0, 0.49);
  box-shadow: 39px 36px 6px -21px rgba(0, 0, 0, 0.49);
  padding: 0 4px;
  max-width: ${props => (props.small ? "42px" : "unset")};
`;

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  background: linear-gradient(
    180deg,
    rgba(239, 163, 23, 1) 0%,
    rgba(204, 93, 8, 1) 100%
  );

  padding: 5px;
  color: white;
  border-radius: 5px;
  border: none;
`;

export const DefaultDiv = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid #ffffff;
  border-radius: 5px;
  padding: 40px 10px;
  background-color: #2e0e01;
`;

export const Select = styled.select``;

export const Option = styled.option``;
