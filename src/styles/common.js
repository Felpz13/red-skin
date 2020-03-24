import styled from "styled-components";

export const Input = styled.input`
  display: inline-block;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  padding: 10px 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  -webkit-border-radius: 10px;
  border-radius: 10px;
  font: normal 12px / normal Arial, Helvetica, sans-serif;
  color: rgba(255, 255, 255, 1);
  -o-text-overflow: clip;
  text-overflow: clip;
  background: rgba(91, 91, 91, 1);
  -webkit-box-shadow: 2px 2px 2px 0 rgba(255, 255, 255, 0.2);
  box-shadow: 2px 2px 2px 0 rgba(255, 255, 255, 0.2);
  -webkit-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  -moz-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  -o-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
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

export const Select = styled.select`
  border: 1px solid rgba(255, 255, 255, 0.31);
  -webkit-border-radius: 10px;
  background: rgba(91, 91, 91, 1);
  color: rgba(255, 255, 255, 1);
  -webkit-box-shadow: 2px 2px 2px 0 rgba(255, 255, 255, 0.42);
  box-shadow: 2px 2px 2px 0 rgba(255, 255, 255, 0.42);
  height: ${props => (props.fullDiv ? "100%" : "auto")};
`;

export const Option = styled.option``;
