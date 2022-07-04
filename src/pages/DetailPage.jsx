import React from "react";
import styled from "styled-components";
import TextBox from "../component/Text";
import Button from "../component/Button";

const DetailImage = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-position: center center;
  background-size: cover;
  height: 400px;
  margin: 0;
`;

const InputWrapper = styled.div`
  height: 25px;
  padding: 10px;
  border-bottom: thin solid lightgray;
`;

const WriteComments = styled.input`
  width: 80%;
  float: left;
  font-size: 15px;
  border: none;
  &:focus {
    outline: none;
  }
`;

const CommentWrapper = styled.div``;

const DetailPage = () => {
  return (
    <>
      <TextBox fontSize="30px" fontWeight="bold" padding="10px 0 8px 10px">
        아기사자1
      </TextBox>
      <TextBox fontSize="18px" padding="0 0 20px 10px">
        귀엽다...
      </TextBox>
      <DetailImage backgroundImage="title.jpeg"></DetailImage>

      <InputWrapper>
        <WriteComments placeholder="댓글 작성..."></WriteComments>
        <Button fontSize="18px" fontWeight="bold" color="#12A4FF" float="right">
          게시
        </Button>
      </InputWrapper>

      <TextBox></TextBox>
    </>
  );
};

export default DetailPage;
