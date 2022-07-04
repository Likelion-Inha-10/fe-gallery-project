import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  margin: 10px 10px;
  height: 350px;
  background-image: url(${(props) => props.postImage});
  background-size: 100% 100%;
`;

const TitleWrapper = styled.h1`
  margin: 5px 2px 5px 2px;
  text-align: center;
  font-size: 15px;
`;

const ContentWrapper = styled.div`
  margin: 5px 2px 5px 2px;
  text-align: center;
  font-size: 13px;
  color: rgb(173, 181, 189);
`;

const Content = ({ img, title, content }) => {
  return (
    <>
      <ImageWrapper postImage={img} />
      <TitleWrapper>{title}</TitleWrapper>
      <ContentWrapper>{content}</ContentWrapper>
    </>
  );
};

export default Content;
