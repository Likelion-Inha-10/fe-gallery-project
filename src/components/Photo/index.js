import React from "react";
import styled from "styled-components";
import { PostPhoto } from "../../styledComponent";

const PhotoDiv = styled.div`
  background-image: url(${(props) => props.url || "none"});
  height: 100%;
  background-size: contain;
  width: 100%;
`;
const Photo = (props) => {
  return (
    <>
      <PostPhoto>
        <PhotoDiv url={props.url}></PhotoDiv>
      </PostPhoto>
    </>
  );
};

export default Photo;
