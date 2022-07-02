import React from "react";
import styled from "styled-components";

const PhotoSubContainerDiv = styled.div`
  background-color: lightgrey;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.url || "none"});
  background-size: contain;
`;

const PhotoSubContainer = (props) => {
  return (
    <>
      <PhotoSubContainerDiv url={props.url}></PhotoSubContainerDiv>
    </>
  );
};

export default PhotoSubContainer;
