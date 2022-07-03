import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import Profile from "../component/Profile";
import Main from "../component/Main";

const ArticleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const HomePage = ({ imgUrl, name, content, apiUrl }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}/album/articles`).then((res) => {
      setArticles(res.data);
    });
  }, []);

  return (
    <>
      <Profile
        imgUrl={imgUrl}
        name={name}
        content={content}
        length={articles.length}
      ></Profile>
      <ArticleContainer>
        {articles.map((article) => {
          return (
            <Main
              key={article.id}
              id={article.id}
              imgUrl={article.img}
              title={article.title}
              content={article.content}
            ></Main>
          );
        })}
      </ArticleContainer>
    </>
  );
};

export default HomePage;
