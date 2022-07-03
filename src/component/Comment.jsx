import React from "react";
import styled from "styled-components";
import axios from "axios";

const CommentContainer = styled.div`
  display: flex;
  padding: 10px 30px 10px 30px;
`;

const CommentName = styled.div`
  flex-basis: 50px;
  font-weight: bold;
`;

const CommentContent = styled.div`
  flex-grow: 5;
  font-weight: 500;
`;

const CommentDelete = styled.div`
  flex-basis: 50px;
  color: gray;
  cursor: pointer;
`;

const Comment = ({ id, content, apiUrl }) => {
  const onClickDelete = () => {
    axios.delete(`${apiUrl}/album/delete/comment/${id}`).then(() => {
      window.location.reload(true);
    });
  };

  return (
    <>
      <CommentContainer>
        <CommentName>익명</CommentName>
        <CommentContent>{content}</CommentContent>
        <CommentDelete onClick={onClickDelete}>삭제</CommentDelete>
      </CommentContainer>
    </>
  );
};

export default Comment;
