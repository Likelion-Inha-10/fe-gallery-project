import React from "react";
import styled from "styled-components";

const PostInfoWrapper = styled.div`
  padding: 20px;
`;

const TitleWrapper = styled.h1`
  margin-bottom: 10px;
  font-size: 30px;
`;

const ContentWrapper = styled.div`
  font-size: 18px;
  color: rgb(73, 80, 87);
`;

const ImageWrapper = styled.div`
  height: 400px;
  background-image: url(${(props) => props.postImage});
  background-position: center center;
  background-size: cover;
`;

const PostDetail = ({ title, content, img }) => {
  return (
    <>
      <PostInfoWrapper>
        <TitleWrapper>{title}</TitleWrapper>
        <ContentWrapper>{content}</ContentWrapper>
      </PostInfoWrapper>
      <ImageWrapper postImage={img} />
    </>
  );
};

export default PostDetail;
