import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: ${(props) => props.margin || "3px"};
`;

const Div = (props) => {
  return <StyledDiv margin={props.margin}></StyledDiv>;
};

export default Div;
