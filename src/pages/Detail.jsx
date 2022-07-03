import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ArticleDetail from "../component/ArticleDetail";
import Comment from "../component/Comment";

const Text = styled.div`
  border-bottom: 1px solid lightgray;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 1400px;
  border: 0px;
  padding: 10px;
  font-size: 15px;
`;

const Button = styled.button`
  background-color: white;
  border: 0px;
  color: blue;
  font-size: 16px;
  cursor: pointer;
`;

const Detail = ({ apiUrl }) => {
  const { id } = useParams();
  const [article, setArticle] = useState();
  const [comments, setComments] = useState();

  const [comment, setComment] = useState("");

  useEffect(() => {
    axios.get(`${apiUrl}/album/${id}`).then((res) => {
      setArticle(res.data);
    });
  }, [id]);

  useEffect(() => {
    axios.get(`${apiUrl}/album/find/${id}`).then((res) => {
      console.log(res.data);
      setComments(res.data);
    });
  }, [id]);

  const onChangeComment = (e) => {
    setComment(e.target.value);
  };

  const onClickComment = () => {
    axios
      .post(`${apiUrl}/album/create/comment/${id}`, { content: comment })
      .then(() => {
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  if (!article || !comments) return "이미지 로딩중";

  console.log(comments);

  return (
    <>
      <ArticleDetail
        title={article.title}
        content={article.content}
        imgUrl={article.img}
      ></ArticleDetail>
      <Text>
        <Input
          type="text"
          placeholder="댓글작성..."
          onChange={onChangeComment}
        ></Input>
        <Button onClick={onClickComment}>게시</Button>
      </Text>
      {comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            id={comment.id}
            content={comment.content}
            apiUrl={apiUrl}
          ></Comment>
        );
      })}
    </>
  );
};

export default Detail;
