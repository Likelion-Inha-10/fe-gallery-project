import React from "react";
import styled from "styled-components";

const Title = styled.div`
  width: 100%;
  height: 50px;
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
`;

const Content = styled.div`
  width: 100%;
  height: 50px;
  font-size: 18px;
  margin-left: 20px;
`;

const Image = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
`;

const ArticleDetail = ({ title, content, imgUrl }) => {
  return (
    <>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Image imgUrl={imgUrl}></Image>
    </>
  );
};

export default ArticleDetail;
