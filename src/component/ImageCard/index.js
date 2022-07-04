import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import TextBox from "../Text";

const CardWrapper = styled.div`
  background-color: white;
  text-align: center;
  margin: 0;
`;

const CardImage = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  width: auto;
  height: 300px;
  overflow: hidden;
  margin: 0;
  cursor: pointer;
`;

const CardText = styled.div`
  padding: ${(props) => props.padding || "0"};
`;

const ImageCard = (props) => {
  return (
    <CardWrapper>
      <NavLink to={`/${props.imageId}`}>
        <CardImage backgroundImage={props.image}></CardImage>
      </NavLink>

      <CardText padding="13px">
        <TextBox color="black" fontSize="15px">
          {props.ImageTitle}
        </TextBox>
        <TextBox color="gray" fontSize="11px">
          {props.ImageExplain}
        </TextBox>
      </CardText>
    </CardWrapper>
  );
};

export default ImageCard;
