import styled from "styled-components";

const TextBox = styled.div`
  color: ${(props) => props.color || "black"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-size: ${(props) => props.fontSize || "10px"};
  float: ${(props) => props.float || "none"};
  padding: ${(props) => props.padding || "0"};
`;

export default TextBox;
