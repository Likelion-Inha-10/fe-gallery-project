import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ArticleBox = styled.div`
  display: inline-block;
  width: 500px;
  height: 550px;
  padding-bottom: 5px;
`;

const Image = styled.div`
  width: 500px;
  height: 500px;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
`;

const Title = styled.div`
  width: 500px;
  height: 25px;
  text-align: center;
  font-weight: bold;
  padding-top: 5px;
`;

const Content = styled.div`
  width: 500px;
  height: 25px;
  text-align: center;
  font-size: 12px;
  color: gray;
`;

const Main = ({ id, imgUrl, title, content }) => {
  return (
    <>
      <ArticleBox key={id}>
        <NavLink to={`/${id}`}>
          <Image imgUrl={imgUrl}></Image>
        </NavLink>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </ArticleBox>
    </>
  );
};

export default Main;
