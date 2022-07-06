import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.size || "1rem"};
  font-weight: ${(props) => props.weight || "normal"};
  text-align: ${(props) => props.align || "center"};
  max-width: ${(props) => props.max || "100%"};
`;

const Text = (props) => {
  return (
    <StyledText
      align={props.align}
      color={props.color}
      size={props.size}
      weight={props.weight}
      max={props.max}
    >
      {props.children}
    </StyledText>
  );
};

export default Text;
