import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import DetailCard from "../component/DetailCard";
import Comment from "../component/Comment";
import { Button, InputWrapper, WriteComments } from "../component/Styled";
import axios from "axios";

const DetailPage = ({ apiUrl }) => {
  const { imageId } = useParams();
  const [detailImage, setDetailImage] = useState("");
  const [comment, setComment] = useState([]);
  const [inputComment, setInputComment] = useState("");

  useEffect(() => {
    axios.get(`${apiUrl}album/${imageId}`).then((response) => {
      setDetailImage(response.data);
    });
    axios.get(`${apiUrl}album/find/${imageId}`).then((response) => {
      setComment(response.data);
    });
  }, [apiUrl, imageId]);

  const onChangeInputComment = (e) => {
    setInputComment(e.target.value);
  };

  const onPost = () => {
    axios
      .post(`${apiUrl}album/create/comment/${imageId}`, {
        content: inputComment,
      })
      .then((response) => {
        //setComment(response.data); //여기에 문제가 있음
        comment.push(inputComment);
        setInputComment("");
        //window.location.reload();
      });
  };

  const onDelete = (commentId) => {
    axios
      .delete(`${apiUrl}album/delete/comment/${commentId}`)
      .then((response) => {
        setComment(response.data);
      });
  };

  return (
    <>
      <DetailCard
        imageTitle={detailImage.title}
        likeNumber={detailImage.article_like}
        imageContent={detailImage.content}
        image={detailImage.img}
      />

      <InputWrapper>
        <WriteComments
          placeholder="댓글 작성..."
          onChange={onChangeInputComment}
          value={inputComment}
        ></WriteComments>
        <Button
          fontSize="18px"
          fontWeight="bold"
          color="#12A4FF"
          float="right"
          onClick={onPost}
        >
          게시
        </Button>
      </InputWrapper>

      {comment.map((element) => (
        <Comment
          key={element.id}
          commentText={element.content}
          deleteComment={() => onDelete(element.id)}
        />
      ))}
    </>
  );
};

export default DetailPage;
