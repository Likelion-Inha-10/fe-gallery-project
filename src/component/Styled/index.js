import styled from "styled-components";

export const TextBox = styled.div`
  color: ${(props) => props.color || "black"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-size: ${(props) => props.fontSize || "10px"};
  float: ${(props) => props.float || "none"};
  padding: ${(props) => props.padding || "0"};
  cursor: ${(props) => props.cursor || "auto"};
`;

export const Button = styled.button`
  cursor: pointer;
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius || "5px"};
  border: ${(props) => props.border || "none"};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight || "normal"};
  padding: ${(props) => props.padding || "0"};
  background: ${(props) => props.backgroundColor || "white"};
  color: ${(props) => props.color || "black"};
  float: ${(props) => props.float || "none"};
`;

export const Background = styled.div`
  border: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
`;

export const InputWrapper = styled.div`
  height: 25px;
  padding: 10px;
  border-bottom: thin solid lightgray;
`;

export const WriteComments = styled.input`
  width: 80%;
  float: left;
  font-size: 15px;
  border: none;
  &:focus {
    outline: none;
  }
`;
