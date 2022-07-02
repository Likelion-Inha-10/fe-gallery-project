import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  IoHeart,
  IoPaperPlane,
  IoPersonCircleOutline,
  IoTrashBin,
} from "react-icons/io5";
import axios from "axios";
import {
  StyledText,
  PostInfoWrapper,
  PostInfoContainer,
  PostImg,
  PostBody,
  PostText,
  PostLikeBox,
  PostLike,
  PostCommentWrapper,
  PostCommentContainer,
  PostNewCommentBox,
  PostNewCommentInput,
  PostNewCommentButton,
  PostCommentBox,
  PostCommentIcon,
  PostCommentInfo,
  PostCommentButtonWrapper,
  PostCommentLike,
  PostCommentDelete,
} from "../components/StyledComponents.js";

const PostInfoPage = ({ api_url }) => {
  const { articleId } = useParams();
  const [article, setArticle] = useState();
  const [comment, setComment] = useState();
  const [newComment, setnewComment] = useState();

  const loadPost = () => {
    axios
      .get(`${api_url}/album/${articleId}`)
      .then((response) => {
        const storeArticle = (
          <>
            <PostImg src={response.data.img}></PostImg>
            <PostBody>
              <PostText>
                <StyledText size="1.3" color="white" weight="600" padding="20">
                  {response.data.title}
                </StyledText>
                <StyledText size="1.1" color="#959595" weight="400">
                  {response.data.content}
                </StyledText>
              </PostText>
              <PostLikeBox>
                <PostLike
                  type="button"
                  onClick={() => updatePostLike(response.data.id)}
                >
                  <IoHeart size="1.6rem" />
                </PostLike>
                <StyledText
                  size="1.6"
                  color="white"
                  weight="600"
                  padding="20"
                  paddingLeft="5"
                >
                  {response.data.article_like}
                </StyledText>
              </PostLikeBox>
            </PostBody>
          </>
        );
        setArticle(storeArticle);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const loadComment = () => {
    axios
      .get(`${api_url}/album/find/${articleId}`)
      .then((response) => {
        const storeComment = response.data.map((comment) => (
          <PostCommentBox key={comment.id}>
            <PostCommentIcon>
              <IoPersonCircleOutline size="1.8rem" color="white" />
            </PostCommentIcon>
            <PostCommentInfo>
              <StyledText size="1" color="white" weight="400" paddingLeft="10">
                {comment.content}
              </StyledText>
            </PostCommentInfo>
            <PostCommentButtonWrapper>
              <PostCommentLike
                type="button"
                onClick={() => updateCommentLike(comment.id)}
              >
                <IoHeart size="1.5rem" />
              </PostCommentLike>
              <StyledText size="1.2" color="white" weight="500">
                {comment.comment_like}
              </StyledText>
              <PostCommentDelete
                type="button"
                onClick={() => deleteComment(comment.id)}
              >
                <IoTrashBin size="1.5rem" />
              </PostCommentDelete>
            </PostCommentButtonWrapper>
          </PostCommentBox>
        ));
        setComment(storeComment);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const updatePostLike = (postId) => {
    axios
      .patch(`${api_url}/album/update/article/like/${postId}`)
      .then(() => {
        loadPost();
      })
      .catch((error) => {
        alert(error);
      });
  };

  const inputComment = (e) => {
    setnewComment(e.target.value);
  };

  const createComment = () => {
    setnewComment("");
    axios
      .post(`${api_url}/album/create/comment/${articleId}`, {
        content: newComment,
      })
      .then(() => {
        loadComment();
      })
      .catch((error) => {
        alert(error);
      });
  };

  const updateCommentLike = (commentId) => {
    axios
      .patch(`${api_url}/album/update/comment/like/${commentId}`)
      .then(() => {
        loadComment();
      })
      .catch((error) => {
        alert(error);
      });
  };

  const deleteComment = (commentId) => {
    axios
      .delete(`${api_url}/album/delete/comment/${commentId}`)
      .then(() => {
        loadComment();
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    loadPost();
    loadComment();
  }, []);

  return (
    <>
      <PostInfoWrapper>
        <PostInfoContainer>{article}</PostInfoContainer>
      </PostInfoWrapper>

      <PostCommentWrapper>
        <PostCommentContainer>
          <PostNewCommentBox>
            <PostNewCommentInput
              name="comment_input"
              placeholder="댓글"
              onChange={inputComment}
              value={newComment || ""}
            ></PostNewCommentInput>
            <PostNewCommentButton type="button" onClick={createComment}>
              <IoPaperPlane size="1.6rem" />
            </PostNewCommentButton>
          </PostNewCommentBox>
          {comment}
        </PostCommentContainer>
      </PostCommentWrapper>
    </>
  );
};

export default PostInfoPage;
