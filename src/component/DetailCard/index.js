import React from "react";
import styled from "styled-components";
import { TextBox } from "../Styled";

const DetailImage = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-position: center center;
  background-size: cover;
  height: 400px;
  margin: 0;
`;

const DetailCard = (props) => {
  return (
    <>
      <TextBox fontSize="30px" fontWeight="bold" padding="10px 0 8px 10px">
        {props.imageTitle}
      </TextBox>
      <TextBox fontSize="14px" float="right" cursor="pointer">
        ❤️
        <TextBox
          fontSize="13px"
          float="right"
          cursor="auto"
          padding="0 30px 0 0"
        >
          {props.likeNumber}
        </TextBox>
      </TextBox>
      <TextBox fontSize="18px" padding="0 0 20px 10px">
        {props.imageContent}
      </TextBox>

      <DetailImage backgroundImage={props.image}></DetailImage>
    </>
  );
};

export default DetailCard;
