import React from "react";
import styled from "styled-components";
import { TextBox, Button } from "../Styled";

const CommentWrapper = styled.div`
  overflow: hidden;
`;

const Comment = (props) => {
  return (
    <>
      <CommentWrapper>
        <TextBox
          fontWeight="bold"
          fontSize="16px"
          padding="10px 8px 0 8px"
          float="left"
        >
          익명
        </TextBox>
        <TextBox fontSize="16px" padding="10px 0 0 0" float="left">
          {props.commentText}
        </TextBox>
        <Button
          onClick={props.deleteComment}
          color="gray"
          fontSize="16px"
          padding="10px 8px 0 0"
          float="right"
        >
          삭제
        </Button>
      </CommentWrapper>
    </>
  );
};

export default Comment;
