import React from "react";
import { Link } from "react-router-dom";
import { IoHeart } from "react-icons/io5";
import {
  StyledTextSimple,
  StyledText,
  GalleryCard,
  CardImage,
  CardText,
  CardInfoBox,
  CardLike,
} from "../components/StyledComponents.js";

const GalleryCardDiv = (props) => {
  return (
    <GalleryCard>
      <Link to={props.url}>
        <CardImage src={props.img} />
        <CardText>
          <StyledTextSimple size="1" color="white" weight="400" padding="8">
            {props.title}
          </StyledTextSimple>
          <StyledTextSimple size="0.8" color="#959595" weight="400">
            {props.text}
          </StyledTextSimple>
        </CardText>
        <CardInfoBox>
          <CardLike>
            <IoHeart size="0.9rem" />
          </CardLike>
          <StyledText size="0.8" color="white" weight="400">
            {props.like}
          </StyledText>
        </CardInfoBox>
      </Link>
    </GalleryCard>
  );
};

export default GalleryCardDiv;
