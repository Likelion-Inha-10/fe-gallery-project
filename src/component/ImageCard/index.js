import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import TextBox from "../Text";

const CardWrapper = styled.div`
  background-color: white;
  text-align: center;
  margin: 0;
  aspect-ratio: 1 / 1;
`;

const CardImage = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
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
