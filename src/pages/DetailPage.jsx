import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import PostDetail from "../components/PostDetail";

const EachPostWrapper = styled.div`
  width: 100%;
  min-width: 720px;
`;

const CommentInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid rgb(239, 239, 239);
`;

const StyledInputComment = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 17px;
`;

const StyledInputButton = styled.div`
  width: 50px;
  background-color: transparent;
  border: none;
  color: rgb(0, 149, 246);
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
`;

const CommentListWrapper = styled.div`
  padding: 20px;
`;

const CommentWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const StyledName = styled.div`
  font-weight: bold;
  margin-right: 10px;
`;
const StyledComment = styled.div`
  margin-right: auto;
`;

const StyledDeleteButton = styled.div`
  background-color: transparent;
  border: none;
  font-size: 15px;
  color: rgb(134, 142, 150);
  cursor: pointer;
`;

const DetailPage = ({ apiUrl }) => {
  const { pageId } = useParams();
  const [eachPost, setEachPost] = useState([]); // 게시물
  const [comments, setComments] = useState([]); // 댓글 목록
  const [newComment, setNewComment] = useState(""); // 새로 작성할 댓글

  //id에 의한 게시물 조회
  useEffect(() => {
    axios.get(`${apiUrl}/album/${pageId}`).then((response) => {
      setEachPost(response.data);
    });
  }, []);

  //게시물 id에 의해 조회한 댓글 불러오기
  useEffect(() => {
    axios.get(`${apiUrl}/album/find/${pageId}`).then((response) => {
      setComments(response.data);
    });
  }, []);

  const onChange = (e) => {
    setNewComment(e.target.value);
  };

  const onPost = (newComment) => {
    axios
      .post(`${apiUrl}/album/create/comment/${pageId}`, { content: newComment })
      .then(() => {
        window.location.replace(`/${pageId}`);
        /*여기서 새로고침이 아니라 변경된 부분만 바뀌게 하려면 어떻게 해야하는거지*/
      });
  };

  const deleteComment = (commentId) => {
    axios.delete(`${apiUrl}/album/delete/comment/${commentId}`).then(() => {
      window.location.replace(`/${pageId}`);
      /*여기서도 새로고침이 아니라 변경된 부분만 바뀌게 하려면 어떻게 해야하는거지*/
    });
  };

  return (
    <>
      <EachPostWrapper>
        <PostDetail
          title={eachPost.title}
          content={eachPost.content}
          img={eachPost.img}
        />
      </EachPostWrapper>

      <CommentInputWrapper>
        <StyledInputComment
          type="text"
          placeholder="댓글 작성..."
          value={newComment}
          onChange={onChange}
        />
        <StyledInputButton
          onClick={() => onPost(newComment)}
          newComment={newComment}
        >
          게시
        </StyledInputButton>
      </CommentInputWrapper>
      <CommentListWrapper>
        {comments.map((comment) => (
          <>
            <CommentWrapper>
              <StyledName>{"익명"}</StyledName>
              <StyledComment>{comment.content}</StyledComment>
              <StyledDeleteButton onClick={() => deleteComment(comment.id)}>
                삭제
              </StyledDeleteButton>
            </CommentWrapper>
          </>
        ))}
      </CommentListWrapper>
    </>
  );
};

export default DetailPage;
