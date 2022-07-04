import React from "react";
import styled from "styled-components";
import TextBox from "../Text";

const TitleWrapper = styled.div`
  height: 200px;
  padding: 30px 0 30px 20px;
`;

const TitleImage = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  width: 220px;
  height: 170px;
  border-radius: 100px;
  overflow: hidden;
  float: left;
  margin: 0;
`;

const TitleContent = styled.div`
  height: 300px;
  padding: 50px 0 30px 250px;
`;

const Title = (props) => {
  return (
    <TitleWrapper>
      <TitleImage backgroundImage={props.image}></TitleImage>
      <TitleContent>
        <TextBox fontWeight="bold" fontSize="25px">
          {props.title}
        </TextBox>
        <TextBox fontSize="15px">{props.titleExplain}</TextBox>
        <TextBox fontSize="14px" padding="10px 0 0 0">
          게시물 {props.number}개
        </TextBox>
      </TitleContent>
    </TitleWrapper>
  );
};

export default Title;
